import LockCirclePic from '../../assets/images/lockcircle.png';
import VisaIconPic from '../../assets/images/visaicon.png';
import OmiseIconPic from '../../assets/images/omiseicon.png';
import MasterIconPic from '../../assets/images/mastericon.png';
import { ChevronRight, Lock } from '../../images';
import { Link } from 'react-router-dom';

export default function RegisterPay() {
  return (
    <div className="bg-white">
      <div className="flex justify-center">
        <div className="block p-6  bg-white max-w-sm mr-5 mt-40 ">
          <div className="flex justify-center ">
            <div className="flex-col">
              <div className="w-[40px] h-[40px] ml-24 mb-7">
                <img src={LockCirclePic} />
              </div>
              <div>
                <a className="text-gray-500 uppercase flex justify-center ">
                  Step 3 of 3
                </a>
              </div>
              <div className="flex-col">
                <h1 className="text-black text-2xl font-semibold flex justify-center">
                  Choose how to pay.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-2 mb-1">
            <a className="text-gray-700 text-sm ml-2">
              Your payment is encrypted and you can change how
            </a>
          </div>
          <div className="flex justify-center my-1">
            <a className="text-gray-700 text-sm ml-2">you pay anytime.</a>
          </div>
          <div className="flex justify-center mt-1 ">
            <a className="text-gray-800 font-semibold text-sm ml-2">
              Secure for peace of mind.
            </a>
          </div>
          <div className="flex justify-center ">
            <a className="text-gray-800 font-semibold text-sm ml-2">
              Cancel easily online.
            </a>
          </div>
          <div className="flex ml-48 my-4 ">
            <div>
              <a className="text-gray-600 text-xs">End-to-end encripted</a>
            </div>
            <div className="mt-2 ml-1.5">
              <div className="w-[10px] h-[10px] fill-yellow-400">
                <Lock />
              </div>
            </div>
          </div>
          <Link to={{ pathname: '/registerinputpay' }}>
            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-white  text-black font-xl text-xl rounded border-gray-500 shadow-md my-2"
            >
              <div className="flex">
                <a claasname="mr-2">Credit</a>
                <img src={VisaIconPic} className=" w-[50px] h-[30px] ml-4" />
                <img src={MasterIconPic} className=" w-[50px] h-[30px] mr-24" />
                <div className="ml-5 mt-2">
                  <div className="fill-gray-500 w-[10px] h-[10px]">
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </button>
          </Link>
          <Link to={{ pathname: '/registerinputpay' }}>
            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-white border-gray-500 text-black font-xl text-xl rounded shadow-md my-2"
            >
              <div className="flex">
                <a>Omise</a>
                <img
                  src={OmiseIconPic}
                  className=" w-[100px] h-[30px] ml-3 mr-24"
                />
                <div className="ml-5 mt-2">
                  <div className="fill-gray-500 w-[10px] h-[10px]">
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
