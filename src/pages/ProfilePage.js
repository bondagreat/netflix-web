import { useSelector } from 'react-redux';
import AddProfileCard from '../components/profile/AddProfileCard';
import ManageProfileButton from '../components/profile/ManageProfileButton';
import ProfileCard from '../components/profile/ProfileCard';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const userProfiles = useSelector((state) => state.auth.user?.Profiles);
  const [modal, setModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inPin, setInPin] = useState({});
  const [choseUser, setChoseUser] = useState();
  const navigate = useNavigate();

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef('');

  const comparePin = (obj1, obj2) => {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    // console.log(inPin, 'pinnnn');
    // console.log(choseUser, 'userere');
    if (inPin[3]) {
      if (comparePin(choseUser, inPin)) {
        navigate('/browse');
      } else {
        setIsError(true);
      }
    } else {
    }
  }, [inPin]);

  const handleChangePin = (e) => {
    switch (e.target.name) {
      case '0':
        pin2Ref.current.focus();
        break;
      case '1':
        pin3Ref.current.focus();
        break;
      case '2':
        pin4Ref.current.focus();
        break;
      case '3':
        setInPin({ ...inPin, [e.target.name]: e.target.value });
        // check pin if correct
        break;
    }
    setInPin({ ...inPin, [e.target.name]: e.target.value });
    // console.log(inPin);
    // // const pin = userProfiles
    // console.log(userProfiles);

    console.log('target name', e.target.name);
  };
  return (
    <>
      {modal ? (
        <div className="bg-black w-screen h-screen z-30 flex justify-center">
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
            <from className="flex h-40 justify-center items-center outline-none">
              <input
                className="text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none  focus:border-white focus:ring-0"
                maxLength="1"
                name="0"
                type="password"
                ref={pin1Ref}
                onChange={handleChangePin}
              ></input>
              <input
                className="text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none  focus:border-white focus:ring-0"
                maxLength="1"
                name="1"
                type="password"
                ref={pin2Ref}
                onChange={handleChangePin}
              ></input>
              <input
                className="text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none  focus:border-white focus:ring-0"
                maxLength="1"
                name="2"
                type="password"
                ref={pin3Ref}
                onChange={handleChangePin}
              ></input>
              <input
                className="text-center w-28 h-28 mx-1 bg-black border-2 border-white focus:w-32 focus:h-32 appearance-none  focus:border-white focus:ring-0"
                maxLength="1"
                name="3"
                type="password"
                ref={pin4Ref}
                onChange={handleChangePin}
              ></input>
            </from>
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
