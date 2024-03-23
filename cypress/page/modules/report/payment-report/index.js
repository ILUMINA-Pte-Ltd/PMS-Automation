export default class PaymentReport {

    clickReportMenu = () => 
        cy.get('[data-testid="Report"]').click();
    
    clickBusinessMetricsReport = () => 
        cy.get('[data-testid="BusinessMetricsReport"]').click();
    

    clickPaymentReport = () => 
        cy.get('[data-testid="PaymentReport"]').click();
    
    clickPaymentReport = () => {
        cy.get('[data-testid="ReportGenerator"]').click();
    }

    inputSearchKeywords = (keyword) =>
        cy.get('.SearchInput_searchTextInput__vx1nz > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(keyword);

    clickPaymentDateFilter = () =>
        cy.get('.ReportPaymentContainer_containerMargin__x1srG > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly').click();

    clickFromField = () =>
        cy.get('.SelectionDatePicker_datePickerContainer__R6BGp > :nth-child(1) > :nth-child(1) > .TextInput_inputContainer__UlFly').click();

    clickToField = () =>
        cy.get('.SelectionDatePicker_datePickerContainer__R6BGp > :nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly').click();

    

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