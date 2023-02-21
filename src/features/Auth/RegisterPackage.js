import { CheckCircleIcon, CheckIcon } from '../../images';
import PkMonthlyPic from '../../assets/images/pkmonthly.png';
import CardMonthlyPic from '../../assets/images/cardmonthly.png';
import CardThreeMPic from '../../assets/images/cardthreem.png';
import PkThreeMPic from '../../assets/images/pkthreem.png';
import { Link } from 'react-router-dom';

export default function RegisterPackage() {
  return (
    <div className="bg-white">
      <div className="justify-center">
        <div className="ml-48 mt-14">
          <div className="flex-col">
            <div className="flex justify-start">
              <a className="text-gray-500 uppercase flex justify-center ">
                Step 2 of 3
              </a>
            </div>
            <div className="flex justify-start">
              <h1 className="text-black text-2xl font-semibold flex justify-center">
                Choose the plan that's right to you.
              </h1>
            </div>
          </div>
          <div className="flex my-4">
            <div>
              <div className="w-4 h-4 fill-red-500 ">
                <CheckIcon />
              </div>
            </div>
            <a className="text-gray-500 text-sm ml-2">
              Watch all you want. Ad-fr
            </a>
          </div>
          <div className="flex my-4">
            <div>
              <div className="w-4 h-4 fill-red-500 ">
                <CheckIcon />
              </div>
            </div>
            <a className="text-gray-500 text-sm ml-2">
              Recommendations just for you.
            </a>
          </div>
          <div className="flex my-4">
            <div>
              <div className="w-4 h-4 fill-red-500 ">
                <CheckIcon />
              </div>
            </div>
            <a className="text-gray-500 text-sm ml-2">
              Change or cancel your plan anytime.
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="block p-6 rounded-lg shadow-lg border-gray-600/80 bg-white max-w-sm mt-30 mr-5">
            <div className="w-[100px] h-[100px]  rounded-md ml-32 mb-5">
              <img src={PkMonthlyPic} />
            </div>
            <div className="w-[350px]  rounded-md">
              <img src={CardMonthlyPic} />
            </div>
            <Link to={{ pathname: '/registerpay' }}>
              <button
                type="submit"
                className="w-full  px-6 py-2.5  bg-red-600    text-white font-xl   text-xl rounded  shadow-md my-2"
              >
                Next
              </button>
            </Link>
          </div>
          <div className="block p-6 rounded-lg shadow-lg border-gray-600/80 bg-white max-w-sm mt-30 ml-5">
            <div className="w-[100px] h-[100px]  rounded-md ml-32  mb-5">
              <img src={PkThreeMPic} />
            </div>
            <div className="w-[350px]  rounded-md">
              <img src={CardThreeMPic} />
            </div>
            <Link to={{ pathname: '/registerpay' }}>
              <button
                type="submit"
                className="w-full  px-6 py-2.5  bg-red-600    text-white font-xl   text-xl rounded  shadow-md my-2"
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
