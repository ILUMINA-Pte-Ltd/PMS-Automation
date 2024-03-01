{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";

const search = 'KALE';



describe('Delete rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })

it('Delete rate plan', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.RatesPlan.clickRatesMenu();

        PageObjects.RatesPlan.clickRatesPlan();
            cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
            cy.wait(1000);

        PageObjects.RatesPlan.clickSeeDetails();
        
        PageObjects.RatesPlan.clickThreeDotMenudelete();
            cy.wait(1000);

        PageObjects.RatesPlan.clickDeleteButton();

        PageObjects.RatesPlan.yesDelete();
            cy.wait(3000);

    })
})