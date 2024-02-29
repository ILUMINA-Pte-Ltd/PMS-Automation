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
const percentagefifthy = 50;
const one = 1;



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