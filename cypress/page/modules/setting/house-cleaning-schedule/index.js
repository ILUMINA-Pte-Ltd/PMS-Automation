import 'cypress-file-upload';

export default class HouseCleaningSchedulePage {

    //----------------------Search All Properties tab----------------//
    clickSettingsMenu = () => cy.get('[data-testid="Settings"]').click();

    clickHousetCleaningSchedule = () => cy.get('[data-testid="SettingsHostCleaningSchedule"]').click(); 

    clickSeeDetails = () => 
        cy.get(':nth-child(1) > :nth-child(5) > .HouseCleaningPropertyList_tableBody__9VCYQ > .Button_button__okmsK').click();

    //----------------------Search Cleaning Invetory Tab------------------//
    clickCleaingInventoryTab = () => cy.get('.Tabs_tabsItemDefault__ttV1y').click();

    //----------------------create-new-cleaning-type-on-room-type-no-cost-period-----------------//
    clickCreateNewCleaningType = () => 
        cy.get(':nth-child(3) > #table > .Table_tableTrailingButtonStyle__iAdkG > .HouseCleaningRoomTypeList_addButtonContainer__lzz1z > :nth-child(2)').click();

    inputCleaningType = (cleaningType) => cy.get(':nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(cleaningType)

    clickFrequency = () => cy.get(':nth-child(1) > .Checkbox_checkboxGroup__uARE1 > .Checkbox_checkbox__y_p3_').click();

    inputDays = (Days) => cy.get('.HouseCleaningAdd_onAverageDay__Cwa5Z > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(Days);

    inputBaseCost = (baseCost) => cy.get(':nth-child(6) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(baseCost);

    clickFinishSetup = () => cy.get('.NavigationBar_actionsContainer__VT5tD > .Button_button__okmsK').click();

    //----------------------create-new-cleaning-type-on-room-type-with-cost-period-----------------//

    clickAddPeriode = () => cy.get('.Table_tableTrailingButtonStyle__iAdkG > .Button_button__okmsK').click();

    inputCleaningCost = (cleaningCost) => cy.get('.HouseCleaningAdd_tableColumn__zG3rp > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(cleaningCost);

   

    //----------------------Edit -existing-cleaning-type-on-room-type-----------------//

    clickThreedot = () => 
        cy.get(':nth-child(2) > :nth-child(6) > .HouseCleaningRoomTypeList_tableItem__5JEPA > .ActionPopup_actionContainer__LNR6B > :nth-child(1) > .ActionPopup_actionIcon__2i8xS').click();
    
    clickThreeDotEdit = () => 
        cy.get(':nth-child(3) > :nth-child(6) > .HouseCleaningRoomTypeList_tableItem__5JEPA > .ActionPopup_actionContainer__LNR6B > :nth-child(1) > .ActionPopup_actionIcon__2i8xS').click();
   
    clickthreeDotDelete = () => 
        cy.get(':nth-child(4) > :nth-child(6) > .HouseCleaningRoomTypeList_tableItem__5JEPA > .ActionPopup_actionContainer__LNR6B > :nth-child(1) > .ActionPopup_actionIcon__2i8xS')
   
    clickSaveToInventory =() => cy.get('.ActionPopup_actionPopup__FkoGJ > :nth-child(2)').click();

    clickEditButton = () => cy.get('.ActionPopup_actionPopup__FkoGJ > :nth-child(1)').click();

    clickCheckBox = () => cy.get(':nth-child(2) > .Checkbox_checkboxGroup__uARE1 > .Checkbox_checkbox__y_p3_').click();

    clearBaseCost = () => 
        cy.get(':nth-child(6) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').clear();

    clearCleaningCost = () => 
        cy.get('.HouseCleaningAdd_tableColumn__zG3rp > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').clear();

    //----------------------Deleted -existing-cleaning-type-on-room-type-----------------//   

    deletecyCleaningType = () => cy.get('.HouseCleaningActionPopup_deleteLabel__mPbt4').click();

    confirmationDelete = () => cy.get('.DestructiveButtonVariant_container__PB_oG').click();

    removecleaningType = (remove) => cy.get('.TextInput_input__kmkwE').type(remove);

    clickRemoveButton = () => cy.get('.Button_button__okmsK').click();

    
 

    //----------------------Add Cleaning type from inventorye-----------------/

    clickAddfromInventory = () => cy.get(':nth-child(3) > #table > .Table_tableTrailingButtonStyle__iAdkG > .HouseCleaningRoomTypeList_addButtonContainer__lzz1z > :nth-child(1)').click();

    inputSearch = (automate) => cy.get('.AddHouseCleaningFromInventoryPopup_container__Wihez > .SearchInput_container__HP9cM > .SearchInput_mobileSearchInput__NGy9x > .SearchInput_searchTextInput__vx1nz > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(automate);

    clickCheckbox = () => cy.get('.Checkbox_checkbox__y_p3_').click();

    clickAdd = () => cy.get('.PrimaryButtonVariant_container__BQBmm').click();


}