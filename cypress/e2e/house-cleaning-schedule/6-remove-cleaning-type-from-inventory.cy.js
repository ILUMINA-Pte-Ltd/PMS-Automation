import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";


describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it ('remove cleaning type from inventory', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCleaningSchedule.clickSettingsMenu();

        PageObjects.HouseCleaningSchedule.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.HouseCleaningSchedule.clickCleaingInventoryTab();
        cy.wait(1000);

        PageObjects.HouseCleaningSchedule.removecleaningType('Automate');
        cy.wait(1000);

        PageObjects.HouseCleaningSchedule.clickRemoveButton();
        
    
    })

})