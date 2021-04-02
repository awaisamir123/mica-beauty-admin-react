import React from 'react'
import PropTypes from "prop-types";
import BaseColorModal from '../baseColors/BaseColorModal'
import { Fragment } from "react";
function UsersColorsList({color,index}) {
    return (
        <Fragment>
            <tr >
        <th scope="row">{index}</th>
        <td>{color.color}</td>
        <td>{color.nickName}</td>
        <Fragment>
          {color.color1 === null ? (<td>THis is a base Color</td>):
           <td>
             <BaseColorModal color={color}/>
             </td>}
        </Fragment>
      </tr>
        </Fragment>
    )
}
UsersColorsList.propTypes = {
    color: PropTypes.object.isRequired,
  };
export default UsersColorsList
