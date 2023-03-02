import { useState } from 'react';
export default function ModalChangeAccountPhone() {
  const handleSubmitForm = () => {};

  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 bg-black/50 ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="block p-10 rounded-lg shadow-lg bg-white w-[700] h-[511] ">
            <form className="flex-col">
              <label
                htmlFor="formFile"
                className="form-label inline-block  text-gray-700 font-semibold text-xl mb-4 mr-40 "
              >
                Change Your Phone Number
              </label>
              <div className="flex items-center justify-center w-full">
                <div className="flex-col rounded-md  flex justify-center items-center ">
                  <div className="form-group mb-6">
                    <p>Mobile Phone Number:</p>
                    <input
                      type="tel"
                      className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-500  bg-white   rounded   m-0 mb-3.5 border-blue-500 focus:border-transparent focus:ring-0"
                      id="phone"
                      pattern="[0-9]{10}"
                      aria-describedby="emailHelp"
                      placeholder="Enter phne Number"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start ">
                <button
                  type="submit"
                  onClick={handleSubmitForm}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl  mt-1"
                >
                  Verify
                </button>
                <button
                  value="verify"
                  type="submit"
                  onClick={handleSubmitForm}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#FFFFFF] hover:bg-[#E50914] hover:ring-[#E50914] text-[#FA0000] hover:text-white hover:ring-white  bold-2 shadow-xl  drop-shadow-xl  mt-1"
                >
                  Delete Phone Number
                </button>
                <button
                  type="submit"
                  onClick={handleSubmitForm}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#FFFFFF] hover:bg-[#E50914] hover:ring-[#E50914] text-[#FA0000] hover:text-white hover:ring-white  bold-2 shadow-xl  drop-shadow-xl  mt-1"
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
