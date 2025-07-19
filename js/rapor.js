document.addEventListener("DOMContentLoaded", () => {
  const siparisler = [
    {
      no: "1001",
      urun: "Ayakkabı",
      miktar: 2,
      toplam: 300,
      durum: "Teslim Edildi",
    },
    {
      no: "1002",
      urun: "Çanta",
      miktar: 1,
      toplam: 200,
      durum: "İptal Edildi",
    },
    {
      no: "1003",
      urun: "Ayakkabı",
      miktar: 3,
      toplam: 450,
      durum: "Hazırlanıyor",
    },
    {
      no: "1004",
      urun: "Tişört",
      miktar: 4,
      toplam: 320,
      durum: "Teslim Edildi",
    },
    {
      no: "1005",
      urun: "Ayakkabı",
      miktar: 1,
      toplam: 150,
      durum: "Teslim Edildi",
    },
  ];

  // HTML öğelerini seç
  const totalOrdersEl = document.getElementById("total-orders");
  const totalSalesEl = document.getElementById("total-sales");
  const topProductEl = document.getElementById("top-product");
  const canceledOrdersEl = document.getElementById("canceled-orders");
  const tableBody = document.getElementById("report-table-body");

  // Toplam sipariş
  totalOrdersEl.textContent = siparisler.length;

  // Toplam satış
  const toplamSatis = siparisler
    .filter((s) => s.durum !== "İptal Edildi")
    .reduce((sum, siparis) => sum + siparis.toplam, 0);
  totalSalesEl.textContent = toplamSatis + " TL";

  // En çok satan ürün
  const urunSayilari = {};
  siparisler.forEach((s) => {
    if (s.durum !== "İptal Edildi") {
      urunSayilari[s.urun] = (urunSayilari[s.urun] || 0) + s.miktar;
    }
  });

  const topUrun = Object.entries(urunSayilari).sort((a, b) => b[1] - a[1])[0];
  topProductEl.textContent = topUrun
    ? `${topUrun[0]} (${topUrun[1]} adet)`
    : "-";

  // İptal edilen sipariş
  const iptaller = siparisler.filter((s) => s.durum === "İptal Edildi").length;
  canceledOrdersEl.textContent = iptaller;

  // Tabloyu doldur
  siparisler.forEach((siparis) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${siparis.no}</td>
        <td>${siparis.urun}</td>
        <td>${siparis.miktar}</td>
        <td>${siparis.toplam} TL</td>
        <td>${siparis.durum}</td>
      `;
    tableBody.appendChild(row);
  });
});
