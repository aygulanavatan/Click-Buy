const express = require("express");
const router = express.Router();
const Order = require("../models/order");

// Kullanıcının sipariş geçmişini getir
router.get("/history/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    if (!orders.length) {
      return res.status(404).json({ message: "Sipariş bulunamadı." });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
});

module.exports = router;
