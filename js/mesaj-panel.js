document.addEventListener("DOMContentLoaded", function () {
  const incomingList = document.getElementById("incoming-list");
  const fromEl = document.getElementById("from");
  const contentEl = document.getElementById("message-content");
  const messageDetail = document.getElementById("message-detail");

  // Gelen mesajlar
  const messages = [
    {
      from: "Kullanıcı - Ayşe Yılmaz",
      content: "Ürün hakkında bilgi alabilir miyim?",
      date: "2024-04-18 14:30",
    },
    {
      from: "Satıcı - Mehmet Kaya",
      content: "Stok güncellemesi yapıldı.",
      date: "2024-04-18 12:45",
    },
  ];

  // Listeyi oluştur
  messages.forEach((msg, index) => {
    const li = document.createElement("li");
    li.classList.add("message-item");
    li.innerHTML = `<strong>${msg.from}</strong><br>${msg.content}<br><small>${msg.date}</small>`;
    li.dataset.index = index;

    li.addEventListener("click", () => {
      fromEl.textContent = msg.from;
      contentEl.textContent = msg.content;
      messageDetail.style.display = "block";
    });

    incomingList.appendChild(li);
  });

  // Yeni mesaj gönder
  document.getElementById("send-new-message").addEventListener("click", () => {
    const recipient = document.getElementById("recipient").value;
    const content = document.getElementById("new-message").value;

    if (recipient && content) {
      alert(`Mesaj "${content}" alıcıya (${recipient}) gönderildi.`);
      document.getElementById("recipient").value = "";
      document.getElementById("new-message").value = "";
    } else {
      alert("Lütfen alıcı ve mesaj bilgilerini doldurun.");
    }
  });

  // Cevap gönder
  document.getElementById("send-reply").addEventListener("click", () => {
    const reply = document.getElementById("reply-message").value;
    if (reply) {
      alert("Cevabınız gönderildi.");
      document.getElementById("reply-message").value = "";
    } else {
      alert("Lütfen bir cevap yazın.");
    }
  });
});
