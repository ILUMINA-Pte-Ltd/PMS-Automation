import LoginPage from "./modules/login";
import SideBarComponent from "./components/sidebar.component";
import PropertyPage from "./modules/property/property-type"
import RoomTypePage from "./modules/property/room-type";
import BookingListPage from "./modules/booking/booking-list";
import FrontDeskPage from "./modules/frontdesk";

export const PageObjects = {
    Login: new LoginPage(),
    SideBar: new SideBarComponent(),
    Property: new PropertyPage(),
    RoomType: new RoomTypePage(),
    BookingList: new BookingListPage(),
    FrontDesk: new FrontDeskPage()
}