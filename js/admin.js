document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("product-search");
  const productRows = document.querySelectorAll("#product-list tbody tr");

  // Filtreleme fonksiyonu
  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    productRows.forEach((row) => {
      const productName = row.cells[2].textContent.toLowerCase();
      row.style.display = productName.includes(searchTerm) ? "" : "none";
    });
  }

  searchInput.addEventListener("input", filterProducts);

  const searchButton = document.querySelector(".search-btn");
  if (searchButton) {
    searchButton.addEventListener("click", filterProducts);
  }

  // Yeni Ürün Ekleme Modali
  const addProductBtn = document.getElementById("add-product-btn");
  const modal = document.getElementById("product-modal");
  const form = document.getElementById("product-form");

  if (addProductBtn) {
    addProductBtn.addEventListener("click", function () {
      modal.style.display = "flex";
    });
  }

  window.closeProductModal = function () {
    modal.style.display = "none";
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("product-name").value;
    const category = document.getElementById("product-category").value;
    const price = document.getElementById("product-price").value;
    const discount = document.getElementById("product-discount").value || "0%";
    const stock = document.getElementById("product-stock").value;
    const imgUrl = document.getElementById("product-img").value;

    const table = document.querySelector("#product-list tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>-</td>
      <td><img src="${imgUrl}" class="product-mini-img" width="50"/></td>
      <td>${name}</td>
      <td>${category}</td>
      <td>${price} TL</td>
      <td>${discount}</td>
      <td>${stock}</td>
      <td>
        <div class="action-buttons">
          <a class="edit-btn" href="#"><i class="bi bi-pencil-fill"></i></a>
          <button class="delete-btn"><i class="bi bi-trash-fill"></i></button>
        </div>
      </td>
    `;

    // Yeni satır için silme olayı da tanımlanmalı
    const deleteBtn = row.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      row.remove();
    });

    table.appendChild(row);
    form.reset();
    closeProductModal();
  });

  // Sayfa yüklenince mevcut silme butonlarını etkinleştir
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      row.remove();
    });
  });
});
