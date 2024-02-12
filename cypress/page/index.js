import LoginPage from "./modules/login";
import SideBarComponent from "./components/sidebar.component";
import PropertyPage from "./modules/property/property-type/index.js"
import RoomTypePage from "./modules/property/room-type/index.js";

export const PageObjects = {
    Login: new LoginPage(),
    SideBar: new SideBarComponent(),
    Property: new PropertyPage(),
    RoomType: new RoomTypePage()
}