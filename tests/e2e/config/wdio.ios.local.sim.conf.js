const { join } = require('path');
const { argv } = require('yargs');
const { config } = require('./wdio.appium.local.shared');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
	{
		// The defaults you need to have in your config
		deviceName: 'iPhone 15',
		platformName: 'iOS',
		platformVersion: '17.0',
		orientation: 'PORTRAIT',
		// Path to .app file built by the SimulatorRelease job in ios.yml
		app: join(process.cwd(), './ios/build/app.app'),
		// Read the reset strategies very well, they differ per platform, see
		// http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
		noReset: true,
		autoAcceptAlerts: true,
		newCommandTimeout: 240,
		maxInstances: 1,
		language: argv.language || 'en',
	},
];

exports.config = config;
