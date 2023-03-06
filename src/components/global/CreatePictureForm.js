import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import CreateTrailerForm from './CreateTrailerForm';
import CreateVideoForm from './CreateVideoForm';
// import { ChevronRight } from '../../images';

export default function CreatePictureForm({ show, setClose }) {
  const [step, setStep] = useState(1);
  const optionsMood = [
    { value: '1', label: 'Adventure' },
    { value: '2', label: 'Comedies' },
    { value: '3', label: 'Drama' },
    { value: '4', label: 'Exiciting' },
    { value: '5', label: 'Horror' },
    { value: '6', label: 'Quirky' },
    { value: '7', label: 'Romantic' },
    { value: '8', label: 'Swoonworthy' },
  ];
  const optionsGenres = [
    { value: '1', label: 'Action' },
    { value: '2', label: 'Adventure' },
    { value: '3', label: 'Comedies' },
    { value: '4', label: 'Horror' },
    { value: '5', label: 'Hollywood' },
    { value: '6', label: 'Kids&Family' },
    { value: '7', label: 'K-Dramas' },
    { value: '8', label: 'Romance' },
    { value: '9', label: 'Variety' },
  ];
  const optionsCasts = [
    { value: '1', label: 'Jack' },
    { value: '2', label: 'Jill' },
    { value: '3', label: 'jimmy' },
    { value: '4', label: 'John' },
  ];
  const optionsRate = [
    { value: '1', label: '7+' },
    { value: '2', label: '13+' },
    { value: '3', label: '16+' },
    { value: '4', label: '18+' },
  ];
  const optionsLanguage = [{ value: '1', label: 'English' }];
  const handleOnChange = (value) => {
    console.log(value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const handleOnClick = (value) => {
    if (step === 3) {
      setStep(1);
    } else if (step < 4) {
      setStep(step + 1);
    }
    console.log(value);
  };
  const handleOnPrevious = (value) => {
    setStep(step - 1);

    console.log(value);
  };
  const handlePreviewImage = (e) => {
    setFile(e.target.files[0]);
  };
  const [file, setFile] = useState(null);
  const handlePreviewImageLogo = (e) => {
    setFileLogo(e.target.files[0]);
  };
  const [fileLogo, setFileLogo] = useState(null);

  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [lenght, setLenght] = useState();
  const [description, setDescription] = useState();

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] ${
          show ? ' block ' : ' hidden '
        }`}
      >
        <div className="flex justify-center items-center">
          <div>
            <button
              className={`rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-10  bold-2 shadow-xl  drop-shadow-xl ${
                step === 1
                  ? 'bg-[#E50914] text-white'
                  : 'bg-white text-black/60'
              }`}
            >
              Step 1
            </button>

            <button
              className={`rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-10  bold-2 shadow-xl  drop-shadow-xl ${
                step === 2
                  ? 'bg-[#E50914] text-white'
                  : 'bg-white text-black/60'
              }`}
            >
              Step 2
            </button>
            <button
              className={`rounded-md px-6 pt-2.5 pb-2 text-xl font-medium  mt-10 mr-96 bold-2 shadow-xl  drop-shadow-xl ${
                step === 3
                  ? 'bg-[#E50914] text-white'
                  : 'bg-white text-black/60'
              }`}
            >
              Step 3
            </button>
            <div className="p-8 rounded-lg shadow-lg bg-white w-[790px]  h-[550px] mb-10  relative">
              {step === 1 ? (
                <form>
                  <div className="flex justify-start">
                    <div className="flex-col mr-8">
                      <div className="flex flex-col ">
                        <label
                          htmlFor="formFile"
                          className="form-label inline-block mb-2 text-gray-700 text-md font-medium flex justify-start"
                        >
                          Movie Cover
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <div className="bg-white w-[200px] h-[140px] rounded-md border-dashed border-2 border-gray-300 flex justify-center items-center text-gray-400 font-light text-sm ">
                            <img
                              alt="Click to upload image"
                              width={'200px'}
                              height={'140px'}
                              src={file ? URL.createObjectURL(file) : ''}
                            />
                          </div>
                        </div>
                        <input
                          className="form-control block  px-3 py-1.5   text-sm  font-normal   text-blue-700   bg-white bg-clip-padding   border border-solid border-gray-300  rounded-lg  transition   ease-in-out   m-5   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          id="formFile"
                          onChange={handlePreviewImage}
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="formFile"
                          className="form-label inline-block mb-2 text-gray-700 text-md font-medium flex justify-start"
                        >
                          Movie Logo
                        </label>
                        <div className="flex items-center justify-center w-full">
                          <div className="bg-white w-[200px] h-[140px] rounded-md border-dashed border-2 border-gray-300 flex justify-center items-center text-gray-400 font-light text-sm ">
                            <img
                              alt="Click to upload image"
                              width={'200px'}
                              height={'140px'}
                              src={
                                fileLogo ? URL.createObjectURL(fileLogo) : ''
                              }
                            />
                          </div>
                        </div>
                        <input
                          className="form-control block  px-3 py-1.5   text-sm  font-normal   text-blue-700   bg-white bg-clip-padding   border border-solid border-gray-300  rounded-lg  transition   ease-in-out   m-5   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          id="formFile"
                          onChange={handlePreviewImageLogo}
                        />
                      </div>
                    </div>
                    <div className="flex-col">
                      <label className="flex flex-row items-center space-x-2">
                        <span className="block text-sm font-medium mb-2 text-gray-900  ">
                          Title:
                        </span>
                        <input
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full h-[36px] pl-3  rounded-md border border-slate-400 my-2 text-gray-900 font-light"
                          type="text"
                        />
                      </label>
                      <label className="flex flex-row items-center space-x-2">
                        <span className=" text-sm font-medium mb-2 text-gray-900 ">
                          Release Date:
                        </span>
                        <input
                          onChange={(e) => setDate(e.target.value)}
                          className="grow h-[36px] pl-3  rounded-md border border-slate-400 mt-1 text-gray-900 font-light"
                          type="text"
                        />
                      </label>
                      <label className="flex flex-row items-center space-x-2">
                        <span className="block text-sm font-medium mb-2 text-gray-900 ">
                          Length:
                        </span>
                        <input
                          onChange={(e) => setLenght(e.target.value)}
                          className="w-full pl-3 h-[36px] rounded-md border border-slate-400 mt-3 text-gray-900 font-light"
                          type="text"
                        />
                      </label>
                      <label className="flex flex-row items-center space-x-2">
                        <span className="block text-sm font-medium mb-2 text-gray-900 ">
                          Description:
                        </span>
                        <input
                          onChange={(e) => setDescription(e.target.value)}
                          className="w-full h-[36px] pl-3  rounded-md border border-slate-400 mt-3 mb-1 text-gray-900 font-light"
                          type="text"
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
                            options={optionsRate}
                            className="w-full px-3  rounded-md  mt-2 text-gray-900 font-normal text-base "
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
                            options={optionsLanguage}
                            className="w-full px-3  rounded-md  text-gray-900 font-normal text-base"
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
                            className="basic-multi-select w-full px-3  rounded-md text-gray-900 font-normal text-base"
                            classNamePrefix="select"
                            options={optionsCasts}
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
                            className="basic-multi-select w-full px-3  rounded-md  text-gray-900 font-normal text-base"
                            classNamePrefix="select"
                            options={optionsGenres}
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
                            className="basic-multi-select w-full px-3  rounded-md text-gray-900 font-normal text-base"
                            classNamePrefix="select"
                            options={optionsMood}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <></>
              )}
              {step === 2 ? <CreateVideoForm /> : <></>}
              {step === 3 ? <CreateTrailerForm /> : <></>}
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleOnPrevious}
                  className="absolute left-10 bottom-4  rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white  bold-2 shadow-xl  drop-shadow-xl"
                >
                  Prev
                </button>
              ) : (
                <></>
              )}

              {step === 3 ? (
                <div className="absolute right-10 bottom-4 flex justify-end ">
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setClose();
                    }}
                    className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#FFFFFF] hover:bg-[#E50914] hover:ring-[#E50914] text-[#FA0000] hover:text-white hover:ring-white  bold-2 shadow-xl  drop-shadow-xl  mt-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmitForm}
                    className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl  mt-1"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleOnClick}
                  className="absolute right-10 bottom-4 rounded-md px-6 pt-2.5 pb-2 text-sm font-medium   bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl "
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
