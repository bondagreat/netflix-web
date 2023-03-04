import { LockIcon } from '../../images';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ProfileCard({
  id,
  name,
  profileImg,
  pin,
  setModal,
  setChoseUser,
}) {
  const [light, setLight] = useState(false);
  const navigate = useNavigate();

  // onClick show homepage if not have pass
  const handleClickProfile = () => {
    if (!pin) {
      navigate('/browse');
    } else {
      // modal ==> insert pin
      setModal(true);
      console.log('openModal');
      const pinToObj = {};
      for (let i = 0; i < pin.length; i++) {
        pinToObj[i] = pin.charAt(i);
      }
      setChoseUser(pinToObj);
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
          src={profileImg}
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
