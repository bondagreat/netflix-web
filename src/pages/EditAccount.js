import Ultra from "../img/Ultra.png";
import visa from "../img/visa.png";
import girl from "../img/girl.png";
import key from "../img/key.png";
import mastercard from "../img/mastercard.png";

export default function EditAccount() {
  return (
    <div className="flex-low h-screen mx-auto mt-10 w-3/5 justify-center">
      <div className="flex-5 mb-4 w-[1000px] text-4xl">Account</div> <hr />
      <div className="flex mx-auto pt-3 h-72">
        <div className="h-full w-full text-lg  text-gray-500 flex flex-col ">
          <h1>MEMBERSHIP & BILLING</h1>
          <botton className=" w-fit px-2 border-none bg-slate-200 text-zinc-900  border-gray-500 shadow">
            <p>Cancel Membership</p>
          </botton>
        </div>
        <div className="h-full w-full">
          <div className="flex-row  w-60 h-72  text-gray-500 text-base">
            <div className="text-black">tp@gmail.com</div>
            <div className="text-gray-400 mt-2">Password:********</div>
            <div className="text-gray-400 mt-2">Phone:097 222 4444</div>
            <br />
            <br />
            <img className="w-40px h-20px" src={mastercard} />
            <div className="mt-[-55px] ml-[100px]">
              <img className=" w-40px h-20px" src={visa} />
            </div>
            <p>
              <botton>Your next billing date is February 27, 2023</botton>
            </p>
          </div>
        </div>
        <div className="h-full w-full text-right">
          <a class=" text-blue-600 no-underline hover:underline">
            Change Account Email
          </a>
          <br />
          <a class=" text-blue-600 no-underline hover:underline ">
            Change Password
          </a>
          <br />
          <a class=" text-blue-600 no-underline hover:underline">
            Change Phone Number
          </a>
          <br />
          <br />
          <br />
          <br />
          <a class=" text-blue-600 no-underline hover:underline">
            Manage Payment info
          </a>
        </div>
      </div>
      <hr />
      <div className="flex mx-auto pt-3 h-20 ">
        <div className="h-full w-full text-lg  text-gray-500 flex flex-col ">
          <h1>MEMBERSHIP & BILLING</h1>
        </div>
        <div className="h-full w-full">
          <div className="flex pl-1 text-black  ">
            <p>Premium</p>
            <img className="ml-2 w-40px h-20px" src={Ultra} />
          </div>
        </div>
        <div className="h-full w-full text-right">
          <a class=" text-blue-600 no-underline hover:underline ">
            Change Plan
          </a>
        </div>
      </div>
      <hr />
      <div className="flex mx-auto pt-3 h-24 ">
        <div className="h-full w-full text">
          <h1>
            PROFILE & PARENTAL <br /> CONTROLS
          </h1>
        </div>
        <div className="h-full w-full">
          <img className="w-40px h-20px" src={girl} />
          <div className="pl-20 mt-[-60px] text-start font-medium">ball</div>
          <div className="pl-20 mt-[5px] text-xs font-light">
            All Masturity Ratings
          </div>
        </div>
        <div className="flex h-full w-full justify-between mt-4">
          <div className="flex-col justify-center">
            <p>Profile Lock</p>
            <p className="ml-5">on</p>
            <div className="mt-[-20px]">
              <img className=" pl-12 w-40px h-20px" src={key} />
            </div>
          </div>
          <div>
            <a class=" text-blue-600 no-underline hover:underline ">Change</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex mx-auto pt-3 h-24 ">
        <div className="h-full w-full text"></div>
        <div className="h-full w-full">
          <img className="w-40px h-20px" src={girl} />
          <div className="pl-20 mt-[-60px] text-start font-medium">ball</div>
          <div className="pl-20 mt-[5px] text-xs font-light">
            All Masturity Ratings
          </div>
        </div>
        <div className="flex h-full w-full justify-between mt-4">
          <div className="flex-col justify-center">
            <p>Profile Lock</p>
            <p className="ml-8">off</p>
          </div>
          <div>
            <a class=" text-blue-600 no-underline hover:underline ">Change</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex mx-auto pt-3 h-24 ">
        <div className="h-full w-full text"></div>
        <div className="h-full w-full">
          <img className="w-40px h-20px" src={girl} />
          <div className="pl-20 mt-[-60px] text-start font-medium">ball</div>
          <div className="pl-20 mt-[5px] text-xs font-light">
            All Masturity Ratings
          </div>
        </div>
        <div className="flex h-full w-full justify-between mt-4">
          <div className="flex-col justify-center">
            <p>Profile Lock</p>
            <p className="ml-8">off</p>
          </div>
          <div>
            <a class=" text-blue-600 no-underline hover:underline ">Change</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex mx-auto pt-3 h-24 ">
        <div className="h-full w-full text"></div>
        <div className="h-full w-full">
          <img className="w-40px h-20px" src={girl} />
          <div className="pl-20 mt-[-60px] text-start font-medium">ball</div>
          <div className="pl-20 mt-[5px] text-xs font-light">
            All Masturity Ratings
          </div>
        </div>
        <div className="flex h-full w-full justify-between mt-4">
          <div className="flex-col justify-center">
            <p>Profile Lock</p>
            <p className="ml-8">off</p>
          </div>
          <div>
            <a class=" text-blue-600 no-underline hover:underline ">Change</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex mx-auto pt-3 h-24 ">
        <div className="h-full w-full text"></div>
        <div className="h-full w-full">
          <img className="w-40px h-20px" src={girl} />
          <div className="pl-20 mt-[-60px] text-start font-medium">ball</div>
          <div className="pl-20 mt-[5px] text-xs font-light">
            All Masturity Ratings
          </div>
        </div>
        <div className="flex h-full w-full justify-between mt-4">
          <div className="flex-col justify-center">
            <p>Profile Lock</p>
            <p className="ml-8">off</p>
          </div>
          <div>
            <a class=" text-blue-600 no-underline hover:underline ">Change</a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
