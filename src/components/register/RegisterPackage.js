import { CheckIcon, NetFlixLogo } from '../../images';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PackageModel from './PackageModel';
import * as packageApi from '../../apis/package-api';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

export default function RegisterPackage() {
  const [member, setMember] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackage = async () => {
      const res = await packageApi.fetchPackage();
      setMember(res.data.package);
    };
    fetchPackage();
  }, []);

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
      <div className="justify-center">
        <div className="ml-[296px] mt-14">
          <div className="flex-col">
            <div className="flex justify-start">
              <a className="text-gray-500 uppercase flex justify-center">
                Step 2 of 3
              </a>
            </div>
            <div className="flex justify-start">
              <h1 className="text-black text-2xl font-semibold flex justify-center">
                Choose the plan that's right to you.
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
              Watch all you want. Ad-free.
            </a>
          </div>
          <div className="flex my-4">
            <div>
              <div className="w-4 h-4 fill-red-500 ">
                <CheckIcon />
              </div>
            </div>
            <a className="text-gray-500 text-sm ml-2">
              Recommendations just for you.
            </a>
          </div>
          <div className="flex my-4">
            <div>
              <div className="w-4 h-4 fill-red-500 ">
                <CheckIcon />
              </div>
            </div>
            <a className="text-gray-500 text-sm ml-2">
              Change or cancel your plan anytime.
            </a>
          </div>
        </div>

        <div className="flex justify-center ">
          {member?.map((el) => {
            return (
              <PackageModel
                key={el.id}
                id={el.id}
                name={el.name}
                price={el.price}
                period={el.period}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link to={{ pathname: '/signup/payment' }}>
            <button
              type="submit"
              className="w-[350px]  px-6 py-2.5  bg-red-600 mt-6 text-white font-xl text-xl rounded  shadow-md my-2 ml-3"
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
