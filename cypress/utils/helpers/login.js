import { PageObjects } from "../../page";

export async function LoginToPMS () {

    cy.visit('https://pms.beta.deltahq.jp/en/login');
    cy.wait(2000); 

    PageObjects.Login.inputEmailLogin(Cypress.env('valid_email'));

    PageObjects.Login.inputPassword(Cypress.env('password'));

    PageObjects.Login.clickLogin();

    cy.wait(5000); 

}