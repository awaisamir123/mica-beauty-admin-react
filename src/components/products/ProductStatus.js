import React,{useEffect} from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleProductStatus } from "../../actions/product";
import { Fragment } from 'react';
function ProductStatus({getSingleProductStatus,product: { productStatus, loading }}) {
    useEffect(() => {
        const pName = localStorage.getItem("product_name");
        getSingleProductStatus(pName);
      }, [getSingleProductStatus]);
    return (
        <Fragment>
            {loading ? (<h2>Loading</h2>): (
                <Fragment>
                    <h2>Product Status</h2>
                    <h5>{productStatus.productStatus}</h5>
                </Fragment>
            )}
        </Fragment>
    )
}
ProductStatus.propTypes = {
    getSingleProductStatus: PropTypes.func.isRequired,
  };

const mapStateToProps = (state) => ({
    product: state.product,
  });

export default  connect(mapStateToProps, { getSingleProductStatus })(ProductStatus)
