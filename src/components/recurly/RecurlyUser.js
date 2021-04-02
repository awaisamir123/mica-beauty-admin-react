import React,{useEffect} from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSingleProduct } from "../../actions/recurly";
import { Fragment } from "react";
function RecurlyUser({ getSingleProduct, recurly: { recurlyUser, loading } }) {
    useEffect(() => {
        const id = localStorage.getItem("recurly_UserCode");
        getSingleProduct(id);
      }, [getSingleProduct]);
    return (
        <Fragment>
            {loading ? (
                <h2>Loading</h2>
            ): (
                <Fragment>
                    <h1>Hello</h1>
                </Fragment>
            )}
        </Fragment>
    )
}
RecurlyUser.propTypes = {
    getSingleProduct: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    recurly: state.recurly,
  });
  export default connect(mapStateToProps, { getSingleProduct })(RecurlyUser);
