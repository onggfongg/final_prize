import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../redux/authAction";

const SignedInLinks = props => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/my-cart">
          My cart
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <Link
          className="nav-item btn btn-floating pink lighten-1"
          to="/Profile"
        >
          {props.profile.initials}
        </Link>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
