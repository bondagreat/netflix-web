import { EditIcon, LockIcon } from '../../images';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ManageProfileCard({ id, idx, name, profileImg, pin }) {
  const [light, setLight] = useState(false);

  return (
    <button className="relative">
      <Link to="/profiles/edit" state={{ id, idx }}>
        <div
          onMouseEnter={() => setLight(true)}
          onMouseLeave={() => setLight(false)}
        >
          <img
            className={`w-[100px] h-[100px] rounded-md ${
              light
                ? 'outline outline-[3px] outline-offset-0 outline-slate-500'
                : ''
            }`}
            src={profileImg}
            alt={id}
          />
          <div className="fill-white w-[100px] h-[100px] absolute top-0 left-0 bg-black/50 z-30 rounded-md">
            <div className="absolute top-10 left-10 w-7 h-7">
              <EditIcon />
            </div>
          </div>
          <span
            className={`flex justify-center text-gray-500 mt-2 ${
              light ? 'text-white' : ''
            }`}
          >
            {name}
          </span>
        </div>
      </Link>
      <div className="w-4 h-4 mt-5 mx-auto">{pin && <LockIcon />}</div>
    </button>
  );
}
