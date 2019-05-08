import React, { Component } from "react";
// import { ProductConsumer, ProductProvider } from "../context";

import { storeProducts } from "../data";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../redux/cart_ducks";
import "./Details.css";
import { Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

class Details extends Component {
  state = {
    product: {},
    localCart: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const product = storeProducts.find(product => {
      return product.id === parseInt(id);
    });
    const localCart = product.detailProduct.size.map(({ size, price }) => {
      return {
        title: product.detailProduct.title,
        size,
        price,
        isChecked: false,
        quantity: 0
      };
    });
    this.setState({ product, localCart });
  }

  addToCart = () => {
    const { localCart } = this.state;
    const toBeAdded = localCart.filter(size => size.isChecked);
    toBeAdded.forEach(item => delete item.isChecked);
    this.props.addToCart(toBeAdded);
    this.props.history.push("/my-cart");
  };

  render() {
    const { product, localCart, auth } = this.state;
    console.log(localCart, "localCart");
    console.log(auth)
    //if (!auth.uid) return <Redirect to="/login" />;
    if (!product.title) return <p> Loading </p>;
    const { title, img, description, info, caution, size } = product;
    return (
      <div className="container py5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1 className="text-title">{title}</h1>
          </div>
        </div>
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        <p className="text-capitalize font-weight-bold mt-3 mb-0">
          Information about product :
        </p>
        <p className="text-muted lead">{info}</p>
        <p className="caution">{caution}</p>
        {/* <strong>
          price : {price} <span>Bath/kg</span>
        </strong> */}
        <div>
          <div className="checking">
            {localCart.map(({ size, price, isChecked }, idx) => (
              <div key={size + idx}>
                <Input
                  type="checkbox"
                  value={size}
                  checked={isChecked}
                  onChange={e => {
                    let localCartClone = [...localCart];
                    localCartClone[idx].isChecked = !localCartClone[idx]
                      .isChecked;
                    this.setState({
                      localCart: localCartClone
                    });
                  }}
                />
                <p className="checking text-capitalize font-weight-bold mt-3 mb-3">
                  {size}
                  <span> Price: {price} Bath per Kg</span>
                </p>
                <input
                  type="number"
                  style={{ marginleft: 4, display: !isChecked && "none" }}
                  placeholder="Quantity"
                  onChange={e => {
                    let localCartClone = [...localCart];
                    localCartClone[idx].quantity = e.target.value;
                    this.setState({
                      localCart: localCartClone
                    });
                  }}
                />
              </div>
            ))}
          </div>
          <Link to="/productList">
            <button className="btn">Back to Product Lists</button>
          </Link>
          <button className="btn-addToCart" onClick={() => this.addToCart()}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)) 
  }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
      auth: state.firebase.auth
    }
  }

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Details);
