import React, { Component } from "react";
import "./finishedContactus.css";

class finishedContactus extends Component {
  render() {
    return (
      <div>
        <div id="showcase2">
          <div className="container">
            <div className="showcase-content">
              <h1>
                <span className="text-primary1">Email is already sent!</span>
              </h1>

              <a className="btn" href="/">
                Go back to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default finishedContactus;
