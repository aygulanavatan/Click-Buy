const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const mainRoute = require("./routes/index.js");
const port = process.env.PORT || 5000;



const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});



// Statik kullanıcı bilgisi endpointi
app.get("/api/user/profile", (req, res) => {
  const user = {
    id: "123",
    name: "Müge Tuğ",
    email: "muge@example.com",
    phone: "+90 555 123 4567",
    address: "Isparta, Türkiye",
  };
  res.json(user);
});