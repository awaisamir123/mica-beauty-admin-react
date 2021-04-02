import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleProduct } from "../../actions/product";
import { Fragment } from "react";
import ProductDescription from "../products/ProductDescription";
import ProductStatus from "../products/ProductStatus";
import ProductType from "../products/ProductType";
import ProductCollection from "../products/ProductCollection";

const SingleProduct = ({ getSingleProduct, product: { product, loading } }) => {
  useEffect(() => {
    const id = localStorage.getItem("product_Id");
    getSingleProduct(id);
  }, [getSingleProduct]);
  return (
    <Fragment>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Fragment>
          <h2 className="py-3">{product.name}</h2>
          <ProductDescription product={product} />
          <div className="py-5">
            <div className="row">
              <div className="col"><ProductStatus/></div>
              <div className="col"><ProductType/></div>
              <div className="col"><ProductCollection/></div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
SingleProduct.propTypes = {
  getSingleProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps, { getSingleProduct })(SingleProduct);
