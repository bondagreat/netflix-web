import { Modal } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';

const ModalChangePassword = ({ password, setPassword }) => {
  return (
    <>
      <Modal show={password} onClose={() => setPassword(false)} size="lg">
        <Modal.Header className>Change your password</Modal.Header>
        <Modal.Body>
          <div className="flex justify-center h-80">
            <form className="flex flex-col w-96 gap-8">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your password" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="current password"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" />
                </div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Your new password" />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  placeholder="new password "
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" />
                </div>
                <TextInput
                  id="password1"
                  type="password"
                  placeholder="Re-enter New Password"
                  required={true}
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalChangePassword;
