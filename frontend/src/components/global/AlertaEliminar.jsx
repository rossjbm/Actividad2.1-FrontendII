import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AlertaConfirmar({handleClose, handleOnHide, handleShow, show}) {
    return (<Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>¿Seguro de Eliminar?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Los cambios no se podrán revertir.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleOnHide}>
                    Eliminar
                </Button>
                <Button variant="dark" onClick={handleClose}>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>)
}