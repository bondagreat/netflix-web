import { NotificationIcon, SearchIcon } from '../images';
import Dropdown from './Dropdown';
import ImageProfile from './ImageProfile';
import MenuItemRight from './MenuItemRight';
import { useState, useEffect } from 'react';

export default function MenuRight() {
  const [isEdit, setEdit] = useState(true);

  useEffect(() => {
    if (window.location.pathname == '/editAccount') {
      setEdit(false);
    } else {
      setEdit(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-end gap-3 mr-10">
      {isEdit ? (
        <MenuItemRight>
          <SearchIcon />
        </MenuItemRight>
      ) : (
        <></>
      )}
      {isEdit ? (
        <MenuItemRight>
          <p className="text-sm">Kids</p>
        </MenuItemRight>
      ) : (
        <></>
      )}
      {isEdit ? (
        <MenuItemRight>
          <NotificationIcon />
        </MenuItemRight>
      ) : (
        <></>
      )}
      <ImageProfile size="35" />
      <Dropdown />
    </div>
  );
}
