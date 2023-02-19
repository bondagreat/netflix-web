import { CheckCircleIcon, CheckIcon } from '../../images';

export default function RegisterStepForm() {
  return (
    <div className="bg-white">
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg  bg-white max-w-sm mt-48">
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
        shadow-md my-2"
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
