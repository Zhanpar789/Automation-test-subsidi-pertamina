import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage"; 
import MerchantPage from "../../pages/MerchantPage";

const loginPage = new LoginPage();
const merchantPage = new MerchantPage();

Given("User at Merchant App", () => {
  loginPage.loginViaSession();
  cy.wait(1000);
  cy.visit('/merchant/app'); 
  cy.wait(1000);
});

When("User click Catat Penjualan button", () => {
    cy.wait(500);
    merchantPage.clickCatatPenjualanButton();
    cy.wait(800);
});

When("User input KTP Pelanggan to {string}", (Pelanggan) => {
    cy.wait(500);
    merchantPage.inputKTPPelanggan(Pelanggan);
});

When("User click Lanjutkan Penjualan button", () => {
    merchantPage.clickLanjutkanPenjualanButton();
    cy.wait(2000); 
    cy.get('body').then(($body) => {
        if ($body.find('span:contains("Rumah Tangga")').length > 0) {
            cy.log('Opsi Kategori Muncul! Memilih Rumah Tangga...');
            merchantPage.chooseRumahTanggaOption();
            cy.wait(1000);
            merchantPage.clickLanjutkanTransaksiButton();

        } else {
            cy.log('Opsi Kategori Tidak Muncul. Lanjut flow normal...');
            
        }
    });
});

When("User click Lanjutkan Transaksi button", () => {
    merchantPage.clickLanjutkanTransaksiButton();
});

When("User complete data pelanggan with date {string} {string} {string} if needed", (tanggalLahir, bulanLahir, tahunLahir) => {
    cy.wait(1000);
    cy.get('body').then(($body) => {
        if ($body.find('h5:contains("Data Pelanggan belum lengkap")').length > 0) {
            cy.log('Data Pelanggan belum lengkap. Klik UPDATE DATA PELANGGAN...');
            merchantPage.clickUpdateDataPelangganButton();
            cy.wait(1500);
            merchantPage.selectTanggalLahir(tanggalLahir);
            merchantPage.selectBulanLahir(bulanLahir);
            merchantPage.selectTahunLahir(tahunLahir);
            merchantPage.clickSelanjutnyaButton();
            cy.wait(1000);

            cy.get('body').then(($body2) => {
                if ($body2.find('div:contains("Pastikan semua data sudah benar")').length > 0) {
                    cy.log('Modal konfirmasi muncul. Klik YA, Perbarui DATA PELANGGAN...');
                    merchantPage.clickYaPerbaruiDataPelangganButton();
                    cy.wait(1000);
                }

                cy.get('body').then(($body3) => {
                    if ($body3.find('h6:contains("Data Pelanggan berhasil diperbarui")').length > 0) {
                        cy.log('Modal success muncul. Klik LANJUTKAN KE TRANSAKSI...');
                        merchantPage.clickLanjutkanKeTransaksiButton();
                        cy.wait(1000);
                    }
                });
            });
        } else {
            cy.log('Data Pelanggan sudah lengkap. Lanjut flow normal...');
        }
    });
});

When("User click Check Pesanan button", () => {
    cy.wait(500);
    merchantPage.clickCheckPesananButton();
    cy.wait(500);
});

When("User click Proses Penjualan button", () => {
    cy.wait(500);
    merchantPage.clickProsesPenjualanButton();
    cy.wait(500)
    cy.pause();
});

Then("User Berhasil Mencatat Penjualan", () => {
    merchantPage.verifySuccessCatatPenjualan();
});