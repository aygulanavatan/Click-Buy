const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User.js");

const generateRandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const defaultAvatar = generateRandomAvatar();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email address is already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      avatar: defaultAvatar,
      role: role || "user", // Varsayılan rol
    });

    await newUser.save();
    res.status(201).json({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      avatar: newUser.avatar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid email." });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: "Invalid password." });

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Kullanıcı bilgilerini güncelleme
router.put("/update/:id", async (req, res) => {
  try {
    const { username, email, avatar } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, avatar },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı." });
    }

    const { password, ...userWithoutPassword } = updatedUser._doc;

    res.status(200).json({
      message: "Kullanıcı başarıyla güncellendi.",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
});

// Şifre sıfırlama
router.post("/reset-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({ error: "Email ve yeni şifre gerekli." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Kayıtlı kullanıcı bulunamadı." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Şifre başarıyla güncellendi." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
});

// Kullanıcı bilgilerini ID ile getir
router.get("/profile/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Sunucu hatası." });
  }
});

module.exports = router;
