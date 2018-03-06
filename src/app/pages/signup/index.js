import React, {Component} from 'react';
import {Input, Button} from 'mdbreact';


export default class SignUpPage extends Component {

  render() {
    return (
      <div className="mx-auto align-middle">
        <div className="row">
          <div className="col ml-10"/>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-sm-12 col-md-10">
            <div className="card">
              <div className="card-body">
                <div className="form-header secondary-color">
                  <h3>
                    <i className="fa fa-edit mr-2" />
                    Sign up:
                  </h3>
                </div>
                <form>
                    <Input label="Invite key" icon="key" group type="text" validate error="wrong" success="right"/>
                    <Input label="Your name" icon="user" group type="email" validate error="wrong" success="right"/>
                    <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                    <Input label="Your password" icon="lock" group type="password" validate/>
                    <div className="text-center">
                        <Button color="deep-orange">Sign up</Button>
                    </div>
                    <p/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
