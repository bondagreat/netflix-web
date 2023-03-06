import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { Label, TextInput } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validateEditPin from '../../validators/validate-edit-pin';
import * as profileApi from '../../apis/profile-api';
import { addPin } from '../../redux/authSlice';

const initialInput = { oldPin: '', pin: '', confirmPin: '' };

export default function EditProfileLock({ id, idx }) {
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
      const result = validateEditPin(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        input.id = id;
        await profileApi.editPin(input);
        dispatch(addPin({ arrayIdx: idx, pin: input.pin }));
        navigate('/profiles/manage');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="mt-2">
        <button
          className="border-2 border-gray-500 px-4 text-gray-500 py-1 hover:border-white hover:text-white"
          onClick={handleClickChange}
        >
          Change
        </button>
      </div>
      <Modal show={open} size="md" popup={true} onClose={() => setOpen(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Change your pin:
            </h3>
            <div>
              <div className="mb-2 block">
                <Label value="Old PIN:" />
              </div>
              <TextInput
                name="oldPin"
                onChange={handleChangeInput}
                type="text"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="New PIN:" />
              </div>
              <TextInput
                name="pin"
                onChange={handleChangeInput}
                type="text"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Confirm your New PIN:" />
              </div>
              <TextInput
                name="confirmPin"
                onChange={handleChangeInput}
                type="text"
                required={true}
              />
            </div>

            <div className="flex justify-start gap-3 mt-5 ">
              <div>
                <button
                  onClick={handleSubmit}
                  className="border-2 border-red-600 text-red-600 hover:border-red-600 px-4 hover:text-white hover:bg-red-600 py-1 rounded-md"
                >
                  Submit
                </button>
              </div>
              <div>
                <button
                  onClick={() => setOpen(false)}
                  className="border-2 border-gray-500 text-gray-500 hover:border-gray-500 px-4 hover:text-white hover:bg-gray-500 py-1 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
