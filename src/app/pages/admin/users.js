import React, { Component } from 'react';
import { Button } from 'mdbreact';



class UserRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.email}</td>
        <td>
          <Button color="danger" size="sm"><i className="fa fa-remove"/> Remove</Button>
        </td>
      </tr>
    );
  }
}

export default class Users extends Component {

  constructor(props) {
    super(props);


    //TODO: call api to get this info
    this.state = {
      users: [
        {
          _id: '123',
          name: 'Cool',
          email: 'cool@example.com'
        }, {
          _id: '456',
          name: 'Awesome',
          email: 'awesome@example.com'
        }, {
          _id: '789',
          name: 'Random',
          email: 'rabdin@example.com'
        }
      ]
    }
  }

  render() {
    return (
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </thead>
        <tbody>
          {this.state.users.map((user, i) => <UserRow key={i} user={user} />)}
        </tbody>
      </table>
    );
  }
}
