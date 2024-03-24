import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";


describe('Create rates', () => {
    beforeEach('Login to PMS', () => {

        LoginToPMS();
    })
    it ('remove cleaning type from inventory', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.HouseCS.clickSettingsMenu();

        PageObjects.HouseCS.clickHousetCleaningSchedule();
        cy.wait(3000);

        PageObjects.HouseCS.clickCleaingInventoryTab();
        cy.wait(1000);

        PageObjects.HouseCS.removecleaningType('Automate');
        cy.wait(1000);

        PageObjects.HouseCS.clickRemoveButton();
        
    
    })

})