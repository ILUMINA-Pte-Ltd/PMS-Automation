import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { faker } from '@faker-js/faker';

const recentDate = faker.date.recent();
const formattedDateTime = recentDate.toISOString().slice(0, 19).replace('T', ' ');
const propertyName = `Property ${formattedDateTime} - Automation`;
const emailAddress = faker.internet.email({firstName: 'Karina'});
const phoneNumber = faker.string.numeric({length: { min: 5, max: 10 }});
const address = faker.location.city()
const coordinates = faker.location.nearbyGPSCoordinate();

describe('Create property', () => {

    beforeEach('Login to PMS', () => {

        LoginToPMS();

    })

    it('Create property type House', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.Property.clickPropertyMenu();

        PageObjects.Property.clickCreateNewProperty();

        PageObjects.Property.selectTypeHouse();

        PageObjects.Property.clickConfirmButton();
  
        PageObjects.Property.inputPropertyName(propertyName);

        PageObjects.Property.clickCollection();

        PageObjects.Property.selectCollection();

        PageObjects.Property.inputEmailAddress(emailAddress);

        PageObjects.Property.inputPhoneNumber(phoneNumber);

        PageObjects.Property.clickRegion();

        PageObjects.Property.selectRegion();

        PageObjects.Property.inputLocalTax('10');

        PageObjects.Property.inputDescription(propertyName);

        PageObjects.Property.clickAddFacilities();

        PageObjects.Property.selectFirstFacility();

        PageObjects.Property.selectSecondFacility();

        PageObjects.Property.selectThirdFacility();

        PageObjects.Property.clickConfirmFacility();

        PageObjects.Property.inputAddress(address);

        PageObjects.Property.inputCoordinates(coordinates.toString());

        PageObjects.Property.uploadImage();

        cy.wait(3000);

        PageObjects.Property.dismissZendesk();

        PageObjects.Property.clickContinueToRoomTypes();
    })
})