import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { Button, Label, TextInput } from 'flowbite-react';
export default function ProfileLockContainer({ onClick, onClose }) {
  const [open, setOpen] = useState(false);
  console.log(open);
  const handleClickChange = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="mt-2">
        <button
          className="border-2 border-white px-4 text-white py-1  "
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
              Lock this profile by creating a pin
            </h3>
            <div>
              <div className="mb-2 block">
                <Label value="Change your PIN:" />
              </div>
              <TextInput type="text" required={true} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Confirm your PIN:" />
              </div>
              <TextInput type="text" required={true} />
            </div>
            {/* <div className="flex justify-between">
              <div className="flex items-center gap-2">
                {/* <No Display Name id="remember" /> */}
            {/* <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="/modal"
                className="text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div> */}
            <div className="w-full">
              <Button>Submit</Button>
            </div>
            {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <a
                href="/modal"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
