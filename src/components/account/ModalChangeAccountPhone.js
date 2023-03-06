import { useRef, useState } from 'react';
export default function ModalChangeAccountPhone({ show, setClose }) {
  const handleSubmitForm = () => {};
  const cancelButtonRef = useRef(null);
  const handleClickButton = () => {};
  const phone = document.getElementById('phone');

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-black/50 ${
          show ? 'block' : 'hidden'
        }`}
        onClick={() => setClose(true)}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="block p-10 rounded-lg shadow-lg bg-white w-[700] h-[511] ">
            <form className="flex-col">
              <label
                // htmlFor="formFile"
                className="form-label inline-block  text-gray-700 font-semibold text-xl mb-4 mr-40 "
              >
                Change Your Phone Number
              </label>
              <div className="flex items-center justify-center w-full">
                <div className="flex-col rounded-md  flex justify-center items-center ">
                  <div className="form-group mb-6">
                    <p className="flex justify-start">Mobile Phone Number:</p>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-500  bg-white   rounded   m-0 mb-3.5 border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:border-transparent focus:ring-0"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="Enter Phone Number"
                    />
                    <input
                      type="password"
                      className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-500  bg-white   rounded   m-0 mb-3.5 border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:border-transparent focus:ring-0"
                      aria-describedby="password"
                      placeholder="Enter Confirm Password "
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start ">
                <button
                  type="button"
                  id="save-btn-phone"
                  onClick={handleSubmitForm}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl  mt-1"
                >
                  Save
                </button>
                {/* <button
                  id="delete-btn"
                  value="clear"
                  type="delete"
                  onfocus="clearInput(this)"
                  onClick={() => handleClickButton()}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#FFFFFF] hover:bg-[#E50914] hover:ring-[#E50914] text-[#FA0000] hover:text-white hover:ring-white  bold-2 shadow-xl  drop-shadow-xl  mt-1"
                >
                  Delete Phone Number
                </button> */}
                <button
                  type="button"
                  id="cancel-btn-phone"
                  onClick={handleSubmitForm}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#FFFFFF] hover:bg-[#E50914] hover:ring-[#E50914] text-[#FA0000] hover:text-white hover:ring-white  bold-2 shadow-xl  drop-shadow-xl  mt-1"
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
