import DeviceIconPic from '../../assets/images/deviceicon.png';
import useRegister from '../../hooks/useRegister';

export default function PackageModel({ name, price, period, id }) {
  const { handleClickPackage, plan } = useRegister();
  // console.log(plan);
  return (
    <div className="block p-6 rounded-lg border-gray-600/80 bg-white max-w-sm mt-30 mr-5">
      <div className="w-[100px] h-[100px]  rounded-md ml-32 mb-5">
        <button
          className={`${id == plan.id ? 'bg-red-600' : 'bg-red-300'}
          rounded-sm w-[100px] h-[90px]  hover:bg-red-600 focus:outline-none text-white font-medium`}
          onClick={() => handleClickPackage(id, price, period)}
        >
          <span>
            Package
            <br />
            {name}
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
                THB {price / period}
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
                  renew every {period} month
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
  );
}
