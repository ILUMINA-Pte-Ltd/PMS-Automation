{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";

const search = 'Kale';
const TestRate = 'Test Rate';

describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it('Create Add From Inventory', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.RatesPlan.clickRatesMenu();

        PageObjects.RatesPlan.clickRatesPlan();
            cy.wait(2000);

        PageObjects.RatesPlan.inputSearch(search);
            cy.wait(3000);

        PageObjects.RatesPlan.clickSeeDetails();

        PageObjects.RatesPlan.clickAddFromInventory();

        PageObjects.RatesPlan.clickFirstRadioButton(TestRate);
            cy.wait(3000);

        PageObjects.RatesPlan.clickAddButton();
            cy.wait(2000);

    })

})