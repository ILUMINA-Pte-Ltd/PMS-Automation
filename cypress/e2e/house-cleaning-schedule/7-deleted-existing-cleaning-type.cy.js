{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";



describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it( 'Delete Cleaning Type from Inventory', () => {
    
        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCleaningSchedule.clickSettingsMenu();

        PageObjects.HouseCleaningSchedule.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch('kale');
        cy.wait(2000);

        PageObjects.HouseCleaningSchedule.clickSeeDetails();
        
        PageObjects.HouseCleaningSchedule.clickThreedot();
        
        PageObjects.HouseCleaningSchedule.deletecyCleaningType();
        
        PageObjects.HouseCleaningSchedule.confirmationDelete();

        
    })
})