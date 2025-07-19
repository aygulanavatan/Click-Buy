let addressCounter = document.querySelectorAll(".saved-address").length + 1;

// Modalı aç
function openAddressModal(existingCard = null) {
  const modal = document.getElementById("address-modal");

  if (existingCard) {
    // Düzenleme için doldur
    document.getElementById("new-name").value =
      existingCard.querySelector("strong").textContent;
    document.getElementById("new-street").value =
      existingCard.querySelectorAll("p")[1].textContent;
    document.getElementById("new-district").value =
      existingCard.querySelectorAll("p")[2].textContent;
    document.getElementById("new-phone").value = existingCard
      .querySelectorAll("p")[3]
      .textContent.replace("Telefon: ", "");
    modal.dataset.editingId = existingCard.dataset.id;
  } else {
    // Temizle
    modal.dataset.editingId = "";
    document.getElementById("new-name").value = "";
    document.getElementById("new-street").value = "";
    document.getElementById("new-district").value = "";
    document.getElementById("new-phone").value = "";
  }

  modal.style.display = "block";
}

// Modalı kapat
function closeAddressModal() {
  document.getElementById("address-modal").style.display = "none";
}

// Kaydet butonu
document
  .getElementById("save-new-address")
  .addEventListener("click", function () {
    const name = document.getElementById("new-name").value.trim();
    const street = document.getElementById("new-street").value.trim();
    const district = document.getElementById("new-district").value.trim();
    const phone = document.getElementById("new-phone").value.trim();
    const editingId =
      document.getElementById("address-modal").dataset.editingId;

    if (!name || !street || !district || !phone) {
      alert("Lütfen tüm alanları doldurunuz.");
      return;
    }

    if (editingId) {
      // Güncelleme
      const card = document.querySelector(
        `.saved-address[data-id='${editingId}']`
      );
      card.querySelector(".address-content").innerHTML = `
      <p><strong>${name}</strong></p>
      <p>${street}</p>
      <p>${district}</p>
      <p>Telefon: ${phone}</p>
    `;
    } else {
      // Yeni kart oluştur
      const newCard = document.createElement("div");
      newCard.classList.add("saved-address");
      newCard.setAttribute("data-id", addressCounter++);

      newCard.innerHTML = `
      <div class="address-header">
        <span class="address-title">Yeni Adres</span>
        <div class="address-actions">
          <button class="btn-edit" title="Düzenle"><i class="bi bi-pencil"></i></button>
          <button class="btn-delete" title="Sil"><i class="bi bi-trash"></i></button>
        </div>
      </div>
      <div class="address-content">
        <p><strong>${name}</strong></p>
        <p>${street}</p>
        <p>${district}</p>
        <p>Telefon: ${phone}</p>
      </div>
    `;

      document.querySelector(".saved-addresses").appendChild(newCard);
    }

    closeAddressModal();
  });

// Düzenle & Sil için Event Delegation
document.addEventListener("click", function (e) {
  const card = e.target.closest(".saved-address");

  if (e.target.closest(".btn-edit") && card) {
    openAddressModal(card);
  }

  if (e.target.closest(".btn-delete") && card) {
    if (confirm("Bu adres silinsin mi?")) {
      card.remove();
    }
  }
});
