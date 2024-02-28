{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { faker } from '@faker-js/faker';

const search = 'KALE';
const fifty = 50;
const seventyfive = 75;
const twentyfive = 25;

describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it('Create New Policy', () => {
        PageObjects.SideBar.clickSideBar();

        PageObjects.RatesPlan.clickRatesMenu();

        PageObjects.RatesPlan.clickRatesPlan();
            cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
            cy.wait(1000);

        PageObjects.RatesPlan.clickSeeDetails();

        PageObjects.RatesPlan.clickThreeDotMenu();
            cy.wait(1000);

        PageObjects.RatesPlan.clickContinueEdit();
            cy.wait(4000);
            cy.scrollTo('bottom', { duration: 3000 });

        PageObjects.RatesPlan.clickContinuetoPolicies();
            cy.wait(3000);

        PageObjects.RatesPlan.clickEditPolicyButton();

        PageObjects.RatesPlan.inputPercentageOnTheBookingDate1(fifty);

        PageObjects.RatesPlan.inputPercentageOnTheBookingDate2(fifty);
        
        PageObjects.RatesPlan.inputdaysBeforeCheckIn(1);

        PageObjects.RatesPlan.inputreservationleastdays(1);
        
        PageObjects.RatesPlan.inputreservationleasthour(1);

        PageObjects.RatesPlan.clickSavePolicyButton();

        PageObjects.RatesPlan.clickSaveasDraftButton();
        
        // PageObjects.RatesPlan.clickFinishSetupButton();
        // cy.wait(3000);
        
    })
    it('Edit new policy', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.RatesPlan.clickRatesMenu();

        PageObjects.RatesPlan.clickRatesPlan();
            cy.wait(2000);

        PageObjects.RatesPlan.inputSearch(search);
            cy.wait(3000);

        PageObjects.RatesPlan.clickSeeDetails();

        PageObjects.RatesPlan.clickThreeDotMenu();
            cy.wait(1000);

        PageObjects.RatesPlan.clickContinueEdit();
            cy.wait(4000);
            cy.scrollTo('bottom', { duration: 3000 });

        PageObjects.RatesPlan.clickContinuetoPolicies();
            cy.wait(3000);

        PageObjects.RatesPlan.clickEditPolicyButton();

        PageObjects.RatesPlan.inputPercentageOnTheBookingDate1Edit(seventyfive);
        
        PageObjects.RatesPlan.inputPercentageOnTheBookingDate2Edit(twentyfive);
        
        PageObjects.RatesPlan.inputdaysBeforeCheckIn(1);

        PageObjects.RatesPlan.inputreservationleastdays(1);
        
        PageObjects.RatesPlan.inputreservationleasthour(1);

        PageObjects.RatesPlan.clickSavePolicyButton();

        PageObjects.RatesPlan.clickSaveasDraftButton();

    })    
})