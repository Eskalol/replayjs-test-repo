import React, { Component } from 'react';
import NavBar from '../../components/navbar';

import UserInfo from './info';
import ChangePassword from './changePassword';

export default class SettingsPage extends Component {

  constructor(props) {
    super(props);
    const { hash } = window.location;
    this.state = {
      userInfoActive: hash === '#users' || hash !== '#invites',
      changePasswordActive: hash === '#invites',
      user: {
        name: 'Awesome',
        email: 'awesome@example.com',
        role: 'some role'
      }
    };
    console.log(this.state);
    this.handleUserInfoClick = this.handleUserInfoClick.bind(this);
    this.handleChangePasswordClick = this.handleChangePasswordClick.bind(this);
  }

  handleUserInfoClick() {
    this.setState(Object.assign(this.state, {
      userInfoActive: true,
      changePasswordActive: false
    }));
  }

  handleChangePasswordClick() {
    this.setState(Object.assign(this.state, {
      userInfoActive: false,
      changePasswordActive: true
    }));
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="m-3">
          <ul className="nav nav-tabs nav-justified unique-color-dark">
            <li className="nav-item">
                <a  className={`nav-link ${this.state.userInfoActive ? 'active' : ''}`}
                    data-toggle="tab" href="#users" role="tab" onClick={this.handleUserInfoClick}>
                  <i className="fa fa-user mr-2"/>{this.state.user.name}
                </a>
            </li>
            <li className="nav-item">
                <a  className={`nav-link ${this.state.changePasswordActive ? 'active' : ''}`}
                    data-toggle="tab" href="#invites" role="tab" onClick={this.handleChangePasswordClick}>
                  <i className="fa fa-edit mr-2"/> Change password
                </a>
            </li>
          </ul>
          <div className="tab-content card p-3">
            { this.state.userInfoActive && (
              <div className="tab-pane fade in show active" id="users" role="tabpanel">
                <br/>
                <UserInfo />
              </div>
            )}
            { this.state.changePasswordActive && (
              <div className="tab-pane fade in show active" id="invites" role="tabpanel">
                <br/>
                <ChangePassword />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
