import React, { Component } from "react";
import "./productList.css";
import Product from "./product";
import Title from "../components/Title";
import { storeProducts } from "../data";
import { connect } from "react-redux";

class productList extends Component {
  state = {
    products: storeProducts
  };

  render() {
    const { products } = this.state;
    const { cart } = this.props;
    return (
      <React.Fragment>
        {/* <h1> {JSON.stringify(cart)}</h1> */}
        <div className="productsAll">
          <div className="container">
            <Title name="" title="Our products" />

            <div className="row">
              {products.map(product => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart
});

export default connect(mapStateToProps)(productList);
