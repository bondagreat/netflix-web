import { Link } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';
import { useDispatch, useSelector } from 'react-redux';
import { loginAPI } from '../../redux/authSlice';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import validateLogin from '../../validators/validate-login';

export default function LoginForm() {
  const { inputEmail, changeInputEmail } = useRegister();
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const haveUser = useSelector((state) => state.auth.user);
  const [error, setError] = useState('');

  const handleClickLogin = async (e) => {
    try {
      e.preventDefault();
      const input = { email: inputEmail.email, password: password };
      const result = validateLogin({
        email: inputEmail.email,
        password: password,
      });
      if (result) {
        setError(result[0].message);
      } else {
        dispatch(loginAPI(inputEmail.email, password));
        setError('');
        if (!haveUser) {
          setError('invalid email or password');
        }
      }
      // login in redux got return in slice can not get output to check T/F?
    } catch (err) {}
  };
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-black/60  max-w-xl mt-18 mb-10 w-[350px} p-[60px]">
      <form>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-6 text-white text-3xl font-bold">
            Sign In
          </label>
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            value={inputEmail.email}
            className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-300  bg-[#444444]    rounded   m-0 mb-3.5 focus:border-transparent focus:ring-0"
            onChange={(e) => changeInputEmail({ email: e.target.value })}
            placeholder="Email or phone number"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-3 py-3 text-sm font-normal text-gray-300 bg-[#444444]  rounded m-0 border-transparent focus:border-transparent focus:ring-0"
            placeholder="Password"
          />
          <p className="text-red-500 pt-1 text-sm">{error}</p>
        </div>
        <div className="flex justify-between items-center mb-1">
          <button
            type="submit"
            className="w-full  px-6  py-2.5  bg-red-600  text-white  font-medium  text-lg  leading-tight  rounded  shadow-md  transition  duration-150  ease-in-out mt-4"
            onClick={handleClickLogin}
          >
            Sign in
          </button>
        </div>
        <div className="flex justify-between mx-2 mb-10 form-group form-check">
          <div className="p">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-gray-300 rounded-sm focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label className="form-check-label inline-block text-gray-400 mr-5 text-xs">
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
          New to Netflix?
          <Link
            to={'/signup/regform'}
            className="text-gray-300 no-underline hover:underline text-sm font-medium transition duration-200 ease-in-out"
          >
            Sign Up now.
          </Link>
        </p>
      </form>
    </div>
  );
}
