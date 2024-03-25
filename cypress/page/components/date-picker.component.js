export default class DatePickerComponent {
    
    clickMonth = () => cy.get('.Calendar_monthYearName___XSvs').click();

    clickMay= (month) => 
        cy.get(`.Calendar_monthGrid__0y3rJ > :nth-child(${month})`).click();
    
    clickdate  = (date) => 
        cy.get(`:nth-child(${date}) > .Calendar_dateButton__QkMkG`).click();

    clickNextMonth = () => 
        cy.get('.Calendar_monthNameNextPrev__Df0uV > :nth-child(3)').click();
    
    clickPreviousMonth = () => 
        cy.get('.Calendar_monthNameNextPrev__Df0uV > :nth-child(1)').click();

}