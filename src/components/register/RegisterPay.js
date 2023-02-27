import LockCirclePic from '../../assets/images/lockcircle.png';
import VisaIconPic from '../../assets/images/visaicon.png';
import MasterIconPic from '../../assets/images/mastericon.png';
import { ChevronRight, Lock } from '../../images';
import { useState } from 'react';
import * as paymentApi from '../../apis/payment-api';

const myPayment = {
  publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
  secretKey: process.env.REACT_APP_OMISE_SECRET_KEY,
  outher: process.env.REACT_APP_ENDPOINT_URL,
};

export default function RegisterPay() {
  const [souce, setSouce] = useState();

  const handleClickPay = () => {
    window.OmiseCard.open({
      amount: 12345446,
      currency: 'THB',
      image:
        'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Emblem-700x394.jpg',
      frameLabel: 'NETFLIX',
      defaultPaymentMethod: 'credit_card',
      onCreateTokenSuccess: async (noti) => {
        if (noti.startsWith('tokn_')) {
          const token = { token: noti };
          await paymentApi.sendToken(token);
        } else {
          setSouce = window.form.omiseSource.value = noti;
          console.log(noti);
        }
        window.form.submit();
        console.log(souce);
      },
    });
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center">
        <div className="block p-6  bg-white max-w-sm mr-5 mt-40 ">
          <div className="flex justify-center ">
            <div className="flex-col">
              <div className="w-[40px] h-[40px] ml-24 mb-7">
                <img src={LockCirclePic} alt="1" />
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
          {/* <Link to={{ pathname: '/registerinputpay' }}> */}
          <button
            onClick={handleClickPay}
            className="w-full px-6 py-2.5 bg-white  text-black font-xl text-xl rounded border-gray-500 shadow-md my-2"
          >
            <div className="flex">
              <a claasname="mr-2">Credit</a>
              <img
                src={VisaIconPic}
                alt="1"
                className=" w-[50px] h-[30px] ml-4"
              />
              <img
                src={MasterIconPic}
                alt="1"
                className=" w-[50px] h-[30px] mr-24"
              />
              <div className="ml-5 mt-2">
                <div className="fill-gray-500 w-[10px] h-[10px]">
                  <ChevronRight />
                </div>
              </div>
            </div>
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
