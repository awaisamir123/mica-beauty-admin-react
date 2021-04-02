import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "../layout/Header";
import Landing from "../users/Landing";
import SingleUser from "../user/SingleUser";
import UsersColors from "../usersColors/usersColors";
import Product from "../products/Product";
import SingleProduct from "../products/SingleProduct";
import BaseColors from "../baseColors/BaseColors";
import CreateProductForm from "../products/CreateProductForm";
import Orders from "../orders/Orders";
import SingleOrder from "../orders/SingleOrder";
import Recurly from "../recurly/Recurly";
import RecurlyUser from "../recurly/RecurlyUser";
import Alert from "../layout/Alert";
import { Login } from "../auth/Login";
import { useAuth0 } from "@auth0/auth0-react";

export const Routes = () => {
  const { isLoading } = useAuth0();
  if (isLoading) return <h2>Loading</h2>;
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Login} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/users" component={Landing} />
            <Route exact path="/colors" component={BaseColors} />
            <Route exact path="/singleUser" component={SingleUser} />
            <Route exact path="/usersColors" component={UsersColors} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/singleproduct" component={SingleProduct} />
            <Route exact path="/create-product" component={CreateProductForm} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/singleOrder" component={SingleOrder} />
            <Route exact path="/recurly" component={Recurly} />
            <Route exact path="/recurlyUser" component={RecurlyUser} />
          </Switch>
        </section>
      </div>
    </Router>
  );
};
