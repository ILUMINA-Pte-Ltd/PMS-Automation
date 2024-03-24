import 'cypress-file-upload';

export default class RatesAddOnPage {

    clickButtonCreateAddOnRate = () => cy.get('.RateAddonsContainer_detailsCard__Xq1Wa > .Button_button__okmsK').click();
    
    inputAddOnName = (addonname) => 
        cy.get('.RateAddonsContainer_grid2__DdWab > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(addonname);

    inputRateDescription = (description) => 
    cy.get('.RateAddonsContainer_editForm__EzjKx > :nth-child(3) > :nth-child(2) > :nth-child(1) > .TextArea_inputContainer__nPway > .TextArea_input__JT1OC').type(description);

    clickDropdownAddOnType = () => 
        cy.get('.RateAddonsContainer_editForm__EzjKx > :nth-child(4) > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickChooseIncrement = () =>
        cy.get(':nth-child(1) > .Dropdown_dropdownItemContainer__sz2xI > .Dropdown_dropdownItemTitle__VXjPY').click();

    clickValueType = () =>
        cy.get('.RateAddonsContainer_editForm__EzjKx > :nth-child(4) > :nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickChoosePercentage = () => 
        cy.get(':nth-child(1) > .Dropdown_dropdownItemContainer__sz2xI > .Dropdown_dropdownItemTitle__VXjPY').click();

    inputAddOnAmount = (accomodation) =>
        cy.get('.RateAddonsContainer_editForm__EzjKx > :nth-child(4) > :nth-child(3) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(accomodation);

    clickStartPeriode = () => 
        cy.get(':nth-child(5) > :nth-child(1) > .Datepicker_inputAnchor__Rz8G1 > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickEndPeriod = () => 
        cy.get(':nth-child(5) > :nth-child(2) > .Datepicker_inputAnchor__Rz8G1 > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickAddButton = () => 
        cy.get('.RateAddonsContainer_buttonContainer__JMU_b > .LightPrimaryButtonVariant_container__UR5gI').click();

    clickFinishSetup = () =>
        cy.get('.UpdateRateActions_container__WKdcG > .LightPrimaryButtonVariant_container__UR5gI').click();



     // --------------------------------EDIT--------------------- //
    clickPencilButton = () => 
        cy.get('.RateAddonTable_iconPencil__HYrpj > path').click();

    clickSaveButton = () =>
        cy.get('.RateAddonsContainer_buttonContainer__JMU_b > .LightPrimaryButtonVariant_container__UR5gI').click();

    // --------------------------------DELETE--------------------- //
    clickDeleteButton = () =>
        cy.get('.RateAddonTable_iconTrash__H_BRp > path').click();

    clickDeleteButton = () =>
        cy.get('.RateAddonTable_iconTrash__H_BRp > path').click();

}