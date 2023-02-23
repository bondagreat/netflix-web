export default function CreatePictureForm() {
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.3)]">
        <div className="w-full h-full flex justify-center items-center">
          <div className="p-6 rounded-lg shadow-lg bg-white w-[700] h-[511] ">
            <form>
              <div className="flex justify-start">
                <div className="flex-col mr-8">
                  <div className="flex flex-col">
                    <label
                      htmlFor="formFile"
                      className="form-label inline-block mb-2 text-gray-700 text-xl"
                    >
                      Movie Cover
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{' '}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                    <input
                      className="form-controlblock w-fullpx-3 py-1.5 text-base font-normal  text-blue-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded-lg  transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="formFile"
                      className="form-label inline-block mb-2 text-gray-700 text-xl"
                    >
                      Movie Logo
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
                            <span className="font-semibold">
                              Click to upload
                            </span>{' '}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                    <input
                      className="form-controlblock w-fullpx-3 py-1.5 text-base font-normal  text-blue-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded-lg  transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="file"
                      id="formFile"
                    />
                  </div>
                </div>
                <div className="flex-col">
                  <label className="flex flex-row">
                    <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5 ">
                      Title:
                    </span>
                    <input
                      className="w-full px-3 py-1 rounded-md border border-slate-400 my-3"
                      type="name"
                    />
                  </label>
                  <label className="flex flex-row">
                    <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5">
                      Release Date:
                    </span>
                    <input
                      className="w-full px-3 py-1 rounded-md border border-slate-400 my-3"
                      type="name"
                    />
                  </label>
                  <label className="flex flex-row">
                    <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5">
                      Length:
                    </span>
                    <input
                      className="w-full px-3 py-1 rounded-md border border-slate-400 my-3"
                      type="name"
                    />
                  </label>
                  <label className="flex flex-row">
                    <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5">
                      Description:
                    </span>
                    <input
                      className="w-full px-3 py-1 rounded-md border border-slate-400 my-3"
                      type="name"
                    />
                  </label>
                  <div
                    className="flex flex-row
                    "
                  >
                    <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5">
                      Rate:
                    </span>
                    <select
                      id="multiSelection"
                      placeholder="Age"
                      className="w-full px-3 py-1 rounded-md border border-slate-400 my-3"
                    >
                      <option value="1">7+</option>
                      <option value="2">13+</option>
                      <option value="3">16+</option>
                      <option value="4">18+</option>
                    </select>
                  </div>
                  <label className="flex flex-row">
                    <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5">
                      Language:
                    </span>
                    <select
                      id="multiSelection"
                      placeholder="Age"
                      className="w-full px-3 py-1 rounded-md border border-slate-400 my-3"
                    >
                      <option value="1">English</option>
                    </select>
                  </label>
                  <label className="flex flex-row">
                    <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5">
                      Casts:
                    </span>
                    <input
                      className="w-full px-3 py-1 rounded-md border border-slate-400 my-3"
                      type="name"
                    />
                  </label>

                  <div className="relative my-0">
                    <div className="mb-3 xl:w-96">
                      <div
                        className="flex flex-row
                    "
                      >
                        <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5">
                          Genres:
                        </span>
                        <select
                          id="multiSelection"
                          data-te-select-init
                          multiple
                          className="w-full px-3 py-1 rounded-md border border-slate-400 my-3"
                        >
                          <option value="1">Action</option>
                          <option value="2">Adventure</option>
                          <option value="3">Comedies</option>
                          <option value="4">Horror</option>
                          <option value="5">Hollywood</option>
                          <option value="6">Kids&Family</option>
                          <option value="7">K-Dramas</option>
                          <option value="8">Romance</option>
                          <option value="9">Variety Entertainment</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="mb-3 xl:w-96">
                      <div className="flex flex-row">
                        <span className="block text-sm font-medium mb-2 text-gray-900 pt-4 pr-2.5">
                          Mood:
                        </span>
                        <select
                          id="multiSelection"
                          className="w-full px-3 py-1 rounded-md border border-slate-400 my-3 "
                          data-te-select-init
                          multiple
                        >
                          <option value="1">Drama</option>
                          <option value="2">Romantic</option>
                          <option value="3">Quirky</option>
                          <option value="4">Aventure</option>
                          <option value="5">Comedies</option>
                          <option value="6">Exiciting</option>
                          <option value="7">Swoonworthy</option>
                          <option value="8">Horror</option>
                        </select>
                      </div>
                      <label data-te-select-label-ref>Types</label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl ml-72"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
