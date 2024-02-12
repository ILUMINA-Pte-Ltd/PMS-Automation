import 'cypress-file-upload';

export default class PropertyPage {

    clickPropertyMenu = () => {
        // cy.scrollTo(0, 500)
        cy.contains('Property').click();
    }

    clickCreateNewProperty = () => cy.get('.NavigationBar_actionsContainer__VT5tD > .Button_button__okmsK').click();

    selectTypeHouse = () => cy.get('.CreatePropertyPopup_contentContainer__N61_k > :nth-child(1)').click();

    clickConfirmButton = () => cy.get('.PrimaryButtonVariant_container__BQBmm > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();

    inputPropertyName = (propertyName) => cy.get(':nth-child(1) > :nth-child(2) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(propertyName);

    clickCollection = () => cy.get(':nth-child(1) > :nth-child(3) > :nth-child(3) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    selectCollection = () => cy.contains('Cabin').click();

    inputEmailAddress = (email) => cy.get(':nth-child(5) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(email);

    inputPhoneNumber = (phoneNumber) => cy.get('.PhoneNumberInput_phoneNumberAnchor__whIRF > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(phoneNumber);

    clickRegion = () => cy.get(':nth-child(7) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').click();

    selectRegion = () => cy.contains('Bali').click();

    inputLocalTax = (localTax) => cy.get(':nth-child(8) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(localTax);

    inputDescription = (description) => cy.get('.TextArea_inputContainer__nPway').type(description);

    clickAddFacilities = () => cy.get('.PropertyForm_chipList__sAYkO > .Button_button__okmsK').click();

    selectFirstFacility = () => {
        cy.get(':nth-child(1) > .Checkbox_checkboxGroup__uARE1 > .Checkbox_checkbox__y_p3_').click();
        cy.wait(1000);
    }

    selectSecondFacility = () => {
        cy.get(':nth-child(2) > .Checkbox_checkboxGroup__uARE1 > .Checkbox_checkbox__y_p3_').click();
        cy.wait(1000);
    }

    selectThirdFacility = () => {
        cy.get(':nth-child(3) > .Checkbox_checkboxGroup__uARE1 > .Checkbox_checkbox__y_p3_').click();
        cy.wait(1000);
    }

    clickConfirmFacility = () => {
        cy.get('.CheckboxPopup_popupButtonsContainer__JZSmM > .PrimaryButtonVariant_container__BQBmm').click();
        cy.wait(1000);
    }

    inputAddress = (address) => 
        cy.get(':nth-child(2) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(address);

    inputCoordinates = (coordinates) =>
        cy.get('.Tabs_tabsContainer__nBYbJ > :nth-child(3) > :nth-child(3) > :nth-child(1) > .TextInput_inputContainer__UlFly > .TextInput_input__kmkwE').type(coordinates);

    uploadImage = () => {
        const fileNames = ['property-a.jpg', 'property-b.jpg', 'property-c.jpg'];

        fileNames.forEach(fileName => {
            // Load the image file as a fixture
            cy.fixture(`documents/${fileName}`, 'base64').then(fileContent => {
              // Convert base64 file content to a Blob
              const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
          
              // Create a File object from the Blob
              const file = new File([blob], fileName, { type: 'image/jpeg' });
          
              // Select the file input element by its class
              cy.get('.ImageUploader_imageUploadInput__x_aKT').then(subject => {
                // Create a new DataTransfer object
                const dataTransfer = new DataTransfer();
          
                // Add the file to the DataTransfer object
                dataTransfer.items.add(file);
          
                // Set the files property of the file input element to the files in the DataTransfer object
                subject[0].files = dataTransfer.files;
          
                // Trigger the change event on the file input element
                cy.wrap(subject).trigger('change', { force: true });
              });
            });
            cy.wait(3000)
          });
    }

    dismissZendesk = () => cy.get('[title="Close message"]').click();

    clickContinueToRoomTypes = () => cy.get('.PropertyForm_roomTypeButtonLayout__7OE5i > .Button_button__okmsK > .Button_contentContainer__fXqQa > .Button_buttonText__vngL0').click();

}