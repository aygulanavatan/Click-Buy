const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const { sendToQueue } = require("../rabbit/connection"); // 🆕 RabbitMQ işlevi

// ✅ Sipariş oluşturma ve kuyruğa gönderme
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);

    // Siparişi veritabanına kaydet
    const savedOrder = await newOrder.save();

    // 📨 Kuyruğa siparişi gönder
    sendToQueue(savedOrder);

    res.status(201).json({ message: "Sipariş oluşturuldu ve kuyruğa eklendi.", order: savedOrder });
  } catch (error) {
    console.error("Sipariş oluşturulamadı:", error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
});

// Kullanıcının sipariş geçmişini getir
router.get("/history/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    if (!orders.length) {
      return res.status(404).json({ message: "Sipariş bulunamadı." });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Sipariş geçmişi hatası:", error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
});

module.exports = router;
