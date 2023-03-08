import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NotificationIcon, SearchIcon } from '../images';
import Dropdown from './Dropdown';
import ImageProfile from './ImageProfile';
import MenuItemRight from './MenuItemRight';
import { fetchProfile } from '../redux/profileSlice';
import { getProfileId } from '../utils/local-storage';

export default function MenuRight() {
  const dispatch = useDispatch();
  const userProfiles = useSelector((state) => state.auth.user?.Profiles);
  const currentProfile = useSelector((state) => state.user.currentProfile);

  console.log(currentProfile);
  useEffect(() => {
    dispatch(fetchProfile(getProfileId()));
  }, []);
  // console.log(userProfiles);

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
      <div className="w-[35px] h-[35px] overflow-hidden">
        <ImageProfile profileImg={currentProfile?.profileImg} size="35" />
      </div>
      <Dropdown />
    </div>
  );
}
