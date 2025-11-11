import { expect } from 'chai'
import demosmobile from '../pages/homepage.js'

beforeEach(async () => {
    await driver.activateApp('io.appium.android.apis');
    console.log('✅ Memulai test case');
});

afterEach(async () => {
    console.log('✅ Selesai menjalankan test case');
    await driver.terminateApp('io.appium.android.apis');
});



describe('Mobile Demo APIS', () => {

    it('Buka Aplikasi', async () => {
        console.log('✅ Aplikasi terbuka');
        expect(true).to.equal(true);
    });

    it('Test Text Entry Dialog', async () => {
        await demosmobile.textEntryDialog('rehan', '123');
    });

    it('Test ok cancel dialog', async () => {
        // await demosmobile.okcancel(0);  // klik Cancel
        await demosmobile.okcancel(1);  // klik OK
    });

    it('List Dialog', async () => {
        // await demosmobile.listdialog(0);  // Command one
        // await demosmobile.listdialog(1);  // Command two
        // await demosmobile.listdialog(2);  // Command three
        await demosmobile.listdialog(3);  // Command four
    });

    it('Progress Dialog', async () => {
        await demosmobile.progressdialog();
    });


});
