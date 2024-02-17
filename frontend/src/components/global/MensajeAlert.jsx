import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export function MyVerticallyCenteredModal({show, onHide, error}) {
    var props = {show}
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Alerta
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{error}</h4>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={onHide}>Entendido</Button>
        </Modal.Footer>
      </Modal>
    );
  }