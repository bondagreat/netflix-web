import ImageProfile from "./ImageProfile";

export default function Dropdown() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="dropdown relative right-3 top-1">
          <button
            className="dropdown-toggle  py-8  text-white font-medium text-xs leading-tight uppercase rounded       transition duration-150 ease-in-out flex items-center whitespace-nowrap"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-3 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              ></path>
            </svg>
          </button>
          <ul
            className=" dropdown-menu w-[220px] absolute hidden  text-base z-50 float-left py-4 px-2 list-none text-left  shadow-lg mt-1  m-0 bg-clip-padding border-none bg-black opacity-70"
            aria-labelledby="dropdownMenuButton2"
          >
            <li className="flex mb-2">
              <ImageProfile className="p-3 flex" size="35px w-fit" />
              <a
                className="dropdown-item text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
                href="/"
              >
                user1
              </a>
            </li>
            <li className="flex mb-2">
              <ImageProfile className="p-3 flex" size="35px w-fit" />
              <a
                className="dropdown-item text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
                href="/"
              >
                user2
              </a>
            </li>
            <li className="flex mb-2">
              <ImageProfile className="p-3 flex" size="35px w-fit" />
              <a
                className="dropdown-item text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
                href="/"
              >
                user3
              </a>
            </li>
            <li className="flex mb-2">
              <ImageProfile className="p-3 flex" size="35px w-fit" />
              <a
                className="dropdown-item text-sm py-2 px-2 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700 active:bg-blue-600"
                href="/"
              >
                user4
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                href="/"
              >
                Manage Profiles
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                href="/"
              >
                Exist Profile
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                href="/"
              >
                Account
              </a>
            </li>
            <li>
              <hr className="h-0 my-2 border border-solid border-t-0 border-gray-300 opacity-25" />
            </li>
            <li>
              <a
                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700"
                href="/"
              >
                Sign out of Netflix
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
