import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllUsers } from "../../actions/user";
import { Fragment } from "react";
import UserList from './UserList'
function Landing({ getAllUsers, user: { users, loading } }) {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  return (
    <Fragment>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Fragment>
          <h1 className="text-center mt-3">Customers</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
            {users.length > 0 ? (
                users.map((user,index) => (
                    <UserList key={user.id} user={user} index={index+1} />
                ))
            ): <td>No Users</td>}
            </tbody>
          </table>
        </Fragment>
      )}
    </Fragment>
  );
}

Landing.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getAllUsers })(Landing);
