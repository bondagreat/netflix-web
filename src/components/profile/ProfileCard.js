import { LockIcon } from '../../images';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import defaultProfile from '../../assets/blank.png';
import { useDispatch } from 'react-redux';
import { fetchProfile } from '../../redux/profileSlice';

export default function ProfileCard({
  id,
  name,
  profileImg,
  pin,
  setModal,
  setChoseUser,
  setUserId,
}) {
  const [light, setLight] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // onClick show homepage if not have pass
  const handleClickProfile = () => {
    if (!pin) {
      console.log(id);
      dispatch(fetchProfile(id));
      navigate('/browse');
    } else {
      // modal ==> insert pin
      setUserId(id);
      const pinToObj = {};
      for (let i = 0; i < pin.length; i++) {
        pinToObj[i] = pin.charAt(i);
      }
      setChoseUser(pinToObj);
      setModal(true);
    }
  };

  return (
    <button>
      <div
        onMouseEnter={() => setLight(true)}
        onMouseLeave={() => setLight(false)}
        className="space-y-2"
        onClick={handleClickProfile}
      >
        <img
          className={`w-[100px] h-[100px] rounded-md ${
            light ? 'outline outline-[3px] outline-offset-0 outline-white' : ''
          }`}
          src={profileImg || defaultProfile}
          alt={id}
        />
        <span
          className={`flex justify-center text-gray-500 ${
            light ? 'text-white' : ''
          }`}
        >
          {name}
        </span>
      </div>
      <div className="w-4 h-4 mt-4 mx-auto ">{pin && <LockIcon />}</div>
    </button>
  );
}
