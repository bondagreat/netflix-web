import { Link } from 'react-router-dom';
import profileImage from '../../assets/blank.png';
import { useState } from 'react';

export default function AddProfile() {
  const [change, setChange] = useState(false);

  const handleChange = (e) => {
    if (e.target.value) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  return (
    <>
      <div className="h-screen bg-black flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col mb-3 ">
            <h1 className="text-white text-5xl ">Add Profile</h1>
            <p className="text-gray-400 mt-4">
              Add a profile for another person watching Netflix.
            </p>
          </div>
          <hr />
          <div className="flex flex-row gap-4 mt-4">
            <div className="relative">
              <img className="w-[100px]" src={profileImage} alt="1" />
            </div>
            <div className="mt-10">
              <div className="flex flex-col ">
                <input
                  className="bg-gray-500 w-72 h-8 text-white "
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>

              <div className="mt-12"></div>
            </div>
          </div>
          <hr />
          <div className="mt-7 flex justify-start gap-4 ">
            <button
              className={` ${
                change ? 'bg-red-700 text-white' : 'text-black bg-white'
              } hover:bg-red-700 hover:text-white px-6 `}
            >
              <Link to={'/profile'}>Continue</Link>
            </button>

            <button className="border-2 border-gray-400 px-5 text-gray-400 hover:border-white hover:text-white py-1  ">
              <Link to={'/profile'}>Cancel</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
