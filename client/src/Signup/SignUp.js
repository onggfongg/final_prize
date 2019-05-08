import React from "react";
import { Form, Icon, Button, Row, Col } from "antd";
import TextField from "../components/TextField";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {signUp} from '../redux/authAction'

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  }

  render() {
    const { email, firstName, lastName, address, password, confirmPassword, error } = this.state;
    const { auth, authError } = this.props
    if(auth.uid) return <Redirect to='/' />
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <div>
              <h1 className="display-2">Signup Form</h1>
            </div>
            <Form className="login-form">
              <TextField
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="First Namme"
                value={firstName}
                onChange={event => {
                  this.setState({ firstName: event.target.value });
                }}
              />
              <TextField
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Last Name"
                value={lastName}
                onChange={event => {
                  this.setState({ lastName: event.target.value });
                }}
              />
              <TextField
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Address"
                value={address}
                onChange={event => {
                  this.setState({ address: event.target.value });
                }}
              />
              <TextField
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
                value={email}
                onChange={event => {
                  this.setState({ email: event.target.value });
                }}
              />
              <TextField
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => {
                  this.setState({ password: event.target.value });
                }}
              />
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  onClick={() => {
                    this.props.signUp(this.state)
                  }}
                >
                  Confirm SignUp
                </Button>
                <div className="red-text center">
                  { authError ? <p>{ authError }</p> : null }
                </div>
              </Form.Item>
            </Form>
            <p> {error} </p>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
