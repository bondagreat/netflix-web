import { Modal } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';

const ModalChangePhoneNumber = ({ phoneNumber, setPhoneNumber }) => {
  return (
    <>
      <Modal show={phoneNumber} onClose={() => setPhoneNumber(false)} size="lg">
        <Modal.Header>Change Phone Number</Modal.Header>
        <Modal.Body>
          <div className="flex justify-center h-80">
            <form className="flex flex-col w-96 gap-8">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="PhobeNumber1" value="Your phone number" />
                </div>
                <TextInput
                  id="PhobeNumber1"
                  type="PhobeNumber"
                  placeholder="current phone number"
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="PhobeNumber1" />
                </div>
                <div className="mb-2 block">
                  <Label htmlFor="PhobeNumber1" value="Your new phone number" />
                </div>
                <TextInput
                  id="PhobeNumber1"
                  type="PhobeNumber"
                  placeholder="New phone number "
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="PhoneNumber1" />
                </div>
                <TextInput
                  id="PhobeNumber"
                  type="PhobeNumber"
                  placeholder="Re-enter New your phone number"
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

export default ModalChangePhoneNumber;
