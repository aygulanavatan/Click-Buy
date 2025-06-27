document.addEventListener('DOMContentLoaded', function() {
    // Gerekli elementleri seçelim
    const accountToggle = document.querySelector('.header-account');
    const accountDropdown = document.querySelector('.account-dropdown');

    // Eğer elementler mevcutsa işleme devam et
    if (accountToggle && accountDropdown) {
      // Kullanıcı ikonuna tıklandığında menüyü aç/kapa
      accountToggle.addEventListener('click', function(e) {
        e.preventDefault();
        accountDropdown.classList.toggle('show');
      });

      // Sayfa içinde başka bir yere tıklandığında menüyü kapat
      document.addEventListener('click', function(e) {
        if (!e.target.closest('.header-account-wrapper')) {
          accountDropdown.classList.remove('show');
        }
      });

      // ESC tuşuna basıldığında menüyü kapat
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          accountDropdown.classList.remove('show');
        }
      });
    }
  });