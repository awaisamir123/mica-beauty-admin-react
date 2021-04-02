import React, { useEffect } from "react";
import { getSingleOrder } from "../../actions/order";
import { connect } from "react-redux";
import { Fragment } from "react";
import SingleOrderItem from "./SingleOrderItem";
function SingleOrder({ getSingleOrder, orders: { order, loading } }) {
  useEffect(() => {
    getSingleOrder();
  }, [getSingleOrder]);
  return (
    <Fragment>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <Fragment>
          <h1 className="text-center">Invoice # {order.id}</h1>
          <div>
            <h2>Customer {order.fullName}</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm">Email</div>
              <div className="col-sm">{order.buyerEmail}</div>
            </div>
            <div className="row">
              <div className="col-sm">Status</div>
              <div className="col-sm">{order.status}</div>
            </div>
            <div className="row">
              <div className="col-sm">Price</div>
              <div className="col-sm">{order.price}</div>
            </div>
          </div>
          <div>
          <h1 className="pt-5 pb-3">Product List</h1>
            {order.singleOrderItemsDTO !== undefined ? 
            (order.singleOrderItemsDTO.length > 0 ? 
            (order.singleOrderItemsDTO.map((Order) => (
                <SingleOrderItem key = {Order.productName} Order={Order}/>
            ))): ('')): ('') }
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
const mapStateToProps = (state) => ({
  orders: state.orders,
});
export default connect(mapStateToProps, { getSingleOrder })(SingleOrder);
