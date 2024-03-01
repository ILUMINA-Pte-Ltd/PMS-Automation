import 'cypress-file-upload';

export default class RatesPlanPage {

    clickRatesMenu = () => cy.get('[data-testid="Rates"]').click();

    clickRatesPlan = () => cy.get('[data-testid="RatePlan"]').click();                                   

    inputSearch = (search) => 
        cy.get('.SearchInput_searchTextInput__vx1nz > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(search);

    clickSeeDetails = () => cy.get(':nth-child(1) > :nth-child(6) > .RateListPage_tableContent__YxgMr > .Button_button__okmsK').click();

    clickCreateNewPlan = () => 
        cy.get(':nth-child(2) > #table > .Table_tableTrailingButtonStyle__iAdkG > .RoomTypeRateTable_buttonContainer__nsn39 > :nth-child(2)').click();

    inputRateName = (rateName) => 
        cy.get(':nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(rateName);

    inputRateDescription = (description) => 
        cy.get('.TextArea_input__JT1OC').type(description);
    
    clearRateDescription = () => 
        cy.get('.TextArea_input__JT1OC').clear();
            
    clickStartPeriode = () => cy.get(':nth-child(1) > .Datepicker_inputAnchor__Rz8G1 > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickMonth = () => cy.get('.Calendar_monthYearName___XSvs').click();

    clickMay= (month) => cy.get(`.Calendar_monthGrid__0y3rJ > :nth-child(${month})`).click();

    clickdate  = (date) => cy.get(`:nth-child(${date}) > .Calendar_dateButton__QkMkG`).click();

    clickEndPeriod = () => cy.get(':nth-child(2) > .Datepicker_inputAnchor__Rz8G1 > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    clickPaymentPlan = () => cy.get(':nth-child(1) > :nth-child(3) > .RatePlanConfigurationContainer_salesChannelConfigurationTableBody__gy0oA > .Dropdown_dropdownAnchor__fGDuq > :nth-child(2) > .TextInput_inputContainer__UlFly').click();
   
    clickPayatProperty = () => cy.get(':nth-child(1) > .Dropdown_dropdownItemContainer__sz2xI > .Dropdown_dropdownItemTitle__VXjPY > input').click();

    clickDirectPayment = () => cy.get(':nth-child(2) > .Dropdown_dropdownItemContainer__sz2xI > .Dropdown_dropdownItemTitle__VXjPY > input').click();

    inputBaseRateMontoFri = (MontoFri) => {
    
        for(let index=2;index<=6;index++){
            cy.get(`:nth-child(1) > :nth-child(${index}) > .RateConfigurationTable_rateConfigurationTableBody__7T1OB > .RateConfigurationTable_dayInputContainer__YNkUY > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE`).type(MontoFri);
        }
    }
    inputBaseRateSattoSun = (SattoSun) => {
    
        for(let index=7;index<=8;index++){
            cy.get(`:nth-child(1) > :nth-child(${index}) > .RateConfigurationTable_rateConfigurationTableBody__7T1OB > .RateConfigurationTable_dayInputContainer__YNkUY > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE`).type(SattoSun);
        }
    }
    inputAccomodationRates = (percentage) => {
    
        for(let index=2;index<=8;index++){
            cy.get(`:nth-child(3) > :nth-child(${index}) > .RateConfigurationTable_rateConfigurationTableBody__7T1OB > .RateConfigurationTable_dayInputContainer__YNkUY > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE`).type(percentage);
        }
    }
    inputCommisionableRatesMontoFri = (MontoFri) => {
    
        for(let index=2;index<=6;index++){
            cy.get(`:nth-child(5) > :nth-child(${index}) > .RateConfigurationTable_rateConfigurationTableBody__7T1OB > .RateConfigurationTable_dayInputContainer__YNkUY > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE`).type(MontoFri);
        }
    }
    inputCommisionableRatesSattoSun = (SattoSun) => {
    
        for(let index=7;index<=8;index++){
            cy.get(`:nth-child(5) > :nth-child(${index}) > .RateConfigurationTable_rateConfigurationTableBody__7T1OB > .RateConfigurationTable_dayInputContainer__YNkUY > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE`).type(SattoSun);
        }
    }
    inputCommisionableRateAcc = (percentage) => {
    
        for(let index=2;index<=8;index++){
            cy.get(`:nth-child(7) > :nth-child(${index}) > .RateConfigurationTable_rateConfigurationTableBody__7T1OB > .RateConfigurationTable_dayInputContainer__YNkUY > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE`).type(percentage);
        }
    }
    inputAdditionalGuestFee = (fee) => 
        cy.get('.RatePlanConfigurationContainer_grid2__2GVCi > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(fee);

    clickAppliedtoOwnerReport = () => cy.get('.RatePlanConfigurationContainer_grid2__2GVCi > .Dropdown_dropdownAnchor__fGDuq > :nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();
   
    clickAccommodationCheckBox = ()=> cy.get('.Dropdown_dropdownItemTitle__VXjPY > input').click();
    
    clickContinuetoPolicies = () => cy.get('.ContinueToPolicyActions_container__uA6C_ > .Button_button__okmsK').click();

    clickSaveasDraftButton = () => cy.get('.LightSecondaryButtonVariant_container__8HLES').click();

    // -------------------------// Edit Rates //-------------------//
    clickThreeDotMenuEdit = () => 
        cy.get(':nth-child(2) > #table > .Table_table__bzm_K > .Table_tableBody__CPdUz > .Table_tableBodyRow__SimFr > :nth-child(6) > .RoomTypeRateTable_tableContentLast__mAC62 > .ThreeDotsMenu_iconMenuContainer__5uchg > .ThreeDotsMenu_icon__dagXf > svg > path').click();
    
    clickContinueEdit = () => cy.get('.ThreeDotsMenu_menuContainer__Fvsnw > :nth-child(1) > .Button_button__okmsK').click();
  
    clickSaveChanges = () => cy.get('.UpdateRateActions_container__WKdcG > .Button_button__okmsK').click();
    
    // -------------------------// Create Policies //-------------------//
    clickEditPolicyButton = () => cy.get('.RatePolicyContainer_editModeContainer__NJT2j > .Button_button__okmsK').click();

    clearPercentageOnTheBookingDate1 = () => cy.get(':nth-child(1) > :nth-child(3) > .RatePolicyContainer_policyTableBody__e09GE > .RatePolicyContainer_refundAmount__0k2nc > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').clear();
   
    inputPercentageOnTheBookingDate1 = (fifty) => cy.get(':nth-child(1) > :nth-child(3) > .RatePolicyContainer_policyTableBody__e09GE > .RatePolicyContainer_refundAmount__0k2nc > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(fifty);
    
    clearPercentageOnTheBookingDate2 = () => cy.get(':nth-child(2) > :nth-child(3) > .RatePolicyContainer_policyTableBody__e09GE > .RatePolicyContainer_refundAmount__0k2nc > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').clear();
  
    inputPercentageOnTheBookingDate2 = (fifty) => cy.get(':nth-child(2) > :nth-child(3) > .RatePolicyContainer_policyTableBody__e09GE > .RatePolicyContainer_refundAmount__0k2nc > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(fifty);
    
    clearPercentageOnTheBookingDate1Edit = () => cy.get(':nth-child(2) > :nth-child(3) > .RatePolicyContainer_policyTableBody__e09GE > .RatePolicyContainer_refundAmount__0k2nc > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').clear();
    
    inputPercentageOnTheBookingDate1Edit = (seventy) => cy.get(':nth-child(1) > :nth-child(3) > .RatePolicyContainer_policyTableBody__e09GE > .RatePolicyContainer_refundAmount__0k2nc > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(seventy);
   
    clearPercentageOnTheBookingDate2 = () => cy.get(':nth-child(2) > :nth-child(3) > .RatePolicyContainer_policyTableBody__e09GE > .RatePolicyContainer_refundAmount__0k2nc > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').clear();
    
    inputPercentageOnTheBookingDate2Edit = (twentyfive) => cy.get(':nth-child(2) > :nth-child(3) > .RatePolicyContainer_policyTableBody__e09GE > .RatePolicyContainer_refundAmount__0k2nc > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(twentyfive);
        
    inputdaysBeforeCheckIn = (one) => cy.get('.RatePolicyContainer_policyTableBodyPeriod__n4iA_ > .RatePolicyContainer_policyTemplate__bfx2X > .RatePolicyContainer_dayInput__KcEcg > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(one);

    inputreservationleastdays = (one) => cy.get('.RatePolicyContainer_bookingPolicyContainer__pxrvV > .RatePolicyContainer_policyTemplate__bfx2X > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(one);
    
    inputreservationleasthour = (one) => cy.get(':nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(one);

    clickSavePolicyButton = () => cy.get('.RatePolicyContainer_editModeContainer__NJT2j > .LightPrimaryButtonVariant_container__UR5gI').click();

    clickFinishSetupButton = () => cy.get('.UpdateRateActions_container__WKdcG > .LightPrimaryButtonVariant_container__UR5gI > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();

    // -------------------------// Delete Rate Plan //-------------------//

    clickThreeDotMenu = () => 
        cy.get('#table > table > tbody > tr > td:nth-child(6) > div > div > div.ThreeDotsMenu_icon__dagXf.RoomTypeRateTable_rateActionsMenu__EHifR > svg').click();
    
    clickThreeDotMenudelete  = () => 
        cy.get(':nth-child(2) > #table > .Table_table__bzm_K > .Table_tableBody__CPdUz > .Table_tableBodyRow__SimFr > :nth-child(6) > .RoomTypeRateTable_tableContentLast__mAC62 > .ThreeDotsMenu_iconMenuContainer__5uchg > .ThreeDotsMenu_icon__dagXf > svg > path').click();
        
    clickDeleteButton = () => cy.get('.RoomTypeRateTable_textRed__ENcy_ > .Button_button__okmsK > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();
    
    yesDelete = () => cy.get('.DestructiveButtonVariant_container__PB_oG').click();

    // ---------------------------//Inventory//---------------------------//

    clickSaveRatetoInventory = () => cy.get(':nth-child(2) > .Button_button__okmsK').click();

    clickAddFromInventory = () => cy.get(':nth-child(2) > #table > .Table_tableTrailingButtonStyle__iAdkG > .RoomTypeRateTable_buttonContainer__nsn39 > :nth-child(1)').click();

    clickFirstRadioButton = () => cy.get(':nth-child(1) > :nth-child(1) > .AddFromRateInventoryContainer_tableContentRadio__qiZGs > .AddFromRateInventoryContainer_radioContainer__BBHYA > .AddFromRateInventoryContainer_radioInventory__Kfbgl').click();

    clickAddButton = () => cy.get('.PrimaryButtonVariant_container__BQBmm').click();

}