import React,{useEffect} from 'react';
import {getAllOrders} from '../../actions/order'
import { connect } from "react-redux";
import { Fragment } from 'react';
import OrderList from './OrderList'
function Orders({getAllOrders, orders:{orders,loading}}) {
    useEffect(() => {
        getAllOrders();
      }, [getAllOrders]);
    return (
        <Fragment>
            {loading ? (<h2>Loading</h2>): (<Fragment>
                <h1>All Orders</h1>
                <table className="table">
            <thead>
              <tr>
                <th>View</th>
                <th scope="col-1">Order #</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <OrderList key={order.id} order={order}/>
                    ))
                ): <td>No Colors</td>}
            </tbody>
          </table>
            </Fragment>)}
        </Fragment>
    )
}
const mapStateToProps = (state) => ({
    orders: state.orders,
  });
export default connect(mapStateToProps, { getAllOrders })(Orders);
