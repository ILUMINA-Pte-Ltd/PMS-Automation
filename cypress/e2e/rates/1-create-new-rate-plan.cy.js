{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { faker } from '@faker-js/faker';

const recentDate = faker.date.recent();
const formattedDateTime = recentDate.toISOString().slice(0, 19).replace('T', ' ');
const description = faker.word.words(25);
const search = 'KALE';
const rateName = `Test Rate ${formattedDateTime} - Automation`;
const MontoFri = 120000;
const SattoSun = 150000;
const fee = 20000;
const percentage = 100;



describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })

    it('Create New Rate Plan', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.RatesPlan.clickRatesMenu();

        PageObjects.RatesPlan.clickRatesPlan();
            cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
            cy.wait(1000);

        PageObjects.RatesPlan.clickSeeDetails();
        
        PageObjects.RatesPlan.clickCreateNewPlan();

        PageObjects.RatesPlan.inputRateName(rateName);

        PageObjects.RatesPlan.inputRateDescription(description);

        PageObjects.RatesPlan.clickStartPeriode();

        PageObjects.Date.clickMonth();

        PageObjects.Date.clickMay('8');

        PageObjects.Date.clickdate('10');

        PageObjects.RatesPlan.clickEndPeriod();

        PageObjects.Date.clickMonth();

        PageObjects.Date.clickMay('9');

        PageObjects.Date.clickdate('10');

        PageObjects.RatesPlan.clickPaymentPlan();

        PageObjects.RatesPlan.clickPayatProperty();

        PageObjects.RatesPlan.clickDirectPayment();

        PageObjects.RatesPlan.inputBaseRateMontoFri(MontoFri);

        PageObjects.RatesPlan.inputBaseRateSattoSun(SattoSun);

        PageObjects.RatesPlan.inputAccomodationRates(percentage);

        PageObjects.RatesPlan.inputCommisionableRatesMontoFri(MontoFri);

        PageObjects.RatesPlan.inputCommisionableRatesSattoSun(SattoSun);

        PageObjects.RatesPlan.inputCommisionableRateAcc(percentage);

        PageObjects.RatesPlan.inputAdditionalGuestFee(fee);

        PageObjects.RatesPlan.clickAppliedtoOwnerReport();

        PageObjects.RatesPlan.clickAccommodationCheckBox();

        PageObjects.RatesPlan.clickContinuetoPolicies();
            cy.wait(3000);
        
        PageObjects.RatesPlan.clickSaveasDraftButton();
            cy.wait(3000);  
    })
    it('Edit rate plan', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.RatesPlan.clickRatesMenu();

        PageObjects.RatesPlan.clickRatesPlan();
            cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
            cy.wait(1000);

        PageObjects.RatesPlan.clickSeeDetails();

        PageObjects.RatesPlan.clickThreeDotMenuEdit();
            cy.wait(1000);

        PageObjects.RatesPlan.clickContinueEdit();
            cy.wait(3000);

        PageObjects.RatesPlan.clearRateDescription();
            cy.wait(1000);
        
        PageObjects.RatesPlan.inputRateDescription(description);
       
        PageObjects.RatesPlan.clickSaveasDraftButton();
            cy.wait(3000);

    })

})