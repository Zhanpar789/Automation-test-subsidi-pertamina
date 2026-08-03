# Panduan Kontributor

## Ringkasan

Proyek ini adalah automation test end-to-end untuk portal Subsidi Tepat LPG menggunakan Cypress dan Cucumber (Gherkin). Kode test ditulis dalam JavaScript dengan ES modules pada file page object dan step definition.

## Struktur Proyek

- `cypress/e2e/test/feature/`: skenario BDD dalam file `.feature`.
- `cypress/e2e/test/steps/`: implementasi step definitions yang sesuai dengan skenario.
- `cypress/e2e/pages/`: page object untuk selector dan aksi halaman.
- `cypress/support/`: custom command serta konfigurasi dukungan Cypress.
- `cypress.config.js`: base URL, pola spec, dan konfigurasi preprocessor Cucumber.

## Konvensi Perubahan

- Tambahkan skenario baru di `cypress/e2e/test/feature/` dan implementasikan setiap step di `cypress/e2e/test/steps/`.
- Simpan selector dan interaksi UI di page object; step definition hanya mengatur alur skenario serta assertion.
- Gunakan ulang page object yang ada dan beri nama method berdasarkan aksi pengguna, misalnya `clickProsesPenjualanButton`.
- Gunakan teks Gherkin yang jelas dan konsisten dengan step definition yang tersedia.
- Pilih selector stabil seperti `data-testid` bila tersedia; hindari selector berbasis urutan elemen jika ada alternatif yang lebih spesifik.
- Jangan mengubah `baseUrl`, pola spec, atau konfigurasi preprocessor kecuali perubahan memang membutuhkan konfigurasi tersebut.

## Menjalankan Test

Dependensi dikelola dengan pnpm. Pastikan dependensi telah terpasang dengan `pnpm install`.

```sh
pnpm exec cypress open
pnpm exec cypress run
pnpm exec cypress run --spec "cypress/e2e/test/feature/login.feature"
```

## Kredensial

Test memakai `USERNAME` dan `PASSWORD` melalui `Cypress.env()`. Simpan nilainya hanya di `.env` atau `cypress.env.json` lokal, dengan mengacu pada file `.example`. Kedua file rahasia tersebut sudah diabaikan Git dan tidak boleh di-commit.

## Verifikasi

Setelah perubahan, jalankan file feature yang terdampak. Untuk perubahan lintas alur, jalankan seluruh suite dengan `pnpm exec cypress run`.
