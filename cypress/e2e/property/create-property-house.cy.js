import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { TOAST_MESSAGE } from "../../utils/constants";
import { faker } from '@faker-js/faker';

const recentDate = faker.date.recent();
const formattedDateTime = recentDate.toISOString().slice(0, 19).replace('T', ' ');
const propertyName = `House Property ${formattedDateTime} - Automation`;
const emailAddress = faker.internet.email({firstName: 'Karina'});
const phoneNumber = faker.string.numeric({length: { min: 5, max: 10 }});
const address = faker.location.city()
const coordinates = faker.location.nearbyGPSCoordinate();

const roomTypeName = `Room Type ${formattedDateTime} - Automation`;
const roomDescription = faker.word.words(20);
const standardGuest = 5;
const maxGuest = 10;
const totalIndoor = 18;

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

        PageObjects.Property.selectCollection('Cabin');

        PageObjects.Property.inputEmailAddress(emailAddress);

        PageObjects.Property.inputPhoneNumber(phoneNumber);

        PageObjects.Property.clickRegion();

        PageObjects.Property.selectRegion('Bali');

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

    it("Create room type in House property", () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.Property.clickPropertyMenu();

        PageObjects.Property.clickContinueToEdit();

        PageObjects.RoomType.clickRoomTypeTab();

        PageObjects.RoomType.clickAddRoomTypeButton();

        PageObjects.RoomType.inputRoomTypeName(roomTypeName);

        PageObjects.RoomType.inputRoomDescription(roomDescription);

        PageObjects.RoomType.inputStandardGuest(standardGuest);

        PageObjects.RoomType.inputMaxGuest(maxGuest);

        PageObjects.RoomType.inputTotalIndoor(totalIndoor);

        PageObjects.RoomType.inputBedroomName('Deluxe Bedroom');

        PageObjects.RoomType.checkKingBedType();

        PageObjects.RoomType.checkQueenType();

        PageObjects.RoomType.clickAddFacilities();

        PageObjects.RoomType.selectFirstFacilities();

        PageObjects.RoomType.selectSecondFacilities();

        PageObjects.RoomType.clickConfirmFacility();

        PageObjects.Property.uploadImage();

        cy.wait(3000);

        PageObjects.RoomType.createRoomTypeConfirm();

        PageObjects.RoomType.clickFinishSetup();
    });

    it("Edit property House", () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.Property.clickPropertyMenu();

        PageObjects.Property.searchPropertyName('House Property');

        PageObjects.Property.clickSeeDetails();

        PageObjects.Property.clickEditProperty();

        PageObjects.Property.inputPropertyName(' Edited');

        PageObjects.Property.clickCollection();

        PageObjects.Property.selectCollection('Luxury');

        PageObjects.Property.clickSaveChanges()

    });

    it("Delete property House", () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.Property.clickPropertyMenu();

        PageObjects.Property.searchPropertyName('House Property');

        PageObjects.Property.clickSeeDetails();

        PageObjects.Property.clickDeleteProperty();

        PageObjects.Property.typeDelete();

        PageObjects.Property.deleteConfirm();

        cy.contains(TOAST_MESSAGE.DELETE_PROPERTY)

    });
})