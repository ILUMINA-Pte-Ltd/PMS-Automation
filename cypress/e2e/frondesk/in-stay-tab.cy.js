/// <reference types="Cypress" />
import { PageObjects } from "../../page";
import { LoginToPMS } from "../../utils/helpers/login";
import { TOAST_MESSAGE } from "../../utils/constants";


describe('Login to PMS Dashboard', () => {

  beforeEach(() => {
    LoginToPMS();

});

it('Should be able to select cleaning date', () => {
  PageObjects.SideBar.clickSideBar();

  PageObjects.FrontDesk.clickFrontdeskMenu();

  PageObjects.FrontDesk.clickInStayTab();

  PageObjects.FrontDesk.clickFilterByDate();

  PageObjects.FrontDesk.selectCustom();

  PageObjects.FrontDesk.selectDate(15);

  PageObjects.FrontDesk.clickApplyDate();

  PageObjects.FrontDesk.verifyCleaningSchedule();

});

it('Should be able to filter by property', () => {

  PageObjects.SideBar.clickSideBar();

  PageObjects.FrontDesk.clickFrontdeskMenu();

  PageObjects.FrontDesk.clickInStayTab();

  PageObjects.FrontDesk.clickFilterByDate();

  PageObjects.FrontDesk.selectCustom();

  PageObjects.FrontDesk.selectDate(15);

  PageObjects.FrontDesk.clickApplyDate();

  PageObjects.FrontDesk.clickFilterByProperties();

  PageObjects.FrontDesk.selectProperty('All properties');

  PageObjects.FrontDesk.verifyCleaningSchedule();
    
});

it('Should be able to filter by cleaning status', () => {

  PageObjects.SideBar.clickSideBar();

  PageObjects.FrontDesk.clickFrontdeskMenu();

  PageObjects.FrontDesk.clickInStayTab();

  PageObjects.FrontDesk.clickFilterByDate();

  PageObjects.FrontDesk.selectCustom();

  PageObjects.FrontDesk.selectDate(15);

  PageObjects.FrontDesk.clickApplyDate();

  PageObjects.FrontDesk.clickCleaningStatusFilter();

  PageObjects.FrontDesk.selectCleaningStatus(2);

  PageObjects.FrontDesk.verifyCleaningSchedule();
    
});

it('Should be able to update arrival status', () => {

  PageObjects.SideBar.clickSideBar();

  PageObjects.FrontDesk.clickFrontdeskMenu();

  PageObjects.FrontDesk.clickInStayTab();

  PageObjects.FrontDesk.clickFilterByDate();

  PageObjects.FrontDesk.selectCustom();

  PageObjects.FrontDesk.selectDate(15);

  PageObjects.FrontDesk.clickApplyDate();

  cy.get('body').then($element => {
    if ($element.find(':nth-child(1) > :nth-child(9) > .BookingListPage_tableData__15CXw > :nth-child(1) > .BorderedInputTextVariant_container__HETFx').length > 0) {
        
      PageObjects.FrontDesk.clickArrivalStatus(1);
  
      PageObjects.FrontDesk.selectArrivalStatus('Waiting Arrival');
  
      PageObjects.FrontDesk.clickConfirmArrivalStatus();
  
      cy.contains(TOAST_MESSAGE.ARRIVAL_STATUS).should('be.visible');

    } else {
        cy.log('There is no cleaning schedule to update.'); 
    }
  });

});

it.only('Should be able to update cleaning status', () => {

  PageObjects.SideBar.clickSideBar();

  PageObjects.FrontDesk.clickFrontdeskMenu();

  PageObjects.FrontDesk.clickInStayTab();
  
  PageObjects.FrontDesk.clickFilterByDate();

  PageObjects.FrontDesk.selectCustom();

  PageObjects.FrontDesk.selectDate(15);

  PageObjects.FrontDesk.clickApplyDate();

  cy.get('body').then($element => {
    if ($element.find(':nth-child(10) > .BookingListPage_tableData__15CXw > :nth-child(1) > .BorderedInputTextVariant_container__HETFx').length > 0) {
        
      PageObjects.FrontDesk.clickCleaningStatus();
      
      PageObjects.FrontDesk.changeCleaningStatus(2);
  
      PageObjects.FrontDesk.setCleaningStatus();
  
      PageObjects.FrontDesk.clickConfirmCleaningStatus();
  
      cy.contains(TOAST_MESSAGE.CLEANING_STATUS).should('be.visible');

    } else {
        cy.log('There is no cleaning schedule to update.'); 
    }
  });

});

});