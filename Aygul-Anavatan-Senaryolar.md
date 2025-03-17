## Kullanıcı Senaryoları

### Senaryo ID: UC1 (Aygül Anavatan)

| Başlık                  | Açıklama                                                          |
|-------------------------|-------------------------------------------------------------------|
| **Senaryo Adı**         | Ödeme Sayfası Görüntüleme                                         |
| **Ana Aktör**           | Kullanıcı                                                         |
| **Ön Koşullar**         | Kullanıcı sisteme kayıtlıdır, giriş yapmış ve sepette en az bir ürün bulunmalıdır |
| **Hedef Şartlar**       | Ödeme sayfası görüntülenir                                        |
| **Ana Başarı Senaryosu**| 1. Kullanıcı sisteme giriş yapar.<br>2. Kullanıcı sepetini görüntüler.<br>3. Kullanıcı "Ödeme Yap" butonuna tıklar.<br>4. Sistem ödeme sayfasını gösterir. |
| **Genişlemeler**        | **1a:** Kullanıcı giriş yapamaz (şifre/kullanıcı adı hatalıdır).<br>- Sistem hata verir, kullanıcı bilgilerini tekrar girer.<br><br>**2a:** Sepet boş ise:<br>- Sistem hata mesajı gösterir.<br>- Kullanıcı ürün sayfasına yönlendirilir.<br><br>**3a:** Kullanıcı vazgeçer:<br>- Kullanıcı işlemi iptal eder.<br>- Sistem kullanıcıyı anasayfaya yönlendirir.<br><br>**3b:** Kullanıcı sepetini güncellemek ister:<br>- Sepete ürün ekler veya çıkarır.<br>- Tekrar "Ödeme Yap" butonuna tıklar.<br><br>**3c:** Kullanıcı indirim kuponu ekler:<br>- Kupon kodunu girer.<br>- Sistem indirimi uygular.<br>- Tekrar "Ödeme yap" butonuna tıklar.<br><br>**4a:** Ödeme sayfası görüntülenemez:<br>- Sistem hata mesajı gösterir.<br>- Kullanıcı işlemi tekrar dener veya destek alır.<br><br>**4b:** İnternet bağlantısı kesilir:<br>- Sistem hata verir.<br>- Kullanıcı bağlantıyı kontrol edip tekrar dener. |

### Senaryo ID: UC2 (Aygül Anavatan)

| Başlık                  | Açıklama                                                          |
|-------------------------|-------------------------------------------------------------------|
| **Senaryo Adı**         | Ürün Güncelleme                                                   |
| **Ana Aktör**           | Yönetici, Satıcı                                                  |
| **Ön Koşullar**         | Yönetici/Satıcı sisteme giriş yapmıştır, ürün sistemde tanımlıdır. |
| **Hedef Şartlar**       | Ürün bilgileri güncellenir ve sistemde kaydedilir.                |
| **Ana Başarı Senaryosu**| 1. Ürün paneli açılır.<br>2. Güncellenecek ürün seçilir.<br>3. Değişiklikler yapılır ve kaydedilir.<br>4. Sistem güncellemeyi kaydeder. |
| **Genişlemeler**        | **1a:** Ürün paneli açılmaz:<br>- Sistem hata mesajı gösterir.<br>- Yönetici/Satıcı sayfayı yeniler veya destek alır.<br><br>**2a:** Ürün bulunamaz:<br>- Sistem hata mesajı verir.<br>- Yönetici/Satıcı tekrar arar.<br><br>**3a:** Geçersiz bilgi girilir:<br>- Sistem hata mesajı gösterir.<br>- Yönetici/Satıcı doğru bilgileri girip tekrar dener.<br><br>**4a:** Güncelleme kaydedilemez (teknik hata):<br>- Sistem hata mesajı gösterir.<br>- Yönetici/Satıcı yeniden dener veya destek alır.<br><br>**4b:** Bağlantı kopar:<br>- Sistem hata verir.<br>- Bağlantı kontrol edilir ve işlem tekrar edilir. |

### Senaryo ID: UC3 (Aygül Anavatan)

| Başlık                  | Açıklama                                                          |
|-------------------------|-------------------------------------------------------------------|
| **Senaryo Adı**         | Kargo Takip Numarası Ekleme                                       |
| **Ana Aktör**           | Satıcı                                                            |
| **Ön Koşullar**         | Sipariş oluşturulmuş, Satıcı giriş yapmıştır                      |
| **Hedef Şartlar**       | Kargo takip numarası başarıyla eklenir                            |
| **Ana Başarı Senaryosu**| 1. Siparişler sayfası açılır.<br>2. Sipariş seçilir.<br>3. Kargo takip numarası girilip kaydedilir.<br>4. Sistem numarayı ekler. |
| **Genişlemeler**        | **1a:** Giriş yapılamaz:<br>- Sistem hata mesajı gösterir.<br>- Satıcı giriş bilgilerini tekrar girer.<br><br>**2a:** Sipariş bulunamaz:<br>- Sistem uyarı gösterir.<br>- Satıcı tekrar arar.<br><br>**3a:** Geçersiz numara girilir:<br>- Sistem hata verir.<br>- Numara tekrar girilir.<br><br>**4a:** Teknik hata oluşur:<br>- Sistem hata verir.<br>- Satıcı yeniden dener veya destek alır. |

### Senaryo ID: UC4 (Aygül Anavatan)

| Başlık                  | Açıklama                                                          |
|-------------------------|-------------------------------------------------------------------|
| **Senaryo Adı**         | Sipariş Durumu Görüntüleme                                        |
| **Ana Aktör**           | Kullanıcı                                                         |
| **Ön Koşullar**         | Kullanıcı giriş yapmış olmalıdır                                 |
| **Hedef Şartlar**       | Kullanıcı sipariş durumunu görüntüler                             |
| **Ana Başarı Senaryosu**| 1. "Siparişlerim" sayfası açılır.<br>2. İlgili sipariş seçilir.<br>3. Sistem sipariş durumunu gösterir. |
| **Genişlemeler**        | **1a:** Sayfa açılmaz (hata oluşur):<br>- Sistem hata mesajı verir.<br>- Kullanıcı sayfayı yeniler.<br><br>**2a:** Sipariş bulunamaz:<br>- Sistem hata mesajı verir.<br>- Kullanıcı tekrar sipariş arar.<br><br>**3a:** Durum yüklenemez:<br>- Sistem hata verir.<br>- Kullanıcı tekrar dener veya destek alır.<br><br>**3b:** Durum güncel değildir:<br>- Sistem bilgi verir, beklemesini önerir.<br><br>**3c:** İnternet bağlantısı kopar:<br>- Sistem hata verir.<br>- Kullanıcı bağlantıyı kontrol edip tekrar dener. |

### Senaryo ID: UC5 (Aygül Anavatan)

| Başlık                  | Açıklama                                                          |
|-------------------------|-------------------------------------------------------------------|
| **Senaryo Adı**         | Satıcı Mesaj Paneli Görüntüleme                                   |
| **Ana Aktör**           | Satıcı                                                            |
| **Ön Koşullar**         | Satıcı sisteme giriş yapmış olmalıdır                             |
| **Hedef Şartlar**       | Satıcı mesaj panelini görüntüler                                  |
| **Ana Başarı Senaryosu**| 1. Satıcı giriş yapar.<br>2. Mesaj panelini açar.<br>3. Mesajlarını görüntüler. |
| **Genişlemeler**        | **1a:** Giriş yapılamaz:<br>- Sistem hata verir.<br>- Satıcı tekrar giriş yapar.<br><br>**2a:** Mesaj paneli açılmaz:<br>- Sistem hata verir, sayfa yenilenir.<br><br>**3a:** Mesaj yoktur:<br>- Sistem uyarı gösterir.<br><br>**3b:** Mesaj yüklenemez:<br>- Sistem hata verir, tekrar dener veya destek alır.<br><br>**3c:** Satıcı cevap verir:<br>- Mesaj seçilir, cevap yazılır ve gönderilir.<br>- Sistem cevabı gönderir ve onay verir. |

### Senaryo ID: UC6 (Aygül Anavatan)

| Başlık                  | Açıklama                                                              |
|-------------------------|-----------------------------------------------------------------------|
| **Senaryo Adı**         | Sipariş Raporlarını Görüntüleme                                    |
| **Ana Aktör**           | Yönetici                                                           |
| **Ön Koşullar**         | Yönetici sisteme giriş yapmış olmalıdır.                           |
| **Hedef Şartlar**       | Yönetici sipariş raporlarını başarıyla görüntüler.                 |
| **Ana Başarı Senaryosu**| 1. Yönetici raporlar panelini açar.<br>2. Sipariş raporlarını seçer.<br>3. Sistem sipariş raporlarını gösterir. |
| **Genişlemeler**        | **1a:** Yönetici raporlar panelini açamaz (yetki veya teknik hata).<br>- Sistem hata mesajı verir.<br>- Yönetici tekrar giriş yapar veya yetki kontrolü yapar.<br><br>**2a:** Raporlar yüklenemez:<br>- Sistem hata mesajı gösterir.<br>- Yönetici sayfayı yenileyerek tekrar dener.<br><br>**2b:** Seçilen rapor mevcut değildir:<br>- Sistem uyarı mesajı gösterir.<br>- Yönetici farklı rapor seçer.<br><br>**3a:** Rapor verileri eksik veya hatalıdır:<br>- Sistem hata mesajı gösterir.<br>- Yönetici raporu yeniden yükler veya destek alır.<br><br>**3b:** Sistem raporları görüntüleyemez (teknik hata):<br>- Sistem hata verir.<br>- Yönetici tekrar dener veya destek alır.
