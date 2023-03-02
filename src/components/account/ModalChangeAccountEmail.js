import { useRef, useState } from 'react';
export default function ModalChangeAccountEmail({ show, setClose }) {
  const handleSubmitForm = () => {};
  //   const [show, setShow] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-black/50 ${
          show ? ' block ' : ' hidden '
        }`}
        onClick={() => setClose(false)}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="block p-10 rounded-lg shadow-lg bg-white w-[700] h-[511] ">
            <form className="flex-col">
              <label
                htmlFor="formFile"
                className="form-label inline-block  text-gray-700 font-semibold text-xl mb-4 mr-40 "
              >
                Change Email
              </label>
              <div className="flex items-center justify-center w-full">
                <div className="flex-col rounded-md  flex justify-center items-center ">
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-500  bg-white   rounded   m-0 mb-3.5 border-blue-500 focus:border-transparent focus:ring-0"
                      id="exampleInputEmail2"
                      aria-describedby="emailHelp"
                      placeholder="Current Email "
                    />
                    <input
                      type="email"
                      className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-500  bg-white   rounded   m-0 mb-3.5 border-blue-500 focus:border-transparent focus:ring-0"
                      id="exampleInputEmail2"
                      aria-describedby="emailHelp"
                      placeholder="New Email "
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start ">
                <button
                  type="submit"
                  id="save-btn"
                  onClick={handleSubmitForm}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl  mt-1"
                >
                  Save
                </button>
                <button
                  type="submit"
                  id="cancel-btn"
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
