import { PlusIcon } from '../../images';
import { useState } from 'react';

export default function AddProfileCard() {
  const [light, setLight] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setLight(true)}
      onMouseLeave={() => setLight(false)}
    >
      <div
        className={`w-[100px] h-[100px] bg-black ${light ? 'bg-white' : ''}`}
      ></div>
      <button className="fill-white w-[100px] h-[100px] absolute top-0 left-0  z-30 ">
        <div className="w-[100px] h-[100px] flex justify-center items-center">
          <PlusIcon />
        </div>
      </button>
      <span
        className={`flex justify-center text-gray-500 ${
          light ? 'text-white' : ''
        }`}
      >
        Add profile
      </span>
    </div>
  );
}
