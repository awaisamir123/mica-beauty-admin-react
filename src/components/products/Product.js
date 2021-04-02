import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllProducts } from "../../actions/product";
import ProductList from './ProductList'
import { Fragment } from "react";
function Product({ getAllProducts, product: { products, loading } }) {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  const createProduct = () => {
    window.location.href='/create-product';
  }
  return (
    <Fragment>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Fragment>
          <div className="py-4">
          <div className="float-left"><h1>All Products</h1></div> 
          <div className="float-right"><i className="fas fa-plus fa-3x" onClick={()=> createProduct()}> </i></div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col-1">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
                {products.length > 0 ? (
                    products.map((product,index) => (
                        <ProductList key={product.id} product={product}/>
                    ))
                ): <td>No Products</td>}

            </tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  );
}
Product.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps, { getAllProducts })(Product);
