// import { NetflixLogo, UserLogo } from "../icons/index";
import ChangeEmail from "../components/editAccount/changeEmail";
import Ultra from "../img/Ultra.png";

export default function EditAccount() {
  return (
    <div className=" bg-black ">
      <div className="flex-low h-screen mx-auto w-3/4 justify-center bg-gray-500">
        <div classname=" mx-auto mr-30">
          <div className="flex-5 ml-24 mr-24 h-10 text-xl">
            <div className="mt-3 mr-20 ml-20">
              Account
              <hr />
              <div
                className="flex-low text-base mt-1  mb-44 w-30
           text-gray-600"
              >
                <div className="flex-col h-9">MEMBERSHIP & BILLING</div>
                <div class="flex justify-left space-x-3">
                  <botton className="border-none bg-slate-200 text-zinc-900 p-2 border-gray-500 shadow">
                    Cancel Membership
                  </botton>
                </div>
                <div className="mt-[-35px] items-stretch text-gray-600 ml-28  h-30  ">
                  <div className="flex h-9 ml-28 text-black justify-between ">
                    tp@gmail.com
                    <a class=" text-blue-600 no-underline hover:underline">
                      Change Account Email
                    </a>
                  </div>
                  <div className="flex justify-between h-9 ml-28 ">
                    Password: *******{" "}
                    <a class=" text-blue-600 no-underline hover:underline ml-[600px]">
                      Change Password
                    </a>
                  </div>
                  <div className="flex justify-between h-9 ml-28 ">
                    Phone: 0123456789{" "}
                    <a class=" text-blue-600 no-underline hover:underline ml-[1192px]">
                      Change Phone Number
                    </a>
                    <hr />
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <div className="flex flex-col text-base mt-1 h-14 mb-22 text-gray-600">
                  PLAN DETAILS
                  <div className="flex h-9 ml-[200px] mt-[-24px] text-black  ">
                    <p>Premium</p>
                    <img className=" w-40px h-20px" src={Ultra} />
                  </div>
                  <a class=" text-blue-600 no-underline hover:underline">
                    Change Plan
                  </a>
                </div>
                <hr />
                <div className="flex  text-base mt-1 h-24 text-gray-600">
                  SECURITY & PRIVATE
                </div>
                <hr />
                <div className="flex  text-base mt-1 h-24  text-gray-600">
                  PROFILE & PARENTAL
                  <br />
                  CONTROLS
                </div>
              </div>
            </div>
          </div></div>
        </div>
      </div>
    </div>
  );
}
