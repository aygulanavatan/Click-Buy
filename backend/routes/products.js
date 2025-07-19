const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/Product.js");
const redisClient = require("../redis/client.js"); // ⬅️ Redis bağlantısı eklendi

// Yeni ürün oluşturma
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    // Ürün eklenince önbelleği temizle
    await redisClient.del("all-products");

    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Tüm ürünleri getirme (Redis cache ile)
router.get("/", async (req, res) => {
  try {
    const cacheKey = "all-products";

    // 🔍 Redis'te var mı kontrol et
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log("📦 Redis'ten veri geldi.");
      return res.status(200).json(JSON.parse(cachedData));
    }

    // ❌ Yoksa MongoDB'den çek
    const products = await Product.find();

    // Redis'e yaz (1 saat sakla)
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(products));
    console.log("💾 MongoDB'den geldi, Redis'e yazıldı.");

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Tek ürün, yorum, güncelleme, silme, arama: aynı kalıyor

router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: "Product not found." });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

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

    // Yorum eklendiği için önbelleği temizle
    await redisClient.del("all-products");

    res.status(201).json(product);
  } catch (error) {
    console.log("Yorum eklenirken hata:", error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
});

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

    // Güncellendiyse önbelleği temizle
    await redisClient.del("all-products");

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndRemove(productId);
    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found." });

    // Silindiyse önbelleği temizle
    await redisClient.del("all-products");

    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

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
