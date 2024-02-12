export default class LoginPage {

    inputEmailLogin = (email) => cy.get(':nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(email);

    inputPassword = (password) => cy.get(':nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(password);

    clickLogin = () => cy.get('.Button_buttonText__vngL0').click();

    clickForgotPassword = () => cy.get('.LoginForm_forgotPasswordLink__SsAhL').click();

    inputEmailForgotPassword = (emailAddress) => {

        cy.get('.ForgotPasswordForm_inputContainer__ebmHw > :nth-child(1) .TextInput_input__kmkwE').should('be.visible');
        cy.get('.ForgotPasswordForm_inputContainer__ebmHw > :nth-child(1) .TextInput_input__kmkwE').type(emailAddress);

    } 

    sendRecoveryEmail = () => cy.get('.Button_button__okmsK').click(); 

}