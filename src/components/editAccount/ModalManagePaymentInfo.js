import { Modal } from "flowbite-react";

const ModalManagePaymentInfo = ({ managePayment, setManagePayment }) => {
  return (
    <>
      <Modal
        show={managePayment}
        onClose={() => setManagePayment(false)}
        size="100-vw"
      >
        <Modal.Header>Manage payment info</Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalManagePaymentInfo;
