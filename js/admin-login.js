
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("admin-login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Simülasyon: Giriş yapılmış say
    localStorage.setItem("adminLoggedIn", "true");
    window.location.href = "admin-panel.html";
  });
});
