import { LoginToPMS } from "../../utils/helpers/login";
import { PageObjects } from "../../page";
import { faker } from '@faker-js/faker';

const recentDate = faker.date.recent();
const formattedDateTime = recentDate.toISOString().slice(0, 19).replace('T', ' ');
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

        PageObjects.RoomType.clickContinueToEdit();

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
        
    })
})