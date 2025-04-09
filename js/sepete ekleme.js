document.querySelectorAll('.sepete-ekle-btn').forEach(button => {
    button.addEventListener('click', function() {
        var urunAdi = this.dataset.urun;
        var urunBoyu = this.dataset.boy;
        var adet = this.previousElementSibling.previousElementSibling.value;

        // Sepete ekleme işlemini burada gerçekleştirin
        alert(adet + ' adet ' + urunAdi + ' (' + urunBoyu + ' boy) sepete eklendi.');
    });
});