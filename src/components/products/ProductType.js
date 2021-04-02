import React,{useEffect,Fragment} from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleProductType} from "../../actions/product";
function ProductType({getSingleProductType,product:{productType,loading}}) {
    useEffect(() => {
        const pName = localStorage.getItem("product_name");
        getSingleProductType(pName);
      }, [getSingleProductType]);
    return (
        <Fragment>
            {loading ? (<h2>Loading</h2>): (
                <Fragment>
                    <h2>Product Type</h2>
                    <h5>{productType.productType}</h5>
                </Fragment>
            )}
        </Fragment>
    )
}

ProductType.propTypes = {
    getSingleProductType: PropTypes.func.isRequired,
  };

const mapStateToProps = (state) => ({
    product: state.product,
  });
export default connect(mapStateToProps, { getSingleProductType })(ProductType)
