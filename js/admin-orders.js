document.addEventListener("DOMContentLoaded", function () {
    const orderRows = document.querySelectorAll("#order-list tbody tr");
    const searchInput = document.getElementById("order-search");
    const statusFilter = document.getElementById("status-filter");

    const trackingModal = document.getElementById("tracking-modal-overlay");
    const statusModal = document.getElementById("status-modal-overlay");

    const closeModalButtons = document.querySelectorAll(".modal-close, .modal-cancel");

    const trackingForm = document.getElementById("tracking-form");
    const statusForm = document.getElementById("status-form");

    // 🔍 Arama
    searchInput.addEventListener("input", function () {
      const keyword = this.value.toLowerCase();

      orderRows.forEach(row => {
        const orderText = row.innerText.toLowerCase();
        row.style.display = orderText.includes(keyword) ? "" : "none";
      });
    });

    // 📂 Duruma göre filtreleme
    statusFilter.addEventListener("change", function () {
      const selected = this.value;

      orderRows.forEach(row => {
        const statusSpan = row.querySelector(".status-badge");
        const statusClass = statusSpan.classList[1]; // örn: "status-shipped"
        const status = statusClass.replace("status-", "");

        if (selected === "all" || status === selected) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });

    // 🖊️ Takip numarası düzenleme butonu
    document.querySelectorAll(".btn-edit-tracking").forEach(btn => {
      btn.addEventListener("click", function () {
        const orderId = this.dataset.id;
        const row = this.closest("tr");
        const trackingInput = row.querySelector(".tracking-input");

        // Modal değerleri doldur
        document.getElementById("order-id").value = orderId;
        document.getElementById("tracking-number").value = trackingInput.value;

        trackingModal.style.display = "flex";
      });
    });

    // 🔁 Durum güncelleme butonu
    document.querySelectorAll(".status-btn").forEach(btn => {
      btn.addEventListener("click", function () {
        const orderId = this.dataset.id;

        document.getElementById("status-order-id").value = orderId;
        document.getElementById("order-status").value = "";
        document.getElementById("status-tracking-number").value = "";
        document.getElementById("status-note").value = "";

        document.querySelector(".tracking-number-field").style.display = "none";

        statusModal.style.display = "flex";
      });
    });

    // 📦 Yeni durum "shipped" veya sonrasıysa takip no göster
    document.getElementById("order-status").addEventListener("change", function () {
      const field = document.querySelector(".tracking-number-field");
      if (["shipped", "delivered"].includes(this.value)) {
        field.style.display = "block";
      } else {
        field.style.display = "none";
      }
    });

    // ❌ Modal kapatma
    closeModalButtons.forEach(btn => {
      btn.addEventListener("click", function () {
        trackingModal.style.display = "none";
        statusModal.style.display = "none";
      });
    });

    // ✅ Takip formu gönderimi
    trackingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const orderId = this["order-id"].value;
      const trackingNumber = this["tracking-number"].value;
      const statusUpdate = this["status-update"].value;
      const cargoCompany = this["cargo-company"].value;

        orderId, trackingNumber, statusUpdate, cargoCompany
      });

      // Buraya backend'e veri gönderme kodu yazılabilir

      trackingModal.style.display = "none";
    });

    // ✅ Sipariş durumu güncelleme
    statusForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const orderId = this["status-order-id"].value;
      const newStatus = this["order-status"].value;
      const trackingNo = this["status-tracking-number"].value;
      const note = this["status-note"].value;

        orderId, newStatus, trackingNo, note
      });

      // Buraya backend'e veri gönderme kodu yazılabilir

      statusModal.style.display = "none";
    });
  });
