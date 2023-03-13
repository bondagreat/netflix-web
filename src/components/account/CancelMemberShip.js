import { ArrowLeftForm, ArrowRightForm, Dot } from '../../images';
import Footer from '../../layouts/Footer';
import NavBarAccount from '../../layouts/NavBarAccount';
import MovieJunge from '../../assets/images/moviejung.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function CancelMemberShip() {
  const navigate = useNavigate();
  function handleClickBack() {
    navigate('/userEditAccount');
  }
  function handleClickHome() {
    navigate('/homepage');
  }
  return (
    <>
      <NavBarAccount />
      <div className="flex-col  ml-[200px] mt-[90px]  mr-10 justify-center ">
        <Link to={{ pathname: '/browse' }}>
          <div className="flex mb-6">
            <div className="w-[10px] h-[10px] fill-blue-600 cursor-pointer no-underline hover:underline mx-1 my-1 ">
              <ArrowLeftForm />
            </div>
            <a className="text-blue-600 cursor-pointer no-underline hover:underline text-sm ">
              Return to Netflix
            </a>
          </div>
        </Link>
        <div className=" mb-4  text-sm mt-5 ">
          <div className="flex justify-center w-[1000px] h-[800px]">
            <div className="flex-row  w-[50%] h-[700px] pr-5">
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
                  <form className="bg-white w-[95%] h-[50%] p-5 shadow-xl border border-gray-300 ">
                    <div className="flex-start ">
                      <ul>
                        <li>
                          Cancellation will be effective at the end of your
                          current{' '}
                        </li>
                      </ul>
                      <p>
                        billing period on <b>March 4, 2023.</b>
                      </p>
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
                        account details will be waiting for you.
                      </p>
                    </div>
                    <br />
                    <div className=" flex-col">
                      <div className="flex">
                        <button
                          onClick={handleClickHome}
                          className="bg-blue-600 hover:bg-blue-500 w-full h-8 inline-block text-white font-light text-lg  mr-1 rounded-sm shadow-lg"
                          type="button"
                        >
                          Finish Cancellation
                        </button>
                        <button
                          onClick={handleClickBack}
                          className="bg-gray-200 hover:bg-gray-100 w-full h-8 inline-block text-black font-medium text-lg  ml-1 rounded-sm shadow-lg border border-gray-200"
                          type="button"
                        >
                          Go Back
                        </button>
                      </div>
                      <br />
                      <hr />
                      <br />
                      {/* <div className="flex justify-center space-x-2">
                        <button
                          className="bg-gray-200 hover:bg-gray-100 w-full h-8 text-black font-medium text-lg shadow-lg border border-gray-200"
                          type="button"
                        >
                          Change to Better
                        </button>
                      </div>
                      <div className="flex justify-center items-center flex-col p-4 mt-3">
                        <div className="flex">
                          <h1 className="text-lg text-gray-400 font-semibold ">
                            THB 149
                          </h1>
                          <div className="w-[20px] h-[20px] fill-gray-400 mx-4 my-1 ">
                            <ArrowRightForm />
                          </div>
                          <h1 className="text-lg text-black font-semibold">
                            THB 133/month
                          </h1>
                        </div>
                        <div className="flex justify-centers mt-5">
                          <p className="text-sm ">
                            Better video quality in HD [1080p] for 3 Months.
                            Watch on any phone, computer or TV.
                          </p>
                        </div>
                        <Link to={{ pathname: '/signup/package' }}>
                          <div className="mt-8">
                            <a className="text-blue-600 cursor-pointer no-underline hover:underline">
                              Compare All Plans
                            </a>
                          </div>
                        </Link>
                      </div> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="flex-row  w-[50%] h-[700px] pl-5">
              <div className="flex justify-center flex-col">
                <h1 className="text-2xl font-semibold mb-4">
                  Checkout this TV shows & movies before you leave
                </h1>
                <div className="flex justify-center flex-wrap w-[450px] grid-cols-4 gap-2 ">
                  <img
                    src={MovieJunge}
                    className="w-[200px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[200px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[200px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[200px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[200px] h-[120px] rounded-md"
                  />
                  <img
                    src={MovieJunge}
                    className="w-[200px] h-[120px] rounded-md"
                  />
                </div>
                <Link to={{ pathname: '/homepage' }}>
                  <div className="flex justify-center items-center mt-8 ">
                    <button className="bg-gray-200 hover:bg-gray-100 w-[70%] h-8 inline-block text-black font-medium text-lg  ml-1 rounded-sm shadow-lg border border-gray-200">
                      Explore More TV Shows & Movies
                    </button>
                  </div>
                </Link>
                <div className="flex justify-center items-center mt-5">
                  <form className="bg-white w-[95%] h-[50%] p-5 shadow-xl border border-gray-300 ">
                    <div className="flex justify-center font-bold text-lg ">
                      <p>Want to stick around?</p>
                    </div>
                    <div className="flex justify-center text-sm">
                      <p>Your plan will remain the same.</p>
                    </div>
                    <Link to={{ pathname: '/homepage' }}>
                      <div className="flex justify-center space-x-2 mt-3">
                        <button className="bg-blue-600 hover:bg-blue-500 w-[40%] h-8 inline-block text-white font-light text-lg  mr-1 rounded-sm shadow-lg ">
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
