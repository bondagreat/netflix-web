import { useRef, useState } from 'react';
import { changeEmail } from '../../apis/auth-api';
export default function ModalChangeAccountEmail({ show, setClose }) {
  const [currentEmail, setCurrentEmail] = useState();
  const [newEmail, setNewEmail] = useState();
  const [confirmPassword, setConfirmpassword] = useState();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const payload = {
      currentEmail,
      newEmail,
      confirmPassword,
    };
    console.log(payload);
    try {
      const result = await changeEmail(payload);
      console.log(result.data);
      if (result && result.data) {
        console.log('first');
        setCurrentEmail('');
        setNewEmail('');
        setConfirmpassword('');
        setClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   const [show, setShow] = useState(false);

  // const cancelButtonRef = useRef(null);

  return (
    <>
      <div
        className={`w-screen h-screen fixed top-0 left-0 bg-black/50 ${
          show ? ' block ' : ' hidden '
        }`}
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
                      name="userLoginId1"
                      className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-500  bg-white   rounded   m-0 mb-3.5 border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:border-transparent focus:ring-0"
                      id="id_userLoginId01"
                      placeholder="Current Email "
                      value={currentEmail}
                      onChange={(e) => setCurrentEmail(e.target.value)}
                    />
                    <input
                      type="email"
                      name="userLoginId2"
                      className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-500  bg-white   rounded   m-0 mb-3.5 border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:border-transparent focus:ring-0"
                      id="id_userLoginId02"
                      aria-describedby="emailHelp"
                      placeholder="New Email "
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      className="form-control block  w-full  pl-3  pr-24  py-3  text-sm  font-normal  text-gray-500  bg-white   rounded   m-0 mb-3.5 border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:border-transparent focus:ring-0"
                      // id="exampleInputEmail2"
                      aria-describedby="password"
                      placeholder="Enter Confirm Password "
                      value={confirmPassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start ">
                <button
                  type="button"
                  id="save-btn-email"
                  onClick={handleSubmitForm}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#E50914] text-white bold-2 shadow-xl  drop-shadow-xl  mt-1"
                >
                  Save
                </button>
                <button
                  type="button"
                  id="cancel-btn-email"
                  onClick={setClose}
                  className="rounded-md px-6 pt-2.5 pb-2 text-sm font-medium  m-1 bg-[#FFFFFF] hover:bg-[#E50914] hover:ring-[#E50914] text-[#FA0000] hover:text-white hover:ring-white  bold-2 shadow-xl  drop-shadow-xl  mt-1"
                  // ref={cancelButtonRef}
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
