/// <reference types="Cypress" />
import { PageObjects } from "../../page";
import { TOAST_MESSAGE } from "../../utils/constants";


describe('Login to PMS Dashboard', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('dev_url'));
    cy.wait(2000); 

});

  it('Should be able to login PMS using valid email address', () => {

    PageObjects.Login.inputEmailLogin(Cypress.env('valid_email'));

    PageObjects.Login.inputPassword(Cypress.env('password'))

    PageObjects.Login.clickLogin();

    cy.wait(5000); 
    
  });

  it('Should not be able to login PMS using invalid email address', () => {

    PageObjects.Login.inputEmailLogin(Cypress.env('invalid_email'));

    PageObjects.Login.inputPassword(Cypress.env('password'));

    PageObjects.Login.clickLogin();

    cy.contains(TOAST_MESSAGE.WRONG_CREDENTIALS)

    cy.wait(3000); 
    
  });

  it('Should be able to forgot password', () => {

    PageObjects.Login.clickForgotPassword();

    PageObjects.Login.inputEmailForgotPassword(Cypress.env('invalid_email'));

    PageObjects.Login.sendRecoveryEmail();

    cy.contains(TOAST_MESSAGE.FORGOT_PASSWORD)

    cy.wait(3000); 
    
  });

});
