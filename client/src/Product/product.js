import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./product.css";
// import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 col-xs-12">
        <div className="card">
          <div
            className="img-container"
            onClick={() => console.log("you clicked me on the image container")}
          >
            <Link to={"/productList/" + id}>
              <img
                src={img}
                alt="product"
                className="card-img-top"
                style={{ height: 160 }}
              />
            </Link>
            {/* <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {" "}
                  in inCart{" "}
                </p>
              ) : (
                <i className="fas fa-cart-plus " />
              )}
            </button> */}
          </div>

          {/*card footer*/}
          <div className="card-footer">
            <h6 className="align-self-center mb-0">{title}</h6>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

// Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.shape({
//       id: PropTypes.number,
//       img: PropTypes.string,
//       title: PropTypes.string,
//       price: PropTypes.number,
//       inCart: PropTypes.bool
//     }).isRequired
//   })
// };

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba (0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
  }
`;
