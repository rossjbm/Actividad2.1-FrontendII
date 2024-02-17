import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AlertaExito({showMensaje, setShowMensaje, mensaje}) {

    const handleClose = () => setShowMensaje(false);
    // const handleShow = () => setShowMensaje(true);

    return (<Modal
            show={showMensaje}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>Éxito</Modal.Title>
            </Modal.Header>
            <Modal.Body>{mensaje}</Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                    ¡OK!
                </Button>
            </Modal.Footer>
        </Modal>)
}