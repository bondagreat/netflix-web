import { Modal } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useState } from 'react';

const ModalChangeAccountEmail = ({ Account, setAccount }) => {
  return (
    <>
      <Modal
        show={Account}
        onClose={() => setAccount(false)}
        size="lg"
        popup={true}
        className="h-[100vh] overflow-hidden"
      >
        <Modal.Header>
          <div className="flex justify-center mt-5 h-12">
            <div className="flex justify-center ml-5">
              Change your account email
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="flex justify-center h-96">
            <form className="flex flex-col w-96 gap-8">
              <div>
                <div className="mb-2 block text-">
                  <Label htmlFor="email1" value="Your account email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="Your email"
                  required={true}
                />
              </div>
              <div className="mb-[-35px] block text-base">
                <Label htmlFor="email1" value="Your new account email" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="new email "
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" />
                </div>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="Re-enter New email"
                  required={true}
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalChangeAccountEmail;
