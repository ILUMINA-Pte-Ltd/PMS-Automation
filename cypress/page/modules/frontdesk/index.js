export default class FrontDeskPage {

    clickFrontdeskMenu = () => {
        cy.get('[data-testid="Frontdesk"]').click();
    }

    clickArrivalTab = () => 
        cy.get('.SegmentedControl_active__uRyKX').click();

    clickInStayTab = () => 
        cy.get('.SegmentedControl_container__d_oHt > :nth-child(2)').click();
    

    clickDepartueTab = () => 
        cy.get('.SegmentedControl_container__d_oHt > :nth-child(3)').click();

    clickFilterByDate = () =>
        cy.get('.HeaderBar_toggleButton__TeVSp').click();

    selectTomorrow = () => 
        cy.get('.SingleDatePickerPopup_periodContainer__3_zyt > :nth-child(2)').click();

    selectCustom = () => 
        cy.get('.SingleDatePickerPopup_periodContainer__3_zyt > :nth-child(3)').click();

    clickNextMonth = () => 
        cy.get('.Calendar_monthNameNextPrev__Df0uV > :nth-child(3)').click();

    clickPreviousMonth = () =>
        cy.get('.Calendar_monthNameNextPrev__Df0uV > :nth-child(1)').click();

    selectDate = (date) =>
        cy.get(`:nth-child(${date}) > .Calendar_dateButton__QkMkG`).click();

    clickApplyDate = () => {
        cy.get('.Button_button__okmsK').click();
        cy.wait(2000);
    }

    clickFilterByProperties = () => {
        cy.get('.HeaderBar_desktopFilterBar__yPJPH > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly').click();
        cy.wait(3000);
    }

    selectProperty = (property) => {
        cy.contains(property).click();
        cy.wait(2000);
    }

    clickFilterByArrivalStatus = () => {
        cy.get('.HeaderBar_desktopFilterBar__yPJPH > :nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly').click();
        cy.wait(3000);
    }

    selectArrivalStatus = (arrivalStatus) => cy.contains(arrivalStatus).click();

    clickCleaningStatusFilter = () => {
        cy.wait(3000);
        cy.get(':nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly').click();
    }

    clickCleaningStatusArrival = () => {
        cy.get(':nth-child(3) > :nth-child(1) > .TextInput_inputContainer__UlFly').click();
    }

    selectCleaningStatus = (index) => {
        cy.get(`:nth-child(${index}) > .Dropdown_dropdownItemContainer__sz2xI > .Dropdown_dropdownItemTitle__VXjPY`).click();
        cy.wait(1000);
    }

    clickArrivalStatus = (index) =>
        cy.get(`:nth-child(${index}) > :nth-child(9) > .BookingListPage_tableData__15CXw > :nth-child(1) > .BorderedInputTextVariant_container__HETFx`).click();

    clickConfirmArrivalStatus = () => {
        cy.wait(3000);
        cy.get('.PrimaryButtonVariant_container__BQBmm').click();
    }

    clickCleaningStatus = () => cy.get(':nth-child(10) > .BookingListPage_tableData__15CXw > :nth-child(1) > .BorderedInputTextVariant_container__HETFx').first().click();

    changeCleaningStatus = (index) => 
        cy.get(`:nth-child(${index}) > .RadioButton_radioButtonInput__5XzDB`).first().click();
    
    setCleaningStatus = () => cy.get('span.Button_buttonText__vngL0').should('contain', 'Set').click();

    clickConfirmCleaningStatus = () => 
        cy.get('.PrimaryButtonVariant_container__BQBmm > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click(); 

    verifyCleaningSchedule = () => {
        
        cy.wait(1000);

        cy.get('body').then($element => {

            if ($element.find('.Table_tableBodyRow__SimFr > :nth-child(1)').length > 0) {
                console.log("Only 1 cleaning schedule is shown");
            } else {
                cy.get('body').then($element => {
                    if ($element.find('.Table_tableBody__CPdUz > :nth-child(1) > :nth-child(1)').length > 0) {
                        console.log("More than 1 cleaning schedule are shown");
                    } else {
                        console.log("There are no scheduled")
                    }
                });
            }
        });
    }
}