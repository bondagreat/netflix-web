import { PlusIcon } from '../../images';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function AddProfileCard() {
  const [light, setLight] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setLight(true)}
      onMouseLeave={() => setLight(false)}
    >
      <div
        className={`w-[100px] h-[100px] bg-black rounded-md ${
          light ? 'bg-gray-100' : ''
        }`}
      ></div>
      <Link to={'/AddProfile'}>
        <button className="fill-white w-[100px] h-[100px] absolute top-0 left-0 z-30">
          <div className="w-[100px] h-[100px] flex justify-center items-center">
            <PlusIcon />
          </div>
        </button>
      </Link>
      <span
        className={`flex justify-center text-gray-500 mt-2 ${
          light ? 'text-white' : ''
        }`}
      >
        Add profile
      </span>
    </div>
  );
}
