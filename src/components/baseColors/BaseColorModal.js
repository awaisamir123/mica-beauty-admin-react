import React,{useState,Fragment} from 'react'
import { Button,Modal } from 'react-bootstrap';
function BaseColorModal({color}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
      setShow(true)
  };
    return (
        <Fragment>
            <Button variant="primary" onClick={handleShow}>
        View Color Code
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Color {color.colorCode} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col">
                    <span>Color #1</span>
                </div>
                <div className="col">
                    <span>{color.color1}</span>
                </div>
                <div className="col">
                    <span>Amount #1</span>
                </div>
                <div className="col">
                    <span>{color.amountColor1}</span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>Color #2</span>
                </div>
                <div className="col">
                    <span>{color.color2}</span>
                </div>
                <div className="col">
                    <span>Amount #2</span>
                </div>
                <div className="col">
                    <span>{color.amountColor2}</span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>Color #3</span>
                </div>
                <div className="col">
                    <span>{color.color3}</span>
                </div>
                <div className="col">
                    <span>Amount #3</span>
                </div>
                <div className="col">
                    <span>{color.amountColor3}</span>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Fragment>
    )
}

export default BaseColorModal
