import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircleIcon, CheckIcon, NetFlixLogo } from '../../images';

export default function RegisterStepForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="bg-white">
      <div className="h-[10vh] w-11/12 flex justify-between mx-auto">
        <NetFlixLogo />

        <button
          type="button"
          className="text-lg text-black no-underline hover:underline px-2 font-medium my-5 rounded-sm "
          onClick={() => {
            dispatch(logout());
            navigate('/');
          }}
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg  bg-white max-w-sm mt-24">
          <form>
            <div className="flex justify-center flex-col">
              <div className="flex justify-center">
                <div className="w-10 h-10 fill-red-500 mb-2.5">
                  <CheckCircleIcon />
                </div>
              </div>
              <div>
                <a className="text-gray-500 uppercase flex justify-center ">
                  Step 2 of 3
                </a>
              </div>
              <div>
                <h1 className="text-black text-2xl font-semibold flex justify-center">
                  Choose you plan.
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
                No commitments ,cancel anytime
              </a>
            </div>
            <div className="flex my-4">
              <div>
                <div className="w-4 h-4 fill-red-500 ">
                  <CheckIcon />
                </div>
              </div>
              <a className="text-gray-500 text-sm ml-2">
                Everything on Netflix for one low price.
              </a>
            </div>
            <div className="flex my-4">
              <div>
                <div className="w-4 h-4 fill-red-500 ">
                  <CheckIcon />
                </div>
              </div>
              <a className="text-gray-500 text-sm ml-2">
                No ads and no extra fees. Ever.
              </a>
            </div>
            <Link to={'/signup/package'}>
              <button
                type="submit"
                className="w-full  px-6  py-2.5  bg-red-600  text-white  font-xl  text-xl  rounded shadow-md my-2"
              >
                Next
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
