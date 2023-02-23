import Ultra from "../img/Ultra.png";
import visa from "../img/visa.png";
import girl from "../img/girl.png";
import key from "../img/key.png";
import mastercard from "../img/mastercard.png";
import sinceLogin from "../img/sinceLogin.png";

export default function EditAccount() {
  return (
    <div className="flex-low h-screen ml-[445px] mt-6 mr-10 w-1/2 justify-center">
      <div className="flex  mb-4 w-[1200px] text-4xl">
        <h1>Account</h1>{" "}
        <div className="mt-3 ml-6 flex text-sm font-semibold ">
          {" "}
          <img
            className=" block w-[25px] mt-[-2px] mr-[5px] h-[25px]"
            src={sinceLogin}
          />
          Member Since September 2019
        </div>
      </div>{" "}
      <hr className="border-black" />
      <div className="flex mx-auto pt-3 h-72">
        <div className="h-full w-full text-lg  text-gray-500 flex flex-col ">
          <h1 className="mb-2">MEMBERSHIP & BILLING</h1>
          <botton className="cursor-pointer text-sm px-9 pt-2 pb-2 w-fit bg-gray-200 hover:bg-slate-50  border-2 border-none text-zinc-900  shadow-xl">
            Cancel Membership
          </botton>
        </div>
        <div className="h-full w-full ml-[-90px]">
          <div className="flex-row  w-60 h-72  text-gray-500 text-base">
            <div className="text-black">tp@gmail.com</div>
            <div className="text-gray-500 mt-2">Password:********</div>
            <div className="text-gray-500 mt-2">Phone:097 222 4444</div>
            <br />

            <div className="mt-[5px] w-18 flex items-start space-x-1">
              <div>
                <img className="h-5 w-10" src={mastercard} />
              </div>
              <div>
                <img className="h-5 w-50" src={visa} />
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
          <a className="text-blue-600 cursor-pointer no-underline hover:underline">
            Change Account Email
          </a>
          <br className="text-black" />
          <a className="block cursor-pointer mt-2 text-blue-600 no-underline hover:underline ">
            Change Password
          </a>
          <br />
          <a className="block cursor-pointer mt-[-15px] text-blue-600 no-underline hover:underline">
            Change Phone Number
          </a>

          <br />

          <a className="cursor-pointer  text-blue-600 no-underline hover:underline">
            Manage Payment info
          </a>
        </div>
      </div>
      <hr className="border-black" />
      <div className="flex mx-auto pt-3 h-20 ">
        <div className="h-full w-full  text-lg  text-gray-500 flex flex-col ">
          <h1>MEMBERSHIP & BILLING</h1>
        </div>
        <div className="h-full w-full ml-[-90px]">
          <div className="flex pl-1 text-black  ">
            <p>Premium</p>
            <img className="ml-2 w-40px h-20px" src={Ultra} />
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
          <img className="w-40px h-20px" src={girl} />
          <div className="pl-20 mt-[-60px] text-start font-medium">ball</div>
          <div className="pl-20 mt-[5px] text-xs font-light">
            All Masturity Ratings
          </div>
        </div>
        <div className="flex h-full w-full  justify-between mt-4">
          <div className="flex-col justify-center">
            <p>Profile Lock</p>
            <p className="ml-5">on</p>
            <div className="mt-[-20px]">
              <img className=" pl-12 w-40px h-20px" src={key} />
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
            <a class="cursor-pointer text-blue-600 no-underline hover:underline ">
              Change
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <hr className=" w-[770px]" />
      </div>
    </div>
  );
}
