import { NotificationIcon, SearchIcon } from "../icons";
import Dropdown from "./Dropdown";
import ImageProfile from "./ImageProfile";
import MenuItemRight from "./MenuItemRight";

export default function MenuRight() {
  return (
    <div className="flex items-center justify-end gap-3 mr-10">
      <MenuItemRight>
        <SearchIcon />
      </MenuItemRight>
      <MenuItemRight>
        <p className="text-sm">Kids</p>
      </MenuItemRight>
      <MenuItemRight>
        <NotificationIcon />
      </MenuItemRight>
      <ImageProfile size="35" />
      <Dropdown />
    </div>
  );
}
