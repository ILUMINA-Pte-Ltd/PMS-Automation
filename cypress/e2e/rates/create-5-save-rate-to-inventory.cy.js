{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { faker } from '@faker-js/faker';

const addonname = 'Add On 2';
const search = 'Kale';
const description = faker.word.words(25);
const hundred = 100;

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

        PageObjects.RatesPlan.clickThreeDotMenu();
            cy.wait(1000);

        PageObjects.RatesPlan.clickSaveRatetoInventory();
            cy.wait(3000);
        
    })
})