import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ImageProfile from './ImageProfile';
import { useEffect, useState } from 'react';
import { setCurrentProfile } from '../redux/profileSlice';
import { PinModal } from '../components/PinModal';

export default function Dropdown() {
  const [modal, setModal] = useState(false);
  const [currentPin, setCurrentPin] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const userProfile = useSelector((state) => state.auth.user?.Profiles);
  const currentProfile = useSelector((state) => state.user.currentProfile);
  const [userProfiles, setUser] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const temp = userProfile?.filter((el) => el?.id !== currentProfile?.id);
    setUser(temp);
  }, [userProfile, currentProfile]);
  const onClickChangeProfile = (profileData) => {
    dispatch(setCurrentProfile(profileData));
  };
  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="dropdown relative right-3 top-1">
            <button
              className="dropdown-toggle  py-8  text-white font-medium text-xs leading-tight uppercase rounded       transition duration-150 ease-in-out flex items-center whitespace-nowrap"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="w-3 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              className=" dropdown-menu w-[220px] absolute hidden  text-base z-50 float-left py-4 px-2 list-none text-left  shadow-lg mt-1  m-0 bg-clip-padding border-none bg-black opacity-70"
              aria-labelledby="dropdownMenuButton2"
            >
              {userProfiles?.map((el) => {
                return (
                  <li
                    className="flex mb-2"
                    key={el?.id}
                    onClick={() => {
                      if (el.pin !== null) {
                        const pinToObj = {};
                        for (let i = 0; i < el.pin.length; i++) {
                          pinToObj[i] = el.pin.charAt(i);
                        }
                        setModal(true);
                        setCurrentUser(el);
                        setCurrentPin(pinToObj);
                      } else {
                        onClickChangeProfile(el);
                      }
                    }}
                  >
                    <div className="w-[35px] h-[35px] overflow-hidden">
                      <ImageProfile
                        className="p-3 flex"
                        size="35px "
                        key={el?.id}
                        profileImg={el?.profileImg}
                      />
                    </div>
                    <div className="dropdown-item text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600">
                      <Link to={'/browse'}>{el?.name}</Link>
                    </div>
                  </li>
                );
              })}

              <li>
                <div className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700">
                  <Link to={'/profiles/manage'}>Manage Profiles</Link>
                </div>
              </li>
              <li>
                <div className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700">
                  <Link to={'/profiles'}>Exit Profile</Link>
                </div>
              </li>
              <li>
                <div className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700">
                  <Link to={'/user/editAccount'}>Account</Link>
                </div>
              </li>
              <li>
                <hr className="h-0 my-2 border border-solid border-t-0 border-gray-300 opacity-25" />
              </li>
              <li>
                <div
                  className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                  type="button"
                  onClick={() => {
                    dispatch(logout());
                    navigate('/');
                  }}
                >
                  Sign out of Netflix
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {modal && (
        <PinModal
          setModal={setModal}
          userId={currentUser.userId}
          choseUser={currentPin}
          onPinCorrect={() => {
            onClickChangeProfile(currentUser);
          }}
        />
      )}
    </>
  );
}
