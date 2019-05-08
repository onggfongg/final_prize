import React, { Component } from "react";
import "./Contactus.css";

import { Form, Icon, Button, Row, Col } from "antd";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import axios from "axios";
import { Link } from "react-router-dom";

class Contactus extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault(e);
    const { email, message } = this.state;
    const res = await axios.post("/api/form", {
      email,
      message
    });
    if (res.data) {
      this.props.history.push("/finishedContactus");
    }
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <section id="contact-form" className="py-3">
            <div className="container">
              <h1 className="l-heading">
                <span class="text-primary">Contact</span> Us
              </h1>
              <p>Please fill out the form below to contact us</p>

              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  onChange={this.handleChange}
                />
              </div>
              {/* <Link to="/finishedContactus"> */}
              <button type="submit" className="btn">
                Submit
              </button>
              {/* </Link> */}
            </div>
          </section>
        </Form>

        <section id="contact-info-home" className="bg-dark">
          <div className="info-content1">
            <div className="info-content2">
              <h3>
                <span className="text-primary2">Location</span> Of Head Office
              </h3>
              <p-home>
                39/19 Moo 5 T.Khokkrabue A.Mueng Samutsakorn 74000 Thailand
              </p-home>
              <br />
              <p1-home>
                Tel : +6634-442-245-8 Mobile : +6661-168-9989 Fax :
                +6634-442-249
              </p1-home>
            </div>
            <div className="info-content3">
              <h3>
                <span className="text-primary3">Location</span> Of Bangbon
                Office
              </h3>
              <p2-home>
                236 Soi Prayamonthat Yak 35-9 Bangbon, Bangbon, Bangkok 10150
                Thailand
              </p2-home>
              <br />
              <p2-home>Tel : +662-417-7224-5 Fax : +662-417-7226</p2-home>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contactus;
