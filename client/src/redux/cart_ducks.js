import firebase from "../firebase";

const ADD_TO_CART = "ADD_TO_CART";
const ADD_ERROR = "ADD_ERROR";
const DELETE_ITEM_BY_INDEX = "DELETE_ITEM_BY_INDEX";
const DELETE_ERROR = "DELETE_ERROR";
const CHECKOUT = "CHECKOUT";
const CHECKOUT_ERROR = "CHECKOUT_ERROR";

export const addToCart = product => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(product, "product");
    // const firestore = firebase.firestore();
    // const profile = getState().firebase.profile;
    // const authId = getState().firebase.auth.uid;
    const firebaseReal = firebase.database();
    // console.log([...product][0].title);
    // const productTitle = [...product][0].title;
    console.log(product, "product");
    firebaseReal
      .ref("receipt")
      .push({
        product: [...product][0]
      })
      .then(() => {
        dispatch({ type: ADD_TO_CART, payload: [...product][0] });
      })
      .catch(err => {
        console.log(err, "error");
        dispatch({ type: ADD_ERROR, payload: err });
      });
  };
};
export const deleteItemFromCartByIndex = (title, index) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //const firestore = firebase.firestore();
    const firebaseReal = firebase.database();
    const authId = getState().firebase.auth.uid;
    console.log(title);
    firebaseReal
      .ref("receipt")
      .child(title)
      .remove()
      .then(() => {
        dispatch({ type: DELETE_ITEM_BY_INDEX, payload: index });
      })
      .catch(err => {
        dispatch({ type: DELETE_ERROR, payload: err });
      });
  };
};

export const checkout = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //const firestore = firebase.firestore();
    const firebaseReal = firebase.database();
    const authId = getState().firebase.auth.uid;
    //console.log(title);
    firebaseReal
      .ref("receipt")
      .remove()
      .then(() => {
        dispatch({ type: CHECKOUT });
      })
      .catch(err => {
        dispatch({ type: CHECKOUT_ERROR, payload: err });
      });
  };
};

const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  if (type === ADD_TO_CART) {
    return {
      ...state,
      cart: [...state.cart, ...payload]
    };
  } else if (type === DELETE_ITEM_BY_INDEX) {
    const cartClone = [...state.cart];
    const updatedCart = cartClone.filter((item, index) => index !== payload);
    return {
      ...state,
      cart: updatedCart
    };
  } else if (type === CHECKOUT) {
    return {
      ...state,
      cart: [...state.cart, ...payload]
    };
  } else if (type === ADD_ERROR) {
    console.log("Add to cart failed", payload);
    return state;
  } else if (type === DELETE_ERROR) {
    console.log("Delete item from cart failed", action.err);
    return state;
  } else if (type === CHECKOUT_ERROR) {
    console.log("Checkout failed", action.err);
    return state;
  } else {
    return state;
  }
};
