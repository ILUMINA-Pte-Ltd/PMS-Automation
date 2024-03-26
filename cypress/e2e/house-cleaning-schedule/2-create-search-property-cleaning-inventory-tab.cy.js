{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";

const search = 'ARON Check In and Check Out Cleaning';

describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it('Create Search Property in cleaning inventory tab by Property Name', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCleaningSchedule.clickSettingsMenu();

        PageObjects.HouseCleaningSchedule.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.HouseCleaningSchedule.clickCleaingInventoryTab();
        cy.wait(1000);

        PageObjects.RatesPlan.inputSearch(search);
        cy.wait(1000);
    })

})