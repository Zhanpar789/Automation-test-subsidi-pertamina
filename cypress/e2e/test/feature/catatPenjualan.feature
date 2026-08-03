Feature: Catat Penjualan Feature


Background: 
    Given User at Merchant App

  Scenario Outline: User Melakukan Catat Penjualan "<Pelanggan>"
   When User click Catat Penjualan button
   * User input KTP Pelanggan to "<Pelanggan>"
   * User click Lanjutkan Penjualan button
   * User click Check Pesanan button
   * User click Proses Penjualan button
   Then User Berhasil Mencatat Penjualan

Examples:
  | Pelanggan        |

