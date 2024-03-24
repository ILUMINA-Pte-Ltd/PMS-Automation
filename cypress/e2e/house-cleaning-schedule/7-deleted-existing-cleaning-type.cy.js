{/* <reference types="cypress" /> */}

import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";



describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it( 'Delete Cleaning Type from Inventory', () => {
    
        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCS.clickSettingsMenu();

        PageObjects.HouseCS.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.RatesPlan.inputSearch('kale');
        cy.wait(2000);

        PageObjects.HouseCS.clickSeeDetails();
        
        PageObjects.HouseCS.clickThreedot();
        
        PageObjects.HouseCS.deletecyCleaningType();
        
        PageObjects.HouseCS.confirmationDelete();

        
    })
})