import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getSingleUser} from '../../actions/user';
import { Fragment } from 'react';
const SingleUser = ({getSingleUser,user: { user, loading }}) => {
    useEffect(() => {
        const id = localStorage.getItem('user');
        getSingleUser(id);
      }, [getSingleUser]);

      const ViewUsersColors = () => {
        window.location.href = "/usersColors";
      }
    return (
        <Fragment>
            {loading ? (<h2>Spinner</h2>) :(
                <Fragment>
                    <h1>Welcome {user.fullName}</h1>
                    <button onClick={()=> ViewUsersColors()}> View All Colors</button>
                </Fragment>
            )}
        </Fragment>
    )
}

SingleUser.propTypes = {
    getSingleUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

const mapStateToProps = (state) => ({
    user: state.user
  });
export default connect(mapStateToProps, {getSingleUser})(SingleUser);
