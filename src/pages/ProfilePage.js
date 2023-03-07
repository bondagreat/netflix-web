import { useDispatch, useSelector } from 'react-redux';
import AddProfileCard from '../components/profile/AddProfileCard';
import ManageProfileButton from '../components/profile/ManageProfileButton';
import ProfileCard from '../components/profile/ProfileCard';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { XIcon } from '../images';
import { fetchProfile } from '../redux/profileSlice';
import * as AuthApi from '../apis/auth-api';

export default function ProfilePage() {
  const userProfiles = useSelector((state) => state.auth.user?.Profiles);
  // const checkActive = useSelector((state) => state.auth.user?.IsActive);
  const [modal, setModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inPin, setInPin] = useState({});
  const [choseUser, setChoseUser] = useState();
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchActive() {
      const res = await AuthApi.getMe();
      if (res?.data?.user.isActive == false) {
        navigate('/signup/step');
      }
    }
    fetchActive();
  }, []);

  const fromRef = useRef(null);
  const inputRef = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleClickClose = () => {
    setModal(false);
    setIsError(false);
    setInPin({});
    setFocusedIndex(0);
  };

  const comparePin = (obj1, obj2) => {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    if (inPin[3]) {
      if (comparePin(choseUser, inPin)) {
        console.log(userId);
        dispatch(fetchProfile(userId));
        navigate('/browse');
      } else {
        setIsError(true);
      }
    } else {
    }
  }, [inPin]);

  const handleChangePin = (e) => {
    setFocusedIndex(e.target.name);
    if (e.key == 'Backspace') {
      if (focusedIndex > 0) {
        const nextIndex = focusedIndex - 1;
        inputRef[nextIndex].current.focus();
        setFocusedIndex(nextIndex);
      }
    } else {
      if (focusedIndex == 3) {
        const nextIndex = 0;
        inputRef[nextIndex].current.focus();
        setFocusedIndex(nextIndex);
        fromRef.current.reset();
      } else {
        const nextIndex = 1 * focusedIndex + 1;
        inputRef[nextIndex].current.focus();
        setFocusedIndex(nextIndex);
      }
    }
    setInPin({ ...inPin, [e.target.name]: e.key });
  };
  return (
    <>
      {modal ? (
        <div className="bg-black w-screen h-screen z-10 flex justify-center">
          <button
            className="z-10 absolute left-[900px] top-11"
            onClick={handleClickClose}
          >
            <XIcon />
          </button>

          <div className="flex-col w-8/12 self-center text-center">
            <p className="mb-4 text-lg">Profile Lock is Currently on.</p>
            {isError ? (
              <h1 className="text-yellow-400 text-4xl font-semibold ">
                Oops, wrong PIN.Please try again.
              </h1>
            ) : (
              <h1 className="text-white text-3xl font-semibold">
                Enter your PIN to access this profile.
              </h1>
            )}
            <br />
            <div className="flex h-40 justify-center items-center outline-none">
              <form ref={fromRef}>
                <input
                  className="hidepassword text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none -webkit-text-security-disc focus:border-white focus:ring-0"
                  style={{ MozAppearance: 'none' }}
                  maxLength="1"
                  name="0"
                  type="password"
                  ref={inputRef[0]}
                  onKeyUp={handleChangePin}
                ></input>
                <input
                  className="hidepassword text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none -webkit-text-security-disc focus:border-white focus:ring-0"
                  style={{ MozAppearance: 'none' }}
                  maxLength="1"
                  name="1"
                  type="password"
                  ref={inputRef[1]}
                  onKeyUp={handleChangePin}
                ></input>
                <input
                  className="hidepassword text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none -webkit-text-security-disc focus:border-white focus:ring-0"
                  style={{ MozAppearance: 'none' }}
                  maxLength="1"
                  name="2"
                  type="password"
                  ref={inputRef[2]}
                  onKeyUp={handleChangePin}
                ></input>
                <input
                  className="hidepassword text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none -webkit-text-security-disc focus:border-white focus:ring-0"
                  style={{ MozAppearance: 'none' }}
                  maxLength="1"
                  name="3"
                  type="password"
                  ref={inputRef[3]}
                  onKeyUp={handleChangePin}
                ></input>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center flex-col bg-black">
          <div className="flex justify-center mt-10">
            <h1 className="text-white text-5xl">Who's watching?</h1>
          </div>
          <div className="flex justify-center gap-5 mt-6">
            {userProfiles?.map((el) => {
              return (
                <ProfileCard
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  profileImg={el.profileImg}
                  pin={el.pin}
                  setModal={setModal}
                  setChoseUser={setChoseUser}
                  setUserId={setUserId}
                />
              );
            })}
            {userProfiles?.length < 4 && <AddProfileCard />}
          </div>
          <ManageProfileButton />
        </div>
      )}
    </>
  );
}
