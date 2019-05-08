import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./firebase";
import { createFirestoreInstance, getFirestore } from "redux-firestore";
import { withFirebase, isLoaded, isEmpty } from "react-redux-firebase";
// import { ProductProvider } from "./context";

const rrfConfig = {
  userProfile: "User"
  //useFirestoreForProfile: true,

  //attachAuthIsReady: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router />,
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
