import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';
// import { Link } from 'react-router-dom';

export default class LoginPage extends Component {



  render() {
    return (
      <div className="mx-auto align-middle">
        <div className="row">
          <div className="col ml-10"/>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-12 col-md-10">
            <div className="card">
              <div className="container">
                <form>
                  <p/>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                  <Input label="Type your password" icon="lock" group type="password" validate/>
                  <div className="text-center">
                      <Button>Login</Button>
                  </div>
                </form>
                <div className="text-center">
                  Not created an account yet?
                  <a href="/signup">
                    <Button color="secondary">
                      Sign up
                    </Button>
                  </a>
                </div>
                <p/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
