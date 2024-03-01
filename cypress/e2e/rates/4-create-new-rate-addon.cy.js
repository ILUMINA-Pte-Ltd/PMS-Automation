{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { faker } from '@faker-js/faker';

const addonname = 'Add On 2';
const search = 'Kale';
const description = faker.word.words(25);
const accomodation = 100;

describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it('Create Rate Add On', () => {
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

        PageObjects.RatesAddOn.clickButtonCreateAddOnRate();

        PageObjects.RatesAddOn.inputAddOnName(addonname);

        PageObjects.RatesAddOn.inputRateDescription(description);

        PageObjects.RatesAddOn.clickDropdownAddOnType();

        PageObjects.RatesAddOn.clickChooseIncrement();

        PageObjects.RatesAddOn.clickValueType();

        PageObjects.RatesAddOn.clickChoosePercentage();

        PageObjects.RatesAddOn.inputAddOnAmount(accomodation);

        PageObjects.RatesAddOn.clickStartPeriode();

        PageObjects.Date.clickMonth();

        PageObjects.Date.clickMay('8');

        PageObjects.Date.clickdate('10');

        PageObjects.RatesAddOn.clickEndPeriod();
       
        PageObjects.Date.clickMonth();

        PageObjects.Date.clickMay('9');

        PageObjects.Date.clickdate('10');

        PageObjects.RatesAddOn.clickAddButton();
            cy.wait(3000);
        PageObjects.RatesPlan.clickSaveasDraftButton();
            cy.wait(3000);

    })

    it('Edit  Rate Add On', () => {

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

        PageObjects.RatesAddOn.clickPencilButton();
        
        PageObjects.RatesAddOn.inputRateDescription(description);

        PageObjects.RatesAddOn.clickSaveButton();

        PageObjects.RatesAddOn.clickFinishSetup();



    })
})