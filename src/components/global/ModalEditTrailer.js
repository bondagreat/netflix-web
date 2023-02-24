export default function ModalEditTrailer() {
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="block p-6 rounded-lg shadow-lg bg-white w-[700] h-[511] ">
            <form className="flex-col">
              <label
                htmlFor="formFile"
                className="form-label inline-block mb-2 text-gray-700 font-semibold text-xl"
              >
                Trailer
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>

              <input
                className="form-control  block   w-full  px-3   py-1.5   text-base  font-normal   text-blue-700   bg-white bg-clip-padding   border border-solid border-gray-300  rounded-lg  transition   ease-in-out   m-5   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                type="file"
                id="formFile"
              />
              <label className="flex flex-row">
                <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5 ">
                  Trailer:
                </span>
                <input
                  className="w-full px-2 py-1 rounded-md border border-slate-400 my-3"
                  type="name"
                />
              </label>
              <div className="flex justify-between ">
                <button
                  type="submit"
                  className=" rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white  bold-2 shadow-xl  drop-shadow-xl"
                >
                  Prev
                </button>
                <button
                  type="submit"
                  className=" rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white  bold-2 shadow-xl  drop-shadow-xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
