import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { Button, Label, TextInput } from 'flowbite-react';
export default function CreateProfileLock() {
  const [open, setOpen] = useState(false);
  const handleClickChange = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="mt-2">
        <button
          className="border-2 border-gray-500 px-4 text-gray-500 py-1 hover:border-white hover:text-white"
          onClick={handleClickChange}
        >
          Create
        </button>
      </div>
      <Modal show={open} size="md" popup={true} onClose={() => setOpen(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Lock this profile by creating a pin
            </h3>
            <div>
              <div className="mb-2 block">
                <Label value="Create your PIN:" />
              </div>
              <TextInput type="text" required={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Confirm your PIN:" />
              </div>
              <TextInput type="text" required={true} />
            </div>

            <div className="flex justify-start gap-3 mt-5 ">
              <div>
                <button className="border-2 border-red-600 text-red-600 hover:border-red-600 px-4 hover:text-white hover:bg-red-600 py-1 rounded-md">
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
