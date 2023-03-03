import { ArrowLeftForm, ArrowRightForm, Dot } from '../../images';
import Footer from '../../layouts/Footer';
import NavBarAccount from '../../layouts/NavBarAccount';
export default function CancelMemberShip() {
  return (
    <>
      <NavBarAccount />
      <div className="flex-col  ml-[200px] mt-[90px]  mr-10 justify-center w-[1000px]">
        <div className="flex mb-6">
          <a className="text-blue-600 cursor-pointer no-underline hover:underline text-sm ">
            Return to Netflix
          </a>
        </div>
        <div className=" mb-4  text-sm ">
          <div className="flex justify-center items-center bg-red-700  w-[1000px] h-[800px]">
            <div className="flex-row bg-indigo-800 w-[50%] h-[600px]">
              <div className="flex-col items-center">
                <div className="flex justify-center flex-col mb-5">
                  <h1 className="text-2xl font-semibold mb-3">
                    It's easy to cancel or switch plan{' '}
                  </h1>
                  <p className=" text-sm font-normal">
                    Thanks for spending time with us. You're always welcome
                    back.
                  </p>
                  <p className="text-sm font-normal">
                    Finish your cancellation below.
                  </p>
                </div>
                <div className="flex justify-center ">
                  <form className="bg-white w-[95%] h-[50%] p-5 shadow-xl">
                    <div className="flex-start ">
                      <ul>
                        <li>
                          Canceellation will be effective at the end of your
                          current{' '}
                        </li>
                      </ul>
                      <p>billing peiod on March 4, 2023</p>
                    </div>
                    <br />
                    <div className="flex-start">
                      <ul>
                        <li>
                          Come back anytime. If you restart within 10 months,{' '}
                        </li>
                      </ul>
                      <p>
                        your profiles, favourites, viewing preferences and
                        account details will be waiting for you
                      </p>
                    </div>
                    <br />
                    <div className=" flex-col">
                      <div className="flex">
                        <button
                          className="bg-blue-600 w-full h-8 inline-block text-white font-medium text-lg p-5 mr-1 rounded-sm shadow-lg"
                          type="button"
                        >
                          Finish Cancellation
                        </button>
                        <button
                          className="bg-gray-400 w-full h-8 inline-block text-black font-medium text-lg p-5 ml-1 rounded-sm shadow-lg"
                          type="button"
                        >
                          Go Back
                        </button>
                      </div>
                      <br />
                      <div className="flex justify-center space-x-2">
                        <button
                          className="bg-gray-400 w-full h-8 text-black font-medium text-lg p-5"
                          type="button"
                        >
                          Change to Basic
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex justify-center items-center flex-col p-4">
                  <div className="flex">
                    <h1 className="text-lg text-gray-400 font-semibold ">
                      THB 149/Month
                    </h1>
                    <div className="w-[20px] h-[20px] fill-gray-400 mx-4">
                      <ArrowRightForm />
                    </div>
                    <h1 className="text-md text-black">THB 133/Month</h1>
                  </div>
                  <p className="text-sm">
                    Good video quality in HD [720] for 3 Months. Wattch on any
                    phone, tablet, computer or TV.
                  </p>
                  <a className="text-blue-600 cursor-pointer no-underline hover:underline">
                    Compare All Plans
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-row bg-green-500 w-[50%] h-[600px]"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
