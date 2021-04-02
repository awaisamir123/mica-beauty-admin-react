import React from 'react'
import { Fragment } from "react";
function SingleOrderItem({Order}) {
    console.log(Order);
    return (
        <Fragment>
            <div className="row">
                <div className="col">
                    <h1>Name</h1>
                </div>
                <div className="col">
                    <h1>{Order.productName}</h1>
                </div>
                <div className="col">
                    <h1>Shade</h1>
                </div>
                <div className="col">
                    <h1>{Order.shade}</h1>
                </div>
            </div>
            
        </Fragment>
    )
}

export default SingleOrderItem
