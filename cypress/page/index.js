import LoginPage from "./modules/login";
import SideBarComponent from "./components/sidebar.component";
import DateComponent from "./components/date.component"
import PropertyPage from "./modules/property/property-type"
import RoomTypePage from "./modules/property/room-type";
import BookingListPage from "./modules/booking/booking-list";
import FrontDeskPage from "./modules/frontdesk";
import RatesPlanPage from "./modules/rates/rate-plan/rate-plan";
import RatesPackagePage from "./modules/rates/rate-plan/rate-package";
import RatesAddOnPage from "./modules/rates/rate-plan/add-on";
// import HouseCleaningSchedulePage from "./modules/setting/house-cleaning-schedule";

export const PageObjects = {
    Login: new LoginPage(),
    SideBar: new SideBarComponent(),
    Property: new PropertyPage(),
    RoomType: new RoomTypePage(),
    BookingList: new BookingListPage(),
    FrontDesk: new FrontDeskPage(),
    RatesPlan: new RatesPlanPage(),
    RatesPackage: new RatesPackagePage(),
    RatesAddOn: new RatesAddOnPage(),
    Date: new DateComponent(),
    // HouseCS: new HouseCleaningSchedulePage()
}