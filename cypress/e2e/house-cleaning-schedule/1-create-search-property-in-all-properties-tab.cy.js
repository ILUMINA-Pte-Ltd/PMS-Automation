{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";

const search = 'Kale';
const searchByID = 'QAC00027';

describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it('Create Search Property in all properties tab by Property Name', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCS.clickSettingsMenu();

        PageObjects.HouseCS.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
        cy.wait(1000);

        PageObjects.HouseCS.clickSeeDetails();

    })
    it('Create Search Property in all properties tab by Property ID', () => {
        
        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCS.clickSettingsMenu();

        PageObjects.HouseCS.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(searchByID);
        cy.wait(1000);

        PageObjects.HouseCS.clickSeeDetails();
    })

})
