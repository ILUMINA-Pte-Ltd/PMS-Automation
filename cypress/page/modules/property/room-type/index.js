import 'cypress-file-upload';

export default class RoomTypePage {

    clickSeeDetailsButton = () => cy.contains('See Details').click();

    clickContinueToEdit = () => {
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(6) > .text-center > .Button_button__okmsK').click()
    }

    clickRoomTypeTab = () => cy.get('.Tabs_tabsItemDefault__ttV1y').click();


    clickAddRoomTypeButton = () => 
        cy.get('.RoomTypeListPage_emptyStateButtonContainer__kjdZV > .Button_button__okmsK > .Button_contentContainer__fXqQa').click();

    inputRoomTypeName = (roomtypeName) => 
        cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(roomtypeName);

    inputRoomDescription = (roomDescription) => 
        cy.get('.TextArea_inputContainer__nPway').type(roomDescription);

    inputStandardGuest = (standardGuest) => 
        cy.get('.RoomTypeDetails_gridContainer3__jI2XZ > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(standardGuest);

    inputMaxGuest = (maxGuest) => 
        cy.get('.RoomTypeDetails_gridContainer3__jI2XZ > :nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(maxGuest);

    inputTotalIndoor = (totalIndoor) =>
        cy.get(':nth-child(3) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(totalIndoor);

    addBedroom = () => 
        cy.get(':nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_inputTrailingView__c_q1V > .StepInput_buttonStep__bEbd3').click();

    deleteBedroom = () =>
        cy.get(':nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_inputLeadingView__djY2S > .StepInput_buttonStep__bEbd3').click();

    addBathroom = () =>
        cy.get(':nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_inputTrailingView__c_q1V > .StepInput_buttonStep__bEbd3').click();

    deleteBathroom = () =>
        cy.get(':nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_inputLeadingView__djY2S > .StepInput_buttonStep__bEbd3').click();

    inputBedroomName = (bedroomName) =>
        cy.get('.BedTypeTable_bedTypeTableContent__iYHZn > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(bedroomName);

    checkKingBedType = () =>
        cy.get('.BedTypeTable_bedTypeTableContent__iYHZn > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    checkQueenType = () =>
        cy.get(':nth-child(4) > .BedTypeTable_bedTypeTableContent__iYHZn > .Checkbox_checkboxPopupContainer__rILei > .Checkbox_checkboxGroupNoLabel__Wzr7T > .Checkbox_checkbox__y_p3_').click();

    clickAddFacilities = () =>
        cy.get('.RoomTypeFacilities_chipList__4_crb > .Button_button__okmsK').click();

    selectFirstFacilities = () =>
        cy.get(':nth-child(1) > .Checkbox_checkboxGroup__uARE1 > .Checkbox_checkbox__y_p3_').click();

    selectSecondFacilities = () =>
        cy.get(':nth-child(2) > .Checkbox_checkboxGroup__uARE1 > .Checkbox_checkbox__y_p3_').click();

    clickConfirmFacility = () =>
        cy.get('.CheckboxPopup_popupButtonsContainer__JZSmM > .PrimaryButtonVariant_container__BQBmm').click();

    dismissZendesk = () => cy.get('[title="Close message"]').click();

    createRoomTypeConfirm = () =>
        cy.get('.PrimaryButtonVariant_container__BQBmm > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();

    clickFinishSetup = () =>
        cy.get('.PropertyEditDraftActions_topbarActionButton__v_C_v > .LightPrimaryButtonVariant_container__UR5gI').click();
}