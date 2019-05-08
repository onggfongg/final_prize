import cartReducer from "./cart_ducks";
import authReducer from "./authReducer"
import { firestoreReducer } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import firebase from '../firebase'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { firebaseReducer } from 'react-redux-firebase'

const reducers = {
  cart: cartReducer,
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
};

const combinedReducers = combineReducers(reducers);
const composeEnhancer =  compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})));
const store = createStore(combinedReducers, composeEnhancer);

export default store;
