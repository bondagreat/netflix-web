import { EditIcon } from '../../images';
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
                            <div className="fill-white w-7 h-7 absolute top-16 left-2 bg-black rounded-full">
                                <EditIcon />
                            </div>
                        </div>
                        <div className="mt-11">
                            <div className="flex flex-col">
                                <p className="text-white text-xs">Name:</p>
                                <input className="bg-gray-500 w-72 h-8" />
                            </div>
                            <hr className="mt-5" />
                            <div className="flex justify-center flex-col mt-7">
                                <p className="text-white text-xs">
                                    Change your PIN:
                                </p>
                                <input className="bg-gray-500 w-72 h-8" />
                            </div>
                            <div className="flex justify-center flex-col mt-7 mb-7">
                                <p className="text-white text-xs">
                                    Confirm Change your PIN:
                                </p>
                                <input className="bg-gray-500 w-72 h-8" />
                            </div>
                            <div className="mt-10"></div>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-7 flex justify-around ">
                        <button className="text-black bg-white  px-6 ">
                            Save
                        </button>
                        <button className="border-2 border-white px-4 text-white  ">
                            Cancel
                        </button>
                        <button className="border-2 border-white  text-white px-4">
                            Delete Profile
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="h-screen flex justify-center flex-col bg-black">
                <div className="flex justify-center">
                    <h1 className="text-white">Edit Profile</h1>
                </div>
                <hr className="w-[25%] ml-[500px]" />
                <div className="flex justify-center mt-6 gap-2">
                    <img
                        className="w-[100px]"
                        src="http://occ-0-2339-769.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQ_JEhgVlFamty5bFR0ofXrH6YH0NJ868l21auwAbp78Qx2jeEuB088_MY2tepK6ppRoDQ7Fet7t8c4CI7t1xn_zbkLj0QtJU8Ot.png?r=749"
                        alt="1"
                    />
                    <div className="flex flex-col">
                        <p className="text-white">Name:</p>
                        <input className="bg-gray-500 w-72 h-8" />
                    </div>
                </div>
                <hr className="w-[25%] ml-[500px] mt-6" />
                <div className="flex justify-center flex-col">
                    <div className="flex justify-center flex-col">
                        <p className="text-white">Change your PIN:</p>
                        <input className="bg-gray-500 w-72 h-8" />
                    </div>

                    <div className="flex justify-center flex-col">
                        <p className="text-white">Confirm Change your PIN:</p>
                        <input className="bg-gray-500 w-72 h-8" />
                    </div>
                </div>
                <div></div>
            </div> */}
        </>
    );
}
