// Ödeme Sayfası JavaScript Kodları
document.addEventListener('DOMContentLoaded', function() {
    // Ödeme Metodu Seçimi
    const paymentMethodOptions = document.querySelectorAll('.payment-method');
    const paymentMethodContents = document.querySelectorAll('.payment-method-content');

    paymentMethodOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Aktif sınıfı kaldır
        paymentMethodOptions.forEach(opt => opt.classList.remove('active'));
        // Seçilen metoda aktif sınıfı ekle
        this.classList.add('active');

        // Radio butonu işaretle
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;

        // İçerik panellerini gizle
        paymentMethodContents.forEach(content => {
          content.style.display = 'none';
        });

        // Seçilen metodun içeriğini göster
        const selectedMethod = radio.value;
        document.getElementById(`${selectedMethod}-content`).style.display = 'block';
      });
    });

    // Kredi Kartı Görsel Güncelleme
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderInput = document.getElementById('card-holder');
    const expiryDateInput = document.getElementById('expiry-date');
    const cvvInput = document.getElementById('cvv');

    if (cardNumberInput) {
      // Kart numarası formatı
      cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';

        for (let i = 0; i < value.length; i++) {
          if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
          }
          formattedValue += value[i];
        }

        e.target.value = formattedValue;

        // Görsel güncelleme
        const cardNumberDisplay = document.querySelector('.card-number-display');
        if (value.length > 0) {
          let displayValue = '';
          for (let i = 0; i < 16; i++) {
            if (i < value.length) {
              displayValue += value[i];
            } else {
              displayValue += '•';
            }

            if ((i + 1) % 4 === 0 && i < 15) {
              displayValue += ' ';
            }
          }
          cardNumberDisplay.textContent = displayValue;
        } else {
          cardNumberDisplay.textContent = '•••• •••• •••• ••••';
        }

        // Kart türünü tespit et
        const detectedCardType = document.querySelector('.detected-card-type');
        // İlk 4 haneye göre kart türünü tespit et
        if (value.length >= 2) {
          const firstDigits = value.substring(0, 2);
          if (firstDigits === '40' || firstDigits === '41' || firstDigits === '42') {
            detectedCardType.textContent = 'VISA';
          } else if (firstDigits === '51' || firstDigits === '52' || firstDigits === '53') {
            detectedCardType.textContent = 'MasterCard';
          } else if (firstDigits === '34' || firstDigits === '37') {
            detectedCardType.textContent = 'American Express';
          } else {
            detectedCardType.textContent = '';
          }
        } else {
          detectedCardType.textContent = '';
        }
      });

      // Kart sahibi adı
      cardHolderInput.addEventListener('input', function(e) {
        const cardHolderDisplay = document.querySelector('.card-holder .value');
        if (e.target.value.length > 0) {
          cardHolderDisplay.textContent = e.target.value.toUpperCase();
        } else {
          cardHolderDisplay.textContent = 'AD SOYAD';
        }
      });

      // Son kullanma tarihi formatı
      expiryDateInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';

        if (value.length > 0) {
          // İlk 2 hane ay (01-12 arası olmalı)
          if (value.length > 2) {
            let month = parseInt(value.substring(0, 2));
            if (month > 12) {
              month = 12;
            } else if (month < 1) {
              month = 1;
            }
            formattedValue = month.toString().padStart(2, '0') + '/' + value.substring(2, 4);
          } else {
            formattedValue = value;
          }
        }

        e.target.value = formattedValue;

        // Görsel güncelleme
        const expiryDisplay = document.querySelector('.card-expiry .value');
        if (value.length > 0) {
          if (value.length >= 2) {
            let month = value.substring(0, 2).padStart(2, '0');
            let year = value.length > 2 ? value.substring(2, 4) : 'YY';
            expiryDisplay.textContent = month + '/' + year;
          } else {
            expiryDisplay.textContent = value.padStart(2, '0') + '/YY';
          }
        } else {
          expiryDisplay.textContent = 'AA/YY';
        }
      });

      // CVV formatı
      cvvInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
      });

      // CVV info tooltip
      const cvvInfo = document.querySelector('.cvv-info');
      if (cvvInfo) {
        cvvInfo.addEventListener('mouseenter', function() {
          const tooltip = document.createElement('div');
          tooltip.className = 'cvv-tooltip';
          tooltip.innerHTML = 'Kartınızın arkasındaki son 3 haneli güvenlik kodudur.';
          tooltip.style.position = 'absolute';
          tooltip.style.top = '-40px';
          tooltip.style.right = '0';
          tooltip.style.backgroundColor = '#333';
          tooltip.style.color = 'white';
          tooltip.style.padding = '8px 12px';
          tooltip.style.borderRadius = '4px';
          tooltip.style.fontSize = '12px';
          tooltip.style.zIndex = '100';
          tooltip.style.whiteSpace = 'nowrap';
          this.appendChild(tooltip);
        });

        cvvInfo.addEventListener('mouseleave', function() {
          const tooltip = this.querySelector('.cvv-tooltip');
          if (tooltip) {
            this.removeChild(tooltip);
          }
        });
      }
    }

    // Fatura bilgileri - Fatura türü seçimi
    const invoiceTypeOptions = document.querySelectorAll('.invoice-option');
    const corporateInfo = document.querySelector('.corporate-info');

    invoiceTypeOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Aktif sınıfı kaldır
        invoiceTypeOptions.forEach(opt => opt.classList.remove('active'));
        // Seçilen türe aktif sınıfı ekle
        this.classList.add('active');

        // Radio butonu işaretle
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;

        // Kurumsal bilgileri göster/gizle
        if (radio.value === 'corporate') {
          corporateInfo.style.display = 'block';
        } else {
          corporateInfo.style.display = 'none';
        }
      });
    });

    // Adres seçimi
    const savedAddresses = document.querySelectorAll('.saved-address');

    savedAddresses.forEach(address => {
      address.addEventListener('click', function() {
        // Aktif sınıfı kaldır
        savedAddresses.forEach(addr => addr.classList.remove('active'));
        // Seçilen adrese aktif sınıfı ekle
        this.classList.add('active');
      });
    });

    // Adres düzenleme ve silme butonları
    const editButtons = document.querySelectorAll('.btn-edit');
    const deleteButtons = document.querySelectorAll('.btn-delete');

    editButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation(); // Adres kartının tıklanmasını engelle
        // Burada adres düzenleme modalı açılabilir
      });
    });

    deleteButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation(); // Adres kartının tıklanmasını engelle
        if (confirm('Bu adresi silmek istediğinizden emin misiniz?')) {
          // Burada adres silme işlemi yapılabilir
          // Örnek olarak adresi gizliyoruz
          this.closest('.saved-address').style.display = 'none';
        }
      });
    });

    // Yeni adres ekleme butonu
    const addAddressButton = document.querySelector('.btn-add-address');

    if (addAddressButton) {
      addAddressButton.addEventListener('click', function() {
        // Burada adres ekleme modalı açılabilir
      });
    }

    // Havale için IBAN kopyalama
    const copyIbanButtons = document.querySelectorAll('.copy-iban');

    copyIbanButtons.forEach(button => {
      button.addEventListener('click', function() {
        const iban = this.getAttribute('data-iban');

        // Clipboard API kullanarak kopyala
        navigator.clipboard.writeText(iban)
          .then(() => {
            // Başarılı kopyalama
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="bi bi-check"></i> Kopyalandı';
            this.style.backgroundColor = '#d4edda';
            this.style.color = '#155724';
            this.style.borderColor = '#c3e6cb';

            // 2 saniye sonra eski haline getir
            setTimeout(() => {
              this.innerHTML = originalText;
              this.style.removeProperty('background-color');
              this.style.removeProperty('color');
              this.style.removeProperty('border-color');
            }, 2000);
          })
          .catch(err => {
            console.error('Kopyalama işlemi başarısız:', err);
          });
      });
    });

    // Dijital cüzdan seçimi
    const walletOptions = document.querySelectorAll('.wallet-option');

    walletOptions.forEach(option => {
      option.addEventListener('click', function() {
        const walletType = this.getAttribute('data-wallet');
      });
    });

    // İndirim kuponu uygulama
    const applyButton = document.querySelector('.btn-apply');

    if (applyButton) {
      applyButton.addEventListener('click', function() {
        const couponInput = document.getElementById('coupon-code');
        const couponCode = couponInput.value.trim();

        if (couponCode === '') {
          return;
        }

        // Kupon kodu kontrolü (gerçek projede API ile kontrol edilir)
        if (couponCode.toUpperCase() === 'INDIRIM20') {
          // Burada sepet tutarı güncellenebilir
        } else {
        }
      });
    }

    // Ödeme tamamlama butonu
    const completePaymentButton = document.getElementById('complete-payment');
    const successModal = document.getElementById('success-modal');

    if (completePaymentButton && successModal) {
      completePaymentButton.addEventListener('click', function() {
        // Ödeme formunu kontrol et
        const paymentForm = document.getElementById('payment-form');
        const activeMethod = document.querySelector('.payment-method.active input').value;

        if (activeMethod === 'credit-card') {
          const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
          const cardHolder = document.getElementById('card-holder').value;
          const expiryDate = document.getElementById('expiry-date').value;
          const cvv = document.getElementById('cvv').value;

          // Basit doğrulama
          if (cardNumber.length < 16) {
            return;
          }

          if (cardHolder.trim() === '') {
            return;
          }

          if (expiryDate.length < 5) {
            return;
          }

          if (cvv.length < 3) {
            return;
          }
        }

        // Fatura adresi kontrolü
        const selectedAddress = document.querySelector('.saved-address.active');
        if (!selectedAddress) {
          return;
        }

        // 3D Secure onayı kontrolü
        const agree3dCheckbox = document.getElementById('agree-3d');
        if (activeMethod === 'credit-card' && !agree3dCheckbox.checked) {
          return;
        }

        // Ödeme işlemi simulasyonu
        completePaymentButton.innerHTML = '<i class="bi bi-arrow-repeat"></i> İşleniyor...';
        completePaymentButton.disabled = true;

        // 2 saniye sonra ödeme başarılı modalını göster
        setTimeout(() => {
          // Başarılı modal gösterimi
          successModal.classList.add('active');
        }, 2000);
      });
    }

    // Modal dışına tıklandığında kapatma
    window.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal-overlay')) {
        successModal.classList.remove('active');
      }
    });
  });