import LoginPage from "./modules/login";
import SideBarComponent from "./components/sidebar.component";
import DatePickerComponent from "./components/date-picker.component"
import PropertyPage from "./modules/property/property-type"
import RoomTypePage from "./modules/property/room-type";
import FrontDeskPage from "./modules/frontdesk";
import RatesPlanPage from "./modules/rates/rate-plan/rate-plan";
import RatesPackagePage from "./modules/rates/rate-plan/rate-package";
import RatesAddOnPage from "./modules/rates/rate-plan/add-on";
import HouseCleaningSchedulePage from "./modules/setting/house-cleaning-schedule";
import BookingListHeader from "./modules/booking/booking-list/booking-list-header";
import CreateBookingPopup from "./modules/booking/booking-list/create-booking-popup";

export const PageObjects = {
    Login: new LoginPage(),
    SideBar: new SideBarComponent(),
    Property: new PropertyPage(),
    RoomType: new RoomTypePage(),
    FrontDesk: new FrontDeskPage(),
    RatesPlan: new RatesPlanPage(),
    RatesPackage: new RatesPackagePage(),
    RatesAddOn: new RatesAddOnPage(),
    DatePicker: new DatePickerComponent(),
    HouseCleaningSchedule: new HouseCleaningSchedulePage(),
    BookingListHeader : new BookingListHeader(),
    CreateBookingPopup : new CreateBookingPopup(),
}