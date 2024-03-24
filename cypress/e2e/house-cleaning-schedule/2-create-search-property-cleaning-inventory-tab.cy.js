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

        PageObjects.HouseCS.clickSettingsMenu();

        PageObjects.HouseCS.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.HouseCS.clickCleaingInventoryTab();
        cy.wait(1000);

        PageObjects.RatesPlan.inputSearch(search);
        cy.wait(1000);
    })

})