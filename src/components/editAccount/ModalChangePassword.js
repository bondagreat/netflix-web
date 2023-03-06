import { Modal } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import { ChangePassword } from '../../apis/user-api';

const ModalChangePassword = ({ password, setPassword }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New password and confirm password is not match.');
      return;
    }
    try {
      const response = await ChangePassword({
        currentPassword,
        newPassword,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Modal show={password} onClose={() => setPassword(false)} size="lg">
        <Modal.Header className>Change your password</Modal.Header>
        <Modal.Body>
          <div className="flex justify-center h-80">
            <form className="flex flex-col w-96 gap-8" onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="currentPassword" value="Your password" />
                </div>
                <TextInput
                  id="currentPassword"
                  type="password"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="newPassword" value="Your new password" />
                </div>
                <TextInput
                  id="newPassword"
                  type="password"
                  placeholder="New Password "
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="confirmPassword"
                    value="Re-enter New Password"
                  />
                </div>
                <TextInput
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
