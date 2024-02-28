import 'cypress-file-upload';

// const index = 0;

export default class RatesPackagePage {

    clickCreatePackage = () => 
        cy.get('.RatePackageContainer_detailsCard__61YJS > .Button_button__okmsK').click();
        

    inputPackageName = (KalePackage) => {
        cy.get('.RatePackageContainer_editForm___XNj0 > :nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(KalePackage);                                   
    }
    inputPackageDescription = (description) => 
        cy.get('.RatePackageContainer_editForm___XNj0 > :nth-child(3) > :nth-child(2) > :nth-child(1) > .TextArea_inputContainer__nPway').type(description);

    clickPackageStartDate = () => {
        cy.get('.RatePackageContainer_editForm___XNj0 > :nth-child(4) > :nth-child(1) > .Datepicker_inputAnchor__Rz8G1 > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();    
    }
    clickPackageEndPeriode = () => 
        cy.get('.RatePackageContainer_editForm___XNj0 > :nth-child(4) > :nth-child(2) > .Datepicker_inputAnchor__Rz8G1 > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();
    
    clickServiceUnitDropdown = () => 
        cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickPerNight = () => 
        cy.get(':nth-child(3) > .Dropdown_dropdownItemContainer__sz2xI > .Dropdown_dropdownItemTitle__VXjPY').click();
    

    clickAddService = () => 
        cy.get('.RatePackageContainer_packageServicesTableCOntainer___P_WH > #table > .Table_tableTrailingButtonStyle__iAdkG > .Button_button__okmsK').click();
             
    clickCreatePackageButton = () => 
        cy.get('.RatePackageContainer_buttonContainer__XbQUb > .LightPrimaryButtonVariant_container__UR5gI').click();

    clickSaveasDraftButton = () => cy.get('.LightSecondaryButtonVariant_container__8HLES').click();

//Edit Rate Package

    clickEditRatePackage = () => cy.get('.RatePackageContainer_iconPencil__Tu3UX > path').click();
   
    clickPerBooking = () =>  
        cy.get(':nth-child(1) > .Dropdown_dropdownItemContainer__sz2xI > .Dropdown_dropdownItemTitle__VXjPY').click();

    clickSaveButton =() =>
        cy.get('.RatePackageContainer_buttonContainer__XbQUb > .LightPrimaryButtonVariant_container__UR5gI').click();

//Delete Rate Package

    clickTrashLogo = () =>
        cy.get('.ConfirmationPopup_popupButtonsContainer__x4ikf > .SecondaryButtonVariant_container__toLCn').click();

    clickDeleteButton = () =>
        cy.get('.DestructiveButtonVariant_container__PB_oG').click();

}