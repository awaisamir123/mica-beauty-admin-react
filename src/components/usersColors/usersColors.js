import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersColors } from "../../actions/user";
import PropTypes from "prop-types";
import { Fragment } from "react";
import UsersColorsList from "./UsersColorsList";
const UsersColors = ({getUsersColors,user: {colors,loading}}) => {
  useEffect(() => {
    const id = localStorage.getItem('user');
    getUsersColors(id);
  }, [getUsersColors]);
    return (
        <Fragment>
          {loading ? (<h2>Loading</h2>) : (
            <Fragment>
              <h1>All Users Colors</h1>
              <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Color</th>
                <th scope="col">NickName</th>
                <th scope="col">View Code</th>
              </tr>
            </thead>
            <tbody>
              {colors.length > 0 ? (
                colors.map((color,index) => (
                  <UsersColorsList key={color.id} color={color} index={index}/>
              ))
              ):<td>No Colors</td>}
            </tbody>
          </table>
            </Fragment>
          )}
        </Fragment>
    )
}
UsersColors.propTypes = {
  getUsersColors: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, { getUsersColors })(UsersColors);
