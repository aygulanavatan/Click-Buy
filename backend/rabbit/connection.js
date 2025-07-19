const amqp = require("amqplib");

let channel, connection;

async function connectRabbit() {
  try {
    connection = await amqp.connect("amqp://localhost"); // Local RabbitMQ
    channel = await connection.createChannel();
    await channel.assertQueue("orderQueue");
    console.log("✅ RabbitMQ bağlantısı kuruldu.");
  } catch (err) {
    console.error("❌ RabbitMQ bağlantı hatası:", err);
  }
}

function sendToQueue(data) {
  if (!channel) {
    console.log("⚠️ RabbitMQ kanalı hazır değil.");
    return;
  }
  channel.sendToQueue("orderQueue", Buffer.from(JSON.stringify(data)));
  console.log("📤 Kuyruğa mesaj gönderildi:", data);
}

module.exports = {
  connectRabbit,
  sendToQueue,
};
