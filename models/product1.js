const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  description: { type: String },
  price:       { type: Number, required: true },
  image:       { type: String },
  category:    { type: String },
  inStock:     { type: Boolean, default: true },
  discount:    { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
