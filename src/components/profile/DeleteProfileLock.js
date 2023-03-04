import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as profileApi from '../../apis/profile-api';
import validatePin from '../../validators/validate-pin';
import { addPin } from '../../redux/authSlice';

const initialInput = { pin: '' };

export default function DeleteProfileLock({ id, idx, pin }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickChange = () => {
    setOpen(!open);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const result = validatePin(input);
      if (result) {
        setError(result);
      } else if (input.pin === pin) {
        setError({});
        await profileApi.deletePin({ id: id, pin: null });
        dispatch(addPin({ arrayIdx: idx, pin: null }));
        navigate('/profiles/manage');
      } else {
        setError([{ message: 'your pin is incorrect' }]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(error);

  return (
    <>
      <div className="mt-2">
        <button
          className="border-2 border-gray-500 px-4 text-gray-500 py-1 hover:border-white hover:text-white"
          onClick={handleClickChange}
        >
          Delete
        </button>
      </div>
      <Modal show={open} size="md" popup={true} onClose={() => setOpen(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white flex justify-center">
              Enter your pin
            </h3>
            <div>
              <TextInput
                name="pin"
                onChange={handleChangeInput}
                type="text"
                required={true}
              />
            </div>

            <div className="mt-7">
              <h3 className="text-center text-xl font-medium text-gray-900 dark:text-white flex justify-center ">
                Are you sure you want to remove your pin?
              </h3>
              <div className="flex justify-end gap-3 mt-5 ">
                <div>
                  <button
                    onClick={() => setOpen(false)}
                    className="border-2 border-gray-500 text-gray-500 hover:border-gray-500 px-4 hover:text-white hover:bg-gray-500 py-1 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="border-2 border-red-600 text-red-600 hover:border-red-600 px-4 hover:text-white hover:bg-red-600 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
