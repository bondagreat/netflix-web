import { Link } from 'react-router-dom';
import { NetFlixLogo } from '../images';
import useRegister from '../hooks/useRegister';
import Brand from '../layouts/Brand';
import { useState } from 'react';
import validateRegister from '../validators/validateRegister';

export default function RegisterPage() {
  const { inputEmail } = useRegister();

  const intInput = {
    email: inputEmail.email,
    password: '',
    confirmPassword: '',
    phone: '',
  };
  const [input, setInput] = useState(intInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleClickRegister = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      console.log(result);

      if (result) {
        setError(result);
      } else {
        setError({});
        // await
        console.log('sent to back');
      }
    } catch (err) {}
  };
  return (
    <div className="bg-white ">
      <div className="h-[10vh] w-11/12 flex justify-between mx-auto mb-5">
        <NetFlixLogo />

        <button
          type="button"
          className="text-lg text-black no-underline hover:underline px-2 font-medium my-5 rounded-sm "
        >
          Sign In
        </button>
      </div>
      <hr />
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg  bg-white max-w-sm mt-16">
          <form>
            <div>
              <a className="text-gray-500 uppercase">Step 1 of 3</a>
            </div>

            <div>
              <h1 className="text-black bold-xl text-xl">
                Create a passward to start your membership
              </h1>
            </div>

            <div>
              <a className="text-gray-500 text-sm">
                Just a few more steps and you're done!
              </a>
              <br />
              <a className="text-gray-500 text-sm">We hate paperwork,too.</a>
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control  block  mt-2.5  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email"
                name="email"
                value={inputEmail.email}
              />
            </div>
            <div className="form-group mb-6">
              <input
                placeholder="Enter your password"
                value={input.password}
                name="password"
                type="password"
                className={`${
                  error.password ? 'border-red-500' : ''
                } form-control block w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                onChange={handleChangeInput}
              />
            </div>
            <div className="form-group mb-6">
              <input
                placeholder="Confirm password"
                value={input.confirmPassword}
                name="confirmPassword"
                type="password"
                className={`${
                  error.confirmPassword ? 'border-red-600' : ''
                } form-control block w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                onChange={handleChangeInput}
              />
            </div>
            <div className="form-group mb-6">
              <input
                placeholder="Phone number"
                value={input.phone}
                name="phone"
                type="text"
                className={`${
                  error.phone ? 'border-red-500' : ''
                } form-control block w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                />
                <label className="form-check-label inline-block text-gray-600 text-xs">
                  Please do not email me Netflix special offers.
                </label>
              </div>
            </div>
            {/* <Link to={{ pathname: '/signup/step' }}> */}
            <button
              type="submit"
              className="  w-full  px-6  py-2.5  bg-red-600  text-white  font-xl  text-xl  rounded  shadow-md"
              onClick={handleClickRegister}
            >
              Next
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}
