const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/Product.js");
const redisClient = require("../redis/client.js"); // Redis bağlantısı

// Yeni ürün oluşturma
router.post("/", async (req, res) => {
  try {
    const { title, price, stock } = req.body;

    if (!title || !price) {
      return res.status(400).json({ message: "Ürün adı ve fiyat zorunludur." });
    }

    const newProduct = new Product({
      title,
      price,
      stock: stock || 0,
    });

    await newProduct.save();

    // Cache temizle
    await redisClient.del("all-products");

    return res
      .status(201)
      .json({ message: "Ürün başarıyla eklendi", product: newProduct });
  } catch (error) {
    console.error("Ürün ekleme hatası:", error);
    return res.status(500).json({ message: "Sunucu hatası: Ürün eklenemedi." });
  }
});

// Tüm ürünleri getirme (Redis cache ile)
router.get("/", async (req, res) => {
  try {
    const cacheKey = "all-products";

    // Redis kontrol
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("📦 Redis'ten veri geldi.");
      return res.status(200).json(JSON.parse(cachedData));
    }

    // MongoDB'den veri çek
    const products = await Product.find();

    // Redis'e yaz
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(products));
    console.log("💾 MongoDB'den geldi, Redis'e yazıldı.");

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Belirli bir ürünü getirme
router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).json({ error: "Product not found." });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Yorum ekleme
router.post("/:productId/reviews", async (req, res) => {
  try {
    const { text, rating, user } = req.body;

    if (!text || !rating || !user) {
      return res.status(400).json({ error: "Eksik veri gönderildi." });
    }

    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).json({ error: "Product not found." });

    product.reviews.push({
      text,
      rating,
      user: mongoose.Types.ObjectId(user),
    });

    await product.save();
    await redisClient.del("all-products"); // Cache temizle

    res.status(201).json(product);
  } catch (error) {
    console.log("Yorum eklenirken hata:", error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
});

// Ürün güncelleme
router.put("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updates = req.body;

    const existingProduct = await Product.findById(productId);
    if (!existingProduct)
      return res.status(404).json({ error: "Product not found." });

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
    });

    await redisClient.del("all-products");
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Ürün silme
router.delete("/:productId", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(
      req.params.productId
    );
    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found." });

    await redisClient.del("all-products");
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Ürünleri isme göre ara
router.get("/search/:productName", async (req, res) => {
  try {
    const productName = req.params.productName;
    const products = await Product.find({
      name: { $regex: productName, $options: "i" },
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
