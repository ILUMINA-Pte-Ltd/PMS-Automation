export default class LinkBookingPopup {

    clickLinkBookingHeader = () => 
        cy.get('.max-lg\:h-\[42px\] > .Button_contentContainer__fXqQa').click();

    //Linked booking ID
    clickBookingIDHeader = () =>
        cy.get('.flex > .Button_contentContainer__fXqQa').click();

    // <-- Link booking selection popup    
    verifyLinkBookingPopup = () =>
        cy.contains('Connect this booking with one or more other bookings').should('be.visible');

    selectLinkToBookingGroup = () =>
        cy.get('.mb-4 > .max-lg\:mb-2').click();

    selectLinkWithUnlinkedBooking = () => 
        cy.get('.LinkBookingPopup_menuButton__3pVbI.mb-6 > .max-lg\:mb-2').click();

    clickNext = () =>
        cy.get('.flex > .PrimaryButtonVariant_container__BQBmm > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();
    
    clickCancel = () =>
        cy.get('.SecondaryButtonVariant_container__toLCn > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();
    // -->

    // <-- Select Booking Group popup
    verifyBookingGroupPopup = () =>
        cy.contains('Please select one or more bookings that you want to link with.').should('be.visible');

    checkBookingGroup = (index) => 
        cy.get(`:nth-child(${index}) > :nth-child(1) > .BookingGroupPopup_columnBody__RsvI_ > .RadioButton_container__uclaQ > .RadioButton_radioButtonInput__5XzDB`).click();

    clickLinkBookingButton = () =>
        cy.get('.BookingGroupPopup_buttonsContainer__ZKkn_ > .PrimaryButtonVariant_container__BQBmm > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();
    // -->

    // <-- Select Unlinked Booking popup
    verifyUnlinkedBookingPopup = () =>
        cy.contains('Select Unlinked Booking').should('be.visible');

    clickChainIcon = (index) =>
        cy.get(`:nth-child(${index}) > :nth-child(9) > .UnlinkedBookingPopup_columnBody__hCS_J > div`).click();

    clickLinkBooking = () =>
        cy.get('.UnlinkedBookingPopup_buttonsContainer____rsG > .PrimaryButtonVariant_container__BQBmm > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();
    // -->

    // <-- Booking List popup opened when Booking ID is clicked
    verifyBookingListPopup = () =>
        cy.contains('See list of linked bookings and unlink bookings.').should('be.visible');
    
    clickChainIconToUnlink = () =>
        cy.get(':nth-child(9) > .LinkedBookingPopup_columnBody__ox1uv > div').click();

    clickUnlinkButton = () =>
        cy.get('.DestructiveSecondaryButtonVariant_container__sO52D > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();

    unlinkBookingConfirmation = () =>
        cy.contains('The selected bookings will be unlinked from the list').should('be.visible');

    confirmUnlinkBooking = () =>
        cy.get('.DestructiveButtonVariant_container__PB_oG > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();

    // Link more booking
    clickLinkMoreBooking = () => 
        cy.get('.LinkedBookingPopup_buttonsContainer__X2wiJ > :nth-child(2) > .Button_contentContainer__fXqQa').click();

}