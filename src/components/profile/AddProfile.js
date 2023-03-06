import { Link, useNavigate } from 'react-router-dom';
import defaultProfile from '../../assets/blank.png';
import { useState } from 'react';
import * as profileApi from '../../apis/profile-api';
import { useDispatch } from 'react-redux';
import { addProfile } from '../../redux/authSlice';
import useLoading from '../../hooks/useLoading';

export default function AddProfile() {
  const [change, setChange] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.value) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      startLoading();
      if (name) {
        const res = await profileApi.addProfile({ name: name });
        dispatch(addProfile(res.data.newProfile));
      }
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
      navigate('/profiles');
    }
  };

  return (
    <>
      <div className="h-screen bg-black flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col mb-3 ">
            <h1 className="text-white text-5xl ">Add Profile</h1>
            <p className="text-gray-500 mt-4">
              Add a profile for another person watching Netflix.
            </p>
          </div>
          <hr className="border-gray-600" />
          <div className="flex flex-row gap-4 mt-4">
            <div className="relative">
              <img
                className="w-[100px] h-[100px] rounded-md"
                src={defaultProfile}
                alt="1"
              />
            </div>
            <div className="mt-10">
              <div className="flex flex-col ">
                <input
                  className="bg-gray-500 w-72 h-8 text-white placeholder-gray-200 px-2"
                  placeholder="Name"
                  onChange={(e) => {
                    handleChange(e);
                    handleChangeName(e);
                  }}
                />
              </div>

              <div className="mt-12"></div>
            </div>
          </div>
          <hr className="border-gray-600" />
          <div className="mt-7 flex justify-start gap-4 ">
            <button
              className={` ${
                change ? 'bg-red-700 text-white' : 'text-black bg-white'
              } hover:bg-red-700 hover:text-white px-6 `}
              onClick={handleSubmit}
            >
              {/* <Link to={'/profiles'}> */}
              Continue
              {/* </Link> */}
            </button>

            <button className="border-2 border-gray-400 px-5 text-gray-400 hover:border-white hover:text-white py-1  ">
              <Link to={'/profiles'}>Cancel</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
