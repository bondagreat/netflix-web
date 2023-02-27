import { Link } from 'react-router-dom';
export default function LoginForm() {
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-black/60  max-w-xl mt-18 mb-10 w-[350px} p-[60px]">
      <form>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail2"
            className="form-label inline-block mb-6 text-white text-3xl font-bold"
          >
            Sign In
          </label>
        </div>
        <div className="form-group mb-6">
          <input
            type="email"
            className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-300  bg-[#444444]    rounded   m-0 mb-3.5"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Email or phone number"
          />
          <input
            type="password"
            className="w-full  pl-3  pr-24 py-3  text-sm font-normal  text-gray-300 bg-[#444444]  rounded m-0 border-transparent focus:border-transparent focus:ring-0"
            id="exampleInputPassword2"
            placeholder="Password"
          />
        </div>
        <Link to={{ pathname: '/register' }}>
          <div className="flex justify-between items-center mb-1">
            <button
              type="submit"
              className="w-full  px-6  py-2.5  bg-red-600  text-white  font-medium  text-lg  leading-tight  rounded  shadow-md  transition  duration-150  ease-in-out mt-4"
            >
              Sign in
            </button>
          </div>
        </Link>
        <div className="flex justify-between mx-2 mb-10 form-group form-check">
          <div className="p">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-gray-300 rounded-sm focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
            />
            <label
              className="form-check-label inline-block text-gray-400 mr-5 text-xs"
              htmlFor="exampleCheck2"
            >
              Remember me
            </label>
          </div>
          <div>
            <a
              href="#!"
              className="text-gray-400 text-xs transition duration-200 ease-in-out ml-4"
            >
              Need help?
            </a>
          </div>
        </div>
        <p className="text-gray-500 text-sm  mt-15 text-center">
          New to Netflix?{' '}
          <a
            href="#!"
            className="text-gray-300 no-underline hover:underline text-sm font-medium transition duration-200 ease-in-out"
          >
            Sign Up now.
          </a>
        </p>
      </form>
    </div>
  );
}
