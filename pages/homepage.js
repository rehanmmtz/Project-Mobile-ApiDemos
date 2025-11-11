class demosmobile {

    get klikApp() { return $('~App'); }
    get alertDialog() { return $('~Alert Dialogs'); }
    get toEntryDialog() { return $('~Text Entry dialog'); }
    get inputUsernameField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]'); }
    get inputPasswordField() { return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]'); }
    get okButton() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }
    get canceldialog() { return $('//android.widget.Button[@content-desc="OK Cancel dialog with a message"]') }
    get okButton() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }
    get cancelButton() { return $('//android.widget.Button[@resource-id="android:id/button2"]'); }
    get listDialog() { return $('~List dialog'); }
    get progressDialog() { return $('~Progress dialog'); }

    async textEntryDialog(inputUsernameField, inputPasswordField) {
        await this.klikApp.click();
        await this.alertDialog.click();
        await this.toEntryDialog.click();
        await this.inputUsernameField.setValue(inputUsernameField);
        await this.inputPasswordField.setValue(inputPasswordField);
        await browser.waitUntil(() => browser.takeScreenshot(), { timeout: 5000 });
        await this.okButton.click();
    };

    async okcancel(index) {
        await this.klikApp.click();
        await this.alertDialog.click();
        await this.canceldialog.click();

        if (index === 1) {
            await this.okButton.click();
        } else if (index === 0) {
            await this.cancelButton.click();
        }
    };

    async listdialog(index) {
        await this.klikApp.click();
        await this.alertDialog.click();
        await this.listDialog.click();
        if (index === 0) {
            const listItem1 = await $(`//android.widget.TextView[@text="Command one"]`);
            await listItem1.click();
        } else if (index === 1) {
            const listItem2 = await $(`//android.widget.TextView[@text="Command two"]`);
            await listItem2.click();
        } else if (index === 2) {
            const listItem3 = await $(`//android.widget.TextView[@text="Command three"]`);
            await listItem3.click();
        } else if (index === 3) {
            const listItem4 = await $(`//android.widget.TextView[@text="Command four"]`);
            await listItem4.click();
        } else {
            console.log('Index tidak valid');
        }
    };

    async progressdialog() {
        await this.klikApp.click();
        await this.alertDialog.click();
        await this.progressDialog.click();
        await browser.pause(2000);  // tunggu progress dialog muncul
        await browser.takeScreenshot();
    };


};

export default new demosmobile;