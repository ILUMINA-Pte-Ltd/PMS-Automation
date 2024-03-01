{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";

const search = 'Kale';

describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it('Create Save Rate to Inventory', () => {
        PageObjects.SideBar.clickSideBar();

        PageObjects.RatesPlan.clickRatesMenu();

        PageObjects.RatesPlan.clickRatesPlan();
            cy.wait(2000);

        PageObjects.RatesPlan.inputSearch(search);
            cy.wait(3000);

        PageObjects.RatesPlan.clickSeeDetails();

        PageObjects.RatesPlan.clickThreeDotMenuEdit();
            cy.wait(1000);

        PageObjects.RatesPlan.clickSaveRatetoInventory();
            cy.wait(3000);
        
    })
})