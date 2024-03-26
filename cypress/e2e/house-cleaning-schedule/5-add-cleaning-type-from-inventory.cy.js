import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";


describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
it ('add  cleaning type from inventory', () => {

    PageObjects.SideBar.clickSideBar();

    PageObjects.HouseCleaningSchedule.clickSettingsMenu();

    PageObjects.HouseCleaningSchedule.clickHousetCleaningSchedule();
    cy.wait(3000);

    PageObjects.RatesPlan.inputSearch('kale');
    cy.wait(1000);

    PageObjects.HouseCleaningSchedule.clickSeeDetails();

    PageObjects.HouseCleaningSchedule.clickAddfromInventory();
    
    PageObjects.HouseCleaningSchedule.inputSearch('automate');
    cy.wait(3000);
    
    PageObjects.HouseCleaningSchedule.clickCheckbox();
    
    PageObjects.HouseCleaningSchedule.clickAdd();
    cy.wait(5000);

    }) 
})