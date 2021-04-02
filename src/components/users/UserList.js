import React from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";

function UserList({ user, index }) {
  const navigatePage = (id) => {
    localStorage.setItem("user", id);
    window.location.href = "/singleUser";
  };
  return (
    <Fragment>
      <tr onClick={() => navigatePage(user.id)}>
        <th scope="row">{index}</th>
        <td>{user.fullName}</td>
        <td>{user.role}</td>
        <td>{user.email}</td>
      </tr>
    </Fragment>
  );
}

UserList.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserList;
