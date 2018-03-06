import React, { Component } from 'react';
import NavBar from '../../components/navbar';

import Users from './users';
import Invites from './invites';


export default class AdminPage extends Component {

  constructor(props) {
    super(props);
    const { hash } = window.location;
    this.state = {
      usersIsActive: hash === '#users' || hash !== '#invites',
      inviteIsActive: hash === '#invites'
    };
    console.log(this.state);
    this.handleUsersClick = this.handleUsersClick.bind(this);
    this.handleInvitesClick = this.handleInvitesClick.bind(this);
  }

  handleUsersClick() {
    this.setState(Object.assign(this.state, {
      usersIsActive: true,
      inviteIsActive: false
    }));
  }

  handleInvitesClick() {
    this.setState(Object.assign(this.state, {
      usersIsActive: false,
      inviteIsActive: true
    }));
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="m-3">
          <ul className="nav nav-tabs nav-justified unique-color-dark">
            <li className="nav-item">
                <a  className={`nav-link ${this.state.usersIsActive ? 'active' : ''}`}
                    data-toggle="tab" href="#users" role="tab" onClick={this.handleUsersClick}>
                  <i className="fa fa-user mr-2"/>Users
                </a>
            </li>
            <li className="nav-item">
                <a  className={`nav-link ${this.state.inviteIsActive ? 'active' : ''}`}
                    data-toggle="tab" href="#invites" role="tab" onClick={this.handleInvitesClick}>
                  <i className="fa fa-user-plus mr-2"/> Invite
                </a>
            </li>
          </ul>
          <div className="tab-content card p-3">
            { this.state.usersIsActive && (
              <div className="tab-pane fade in show active" id="users" role="tabpanel">
                <br/>
                <Users />
              </div>
            )}
            { this.state.inviteIsActive && (
              <div className="tab-pane fade in show active" id="invites" role="tabpanel">
                <br/>
                <Invites />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
