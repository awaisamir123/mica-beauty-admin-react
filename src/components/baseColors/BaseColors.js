import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getAllColors} from '../../actions/baseColors'
import BaseColorsList from "./BaseColorsList";
function BaseColors({getAllColors, color:{colors,loading}}) {
    useEffect(() => {
        getAllColors();
      }, [getAllColors]);
    return (
        <Fragment>
            {loading ? (
                <h2>Loading</h2>
            ): (
                <Fragment>
                    <h1>All Colors</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col-1">#</th>
                <th scope="col">Color Identifier</th>
                <th scope="col">Color Code</th>
                <th scope="col">Definition</th>
              </tr>
            </thead>
            <tbody>
                {colors.length > 0 ? (
                    colors.map((color,index) => (
                        <BaseColorsList key={color.colorCode} number={index +1}  color={color}/>
                    ))
                ): <td>No Colors</td>}
            </tbody>
          </table>
                </Fragment>
            )}
        </Fragment>
    )
}
BaseColors.propTypes = {
    getAllColors: PropTypes.func.isRequired,
  };
  const mapStateToProps = (state) => ({
    color: state.color,
  });
  export default connect(mapStateToProps, { getAllColors })(BaseColors);
