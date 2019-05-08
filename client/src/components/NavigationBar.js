import React, { Component } from "react";
import { Link } from "react-router-dom";
import profile from "./profile.svg";
import {connect} from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import NavBar from './NavBar'

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
        <div className="container">
          <a className="navbar-brand" href="/">
            Prizeinterpack
          </a>

          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="logo">
              <span className="navbar-toggler-icon" />
            </div>
          </button>

          <div className={`${classOne}`} id="navbarResponsive">
            <NavBar>

            </NavBar>
          </div>
        </div>
      </nav>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log(state)
//   return{
//     //auth: state.firebase.auth
//   }
// }

export default NavigationBar;
