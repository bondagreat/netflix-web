// import { ChevronDown, LockIcon } from '../images/index';
import MasterIcon from '../assets/images/mastericon.png';
import VisaIcon from '../assets/images/visaicon.png';
// import GoodHd from '../assets/images/goodhd.png';
// import Women from '../assets/images/women.png';
import NavBarAccount from '../layouts/NavBarAccount';
import Footer from '../layouts/Footer';
import { useState } from 'react';
import ModalChangeAccountEmail from '../components/account/ModalChangeAccountEmail';
import ModalChangeAccountPassword from '../components/account/ModalChangeAccountPassword';
import ModalChangeAccountPhone from '../components/account/ModalChangeAccountPhone';
import { Link } from 'react-router-dom';

export default function UserEditAccountPage() {
  const [openEmail, setOpenEmail] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);

  const handleOpenEmail = () => {
    setOpenEmail(true);
  };
  const handleCloseEmail = () => {
    setOpenEmail(false);
  };
  const handleOpenPassword = () => {
    setOpenPassword(true);
  };
  const handleClosePassword = () => {
    setOpenPassword(false);
  };
  const handleOpenPhone = () => {
    setOpenPhone(true);
  };
  const handleClosePhone = () => {
    setOpenPhone(false);
  };
  return (
    <>
      <NavBarAccount />
      <div className="flex-low  bg-white ml-[200px] mt-[120px]  mr-10 justify-center w-[1000px] ">
        {/* <div className="mt-[120px]"> */}
        <div className="flex  mb-4  text-4xl ">
          <h1>Account</h1>{' '}
          <div className="mt-3 ml-6 flex text-sm font-semibold ">
            {' '}
            Member Since September 2019
          </div>
        </div>{' '}
        <hr className="border-black" />
        <div className="flex mx-auto pt-3 h-72">
          <div className="h-full w-full text-lg  text-gray-500 flex flex-col ">
            <h1 className="mb-2">MEMBERSHIP & BILLING</h1>
            <Link to={{ pathname: '/cancelMember' }}>
              <button className="cursor-pointer text-sm px-9 pt-2 pb-2 w-fit bg-gray-200 hover:bg-slate-50  border-2 border-none text-zinc-900  shadow-xl">
                Cancel Membership
              </button>
            </Link>
          </div>
          <div className="h-full w-full ml-[-90px]">
            <div className="flex-row  w-60 h-72  text-gray-500 text-base">
              <div className="text-black">tp@gmail.com</div>
              <div className="text-gray-500 mt-2">Password:********</div>
              <div className="text-gray-500 mt-2">Phone:097 222 4444</div>
              <br />

              <div className="mt-[5px] w-18 flex items-start space-x-1">
                <div>
                  <img className="h-5 w-10" src={MasterIcon} />
                </div>
                <div>
                  <img className="h-5 w-50" src={VisaIcon} />
                </div>
                <div>
                  <p className="flex ml-22 mb-[8px]">•••• •••• •••• 4222</p>
                </div>
              </div>
              <p className="flex-col text-black  w-80 ">
                Your next billing date is February 27, 2023
              </p>
            </div>
          </div>

          <div className="h-full w-full text-right ">
            <a
              className="text-blue-600 cursor-pointer no-underline hover:underline"
              id="email"
              type="button"
              onClick={handleOpenEmail}
            >
              Change Account Email
            </a>
            <ModalChangeAccountEmail
              show={openEmail}
              setClose={handleCloseEmail}
            />
            <br className="text-black" />
            <a
              className="block cursor-pointer mt-2 text-blue-600 no-underline hover:underline "
              id="password"
              type="button"
              onClick={handleOpenPassword}
            >
              Change Password
            </a>
            <ModalChangeAccountPassword
              show={openPassword}
              setClose={handleClosePassword}
            />
            <br />
            <a
              className="block cursor-pointer mt-[-15px] text-blue-600 no-underline hover:underline"
              id="phoneNumber"
              type="button"
              onClick={handleOpenPhone}
            >
              Change Phone Number
            </a>
            <ModalChangeAccountPhone
              show={openPhone}
              setClose={handleClosePhone}
            />

            <br />

            {/* <a className="cursor-pointer  text-blue-600 no-underline hover:underline">
              Manage Payment info
            </a> */}
          </div>
        </div>
        {/* <hr className="border-black" />
        <div className="flex mx-auto pt-3 h-20 ">
          <div className="h-full w-full  text-lg  text-gray-500 flex flex-col ">
            <h1>PLAN DETAILS</h1>
          </div>
          <div className="h-full w-full ml-[-90px]">
            <div className="flex pl-1 text-black  ">
              <p>Good</p>
              <img className="ml-2 w-40px h-20px" src={GoodHd} />
            </div>
          </div>
          <div className="h-full w-full text-right">
            <a class="cursor-pointer text-blue-600 no-underline hover:underline ">
              Change Plan
            </a>
          </div>
        </div>
        <hr className="border-black" />
        <div className="flex mx-auto pt-3 h-24 ">
          <div className="h-full w-full  text-gray-500">
            <h1>
              PROFILE & PARENTAL <br /> CONTROLS
            </h1>
          </div>
          <div className="h-full w-full ml-[-90px]">
            <img className="w-40px h-20px" src={Women} />
            <div className="pl-20 mt-[-60px] text-start font-medium">Ball</div>
            <div className="pl-20 mt-[5px] text-xs font-light">
              All Masturity Ratings
            </div>
          </div>
          <div className="flex h-full w-full  justify-between mt-4">
            <div className="flex-col justify-center">
              <p>Profile Lock</p>
              <p className="ml-5">on</p>
            </div>
            <div>
              <a class="cursor-pointer text-blue-600 no-underline hover:underline ">
                Change
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <hr className=" w-[770px]" />
        </div>
        <div className="flex mx-auto pt-3 h-24 ">
          <div className="h-full w-full text"></div>
          <div className="h-full w-full ml-[-90px]">
            <img className="w-40px h-20px" src={Women} />
            <div className="pl-20 mt-[-60px] text-start font-medium">Ball</div>
            <div className="pl-20 mt-[5px] text-xs font-light">
              All Masturity Ratings
            </div>
          </div>
          <div className="flex h-full w-full justify-between mt-4">
            <div className="flex-col justify-center">
              <p>Profile Lock</p>
              <p className="ml-8">off</p>
              <div className="mt-[-20px]">
                <div className=" w-[20px] h-[20px] fill-black">
                  <LockIcon />
                </div>
              </div>
            </div>
            <div>
              <a class="cursor-pointer text-blue-600 no-underline hover:underline ">
                Change
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <hr className=" w-[770px]" />
        </div>
        <div className="flex mx-auto pt-3 h-24 ">
          <div className="h-full w-full text"></div>
          <div className="h-full w-full ml-[-90px]">
            <img className="w-40px h-20px" src={Women} />
            <div className="pl-20 mt-[-60px] text-start font-medium">Ball</div>
            <div className="pl-20 mt-[5px] text-xs font-light">
              All Masturity Ratings
            </div>
          </div>
          <div className="flex h-full w-full justify-between mt-4">
            <div className="flex-col justify-center">
              <p>Profile Lock</p>
              <p className="ml-8">off</p>
              <div className="mt-[-20px]">
                <div className=" w-[20px] h-[20px] fill-black">
                  <LockIcon />
                </div>
              </div>
            </div>
            <div>
              <a class="cursor-pointer text-blue-600 no-underline hover:underline ">
                Change
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <hr className=" w-[770px]" />
        </div>
        <div className="flex mx-auto pt-3 h-24 ">
          <div className="h-full w-full text"></div>
          <div className="h-full w-full ml-[-90px]">
            <img className="w-40px h-20px" src={Women} />
            <div className="pl-20 mt-[-60px] text-start font-medium">Ball</div>
            <div className="pl-20 mt-[5px] text-xs font-light">
              All Masturity Ratings
            </div>
          </div>
          <div className="flex h-full w-full justify-between mt-4">
            <div className="flex-col justify-center">
              <p>Profile Lock</p>
              <p className="ml-8">off</p>
              <div className="mt-[-20px]">
                <div className=" w-[20px] h-[20px] fill-black">
                  <LockIcon />
                </div>
              </div>
            </div>
            <div>
              <a class="cursor-pointer text-blue-600 no-underline hover:underline ">
                Change
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <hr className=" w-[770px]" />
        </div>
        <div className="flex mx-auto pt-3 h-24 ">
          <div className="h-full w-full text"></div>
          <div className="h-full w-full ml-[-90px]">
            <img className="w-40px h-20px" src={Women} />
            <div className="pl-20 mt-[-60px] text-start font-medium">Ball</div>
            <div className="pl-20 mt-[5px] text-xs font-light">
              All Masturity Ratings
            </div>
          </div>
          <div className="flex h-full w-full justify-between mt-4">
            <div className="flex-col justify-center">
              <p>Profile Lock</p>
              <p className="ml-8">off</p>
              <div className="mt-[-20px]">
                <div className=" w-[20px] h-[20px] fill-black">
                  <LockIcon />
                </div>
              </div>
            </div>
            <div>
              <a class="cursor-pointer text-blue-600 no-underline hover:underline ">
                Change
              </a>
            </div>
          </div>
        </div> */}
        <div className="flex justify-end">
          <hr className=" w-[770px]" />
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}
