# Şifre Üretici (Password Generator)

Bu proje, Angular kullanılarak oluşturulmuş basit bir şifre üretici uygulamasıdır. Kullanıcıların belirledikleri uzunlukta, büyük/küçük harf, sayı ve özel karakterler içeren güvenli şifreler oluşturmalarını sağlar.

## Özellikler

-   Kullanıcı tarafından belirlenen uzunlukta şifre oluşturma.
-   Büyük harf, küçük harf, rakam ve güvenli sembollerin bir karışımını içerir.
-   Oluşturulan şifreyi panoya kopyalama.

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

1.  Depoyu klonlayın:
    ```bash
    git clone https://github.com/mertdns/sifre-uretici.git
    ```
2.  Proje dizinine gidin:
    ```bash
    cd sifre-uretici
    ```
3.  Gerekli NPM paketlerini kurun:
    ```bash
    npm install
    ```

## Geliştirme Sunucusu

Geliştirme sunucusunu başlatmak için `ng serve` komutunu çalıştırın. `http://localhost:4200/` adresine gidin. Uygulama, kaynak dosyalarda yaptığınız değişikliklerde otomatik olarak yeniden yüklenecektir.

```bash
npm start
```

## Build (Derleme)

Projeyi derlemek için `ng build` komutunu kullanın. Derlenmiş dosyalar `dist/` dizininde saklanacaktır.
