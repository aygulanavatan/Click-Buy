const { createClient } = require("redis");

const client = createClient(); // localhost:6379 varsayılan

client.on("error", (err) => console.error("❌ Redis Hatası:", err));
client.on("connect", () => console.log("✅ Redis'e bağlandı."));

client.connect();

module.exports = client;
