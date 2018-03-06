import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'mdbreact';

import NavBar from '../../components/navbar';
import UserInfo from './info';
import ChangePassword from './changePassword';


class BreadCrumb extends Component {
  render() {
    return (
      <div className="mr-auto ml-auto">
        <Breadcrumb>
          <BreadcrumbItem><a href="/" className="white-text">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Profile settings</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}


export default class SettingsPage extends Component {

  constructor(props) {
    super(props);
    const { hash } = window.location;
    this.state = {
      userInfoActive: hash === '#userInfo' || hash !== '#changePassword',
      changePasswordActive: hash === '#changePassword',
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
        <NavBar>
          <BreadCrumb />
        </NavBar>
        <div className="m-3">
          <ul className="nav nav-tabs nav-justified unique-color-dark">
            <li className="nav-item">
                <a  className={`nav-link ${this.state.userInfoActive ? 'active' : ''}`}
                    data-toggle="tab" href="#userInfo" role="tab" onClick={this.handleUserInfoClick}>
                  <i className="fa fa-user mr-2"/>{this.state.user.name}
                </a>
            </li>
            <li className="nav-item">
                <a  className={`nav-link ${this.state.changePasswordActive ? 'active' : ''}`}
                    data-toggle="tab" href="#changePassword" role="tab" onClick={this.handleChangePasswordClick}>
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
