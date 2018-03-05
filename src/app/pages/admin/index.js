import React, { Component } from 'react';
import NavBar from '../../components/navbar';

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
    this.state = {
      ...this.state,
      usersIsActive: true,
      inviteIsActive: false
    };
  }

  handleInvitesClick() {
    this.state = {
      ...this.state,
      usersIsActive: false,
      inviteIsActive: true
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="m-3">
          <ul className="nav nav-tabs nav-justified unique-color-dark">
            <li className="nav-item">
                <a className={`nav-link ${this.state.usersIsActive ? 'active' : ''}`} data-toggle="tab" href="#users" role="tab">
                  <i className="fa fa-user mr-2"/>Users
                </a>
            </li>
            <li className="nav-item">
                <a className={`nav-link ${this.state.inviteIsActive ? 'active' : ''}`} data-toggle="tab" href="#invites" role="tab">
                  <i className="fa fa-user-plus mr-2"/> Invite
                </a>
            </li>
          </ul>
          <div className="tab-content card">
            <div className="tab-pane fade in show active" id="users" role="tabpanel">
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                  porro voluptate odit minima.</p>
            </div>
            <div className="tab-pane fade" id="invites" role="tabpanel">
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                  porro voluptate odit minima.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                  porro voluptate odit minima.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
