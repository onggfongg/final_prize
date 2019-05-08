import React from "react";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { Link } from "react-router-dom";

const NavBar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Aboutus">
          About us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/productList">
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contactus">
          Contact us
        </Link>
      </li>
      {links}
    </ul>
  );
};

const mapStateToProps = state => {
  //console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavBar);
