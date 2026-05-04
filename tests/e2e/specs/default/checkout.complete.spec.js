import { openDeepLinkUrl, restartApp } from '../../helpers/utils';
import LoginScreen from '../../pageObjects/login';
import InventoryListScreen from '../../pageObjects/inventoryList';
import CheckoutComplete from '../../pageObjects/checkoutComplete';

describe('Checkout Complete', () => {
	beforeEach(() => {
		// Restart the app before each session, only not for the first session
		restartApp();
		LoginScreen.waitForIsShown();
		openDeepLinkUrl('complete');
		CheckoutComplete.waitForIsShown();
	});

	it('should be able to finish the checkout by going back to the inventory list', () => {
		CheckoutComplete.continueShopping();
		InventoryListScreen.waitForIsShown();

		expect(CheckoutComplete.isShown()).toEqual(false, 'The Checkout: Overview screen is still visible.');
	});
});
