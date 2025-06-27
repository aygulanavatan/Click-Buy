<script>
  const invoiceOptions = document.querySelectorAll('label.invoice-option');
  const invoiceRadios = document.querySelectorAll('input[name="invoice-type"]');
  const corporateInfo = document.querySelector(".corporate-info");

  invoiceRadios.forEach(radio => {
    radio.addEventListener("change", function () {
      // Tüm etiketlerden active class'ını kaldır
      invoiceOptions.forEach(option => option.classList.remove("active"));

      // Seçilen input'un parent label'ına active class'ı ekle
      const selectedLabel = this.closest("label");
      selectedLabel.classList.add("active");

      // Kurumsal seçildiyse alanı göster
      if (this.value === "corporate") {
        corporateInfo.style.display = "block";
      } else {
        corporateInfo.style.display = "none";
        corporateInfo.querySelectorAll("input").forEach(input => input.value = "");
      }
    });
  });

  // Sayfa yüklendiğinde aktif olan input'a göre class ayarı
  window.addEventListener("DOMContentLoaded", function () {
    invoiceRadios.forEach(radio => {
      if (radio.checked) {
        radio.closest("label").classList.add("active");
      }
    });
  });
</script>
