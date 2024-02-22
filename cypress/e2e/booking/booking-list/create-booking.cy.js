import { LoginToPMS } from "../../../utils/helpers/login";
import { PageObjects } from "../../../page";
// import { TOAST_MESSAGE } from "../../utils/constants";
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

    });

    it("Create manual booking with Guest service - Draft", () => {

        PageObjects.SideBar.clickSideBar();
        
        PageObjects.BookingList.clickBookingMenu();

        PageObjects.BookingList.clickBookingListMenu();

        PageObjects.BookingList.clickCreateBookingButton();

        PageObjects.BookingList.inputFirstName('Automation');

        PageObjects.BookingList.inputLastName('Kim');

        PageObjects.BookingList.inputEmail(emailAddress)

        PageObjects.BookingList.inputAddress(address);

        PageObjects.BookingList.inputPhoneNumber('827318');

        PageObjects.BookingList.clickCheckinDate();

        PageObjects.BookingList.clickNextMonth();

        PageObjects.BookingList.selectCheckinDate('10')

        PageObjects.BookingList.clickCheckoutDate();

        PageObjects.BookingList.selectCheckoutDate('12');

        PageObjects.BookingList.clickPropertyDropdown();

        PageObjects.BookingList.selectProperty();

        PageObjects.BookingList.clickRoomType();

        PageObjects.BookingList.selectRoomType();

        PageObjects.BookingList.clickRoomName();

        PageObjects.BookingList.selectRoomName();

        PageObjects.BookingList.clickSaveAndProceedToPayment();

    })
});