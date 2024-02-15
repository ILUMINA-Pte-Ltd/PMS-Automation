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

    clicCreateRegularRoom = () => {
        cy.wait(2000);
        cy.get(':nth-child(1) > .RoomTypeListPage_emptyStateButtonContainer__kjdZV > .Button_button__okmsK').click();
    } 

    clickCreateConnectingRoom = () => {
        cy.wait(2000);
        cy.get(':nth-child(2) > .RoomTypeListPage_emptyStateButtonContainer__kjdZV > .Button_button__okmsK').click();
    }

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

    //Regular room
    addFirstRoom = () => 
        cy.get('.Table_tableTrailingButtonStyle__iAdkG > .Button_button__okmsK > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();

    inputFirstRoomName = () =>
        cy.get('.RegularRoomTable_tableBody__x_Cns > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type("Room 1");
        
    addSecondRoom = () => 
        cy.get('.Table_tableTrailingButtonStyle__iAdkG > .Button_button__okmsK > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();

    inputSecondRoomName = () =>
        cy.get(':nth-child(2) > :nth-child(2) > .RegularRoomTable_tableBody__x_Cns > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type('Room 2');
        
    addThirdRoom = () =>
        cy.get('.Table_tableTrailingButtonStyle__iAdkG > .Button_button__okmsK > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();
    
    inputThirdRoomName = () =>
        cy.get(':nth-child(3) > :nth-child(2) > .RegularRoomTable_tableBody__x_Cns > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type('Room 3');
    
    //Connecting room
    clickRoomType1 = () =>
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    selectRoomType1 = () => {
        cy.get('.Dropdown_dropdownItemTitle__VXjPY').click();
        cy.wait(3000);
    }

    clickRoomType2 = () =>
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    selectRoomType2 = () => {
        cy.get('.Dropdown_dropdownItemTitle__VXjPY').click();
        cy.wait(3000);

    }

    clickAddConnectingRoom = () => {
        cy.get('.Table_tableTrailingButtonStyle__iAdkG > .Button_button__okmsK > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();
        cy.wait(6000);
    }

    firstConnectingRoomName = (connectingRoomName) => {
        cy.get('.ConnectingRoomTable_connectingRoomTableContent__BOPzh > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(connectingRoomName)
        cy.wait(2000);
    }

    clickRoom2FirstConnecting = () => {
        cy.get(':nth-child(4) > .ConnectingRoomTable_connectingRoomTableContent__BOPzh > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();
        cy.wait(3000);
    }

    selectRoom2FirstConnecting = () => {
        cy.get(':nth-child(2) > .Dropdown_dropdownItemContainer__sz2xI > .Dropdown_dropdownItemTitle__VXjPY').click();
        cy.wait(2000);
    }
       
    secondConnectingRoomName = (connectingRoomName) =>  {
        cy.get(':nth-child(2) > :nth-child(2) > .ConnectingRoomTable_connectingRoomTableContent__BOPzh > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(connectingRoomName);
        cy.wait(2000);
    }
       
    clickRoom2SecondConnecting = () => {
        cy.get(':nth-child(2) > :nth-child(4) > .ConnectingRoomTable_connectingRoomTableContent__BOPzh > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();
        cy.wait(3000);
    }
        
    selectRoom2SecondConnecting = () => {
        cy.get(':nth-child(3) > .Dropdown_dropdownItemContainer__sz2xI > .Dropdown_dropdownItemTitle__VXjPY').click();
        cy.wait(2000);
    }
    //Connecting End
    
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