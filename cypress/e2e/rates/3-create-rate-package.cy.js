{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { faker } from '@faker-js/faker';

const search = 'KALE';
const KalePackage = 'Kale Package - Automation';
const description = faker.word.words(25);

describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it('Create Rate Package', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.RatesPlan.clickRatesMenu();

        PageObjects.RatesPlan.clickRatesPlan();
            cy.wait(2000);

        PageObjects.RatesPlan.inputSearch(search);
            cy.wait(3000);

        PageObjects.RatesPlan.clickSeeDetails();

        PageObjects.RatesPlan.clickThreeDotMenuEdit();
            cy.wait(1000);

        PageObjects.RatesPlan.clickContinueEdit();
            cy.wait(4000);
            cy.scrollTo('bottom', { duration: 3000 });

        PageObjects.RatesPackage.clickCreatePackage();
            cy.wait(2000);

        PageObjects.RatesPackage.inputPackageName(KalePackage);

        PageObjects.RatesPackage.inputPackageDescription(description);
            cy.wait(2000);
        PageObjects.RatesPackage.clickPackageStartDate();

        PageObjects.Date.clickMonth();
        
        PageObjects.Date.clickMay('8');
        
        PageObjects.Date.clickdate('10');

        PageObjects.RatesPackage.clickPackageEndPeriode();
        
        PageObjects.Date.clickMonth();
        
        PageObjects.Date.clickMay('9');
        
        PageObjects.Date.clickdate('10');

        PageObjects.RatesPackage.clickServiceUnitDropdown();
        
        PageObjects.RatesPackage.clickPerNight();

        PageObjects.RatesPackage.clickAddService();

        PageObjects.RatesPackage.clickCreatePackageButton();
            cy.wait(3000);
        PageObjects.RatesPackage.clickSaveasDraftButton();
            cy.wait(3000);
    })
    it('Edit Rate Package', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.RatesPlan.clickRatesMenu();

        PageObjects.RatesPlan.clickRatesPlan();
            cy.wait(2000);

        PageObjects.RatesPlan.inputSearch(search);
            cy.wait(3000);

        PageObjects.RatesPlan.clickSeeDetails();

        PageObjects.RatesPlan.clickThreeDotMenuEdit();
            cy.wait(1000);

        PageObjects.RatesPlan.clickContinueEdit();
            cy.wait(4000);
            cy.scrollTo('bottom', { duration: 3000 });
        PageObjects.RatesPackage.clickEditRatePackage();

        PageObjects.RatesPackage.clickServiceUnitDropdown();

        PageObjects.RatesPackage.clickPerBooking();

        PageObjects.RatesPackage.clickAddService();

        PageObjects.RatesPackage.clickSaveButton();

        PageObjects.RatesPackage.clickSaveasDraftButton();

    })

})