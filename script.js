document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".product-container");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    nextBtn.addEventListener("click", () => {
      container.scrollBy({ left: 400, behavior: "smooth" });
    });
  
    prevBtn.addEventListener("click", () => {
      container.scrollBy({ left: -400, behavior: "smooth" });
    });
  
    const products = [
      { img: "product1.jpg", name: "MFS ALT ÜST İSPANYOL PAÇA TAKIM", price: "388 TL", rating: "4.6", reviews: "1196" },
      { img: "product2.jpg", name: "Mai Perla Ayıcık Desenli Çıt Çıtlı Bebek Takım", price: "149,90 TL", rating: "4.5", reviews: "999" },
      { img: "product3.jpg", name: "Çelik Kurdele Fiyonk Charm Bileklik", price: "249,90 TL", rating: "4.5", reviews: "856" },
      { img: "product4.jpg", name: "Unisex Günlük Spor Ayakkabı", price: "1.294,26 TL", rating: "4.8", reviews: "432" },
      { img: "product5.jpg", name: "Bershka Uzun Kollu V Yaka T-shirt", price: "370 TL", rating: "4.7", reviews: "278" },
      { img: "product6.jpg", name: "Bipapel Bluz", price: "141 TL", rating: "4.7", reviews: "190" }
    ];
  
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <p class="rating">⭐ ${product.rating} (${product.reviews} yorum)</p>
      `;
      container.appendChild(productCard);
    });
  });
  