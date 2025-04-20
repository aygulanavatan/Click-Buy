document.addEventListener("DOMContentLoaded", function () {
  const categoryInput = document.getElementById("category-name");
  const categoryList = document.getElementById("category-list");
  const addCategoryBtn = document.getElementById("add-category-btn");

  // Kategorileri localStorage'tan yükle
  function loadCategories() {
    const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    categoryList.innerHTML = "";
    savedCategories.forEach((name) => addCategoryToDOM(name));
  }

  // Yeni kategori DOM'a ekle
  function addCategoryToDOM(name) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${name}</span>
      <button class="delete-btn">Sil</button>
    `;
    categoryList.appendChild(li);
  }

  // Yeni kategori ekle
  addCategoryBtn.addEventListener("click", function () {
    const categoryName = categoryInput.value.trim();
    if (categoryName !== "") {
      const savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
      if (!savedCategories.includes(categoryName)) {
        savedCategories.push(categoryName);
        localStorage.setItem("categories", JSON.stringify(savedCategories));
        addCategoryToDOM(categoryName);
        categoryInput.value = "";
      }
    }
  });

  // Silme işlemi
  categoryList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      const item = e.target.closest("li");
      const name = item.querySelector("span").textContent;
      item.remove();

      let savedCategories = JSON.parse(localStorage.getItem("categories")) || [];
      savedCategories = savedCategories.filter(cat => cat !== name);
      localStorage.setItem("categories", JSON.stringify(savedCategories));
    }
  });

  loadCategories(); // Sayfa yüklendiğinde listele
});
