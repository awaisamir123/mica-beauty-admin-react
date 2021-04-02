import React,{useEffect,Fragment} from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleProductCollection } from "../../actions/product";
function ProductCollection({getSingleProductCollection,product: {loading,productCollections}}) {
    useEffect(() => {
        const pName = localStorage.getItem("product_name");
        getSingleProductCollection(pName);
      }, [getSingleProductCollection]);
    return (
        <Fragment>
            {loading ? (<h2>Loading</h2>): (
                <Fragment>
                    <h2>Product Collection</h2>
                    {productCollections.length > 0 ? (
                        productCollections.map((collection) => (
                            <h5>{collection.productCollection}</h5>
                        ))
                    ): <h5>No Collections Established</h5>}
                </Fragment>
            )}
        </Fragment>
    )
}
ProductCollection.propTypes = {
    getSingleProductCollection: PropTypes.func.isRequired,
  };

const mapStateToProps = (state) => ({
    product: state.product,
  });

export default connect(mapStateToProps, { getSingleProductCollection })(ProductCollection)
