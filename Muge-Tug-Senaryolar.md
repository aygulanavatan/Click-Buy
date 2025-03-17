## Durum Senaryoları

| Senaryo ID              | UC1 (Müge Tuğ)                                              |
|:------------------------|:------------------------------------------------------------------|
| **Senaryo Adı**         | Kullanıcı Kayıt Olma                                         |
| **Ana Aktör**           | Kullanıcı                                                         |
| **Ön Koşullar**         | Kullanıcı kayıt sayfasına erişebilmeli ve geçerli bir e-posta adresine sahip olmalıdır. Ayrıca, gerekli bilgileri(ad, soyad, e-posta, şifre vb.) eksiksiz girmeli ve şifre oluşturma kriterlerini karşılamalıdır. |
| **Hedef Şartlar**       | Kullanıcı başarılı bir şekilde kayıt olur.                                   |
| **Ana Başarı Senaryosu**| 1. Kullanıcı kayıt sayfasına gelir.<br>2. Kullanıcı, e-posta adresini, kullanıcı adını ve şifresini girer.<br>3. Kullanıcı, şifreyi doğrular.<br>4.Kullanıcı, "Kayıt Ol" butonuna tıklar.<br>5. Sistem, kullanıcının bilgilerini doğrular |
| **Genişlemeler**        | **1a:** Sayfa Yüklenme Sorunu:<br>- Sistem bir hata mesajı gösterir.<br><br>**1b:** Aktif Oturum Durumu:<br>-Sistem otomatik olarak ana sayfaya yönlendirir.<br><br>**2a:** E-posta Formatı Hatası:<br>- Sistem kullanıcıyı doğru formatı kullanması için bilgilendirir.<br><br>**2b:** Kullanıcı Adı Eşleşme Hatası:<br>- Sistem bir hata mesajı gösterir.<br><br>**2c:** Şifre Formatı Hatası:<br>- Şifre, güvenlik gereksinimlerine uymuyorsa sistem kullanıcıyı uyarır.<br><br>**3a:** Şifre Doğrulama Uyuşmazlığı:<br>- Sistem hata mesajı gösterir.<br><br>**3b:** Şifre Alanı Boş Bırakılırsa:<br>-  Sistem kullanıcıyı uyarır.<br><br>**4a:** Başarısız İşlem:<br>- Kullanıcıya bir hata mesajı gösterilir.<br><br>**4b:** Yavaş Tepkime:<br>- Kullanıcıyı bekletme süresi konusunda bilgilendirecek bir yükleniyor göstergesi sunulur.<br><br>**5a:** Geçersiz E-posta:<br>- Sistem bir uyarı mesajı verir.<br><br>**5b:** Şifre Uygunsuzluğu:<br>- Şifrenin güvenlik kurallarına uymaması durumunda, sistem kullanıcıyı bilgilendirir .


| Senaryo ID              | UC2 (Müge Tuğ)                                              |
|:------------------------|:------------------------------------------------------------------|
| **Senaryo Adı**         | Kullanıcı Bilgilerini Görüntüleme                                 |
| **Ana Aktör**           | Kullanıcı                                                  |
| **Ön Koşullar**         | Kullanıcı, sisteme başarılı bir şekilde giriş yapmış olmalıdır ve görüntülemek istediği bilgilere sahip olmalıdır. |
| **Hedef Şartlar**       | Kullanıcı, sisteme giriş yaptıktan sonra profil bilgilerini güvenli bir şekilde görüntüleyebilmelidir.                |
| **Ana Başarı Senaryosu**| 1. Kullanıcı, sisteme giriş yapar.<br>2. Kullanıcı, "Hesap Bilgileri" sekmesine tıklar.<br>3. Sistem, kullanıcının profil bilgilerini veritabanından alır ve sayfada görüntüler.<br>4. Kullanıcı, sayfadaki bilgileri görüntüler. |
| **Genişlemeler**        | **1a:** Geçersiz Giriş:<br>- Sistem hata mesajı gösterir.<br><br>**1b** Hesap Kilitlenmesi:- Sistem hesabı geçici olarak kilitler ve kullanıcıyı bilgilendirir.<br><br>**2a:** Sekme Erişim Hatası:<br>- Sekme doğru şekilde yüklenmezse, sistem bir hata mesajı gösterir.<br><br>**3a:** Veritabanı Hatası:<br>-Sistem, kullanıcı bilgilerini veritabanından alırken bir hata oluşursa sistem hata mesajı gösterir.<br><br>**3b:** Eksik Bilgi:<br>- Veritabanında bazı bilgiler eksikse, sistem eksik bilgileri boş olarak gösterir.<br><br>**4a:** Bilgilerin Güncel Olmaması:<br>- Sistem kullanıcıya uyarı mesajı gösterir.<br><br>**4b:** Gizlilik ve Güvenlik:<br>- Kullanıcı bilgileri şifrelenmiş veya gizli bilgileri içeriyorsa, sistem bu bilgilerin yalnızca güvenli bir ortamda görüntülenmesini sağlar.


| Senaryo ID              | UC3 (Müge Tuğ)                                              |
|:------------------------|:------------------------------------------------------------------|
| **Senaryo Adı**         | Sipariş Geçmişini Düzenleme                                      |
| **Ana Aktör**           | Kullanıcı                                                            |
| **Ön Koşullar**         | Kullanıcı sisteme giriş yapmış olmalıdır, geçmişte sipariş vermiş olmalıdır ve yalnızca kendi siparişlerini düzenleyebilir.               |
| **Hedef Şartlar**       | Kullanıcı, geçmiş siparişlerindeki bilgileri görüntüleyip düzenleyebilmelidir.                           |
| **Ana Başarı Senaryosu**| 1. Kullanıcı, sisteme giriş yapar.<br>2. Kullanıcı, "Sipariş Geçmişi" sekmesine tıklar.<br>3. Sistem, kullanıcının geçmiş siparişlerini görüntüler.<br>4. Kullanıcı, düzenlemek istediği siparişi seçer.<br>5. Kullanıcı, sipariş bilgilerini düzenler.<br>6. Kullanıcı, düzenlemeyi onaylar ve sistem güncellenmiş sipariş bilgisini kaydeder. |
| **Genişlemeler**        | **1a:** Geçersiz Giriş:<br>- Sistem hata mesajı gösterir.<br><br>**1b:** Hesap Kilitlenmesi:<br>- Sistem hesabı geçici olarak kilitler ve kullanıcıyı bilgilendirir.<br><br>**2a:** Sekme Erişim Hatası:<br>- Sekme doğru şekilde yüklenmezse, sistem bir hata mesajı gösterir.<br><br>**3a:**  Veritabanı Hatası:<br>-Sistem, kullanıcı bilgilerini veritabanından alırken bir hata oluşursa sistem hata mesajı gösterir.<br><br>**3b:** Eksik Sipariş:<br>- Sipariş bilgisi eksikse kullanıcı bilgilendirilir.<br><br>**4a** Seçim Hatası:<br>- Yanlış sipariş seçilirse uyarı verilir. |



| Senaryo ID              | UC4 (Müge Tuğ)                                              |
|:------------------------|:------------------------------------------------------------------|
| **Senaryo Adı**         | Sipariş Durumu Görüntüleme                                        |
| **Ana Aktör**           | Kullanıcı                                                         |
| **Ön Koşullar**         | Kullanıcı giriş yapmış olmalıdır                                 |
| **Hedef Şartlar**       | Kullanıcı sipariş durumunu görüntüler                             |
| **Ana Başarı Senaryosu**| 1. "Siparişlerim" sayfası açılır.<br>2. İlgili sipariş seçilir.<br>3. Sistem sipariş durumunu gösterir. |
| **Genişlemeler**        | **1a:** Sayfa açılmaz (hata oluşur):<br>- Sistem hata mesajı verir.<br>- Kullanıcı sayfayı yeniler.<br><br>**2a:** Sipariş bulunamaz:<br>- Sistem hata mesajı verir.<br>- Kullanıcı tekrar sipariş arar.<br><br>**3a:** Durum yüklenemez:<br>- Sistem hata verir.<br>- Kullanıcı tekrar dener veya destek alır.<br><br>**3b:** Durum güncel değildir:<br>- Sistem bilgi verir, beklemesini önerir.<br><br>**3c:** İnternet bağlantısı kopar:<br>- Sistem hata verir.<br>- Kullanıcı bağlantıyı kontrol edip tekrar dener. |


| Senaryo ID              | UC5 (Müge Tuğ)                                              |
|:------------------------|:------------------------------------------------------------------|
| **Senaryo Adı**         | Satıcı Mesaj Paneli Görüntüleme                                   |
| **Ana Aktör**           | Satıcı                                                            |
| **Ön Koşullar**         | Satıcı sisteme giriş yapmış olmalıdır                             |
| **Hedef Şartlar**       | Satıcı mesaj panelini görüntüler                                  |
| **Ana Başarı Senaryosu**| 1. Satıcı giriş yapar.<br>2. Mesaj panelini açar.<br>3. Mesajlarını görüntüler. |
| **Genişlemeler**        | **1a:** Giriş yapılamaz:<br>- Sistem hata verir.<br>- Satıcı tekrar giriş yapar.<br><br>**2a:** Mesaj paneli açılmaz:<br>- Sistem hata verir, sayfa yenilenir.<br><br>**3a:** Mesaj yoktur:<br>- Sistem uyarı gösterir.<br><br>**3b:** Mesaj yüklenemez:<br>- Sistem hata verir, tekrar dener veya destek alır.<br><br>**3c:** Satıcı cevap verir:<br>- Mesaj seçilir, cevap yazılır ve gönderilir.<br>- Sistem cevabı gönderir ve onay verir. |


| Senaryo ID              | UC6 (Müge Tuğ)                                              |
|:------------------------|:------------------------------------------------------------------|
| **Senaryo Adı**         | Sipariş Raporlarını Görüntüleme                                    |
| **Ana Aktör**           | Yönetici                                                           |
| **Ön Koşullar**         | Yönetici sisteme giriş yapmış olmalıdır.                           |
| **Hedef Şartlar**       | Yönetici sipariş raporlarını başarıyla görüntüler.                 |
| **Ana Başarı Senaryosu**| 1. Yönetici raporlar panelini açar.<br>2. Sipariş raporlarını seçer.<br>3. Sistem sipariş raporlarını gösterir. |
| **Genişlemeler**        | **1a:** Yönetici raporlar panelini açamaz (yetki veya teknik hata).<br>- Sistem hata mesajı verir.<br>- Yönetici tekrar giriş yapar veya yetki kontrolü yapar.<br><br>**2a:** Raporlar yüklenemez:<br>- Sistem hata mesajı gösterir.<br>- Yönetici sayfayı yenileyerek tekrar dener.<br><br>**2b:** Seçilen rapor mevcut değildir:<br>- Sistem uyarı mesajı gösterir.<br>- Yönetici farklı rapor seçer.<br><br>**3a:** Rapor verileri eksik veya hatalıdır:<br>- Sistem hata mesajı gösterir.<br>- Yönetici raporu yeniden yükler veya destek alır.<br><br>**3b:** Sistem raporları görüntüleyemez (teknik hata):<br>- Sistem hata verir.<br>- Yönetici tekrar dener veya destek alır.


