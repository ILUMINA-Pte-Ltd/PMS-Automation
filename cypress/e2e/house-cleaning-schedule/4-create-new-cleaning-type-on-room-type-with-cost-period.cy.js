{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { faker } from '@faker-js/faker'

const recentDate = faker.date.recent();
const formattedDateTime = recentDate.toISOString().slice(0, 19).replace('T', ' ');
const search = 'Kale';
const description = faker.word.words(10);
const cleaningType = `Automate ${formattedDateTime} - With Cost Cleaning Type`;

describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it( 'Create New Cleaning Type on a room type, with cost period', () => {
        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCS.clickSettingsMenu();

        PageObjects.HouseCS.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
        cy.wait(1000);

        PageObjects.HouseCS.clickSeeDetails();

        PageObjects.HouseCS.clickCreateNewCleaningType();

        PageObjects.HouseCS.inputCleaningType(cleaningType);

        PageObjects.HouseCS.clickFrequency();

        PageObjects.HouseCS.inputDays(2);

        PageObjects.RatesPlan.inputRateDescription(description);

        PageObjects.HouseCS.inputBaseCost(20000);

        PageObjects.HouseCS.clickAddPeriode();

        PageObjects.HouseCS.inputCleaningCost(20000);

        PageObjects.HouseCS.clickFinishSetup();
        cy.wait(5000);

    })
    it('Edit Existing Cleaning Type on a room type, with cost period',() => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCS.clickSettingsMenu();

        PageObjects.HouseCS.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
        cy.wait(1000);

        PageObjects.HouseCS.clickSeeDetails();

        PageObjects.HouseCS.clickThreeDotEdit();

        PageObjects.HouseCS.clickEditButton();

        PageObjects.HouseCS.clickFrequency();
        cy.wait(1000)

        PageObjects.HouseCS.clickCheckBox();

        PageObjects.RatesPlan.inputRateDescription(description);

        PageObjects.HouseCS.clearBaseCost();

        PageObjects.HouseCS.inputBaseCost(30000);

        PageObjects.HouseCS.clearCleaningCost();

        PageObjects.HouseCS.inputCleaningCost(15500);

        PageObjects.HouseCS.clickFinishSetup();
        cy.wait(5000);

    })

    it('Save to Inventory', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCS.clickSettingsMenu();

        PageObjects.HouseCS.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
        cy.wait(1000);

        PageObjects.HouseCS.clickSeeDetails();

        PageObjects.HouseCS.clickThreeDotEdit();

        PageObjects.HouseCS.clickSaveToInventory();
    })
    
})