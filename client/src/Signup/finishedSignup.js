import React, { Component } from "react";
import "./finishedSignup.css";

class finishedSignUp extends Component {
  render() {
    return (
      <div>
        <div id="showcase">
          <div className="container">
            <div className="showcase-content">
              <h1>
                <span className="text-primary1">You are already signup!</span>
              </h1>

              <a className="btn" href="login">
                Login to website
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default finishedSignUp;
