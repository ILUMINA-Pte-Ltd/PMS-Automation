export default class DateComponent {
    
    clickMonth = () => cy.get('.Calendar_monthYearName___XSvs').click();

    clickMay= (month) => cy.get(`.Calendar_monthGrid__0y3rJ > :nth-child(${month})`).click();
    
    clickdate  = (date) => cy.get(`:nth-child(${date}) > .Calendar_dateButton__QkMkG`).click();
}