export default class CreateBookingPopup {

    verifyCreateBookingPopup = () => {
        cy.get('.CreateBookingPopup_title__NLINW').should('be.visible');
    }

    clickStayDateField = () => {
        cy.get('.Datepicker_inputAnchor__Rz8G1 > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();
        cy.wait(2000);
    }

    clickPropertyField = () => {
        cy.get('.CreateBookingPopup_formGrid__hCrrb > :nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();
        cy.wait(2000);
    }

    selectPropertyName = (propertyName) => {
        cy.contains(propertyName).click();
        cy.wait(2000);
    }

    clickRoomTypeField = () => {
        cy.get(':nth-child(3) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();
        cy.wait(2000);
    }

    selectRoomType = (roomTypeName) => {
        cy.contains(roomTypeName).click();
        cy.wait(2000);
    }

    clickRoomNameField = () => {
        cy.get(':nth-child(4) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();
        cy.wait(2000);
    }

    selectRoomName = (roomName) => {
        cy.contains(roomName).click();
        cy.wait(2000);
    }

    inputFirstName = (firstName) => 
        cy.get(':nth-child(5) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(firstName);

    inputLastName = (lastName) =>
        cy.get(':nth-child(6) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(lastName)

    inputEmail = (email) => 
        cy.get(':nth-child(7) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(email);

    clickCountryCode = () => cy.get('.PhoneNumberInput_countryCodeInput__Tpljf').click();

    selectCountryCode = (countryCode) => cy.contains(countryCode).click();

    inputPhoneNumber = (phoneNumber) => 
        cy.get('.PhoneNumberInput_phoneNumberAnchor__whIRF > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(phoneNumber);

    addAdult = () => 
        cy.get(':nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_inputTrailingView__c_q1V > .StepInput_buttonStep__bEbd3').click();

    deductAdult = () =>
        cy.get(':nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_inputLeadingView__djY2S > .StepInput_buttonStep__bEbd3').click();

    addChildren = () =>
        cy.get(':nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_inputTrailingView__c_q1V > .StepInput_buttonStep__bEbd3').click();

    deductChildren = () =>
        cy.get(':nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_inputLeadingView__djY2S > .StepInput_buttonStep__bEbd3').click();

    addInfants = () =>
        cy.get(':nth-child(3) > .TextInput_inputContainer__UlFly > .TextInput_inputTrailingView__c_q1V > .StepInput_buttonStep__bEbd3').click();

    deductInfants = () =>
        cy.get(':nth-child(3) > .TextInput_inputContainer__UlFly > .TextInput_inputLeadingView__djY2S > .StepInput_buttonStep__bEbd3').click();

    selectBaseRate = () =>
        cy.get('.AppliedRateForm_selectedPackageItem__Ivd9F').click();

    selectRatePackage = (index) => //index 2,3,4 represent rate shown in the list
        cy.get(`.CreateBookingPopup_rateGrid__rG2We > :nth-child(${index})`);

    clickNextButton = () =>
        cy.get('.CreateBookingPopup_rateGrid__rG2We > :nth-child(2)').click();

    clickCancelButton = () =>
        cy.get('.CreateBookingPopup_mainContainer__xSB1T > .flex > .SecondaryButtonVariant_container__toLCn').click();

    clickConfirmButton = () => 
        cy.get('.CreateBookingPopup_mainContainer__xSB1T > .flex > .SecondaryButtonVariant_container__toLCn').click();

    clickBackButton = () =>
        cy.get('.flex-row > .SecondaryButtonVariant_container__toLCn').click();

}