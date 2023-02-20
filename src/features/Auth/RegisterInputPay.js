import VisaIconPic from '../../assets/images/visaicon.png';
import MasterIconPic from '../../assets/images/mastericon.png';
export default function RegisterInputPay() {
  return (
    <div className="bg-white ">
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg  bg-white max-w-sm mt-48">
          <form>
            <div>
              <a className="text-gray-500 uppercase">Step 3 of 3</a>
            </div>

            <div className="mb-5">
              <h1 className="text-black  font-semibold text-2xl">
                Set up your credit or debit card
              </h1>
            </div>

            <div className="flex">
              <img src={VisaIconPic} className="w-[50px] h-[30px]" />
              <img src={MasterIconPic} className="w-[50px] h-[30px]" />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control rounded-sm
        block
        mt-2.5
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Firstname and Lastname"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Card Number"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Expiration date (MM/YY)"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Security Code CVC"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <a
                type="submit"
                className=" no-underline hover:underline w-full text-center
      px-6
      py-2.5
      bg-gray-300
      text-blue-500
      font-xl
      text-md
      rounded
      shadow-md"
              >
                {' '}
                change
              </a>
            </div>
            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-red-600
      text-white
      font-xl
      text-xl
      rounded
      shadow-md"
            >
              Start Membership
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
