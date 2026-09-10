class MerchantPage {

  clickCatatPenjualanButton() {
    cy.get('.mantine-1xkg0b8').contains('Catat Penjualan').click();
  }
  inputKTPPelanggan(KTP){
    cy.get('[placeholder="Masukkan 16 digit NIK Pelanggan"]').type(KTP)
  }
  clickLanjutkanPenjualanButton() {
    cy.get('[data-testid="btnCheckNik"]').contains('LANJUTKAN PENJUALAN').click();
  }
  clickLanjutkanTransaksiButton() {
    cy.get('button').contains('LANJUTKAN PENJUALAN').click();
  }
  clickCheckPesananButton() {
    cy.get('[data-testid="btnCheckOrder"]').contains('CEK PESANAN').click();
  }
  clickProsesPenjualanButton() {
    cy.get('[data-testid="btnPay"]').contains('PROSES PENJUALAN').click();
  }
  chooseRumahTanggaOption(){
    cy.contains('span', 'Rumah Tangga').click();
  }
  verifySuccessCatatPenjualan(){
    cy.get('div').contains('LUNAS');
  }
  clickUpdateDataPelangganButton() {
    cy.get('button').contains('UPDATE DATA PELANGGAN').click();
  }
  selectTanggalLahir(day) {
    this.selectOptionByTestId('daySelect', day);
  }
  selectBulanLahir(month) {
    this.selectOptionByTestId('monthSelect', month);
  }
  selectTahunLahir(year) {
    this.selectOptionByTestId('yearSelect', year);
  }
  clickSelanjutnyaButton() {
    cy.get('[data-testid="btnSubmitUpdate"]').click();
  }
  clickYaPerbaruiDataPelangganButton() {
    cy.get('button').contains('YA, Perbarui DATA PELANGGAN').click();
  }
  clickLanjutkanKeTransaksiButton() {
    cy.get('button').contains('LANJUTKAN KE TRANSAKSI').click();
  }
  selectOptionByTestId(testId, value) {
    cy.get(`[data-testid="${testId}"]`).click();
    cy.wait(500);
    cy.get('[role="listbox"] [role="option"]').then(($options) => {
      const strValue = String(value);
      const match = $options.filter((i, el) => {
        const text = el.textContent.trim();
        return text === strValue || text === strValue.padStart(2, '0') || text === String(parseInt(strValue, 10));
      }).first();
      if (match.length === 0) {
        throw new Error(`Option "${value}" not found in ${testId}`);
      }
      cy.wrap(match).click();
    });
  }
  
  
}

export default MerchantPage;
