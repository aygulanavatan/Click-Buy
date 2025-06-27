document.addEventListener("DOMContentLoaded", () => {
  const orderList = document.getElementById("order-list");

  // Örnek siparişleri gösterelim
  const orders = [
    {
      no: "1001",
      customer: "Ali Kaya",
      product: "Erkek Ceket",
      status: "Hazırlanıyor",
      delivery: "25 Nisan",
    },
    {
      no: "1002",
      customer: "Zeynep Demir",
      product: "Coton Elbise",
      status: "Kargoya Verildi",
      delivery: "26 Nisan",
    },
  ];

  orders.forEach((order) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${order.no}</td>
      <td>${order.customer}</td>
      <td>${order.product}</td>
      <td class="order-status">${order.status}</td>
      <td>${order.delivery}</td>
      <td>
        <button class="track-btn">Kargo Takip No Ekle</button>
        <button class="cancel-btn">Siparişi İptal Et</button>
      </td>
    `;
    orderList.appendChild(tr);
  });

  // Kargo takip numarası ekleme
  orderList.addEventListener("click", function (e) {
    if (e.target.classList.contains("track-btn")) {
      const row = e.target.closest("tr");
      const orderNo = row.children[0].textContent;
      const trackingNo = prompt(
        `Sipariş ${orderNo} için Kargo Takip Numarasını girin:`
      );

      if (trackingNo) {
        alert(`Kargo Takip Numarası kaydedildi: ${trackingNo}`);
        e.target.textContent = "Takip No: " + trackingNo;
        e.target.disabled = true;
      }
    }

    // Sipariş iptal etme
    if (e.target.classList.contains("cancel-btn")) {
      const row = e.target.closest("tr");
      const statusCell = row.querySelector(".order-status");
      const siparisNo = row.children[0].textContent;

      if (!statusCell) {
        alert("Durum hücresi bulunamadı!");
        return;
      }

      if (confirm(`Sipariş ${siparisNo} iptal edilsin mi?`)) {
        statusCell.textContent = "İptal Edildi";
        alert("Sipariş başarıyla iptal edildi.");
      }
    }
  });
});
