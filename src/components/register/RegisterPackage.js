import { CheckIcon, NetFlixLogo } from '../../images';
import { Link } from 'react-router-dom';
import DeviceIconPic from '../../assets/images/deviceicon.png';
// import PkMonthlyPic from '../../assets/images/pkmonthly.png';
// import CardMonthlyPic from '../../assets/images/cardmonthly.png';
// import CardThreeMPic from '../../assets/images/cardthreem.png';
// import PkThreeMPic from '../../assets/images/pkthreem.png';

export default function RegisterPackage() {
  return (
    <div className="bg-white">
      <div className="h-[10vh] w-11/12 flex justify-between mx-auto">
        <NetFlixLogo />

        <button
          type="button"
          className="text-lg text-black no-underline hover:underline px-2 font-medium my-5 rounded-sm "
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
          <div className="block p-6 rounded-lg border-gray-600/80 bg-white max-w-sm mt-30 mr-5">
            <div className="w-[100px] h-[100px]  rounded-md ml-32 mb-5">
              <button className="rounded-sm w-[100px] h-[90px] bg-red-300 hover:bg-red-600 focus:outline-none text-white font-medium">
                {/* <img src={PkMonthlyPic} /> */}
                <span>
                  Package
                  <br /> Monthly
                </span>
              </button>
            </div>
            <div className="w-[350px]  rounded-md">
              <div className="block max-w-sm bg-white w-[362px] h-[232px] text-gray-700 font-medium rounded-lg dark:bg-neutral-700  shadow-lg">
                <tbody>
                  <tr className="border-b  dark:border-neutral-500 px-10">
                    <td className="whitespace-nowrap  px-6 pr-12 py-4 font-normal text-sm">
                      Monthly price:
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-normal text-sm">
                      THB 149
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 pr-16 pb-4 font-normal text-sm">
                      Video Quality:
                    </td>
                    <td className="whitespace-nowrap px-6 pb-4 font-normal text-sm">
                      Good
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 pr-16 pb-4 font-normal text-sm">
                      Resolution:
                    </td>
                    <td className="whitespace-nowrap px-6 pb-4 font-normal text-sm">
                      720p
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-6 pr-20 pb-4 font-normal text-sm">
                      Device you can use to watch:
                      <p className="whitespace-nowrap text-[#FF0909] pt-11 font-normal text-sm pb-4">
                        renew every month
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-6 font-normal text-sm pb-4">
                      <img src={DeviceIconPic} className="w-[30px] h-[80px]" />
                    </td>
                  </tr>
                </tbody>
              </div>
            </div>
          </div>
          <div className="block p-6 rounded-lg  border-gray-600/80 bg-white max-w-sm mt-30 ml-5">
            <div className="w-[100px] h-[100px]  rounded-md ml-32  mb-5">
              <button className="rounded-sm w-[100px] h-[90px] bg-red-300 hover:bg-red-600 focus:outline-none text-white font-medium">
                {/* <img src={PkBoxMPic} className="hover:" /> */}
                {/* <img
                  src={PkThreeMPic}
                  className="hover:shadow-lg hover:transition-shadow duration-300"/> */}
                <span>
                  Package
                  <br />3 Months
                </span>
              </button>
            </div>
            <div className="block max-w-sm bg-white w-[362px] h-[232px] text-gray-700 font-medium rounded-lg dark:bg-neutral-700  shadow-lg">
              <tbody>
                <tr className="border-b  dark:border-neutral-500 px-10">
                  <td className="whitespace-nowrap  px-6 pr-12 py-4 font-normal text-sm">
                    Monthly price:
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-normal text-sm">
                    THB 133
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 pr-16 pb-4 font-normal text-sm">
                    Video Quality:
                  </td>
                  <td className="whitespace-nowrap px-6 pb-4 font-normal text-sm">
                    Better
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 pr-16 pb-4 font-normal text-sm">
                    Resolution:
                  </td>
                  <td className="whitespace-nowrap px-6 pb-4 font-normal text-sm">
                    1080p
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 pr-20 pb-4 font-normal text-sm">
                    Device you can use to watch:
                    <p className="whitespace-nowrap text-[#FF0909] pt-11 font-normal text-sm pb-4">
                      renew 3 months
                    </p>
                  </td>
                  <td className="whitespace-nowrap px-6 font-normal text-sm pb-4">
                    <img src={DeviceIconPic} className="w-[30px] h-[80px]" />
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
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
