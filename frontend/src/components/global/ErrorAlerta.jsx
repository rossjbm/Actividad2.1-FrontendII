import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AlertaError({showError, setShowError, error}) {

    const handleClose = () => setShowError(false);
    // const handleShow = () => setShowError(true);

    return (<Modal
            show={showError}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{error}</Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                    ¡OK!
                </Button>
            </Modal.Footer>
        </Modal>)
}