import { EditIcon } from '../../images';
import CreateProfileLock from './CreateProfileLock';
import EditProfileLock from './EditProfileLock';
import DeleteProfileLock from './DeleteProfileLock';
export default function EditProfile() {
  return (
    <>
      <div className="h-screen bg-black flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex mb-4 ">
            <h1 className="text-white text-5xl ">Edit Profile</h1>
          </div>
          <hr />
          <div className="flex flex-row gap-4 mt-4">
            <div className="relative">
              <img
                className="w-[100px]"
                src="http://occ-0-2339-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ_JEhgVlFamty5bFR0ofXrH6YH0NJ868l21auwAbp78Qx2jeEuB088_MY2tepK6ppRoDQ7Fet7t8c4CI7t1xn_zbkLj0QtJU8Ot.png?r=749"
                alt="1"
              />
              <div className="fill-white w-7 h-7 absolute top-16 left-2 bg-black rounded-xl">
                <EditIcon />
              </div>
            </div>
            <div className="">
              <div className="flex flex-col">
                <p className="text-white text-xs">Name:</p>
                <input className="bg-gray-500 w-72 h-8 text-white" />
              </div>
              <hr className="mt-12" />
              <div className="flex justify-center flex-col mt-7">
                <p className="text-white text-xs">Profile Lock</p>
                <div className="flex gap-4">
                  {true ? <EditProfileLock /> : <CreateProfileLock />}
                  {true && <DeleteProfileLock />}
                </div>
              </div>

              <div className="mt-10"></div>
            </div>
          </div>
          <hr />
          <div className="mt-7 flex justify-around ">
            <button className="text-black bg-white  px-6 ">Save</button>
            <button className="border-2 border-white px-4 text-white py-1  ">
              Cancel
            </button>
            <button className="border-2 border-white  text-white px-4">
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
