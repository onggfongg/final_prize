import React from "react";
import { Form, Icon, Button, Row, Col } from "antd";
import TextField from "../components/TextField";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {signIn} from '../redux/authAction'
import { Redirect } from 'react-router-dom'

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  render() {
    const { email, password, error } = this.state;
    const { authError, auth } = this.props
    if(auth.uid) return <Redirect to='/' />

    return (
      <Row>
        <Col span={12} offset={6}>
          <div>
            <h1 className="display-2">Login</h1>
          </div>
          <Form className="login-form">
            <TextField
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              value={email}
              onChange={event => {
                this.setState({ email: event.target.value });
              }}
            />
            <TextField
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="password"
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
                  this.props.signIn(this.state)
                  }
                }
              >
                Login
              </Button>

              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button1"
                href="/sign-up"
                style={{marginLeft: 19}}
              >
                Sign up
              </Button>
              <div className='red-text center'>
                { authError ? <p>{authError}</p>: null}
              </div>
            </Form.Item>
          </Form>
          <p> {error} </p>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
