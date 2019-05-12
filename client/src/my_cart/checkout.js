import React, { Component } from "react";
// import "./finishedSignup.css";

class checkout extends Component {
  render() {
    return (
      <div>
        <div id="showcase">
          <div className="container">
            <div className="showcase-content">
              <h1>
                <span className="text-primary1">You order is complete!</span>
              </h1>

              <a className="btn" href="/">
                Back to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default checkout;
