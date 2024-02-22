export default class BookingListPage {

    clickBookingMenu = () => {
        cy.contains('Booking').click();
    }

    clickBookingListMenu = () => {
        cy.get('[data-testid="BookingList"]').click();
        cy.wait(2000);
    }

    clickCreateBookingButton = () => {
        cy.get('.NavigationBar_actionsContainer__VT5tD > :nth-child(2) > .Button_contentContainer__fXqQa').click();
        cy.wait(3000);
    }

    inputFirstName = (firstName) => 
        cy.get('.GuestDetailsForm_inputContainer__EeSjb > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(firstName);

    inputLastName = (lastName) =>
        cy.get(':nth-child(1) > :nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(lastName)

    selectIdentityNumber = () => cy.get(':nth-child(1) > .RadioButton_radioButtonInput__5XzDB').click();

    inputIdentityNumber = (indentityNumber) => 
        cy.get(':nth-child(4) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(indentityNumber);

    inputAddress = (address) => 
        cy.get(':nth-child(1) > :nth-child(2) > .TextArea_inputContainer__nPway').type(address);

    inputEmail = (email) => 
        cy.get(':nth-child(4) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(email);

    clickCountryCode = () => cy.get('.PhoneNumberInput_countryCodeInput__Tpljf').click();

    selectCountryCode = (countryCode) => cy.contains(countryCode).click();

    inputPhoneNumber = (phoneNumber) => 
        cy.get('.PhoneNumberInput_phoneNumberAnchor__whIRF > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(phoneNumber);

    inputFlightNumber = (flightNumber) => 
        cy.get(':nth-child(7) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(flightNumber);

    inputTransportation = (transportation) =>
        cy.get('.GuestDetailsForm_mergedInputWrapper__sUau7 > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(transportation);

    clickCheckinDate = () =>
        cy.get(':nth-child(1) > .Datepicker_inputAnchor__Rz8G1 > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickNextMonth = () => cy.get('.Calendar_monthNameNextPrev__Df0uV > :nth-child(3)').click();

    selectCheckinDate = (checkinDate) =>
        cy.get(`.Calendar_dateGrid__th8KB > :nth-child(${checkinDate})`).click();

    clickCheckoutDate = () => 
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    selectCheckoutDate = (checkoutDate) =>
        cy.get(`.Calendar_dateGrid__th8KB > :nth-child(${checkoutDate})`).click();

    clickPropertyDropdown = () =>
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type('Mowies Gili Air');

    selectProperty = () => {
        cy.contains('Mowies Gili Air').click();
        cy.wait(3000);
    }
        
    clickRoomType = () => {
        cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();
        cy.wait(3000);
    }

    selectRoomType = () => cy.contains('Regular Room').click();

    clickRoomName = () => cy.get('.StayDetailsForm_threeColumnsForm__Fj5H1 > :nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    selectRoomName = () => cy.contains('Room 1').click();

    clickSaveAndProceedToPayment = () => cy.contains('Save and proceed to payment').click();

}