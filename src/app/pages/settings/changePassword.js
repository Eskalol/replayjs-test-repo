import React, { Component } from 'react';
import { Input, Button } from 'mdbreact';
export default class ChangePassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      newPassword2: ''
    };
    this.handleChangePasswordClick = this.handleChangePasswordClick.bind(this);
    this.handleOldPasswordChange = this.handleOldPasswordChange.bind(this);
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
    this.handleNewPassword2Change = this.handleNewPassword2Change.bind(this);
  }

  handleChangePasswordClick() {
    console.log(this.state);
  }

  handleOldPasswordChange(event) {
    event.preventDefault();
    this.setState(Object.assign(
      this.state,
      { oldPassword: event.target.value }
    ));
  }

  handleNewPasswordChange(event) {
    event.preventDefault();
    this.setState(Object.assign(
      this.state,
      { newPassword: event.target.value }
    ));
  }

  handleNewPassword2Change(event) {
    event.preventDefault();
    this.setState(Object.assign(
      this.state,
      { newPassword2: event.target.value }
    ));
  }

  render() {
    return (
      <div className="container">
        <h2 className="mb-5 text-center">Change password</h2>
        <form>
            <Input label="Type your old password" icon="lock" group type="password" onInput={this.handleOldPasswordChange} validate/>
            <Input label="Type your new password" icon="lock" group type="password" onInput={this.handleNewPasswordChange} validate/>
            <Input label="Type your new password again" icon="lock" group type="password" onInput={this.handleNewPassword2Change} validate/>
            <div className="text-center">
                <Button color="warning" onClick={this.handleChangePasswordClick}>Change password</Button>
            </div>
        </form>
      </div>
    );
  }
}
