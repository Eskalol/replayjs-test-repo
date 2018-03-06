import React, { Component } from 'react';
import { Button } from 'mdbreact';
import Moment from 'react-moment';
import 'moment-timezone';


class InviteRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.invite.key}</td>
        <td><Moment format="D.MM.YYYY, hh:mm:ss" date={this.props.invite.created} /></td>
        <td>
          <Button color="warning" size="sm"><i className="fa fa-copy"/> Copy url</Button>
          <Button color="danger" size="sm" onClick={this.props.handleDelete(this.props.invite.key)}>
            <i className="fa fa-remove"/> Remove
          </Button>
        </td>
      </tr>
    );
  }
}

export default class Invites extends Component {

  constructor(props) {
    super(props);


    // TODO: call api to populate state.
    this.state = {
      invites: [
        {
          key: 'f3h4r0h3r03h3f03h0hfgig',
          created: Date.now()
        }, {
          key: 'giohoinst0gh450th034rh02h-2',
          created: Date.now()
        }, {
          key: 'oiengpigrneg94394h',
          created: Date.now()
        }
      ]
    };
    this.handleGenerateInviteClick = this.handleGenerateInviteClick.bind(this);
    this.handleDeleteInvite = this.handleDeleteInvite.bind(this);
  }

  handleGenerateInviteClick() {
    //TODO: call api
    let { invites } = this.state;
    invites.push({
      key: Math.random().toString(36).substring(7),
      created: Date.now()
    });
    this.setState({
      invites
    });
    console.log(this.state);
  }

  handleDeleteInvite(key) {
    let { invites } = this.state;
    return () => {
      //TODO: call api
      invites = invites.filter((invite) => key !== invite.key);
      this.setState({ invites });
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleGenerateInviteClick}>Generate Invite</Button>
        <table className="table">
          <thead>
            <th>Key</th>
            <th>Created</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.invites.map((invite, i) => <InviteRow key={i} invite={invite} handleDelete={this.handleDeleteInvite}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}
