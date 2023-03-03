import { ArrowLeftForm, ArrowRightForm, Dot } from '../../images';
import Footer from '../../layouts/Footer';
import NavBarAccount from '../../layouts/NavBarAccount';
import MovieJunge from '../../assets/images/moviejung.png';
import { Link } from 'react-router-dom';
export default function CancelMemberShip() {
  return (
    <>
      <NavBarAccount />
      <div className="flex-col  ml-[200px] mt-[90px]  mr-10 justify-center ">
        <Link to={{ pathname: '/homepage' }}>
          <div className="flex mb-6">
            <a className="text-blue-600 cursor-pointer no-underline hover:underline text-sm ">
              Return to Netflix
            </a>
          </div>
        </Link>
        <div className=" mb-4  text-sm mt-5 ">
          <div className="flex justify-center    w-[1000px] h-[800px]">
            <div className="flex-row  w-[50%] h-[600px] pr-5">
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
                  <form className="bg-white w-[95%] h-[50%] p-5 shadow-xl border-gray-600">
                    <div className="flex-start ">
                      <ul>
                        <li>
                          Cancellation will be effective at the end of your
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
                          className="bg-blue-600 w-full h-8 inline-block text-white font-light text-lg  mr-1 rounded-sm shadow-lg"
                          type="button"
                        >
                          Finish Cancellation
                        </button>
                        {/* <Link to={{ pathname: '/editaccountpage' }}> */}
                        <button
                          className="bg-gray-200 w-full h-8 inline-block text-black font-medium text-lg  ml-1 rounded-sm shadow-lg"
                          type="button"
                        >
                          Go Back
                        </button>
                        {/* </Link> */}
                      </div>
                      <br />
                      <div className="flex justify-center space-x-2">
                        <button
                          className="bg-gray-200 w-full h-8 text-black font-medium text-lg "
                          type="button"
                        >
                          Change to Basic
                        </button>
                      </div>
                      <div className="flex justify-center items-center flex-col p-4 mt-3">
                        <div className="flex">
                          <h1 className="text-lg text-gray-400 font-semibold ">
                            THB 149/Month
                          </h1>
                          <div className="w-[20px] h-[20px] fill-gray-400 mx-4 mt-2">
                            <ArrowRightForm />
                          </div>
                          <h1 className="text-lg text-black font-semibold">
                            THB 133/Month
                          </h1>
                        </div>
                        <div className="flex justify-center items-center  mt-5">
                          <p className="text-sm ">
                            Better video quality in HD [1080p] for 3 Months.
                            Watch on any phone,computer or TV.
                          </p>
                        </div>
                        <Link to={{ pathname: '/signup/package' }}>
                          <div className="mt-8">
                            <a className="text-blue-600 cursor-pointer no-underline hover:underline">
                              Compare All Plans
                            </a>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex-row  w-[50%] h-[600px] pl-5">
              <div className="flex justify-center flex-col">
                <h1 className="text-2xl font-semibold mb-4">
                  Checkout this TV shows & movies before you leave
                </h1>
                <div className="grid grid-cols-4  gap-x-2 gap-y-2 ">
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md flex "
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md "
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md "
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[90px] h-[120px] rounded-md"
                  />
                </div>
                <Link to={{ pathname: '/homepage' }}>
                  <div className="flex justify-center items-center mt-8 ">
                    <button className="bg-gray-200 w-[70%] h-8 inline-block text-black font-medium text-lg  ml-1 rounded-sm shadow-lg">
                      Explore More TV Shows & Movies
                    </button>
                  </div>
                </Link>
                <div className="flex justify-center items-center mt-5">
                  <form className="bg-white w-[95%] h-[50%] p-5 shadow-xl">
                    <div className="flex justify-center ">
                      <p classname="text-black-400 font-semibold text-2xl">
                        Want to Stick?
                      </p>
                    </div>
                    <Link to={{ pathname: '/homepage' }}>
                      <div className="flex justify-center space-x-2 mt-3">
                        <button className="bg-blue-600 w-[40%] h-8 inline-block text-white font-light text-lg  mr-1 rounded-sm shadow-lg">
                          Return to Netflix{' '}
                        </button>
                      </div>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
