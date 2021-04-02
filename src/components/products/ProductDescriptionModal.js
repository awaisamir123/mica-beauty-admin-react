import React from "react";
import { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updateSingleProductDescription} from '../../actions/product'

function ProductDescriptionModal({ singleProduct,updateSingleProductDescription }) {
  const [show, setShow] = useState(false);
  const [description,setDescription] = useState(singleProduct.description);
  const [ingredients,setIngredients] = useState(singleProduct.ingredients);
  const [tips,setTips] = useState(singleProduct.tips);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const saveChanges = async () =>{
   await updateSingleProductDescription({description,ingredients,tips});
   setShow(false);
  }
  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        Edit Description
      </Button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {singleProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Description</label>
            <textarea
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Ingredients</label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tips</label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={tips}
              onChange={(e) => setTips(e.target.value)}
              placeholder="Enter email"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
ProductDescriptionModal.propTypes = {
  updateSingleProductDescription: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps,{updateSingleProductDescription})(ProductDescriptionModal);
