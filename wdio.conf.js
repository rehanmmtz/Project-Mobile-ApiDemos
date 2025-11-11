import fs from 'fs-extra';


export const config = {
    runner: 'local',
    specs: ['./test/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554', // silahkan diisi dengan device masing-masing
        'appium:platformVersion': '9', // silahkan diisi dengan platform version masing-masing
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'io.appium.android.apis',
        'appium:appActivity': '.ApiDemos',
        'appium:noReset': false
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    hostname: 'localhost',
    port: 4723,
    path: '/',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    onPrepare: function () {
        const historyPath = './allure-report/history';
        const resultsPath = './allure-results/history';

        if (fs.existsSync(historyPath)) {
            fs.copySync(historyPath, resultsPath);
            console.log('✅ History Allure berhasil disalin untuk trend chart');
        } else {
            console.log('ℹ️ Tidak ada history sebelumnya, report baru akan dimulai');
        }
    },

    afterTest: async function (_, __, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot();
            console.log('Screenshot test gagal');
        }
    }
};
