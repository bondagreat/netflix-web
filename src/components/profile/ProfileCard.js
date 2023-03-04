import { LockIcon } from '../../images';
import { useState } from 'react';
import defaultProfile from '../../assets/blank.png';

export default function ProfileCard({ id, name, profileImg, pin }) {
  const [light, setLight] = useState(false);
  // onClick show homepage
  return (
    <button>
      <div
        onMouseEnter={() => setLight(true)}
        onMouseLeave={() => setLight(false)}
        className="space-y-2"
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
