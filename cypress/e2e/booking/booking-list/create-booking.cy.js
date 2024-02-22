import { LoginToPMS } from "../../../utils/helpers/login";
import { PageObjects } from "../../../page";
// import { TOAST_MESSAGE } from "../../utils/constants";
import { faker } from '@faker-js/faker';

const emailAddress = faker.internet.email({firstName: 'Karina'});
const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const phoneNumber = faker.string.numeric(8)
const address = faker.location.city()

describe('Create property', () => {

    beforeEach('Login to PMS', () => {

        LoginToPMS();

    });

    it("Create manual booking with Guest service - Draft", () => {

        PageObjects.SideBar.clickSideBar();
        
        PageObjects.BookingList.clickBookingMenu();

        PageObjects.BookingList.clickBookingListMenu();

        PageObjects.BookingList.clickCreateBookingButton();

        PageObjects.BookingList.inputFirstName(firstName);

        PageObjects.BookingList.inputLastName(lastName);

        PageObjects.BookingList.inputEmail(emailAddress)

        PageObjects.BookingList.inputAddress(address);

        PageObjects.BookingList.inputPhoneNumber(phoneNumber);

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