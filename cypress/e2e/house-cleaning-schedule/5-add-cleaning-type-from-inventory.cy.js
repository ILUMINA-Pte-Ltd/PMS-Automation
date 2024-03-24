import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";


describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
it ('add  cleaning type from inventory', () => {

    PageObjects.SideBar.clickSideBar();

    PageObjects.HouseCS.clickSettingsMenu();

    PageObjects.HouseCS.clickHousetCleaningSchedule();
    cy.wait(3000);

    PageObjects.RatesPlan.inputSearch('kale');
    cy.wait(1000);

    PageObjects.HouseCS.clickSeeDetails();

    PageObjects.HouseCS.clickAddfromInventory();
    
    PageObjects.HouseCS.inputSearch('automate');
    cy.wait(3000);
    
    PageObjects.HouseCS.clickCheckbox();
    
    PageObjects.HouseCS.clickAdd();
    cy.wait(5000);

    }) 
})