import { LockIcon } from '../../images';
import { useState } from 'react';

export default function ProfileCard({ id, name, profileImg, pin }) {
  const [light, setLight] = useState(false);
  // onClick show homepage
  return (
    <button>
      <div
        onMouseEnter={() => setLight(true)}
        onMouseLeave={() => setLight(false)}
      >
        <img
          className={`w-[100px] h-[100px] outline ${
            light ? 'outline-1 outline-offset-0 outline-white' : ''
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
      <div className="w-4 h-4 mt-5 mx-auto ">{pin && <LockIcon />}</div>
    </button>
  );
}
