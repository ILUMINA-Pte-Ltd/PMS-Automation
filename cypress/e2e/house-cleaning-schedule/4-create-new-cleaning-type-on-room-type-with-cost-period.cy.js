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

        PageObjects.HouseCleaningSchedule.clickSettingsMenu();

        PageObjects.HouseCleaningSchedule.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
        cy.wait(1000);

        PageObjects.HouseCleaningSchedule.clickSeeDetails();

        PageObjects.HouseCleaningSchedule.clickCreateNewCleaningType();

        PageObjects.HouseCleaningSchedule.inputCleaningType(cleaningType);

        PageObjects.HouseCleaningSchedule.clickFrequency();

        PageObjects.HouseCleaningSchedule.inputDays(2);

        PageObjects.RatesPlan.inputRateDescription(description);

        PageObjects.HouseCleaningSchedule.inputBaseCost(20000);

        PageObjects.HouseCleaningSchedule.clickAddPeriode();

        PageObjects.HouseCleaningSchedule.inputCleaningCost(20000);

        PageObjects.HouseCleaningSchedule.clickFinishSetup();
        cy.wait(5000);

    })
    it('Edit Existing Cleaning Type on a room type, with cost period',() => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCleaningSchedule.clickSettingsMenu();

        PageObjects.HouseCleaningSchedule.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
        cy.wait(1000);

        PageObjects.HouseCleaningSchedule.clickSeeDetails();

        PageObjects.HouseCleaningSchedule.clickThreeDotEdit();

        PageObjects.HouseCleaningSchedule.clickEditButton();

        PageObjects.HouseCleaningSchedule.clickFrequency();
        cy.wait(1000)

        PageObjects.HouseCleaningSchedule.clickCheckBox();

        PageObjects.RatesPlan.inputRateDescription(description);

        PageObjects.HouseCleaningSchedule.clearBaseCost();

        PageObjects.HouseCleaningSchedule.inputBaseCost(30000);

        PageObjects.HouseCleaningSchedule.clearCleaningCost();

        PageObjects.HouseCleaningSchedule.inputCleaningCost(15500);

        PageObjects.HouseCleaningSchedule.clickFinishSetup();
        cy.wait(5000);

    })

    it('Save to Inventory', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCleaningSchedule.clickSettingsMenu();

        PageObjects.HouseCleaningSchedule.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch(search);
        cy.wait(1000);

        PageObjects.HouseCleaningSchedule.clickSeeDetails();

        PageObjects.HouseCleaningSchedule.clickThreeDotEdit();

        PageObjects.HouseCleaningSchedule.clickSaveToInventory();
    })
    
})