import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { faker } from '@faker-js/faker';

const recentDate = faker.date.recent();
const formattedDateTime = recentDate.toISOString().slice(0, 19).replace('T', ' ');
const propertyName = `Condominium Property ${formattedDateTime} - Automation`;
const emailAddress = faker.internet.email({firstName: 'Karina'});
const phoneNumber = faker.string.numeric({length: { min: 5, max: 10 }});
const address = faker.location.city()
const coordinates = faker.location.nearbyGPSCoordinate();

const regularRoom = `Regular room ${formattedDateTime} - Automation`;
const connectingRoom = `Regular room ${formattedDateTime} - Automation`;
const roomDescription = faker.word.words(20);
const standardGuest = 5;
const maxGuest = 10;
const totalIndoor = 18;

describe('Create property', () => {

    beforeEach('Login to PMS', () => {

        LoginToPMS();

    })

    it('Create property type Condominium', () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.Property.clickPropertyMenu();

        PageObjects.Property.clickCreateNewProperty();

        PageObjects.Property.selectCondominium();

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
    });

    it("Create Regular Room in Condominium property", () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.Property.clickPropertyMenu();

        PageObjects.RoomType.clickContinueToEdit();

        PageObjects.RoomType.clickRoomTypeTab();

        PageObjects.RoomType.clicCreateRegularRoom();

        PageObjects.RoomType.inputRoomTypeName(regularRoom);

        PageObjects.RoomType.inputRoomDescription(roomDescription);

        PageObjects.RoomType.inputStandardGuest(standardGuest);

        PageObjects.RoomType.inputMaxGuest(maxGuest);

        PageObjects.RoomType.inputTotalIndoor(totalIndoor);

        PageObjects.RoomType.addFirstRoom();

        PageObjects.RoomType.inputFirstRoomName();

        PageObjects.RoomType.addSecondRoom();

        PageObjects.RoomType.inputSecondRoomName();

        PageObjects.RoomType.addThirdRoom();

        PageObjects.RoomType.inputThirdRoomName();

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

    });

    it("Create Connecting room in Condominium", () => {

        PageObjects.SideBar.clickSideBar();

        PageObjects.Property.clickPropertyMenu();

        PageObjects.RoomType.clickContinueToEdit();

        PageObjects.RoomType.clickRoomTypeTab();

        PageObjects.RoomType.clickCreateConnectingRoom();

        PageObjects.RoomType.inputRoomTypeName(connectingRoom);

        PageObjects.RoomType.inputRoomDescription(roomDescription);

        PageObjects.RoomType.clickRoomType1();

        PageObjects.RoomType.selectRoomType1();

        PageObjects.RoomType.clickRoomType2();

        PageObjects.RoomType.selectRoomType2();

        PageObjects.RoomType.clickAddConnectingRoom();

        PageObjects.RoomType.firstConnectingRoomName("Connecting Room 1");

        PageObjects.RoomType.clickRoom2FirstConnecting();

        PageObjects.RoomType.selectRoom2FirstConnecting();

        PageObjects.RoomType.clickAddConnectingRoom();

        PageObjects.RoomType.secondConnectingRoomName("Connecting Room 2");

        PageObjects.RoomType.clickRoom2SecondConnecting();

        PageObjects.RoomType.selectRoom2SecondConnecting();

        PageObjects.Property.uploadImage();

        cy.wait(3000);

        PageObjects.RoomType.createRoomTypeConfirm();

        PageObjects.RoomType.clickFinishSetup();

    });
})