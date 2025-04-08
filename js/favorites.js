document.addEventListener("DOMContentLoaded", () => {
    const removeButtons = document.querySelectorAll(".remove-btn");
  
    removeButtons.forEach(button => {
      button.addEventListener("click", () => {
        const productCard = button.closest(".product-card");
        productCard.remove();
      });
    });
  });
  