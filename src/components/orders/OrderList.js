import React from 'react'
import { Fragment } from 'react'
import { useHistory } from 'react-router-dom';
function OrderList({order}) {
    const history = useHistory();
    const viewSingleOrder = (orderInfo) =>{
        localStorage.setItem('orderId',orderInfo.id);
        history.push("/singleOrder");
    }
    return (
        <Fragment>
            <tr>
                <th><button onClick={() =>viewSingleOrder(order)}>View Order</button></th>
                <th scope="col">{order.id}</th>
                <th scope="col">{order.buyerEmail}</th>
                <th scope="col">{order.status}</th>
                <th scope="col">{order.price}</th>
            </tr>
        </Fragment>
    )
}

export default OrderList
