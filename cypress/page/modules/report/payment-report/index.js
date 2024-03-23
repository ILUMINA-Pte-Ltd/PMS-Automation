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

}