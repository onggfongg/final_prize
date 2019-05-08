import React, { Component } from "react";
import "./Profile.css";
import { firebaseConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import firebase from "firebase";

class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   var config = {
  //     apiKey: "AIzaSyAhZ2PGk3gYqNXMIxRTKOVN7y3zNeiLJ1Y",
  //     authDomain: "ppcb-30001.firebaseapp.com",
  //     databaseURL: "https://ppcb-30001.firebaseio.com",
  //     projectId: "ppcb-30001",
  //     storageBucket: "ppcb-30001.appspot.com",
  //     messagingSenderId: "995991587181"
  //   };
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp(config);
  //   }
  // }
  render() {
    const { auth, profile } = this.props;
    // console.log(profile, "profile");
    const history = profile.History ? profile.History : {};
    // console.log(history);
    console.log(history, "history");
    const keys = history === {} ? [] : Object.keys(history);
    return (
      <div id="showcase1">
        <div className="container" style={{ border: "1px solid black" }}>
          <div className="content">
            <h4>User Profile</h4>
          </div>
          <div className="container-profile">
            <div className="profile-img-container">
              <div className="profile-container">
                {" "}
                {profile && profile.initials}{" "}
              </div>
            </div>
            <div className="container-content-profile">
              <p className="text-muted lead">Firstname : {profile.firstName}</p>
              <hr />
              <p className="text-muted lead">Lastname : {profile.lastName}</p>
              <hr />
              <p className="text-muted lead">Email : {profile.email}</p>
              <hr />
              <p className="text-muted lead">
                <span style={{ fontWeight: 600 }}>
                  {" "}
                  History of Purchased Products:{" "}
                </span>
                {keys.map((item, index, keys) => (
                  <p style={{ marginBottom: 4, marginLeft: 15 }}>
                    {keys[index]} size: {history[keys[index]]["size"]} amount:{" "}
                    {history[keys[index]]["amount"]} ,{" "}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
// const mapStateToProps = (state) => {
//   console.log(state)
//   if(state.firebase.ordered.User){
//   return{
//     auth: state.firebase.auth,
//     user: state.firebase.ordered.User
//   }
//   }
// }

// const enhance = compose(
//   connect((state) => {
//     // do things before first firebase connect
//     // this will attach "firebase" prop and override actual firebase db
//     // it will cause following firebaseConnect to fail miserably because
//     // firebaseConnect relies on "firebase" prop to be an actual database ref
//     // rather than data object that firebaseReducer returns.
//     // Potential solution here would be moving reducer or firebase prop that
//     // firebaseConnect relies on to a different key
//     return {
//       ...state
//     }
//   }),
//   firebaseConnect(() => [
//     {
//       path: 'User'
//     }
//   ]),
//   connect(mapStateToProps)
// )

export default connect(mapStateToProps)(Profile);
