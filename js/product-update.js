// Ürün Güncelleme Sayfası için JavaScript Kodları
document.addEventListener('DOMContentLoaded', function() {
    // Ürün güncelleme/detay sayfası kontrolleri
    const productUpdateForm = document.getElementById('product-update-form');
    if (productUpdateForm) {
        // Giriş yapılmış mı kontrol et
        if (!localStorage.getItem('adminLoggedIn')) {
            // Giriş yapılmamış, login sayfasına yönlendir
            window.location.href = 'admin-login.html';
            return;
        }

        // Çıkış butonu
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                localStorage.removeItem('adminLoggedIn');
                window.location.href = 'admin-login.html';
            });
        }

        // URL'den ürün ID'sini al
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const mode = urlParams.get('mode');

        if (mode === 'add') {
            // Yeni ürün ekleme modu
            document.querySelector('.content-header h2').textContent = 'Yeni Ürün Ekle';
            document.getElementById('product-id').value = 'Otomatik atanacak';

            // Varsayılan değerleri temizle
            document.getElementById('product-name').value = '';
            document.getElementById('product-category').value = '';
            document.getElementById('product-brand').value = '';
            document.getElementById('product-price').value = '';
            document.getElementById('product-discount').value = '0';
            document.getElementById('product-stock').value = '0';
            document.getElementById('product-description').value = '';

            // Özellikleri temizle
            const featuresContainer = document.getElementById('product-features');
            featuresContainer.innerHTML = `
                <div class="feature-item">
                    <input type="text" name="feature-name[]" placeholder="Özellik Adı">
                    <input type="text" name="feature-value[]" placeholder="Özellik Değeri">
                    <button type="button" class="remove-feature"><i class="bi bi-x"></i></button>
                </div>
            `;

            // Görselleri temizle
            const imagesContainer = document.getElementById('product-images');
            imagesContainer.innerHTML = `
                <div class="image-preview-container">
                    <div class="image-preview">
                        <img src="img/placeholder.png" alt="" id="preview-image-1">
                    </div>
                    <div class="image-controls">
                        <input type="file" id="product-image-1" name="product-image-1" accept="image/*" class="image-input">
                        <label for="product-image-1" class="btn btn-sm">Görsel Seç</label>
                        <button type="button" class="btn btn-sm btn-danger remove-image"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            `;
        } else if (productId) {
            // Ürün güncelleme modu - ürün bilgilerini form alanlarına doldur
            document.getElementById('product-id').value = productId;

            // Gerçek uygulamada API'den ürün bilgileri alınır
            // Bu örnek için statik veriler kullanıyoruz

            // Ürün 1 - Zara Kadın Ceket
            if (productId === '1') {
                document.getElementById('product-name').value = 'Zara Kadın Ceket - Gri';
                document.getElementById('product-category').value = 'kadin-giyim';
                document.getElementById('product-brand').value = 'Zara';
                document.getElementById('product-price').value = '1080.00';
                document.getElementById('product-discount').value = '70';
                document.getElementById('product-stock').value = '120';
                document.getElementById('product-description').value = 'Şık ve modern tasarımıyla öne çıkan Zara Kadın Ceket, her kombinle uyum sağlar. Yüksek kaliteli malzemeden üretilmiştir.';

                // Görseller zaten HTML'de tanımlı
            }
            // Ürün 2 - Colin's Erkek Ceket
            else if (productId === '2') {
                document.getElementById('product-name').value = "Colin's Erkek Ceket - Kırmızı";
                document.getElementById('product-category').value = 'erkek-giyim';
                document.getElementById('product-brand').value = "Colin's";
                document.getElementById('product-price').value = '899.00';
                document.getElementById('product-discount').value = '50';
                document.getElementById('product-stock').value = '78';
                document.getElementById('product-description').value = "Colin's Erkek Ceket, modern tasarımı ve rahat yapısıyla günlük kullanıma uygundur. Kırmızı rengiyle kombinlerinize canlılık katar.";

                // Görselleri güncelle
                document.getElementById('preview-image-1').src = 'img/products/product2/1.png';
                document.getElementById('preview-image-2').src = 'img/products/product2/2.png';
            }
            // Ürün 3 - Coton Beyaz Elbise
            else if (productId === '3') {
                document.getElementById('product-name').value = 'Coton Beyaz Elbise';
                document.getElementById('product-category').value = 'kadin-giyim';
                document.getElementById('product-brand').value = 'Coton';
                document.getElementById('product-price').value = '300.00';
                document.getElementById('product-discount').value = '70';
                document.getElementById('product-stock').value = '45';
                document.getElementById('product-description').value = 'Zarif ve şık tasarıma sahip Coton Beyaz Elbise, her özel günde rahatlıkla tercih edebileceğiniz bir parça.';

                // Görselleri güncelle
                document.getElementById('preview-image-1').src = 'img/products/product3/1.png';
                document.getElementById('preview-image-2').src = 'img/products/product3/2.png';
            }
            // Ürün 4 - Stradivarius Beyaz Ceket
            else if (productId === '4') {
                document.getElementById('product-name').value = 'Stradivarius Beyaz Ceket';
                document.getElementById('product-category').value = 'kadin-giyim';
                document.getElementById('product-brand').value = 'Stradivarius';
                document.getElementById('product-price').value = '1260.00';
                document.getElementById('product-discount').value = '70';
                document.getElementById('product-stock').value = '32';
                document.getElementById('product-description').value = 'Zarif tasarımıyla gardıropların vazgeçilmezi olacak Stradivarius Beyaz Ceket, hem günlük hem özel kombinlerinizde kullanabileceğiniz bir parça.';

                // Görselleri güncelle
                document.getElementById('preview-image-1').src = 'img/products/product4/1.png';
                document.getElementById('preview-image-2').src = 'img/products/product4/2.png';
            }
        }

        // Özellik ekleme butonu
        const addFeatureBtn = document.getElementById('add-feature');
        if (addFeatureBtn) {
            addFeatureBtn.addEventListener('click', function() {
                const featuresContainer = document.getElementById('product-features');
                const newFeature = document.createElement('div');
                newFeature.className = 'feature-item';
                newFeature.innerHTML = `
                    <input type="text" name="feature-name[]" placeholder="Özellik Adı">
                    <input type="text" name="feature-value[]" placeholder="Özellik Değeri">
                    <button type="button" class="remove-feature"><i class="bi bi-x"></i></button>
                `;
                featuresContainer.appendChild(newFeature);

                // Yeni eklenen özelliği kaldırma butonuna event listener ekle
                setupRemoveFeatureListeners();
            });
        }

        // Özellik kaldırma butonları için event listener
        function setupRemoveFeatureListeners() {
            const removeFeatureButtons = document.querySelectorAll('.remove-feature');
            removeFeatureButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // En az bir özellik kalmasını sağla
                    const featureItems = document.querySelectorAll('.feature-item');
                    if (featureItems.length > 1) {
                        this.closest('.feature-item').remove();
                    } else {
                        // Son özelliği silmeye çalışıyorsa, sadece alanları temizle
                        const inputs = this.closest('.feature-item').querySelectorAll('input');
                        inputs.forEach(input => {
                            input.value = '';
                        });
                    }
                });
            });
        }

        // Sayfa yüklendiğinde mevcut remove-feature butonlarına event listener ekle
        setupRemoveFeatureListeners();

        // Görsel ekleme butonu
        const addImageBtn = document.getElementById('add-image');
        if (addImageBtn) {
            addImageBtn.addEventListener('click', function() {
                const imagesContainer = document.getElementById('product-images');
                const imageCount = imagesContainer.querySelectorAll('.image-preview-container').length + 1;
                const newImage = document.createElement('div');
                newImage.className = 'image-preview-container';
                newImage.innerHTML = `
                    <div class="image-preview">
                        <img src="img/placeholder.png" alt="" id="preview-image-${imageCount}">
                    </div>
                    <div class="image-controls">
                        <input type="file" id="product-image-${imageCount}" name="product-image-${imageCount}" accept="image/*" class="image-input">
                        <label for="product-image-${imageCount}" class="btn btn-sm">Görsel Seç</label>
                        <button type="button" class="btn btn-sm btn-danger remove-image"><i class="bi bi-trash"></i></button>
                    </div>
                `;
                imagesContainer.appendChild(newImage);

                // Yeni eklenen görsel için event listener'ları ekle
                setupImageListeners();
            });
        }

        // Görsel kaldırma ve önizleme için event listener'lar
        function setupImageListeners() {
            // Görsel kaldırma butonları
            const removeImageButtons = document.querySelectorAll('.remove-image');
            removeImageButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // En az bir görsel kalmasını sağla
                    const imageContainers = document.querySelectorAll('.image-preview-container');
                    if (imageContainers.length > 1) {
                        this.closest('.image-preview-container').remove();
                    } else {
                        // Son görseli silmeye çalışıyorsa, varsayılan görsel ile değiştir
                        const previewImg = this.closest('.image-preview-container').querySelector('img');
                        previewImg.src = 'img/placeholder.png';
                        const fileInput = this.closest('.image-preview-container').querySelector('.image-input');
                        fileInput.value = ''; // Input değerini sıfırla
                    }
                });
            });

            // Görsel input'ları için önizleme
            const imageInputs = document.querySelectorAll('.image-input');
            imageInputs.forEach(input => {
                input.addEventListener('change', function() {
                    const file = this.files[0];
                    if (file) {
                        const reader = new FileReader();
                        const previewImg = this.closest('.image-preview-container').querySelector('img');

                        reader.onload = function(e) {
                            previewImg.src = e.target.result;
                        };

                        reader.readAsDataURL(file);
                    }
                });
            });
        }

        // Sayfa yüklendiğinde mevcut görsel işlevlerini ayarla
        setupImageListeners();

        // Form gönderildiğinde
        productUpdateForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Form verilerini al
            const formData = new FormData(this);

            // Gerçek uygulamada API'ye POST veya PUT isteği gönderilir

            // Başarı mesajı göster
            const mode = urlParams.get('mode');
            const message = mode === 'add'
                ? 'Yeni ürün başarıyla eklendi.'
                : 'Ürün başarıyla güncellendi.';

            showMessage(message, 'success');

            // 2 saniye sonra ürün listesine geri dön
            setTimeout(function() {
                window.location.href = 'admin-panel.html';
            }, 2000);
        });

        // İptal butonu
        const cancelBtn = document.querySelector('.cancel-btn');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', function() {
                window.location.href = 'admin-panel.html';
            });
        }
    }
});

// Mesaj gösterme fonksiyonu
function showMessage(message, type) {
    // Varsa önceki mesajı kaldır
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Yeni mesaj elementi oluştur
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = message;

    // Mesajı sayfaya ekle
    const container = document.querySelector('.admin-content');
    container.insertBefore(messageElement, container.firstChild);

    // 3 saniye sonra mesajı kaldır
    setTimeout(function() {
        messageElement.remove();
    }, 3000);
}