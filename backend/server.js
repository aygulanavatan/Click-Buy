const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const mainRoute = require("./routes/index.js");
const { connectRabbit } = require("./rabbit/connection"); // 🆕 RabbitMQ bağlantısı
const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB bağlantısı başarılı.");
  } catch (error) {
    console.error("❌ MongoDB bağlantı hatası:", error);
  }
};

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api", mainRoute);

// sunucu başlat
app.listen(port, () => {
  connect();         // MongoDB bağlantısı
  connectRabbit();   // 🆕 RabbitMQ bağlantısı
  console.log(`🚀 Sunucu ${port} portunda çalışıyor.`);
});
