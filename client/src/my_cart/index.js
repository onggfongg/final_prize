import React from "react";
import { connect } from "react-redux";
import { deleteItemFromCartByIndex } from "../redux/cart_ducks";
import "./index.css";
import { firebaseConnect } from "react-redux-firebase";
import firebase from "firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { withFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { Link } from "react-router-dom";

export const calculateTotalPrice = cart => {
  let totalPrice = 0;
  cart.forEach(({ value }) => {
    let quantity = value.product.quantity;
    console.log(quantity);
    let price = value.product.price;
    totalPrice += quantity * price;
  });
  return {
    totalPriceWithoutTax: parseInt(totalPrice)
  };
};
class MyCart extends React.Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyAhZ2PGk3gYqNXMIxRTKOVN7y3zNeiLJ1Y",
      authDomain: "ppcb-30001.firebaseapp.com",
      databaseURL: "https://ppcb-30001.firebaseio.com",
      projectId: "ppcb-30001",
      storageBucket: "ppcb-30001.appspot.com",
      messagingSenderId: "995991587181"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
  render() {
    const { cart, auth } = this.props;
    const { totalPriceWithoutTax } = calculateTotalPrice(cart);
    console.log(cart);
    if (!auth.uid) return <Redirect to="/login" />;
    //const ownerCart = cart.filter(({ key }) => key === auth.uid);
    // if(cart.length<1){
    // return <h1> Loading... please wait </h1>
    // } else {
    return (
      <div>
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>My Cart</h1>
        </div>
        {cart.map((product, index) => {
          return (
            <div className="container">
              <div className="contain row form-group">
                <div className="detail col-sm-10">
                  <span>
                    {" "}
                    <h5>
                      Product : {product.value.product.title}{" "}
                      {product.value.product.size}{" "}
                    </h5>
                  </span>
                  <br />
                  <span className="price">
                    Price : {product.value.product.price} Bath/kg
                  </span>
                </div>
                <div className="col-sm-2 text-right">
                  <h5>qty: {product.value.product.quantity}</h5>
                </div>
                <button
                  className="btn-cart"
                  onClick={() =>
                    this.props.deleteItemFromCartByIndex(product.key, index)
                  }
                  key={index}
                >
                  Remove this product
                </button>
              </div>
              <br />
              <hr />
            </div>
          );
        })}
        <div className="container">
          <div className="total-bg">
            <h3 className="row" style={{ fontWeight: 400 }}>
              <span className="col-6">total price:</span>
              <span className="col-6 text-right">
                {totalPriceWithoutTax} Bath
              </span>
            </h3>
          </div>
        </div>
        <div className="text-center">
          <Link to="/checkout">
            <button className="btn">Checkout</button>
          </Link>
        </div>
      </div>
    );
  }
}
//}

const mapStateToProps = state => {
  console.log(state);
  console.log(state.firebase.ordered.receipt);
  //const cartAuth = state.firebase.auth.uid;
  //console.log(cartAuth);
  // if(state.firestore.ordered.Users){
  if (state.firebase.ordered.receipt) {
    return {
      // cart: state.firestore.ordered.Users,
      cart: state.firebase.ordered.receipt,
      auth: state.firebase.auth
    };
  } else {
    return {
      cart: state.cart.cart,
      auth: state.firebase.auth
    };
  }
};

export default compose(
  connect(
    mapStateToProps,
    { deleteItemFromCartByIndex }
  ),
  firebaseConnect(["receipt"])
)(MyCart);
