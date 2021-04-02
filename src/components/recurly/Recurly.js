import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllProducts } from "../../actions/recurly";
import { Fragment } from "react";
import RecurlyList from "./RecurlyList";
function Recurly({ getAllProducts, recurly: { recurlyUsers, loading } }) {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
    <Fragment>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Fragment>
          <div className="py-4">
            <div className="float-left">
              <h1>All Recurly Users</h1>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col-1">#</th>
                <th scope="col-1">Code</th>
                <th scope="col">Name</th>
              </tr>
            </thead>
            <tbody>
                {recurlyUsers.length > 0 ? (
                    recurlyUsers.map((recurlyUser,index) => (
                        <RecurlyList key={index} num={index+1} recurlyUser={recurlyUser}/>
                    ))
                ): <td>No Products</td>}

            </tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  );
}
Recurly.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  recurly: state.recurly,
});
export default connect(mapStateToProps, { getAllProducts })(Recurly);
