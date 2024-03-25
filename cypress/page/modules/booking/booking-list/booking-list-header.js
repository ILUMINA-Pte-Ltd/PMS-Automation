export default class BookingListHeader {

    clickCreateBooking = () => 
        cy.get('.relative > .Button_button__okmsK > .Button_contentContainer__fXqQa').click();
    

    selectBookingType = (index) => {
        //1 = Guest , 2 = Agent, 3 = Owner
        cy.get(`.HostBookingListContainer_dropdown__fdCVY > :nth-child(${index})`).click();
    }

    clickDownloadReport = () => 
        cy.get('.HostBookingListContainer_actionList__MjN1b > :nth-child(1) > .Button_contentContainer__fXqQa').click();

    clickBookingStatus = () =>
        cy.get('.flex-col > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    selectBookingStatus = (index) =>
        cy.get(`:nth-child(${index}) > .Checkbox_checkboxPopupContainer__rILei > .Checkbox_checkboxGroup__uARE1 > .Checkbox_checkbox__y_p3_`).click();

    clickPropertyName = () =>
        cy.get(':nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    selectPropertyName = (index) =>
        cy.get(`:nth-child(${index}) > .Checkbox_checkboxPopupContainer__rILei > .Checkbox_checkboxGroup__uARE1 > .Checkbox_checkbox__y_p3_`).click();

    selectIncludeType = (index) =>
        cy.get(`:nth-child(${index}) > .RadioButton_radioButtonInput__5XzDB`).click();

    clickFrom = () =>
        cy.get(':nth-child(5) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickTo = () =>
        cy.get(':nth-child(6) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickDownload = () =>
        cy.get('.PrimaryButtonVariant_container__BQBmm > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();

    clickCancel = () =>
        cy.get('.ml-auto > .SecondaryButtonVariant_container__toLCn > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();
}