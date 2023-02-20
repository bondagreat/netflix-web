import { Link } from 'react-router-dom';
export default function RegisterPage() {
  return (
    <div className="bg-white ">
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg  bg-white max-w-sm mt-48">
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
                className="form-control
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
                placeholder="Email"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="password"
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
                placeholder="Add a password"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                />
                <label
                  className="form-check-label inline-block text-gray-600 text-xs"
                  for="exampleCheck2"
                >
                  Please do not email me Netflix special offers.
                </label>
              </div>
            </div>
            <Link to={{ pathname: '/registerstep' }}>
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
                Next
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
