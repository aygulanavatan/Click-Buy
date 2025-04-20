// Sipariş Takip Sayfası JavaScript Kodları
document.addEventListener('DOMContentLoaded', function() {
    const demoOrders = [/* ... aynı demo sipariş verileri ... */];

    const trackingForm = document.getElementById('tracking-form');
    const trackingResult = document.getElementById('tracking-result');
    const trackingNotFound = document.getElementById('tracking-not-found');

    if (trackingForm) {
        trackingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const orderNumber = document.getElementById('order-number').value.trim();
            const email = document.getElementById('email').value.trim();

            const order = findOrder(orderNumber, email);

            if (order) {
                displayOrderDetails(order);
                trackingResult.style.display = 'block';
                trackingNotFound.style.display = 'none';
                trackingResult.scrollIntoView({ behavior: 'smooth' });
            } else {
                trackingResult.style.display = 'none';
                trackingNotFound.style.display = 'block';
                trackingNotFound.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const tryAgainBtn = document.getElementById('try-again-btn');
    if (tryAgainBtn) {
        tryAgainBtn.addEventListener('click', function() {
            trackingNotFound.style.display = 'none';
            document.getElementById('order-number').value = '';
            document.getElementById('email').value = '';
            document.getElementById('order-number').focus();
        });
    }

    const copyTrackingBtn = document.getElementById('copy-tracking-btn');
    if (copyTrackingBtn) {
        copyTrackingBtn.addEventListener('click', function() {
            const trackingNumber = document.getElementById('tracking-number').textContent;
            navigator.clipboard.writeText(trackingNumber)
                .then(() => {
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="bi bi-check"></i> Kopyalandı';
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 2000);
                })
                .catch(err => {
                    console.error('Kopyalama işlemi başarısız:', err);
                });
        });
    }

    function findOrder(orderNumber, email) {
        return demoOrders.find(order =>
            order.orderNumber.toLowerCase() === orderNumber.toLowerCase() &&
            order.email.toLowerCase() === email.toLowerCase()
        );
    }

    function displayOrderDetails(order) {
        document.getElementById('display-order-number').textContent = order.orderNumber;
        document.getElementById('order-date').textContent = order.orderDate;

        document.getElementById('order-status').textContent = order.statusText;
        document.getElementById('order-status').className = `detail-value status-badge status-${order.status}`;
        document.getElementById('cargo-company').textContent = order.cargoCompany;
        document.getElementById('tracking-number').textContent = order.trackingNumber;
        document.getElementById('estimated-delivery').textContent = order.estimatedDelivery;

        // 🔗 Kargo takip bağlantısı
        const cargoLink = document.getElementById('cargo-tracking-link');
        if (cargoLink) {
            cargoLink.href = order.cargoTrackingUrl;
            cargoLink.target = "_blank";
            cargoLink.textContent = "Kargo Takip Sayfası";
        }

        // 🧾 Ürünleri listele (varsa)
        const itemContainer = document.getElementById('order-items');
        if (itemContainer && order.items) {
            itemContainer.innerHTML = "";
            order.items.forEach(item => {
                const div = document.createElement('div');
                div.classList.add("order-item");

                div.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" />
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        <div class="item-meta">Beden: ${item.size} | Renk: ${item.color}</div>
                        <div class="item-qty">Adet: ${item.quantity}</div>
                        <div class="item-price">${item.price}</div>
                    </div>
                `;

                itemContainer.appendChild(div);
            });
        }

        // 🚚 Adres bilgileri
        const address = order.shippingAddress;
        document.getElementById('shipping-name').textContent = address.name;
        document.getElementById('shipping-address').textContent = address.address;
        document.getElementById('shipping-city').textContent = address.city;
        document.getElementById('shipping-phone').textContent = address.phone;
    }
});