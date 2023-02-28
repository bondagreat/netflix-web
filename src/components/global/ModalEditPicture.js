import React from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
export default function ModalEditPicture() {
  const optionsEditMood = [
    { value: '1', label: 'Adventure' },
    { value: '2', label: 'Comedies' },
    { value: '3', label: 'Drama' },
    { value: '4', label: 'Exiciting' },
    { value: '5', label: 'Horror' },
    { value: '6', label: 'Quirky' },
    { value: '7', label: 'Romantic' },
    { value: '8', label: 'Swoonworthy' },
  ];
  const optionsEditGenres = [
    { value: '1', label: 'Action' },
    { value: '2', label: 'Adventure' },
    { value: '3', label: 'Comedies' },
    { value: '4', label: 'Horror' },
    { value: '5', label: 'Hollywood' },
    { value: '6', label: 'QuiKids&Familyrky' },
    { value: '7', label: 'K-Dramas' },
    { value: '8', label: 'Romance' },
    { value: '9', label: 'Variety' },
  ];
  const optionsEditCasts = [
    { value: '1', label: 'Jack' },
    { value: '2', label: 'Jill' },
    { value: '3', label: 'jimmy' },
    { value: '4', label: 'John' },
  ];
  const optionsEditRate = [
    { value: '1', label: '7+' },
    { value: '2', label: '13+' },
    { value: '3', label: '16+' },
    { value: '4', label: '18+' },
  ];
  const optionsEditLanguage = [{ value: '1', label: 'English' }];
  const handleOnChange = (value) => {
    console.log(value);
  };
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/modalEditVideo');
  };
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.3)]">
        <div className="flex justify-center items-center">
          <div className="p-8 rounded-lg shadow-lg bg-white w-[750px]  h-[540px] my-10 ">
            <form>
              <div className="flex justify-start">
                <div className="flex-col mr-8">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="formFile"
                      className="form-label inline-block mb-2 text-gray-700 text-md"
                    >
                      Movie Cover
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-[200px] h-[150px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <br />
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">
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
                      className="form-controlblock w-full first-letter:px-3  text-base font-normal  text-blue-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded-lg  transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="file"
                      id="formFile"
                    />
                  </div>
                  <br />
                  <div className="flex flex-col">
                    <label
                      htmlFor="formFile"
                      className="form-label inline-block mb-2 text-gray-700 text-md"
                    >
                      Movie Logo
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-[200px] h-[150px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 mb-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
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
                      className="form-controlblock w-full first-letter:px-3  text-base font-normal  text-blue-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded-lg  transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                      type="file"
                      id="formFile"
                    />
                  </div>
                </div>
                <div className="flex-col">
                  <label className="flex flex-row items-center space-x-2">
                    <span className="block text-sm font-medium mb-2 text-gray-900  ">
                      Title:
                    </span>
                    <input
                      className="w-full h-[36px] pl-3  rounded-md border border-slate-400 my-2 "
                      type="name"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <span className=" text-sm font-medium mb-2 text-gray-900 ">
                      Release Date:
                    </span>
                    <input
                      className="grow h-[36px] pl-3  rounded-md border border-slate-400 mt-1"
                      type="name"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <span className="block text-sm font-medium mb-2 text-gray-900 ">
                      Length:
                    </span>
                    <input
                      className="w-full pl-3 h-[36px] rounded-md border border-slate-400 mt-3"
                      type="name"
                    />
                  </label>
                  <label className="flex flex-row items-center space-x-2">
                    <span className="block text-sm font-medium mb-2 text-gray-900 ">
                      Description:
                    </span>
                    <input
                      className="w-full h-[36px] pl-3  rounded-md border border-slate-400 mt-3 mb-1"
                      type="name"
                    />
                  </label>
                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className=" text-sm font-medium mb-2 text-gray-900 ">
                        Rate:
                      </span>
                      <Select
                        id="multiSelection"
                        placeholder="Age"
                        onChange={handleOnChange}
                        options={optionsEditRate}
                        className="w-full px-3  rounded-md  mt-2"
                      />
                    </div>
                  </div>
                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className=" text-sm font-medium mb-2 text-gray-900 ">
                        Language:
                      </span>
                      <Select
                        id="multiSelection"
                        placeholder="language"
                        onChange={handleOnChange}
                        options={optionsEditLanguage}
                        className="w-full px-3  rounded-md  "
                        styles={{
                          control: (styles) => ({
                            ...styles,
                          }),
                        }}
                        // className="w-full px-3  rounded-md border border-slate-400 my-3"
                      />
                    </div>
                  </div>

                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className="text-sm font-medium  text-gray-900">
                        Casts:
                      </span>
                      <Select
                        isMulti
                        onChange={handleOnChange}
                        name="colors"
                        className="basic-multi-select w-full px-3  rounded-md  "
                        classNamePrefix="select"
                        options={optionsEditCasts}
                      />
                    </div>
                  </div>
                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className="block text-sm font-medium mb-2 text-gray-900 ">
                        Genres:
                      </span>
                      <Select
                        isMulti
                        onChange={handleOnChange}
                        name="colors"
                        className="basic-multi-select w-full px-3  rounded-md  "
                        classNamePrefix="select"
                        options={optionsEditGenres}
                      />
                    </div>
                  </div>

                  <div className="mb-3 xl:w-96">
                    <div className="flex flex-row items-center space-x-2">
                      <span className="block text-sm font-medium mb-2 text-gray-900 ">
                        Mood:
                      </span>
                      <Select
                        isMulti
                        onChange={handleOnChange}
                        name="colors"
                        className="basic-multi-select w-full px-3  rounded-md  "
                        classNamePrefix="select"
                        options={optionsEditMood}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={handleOnClick}
                    className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl ml-72 mt-1"
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
