import React, {Component} from 'react';
import { View, Mask } from 'mdbreact';


export default class Base extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pt-5">
        <div className="pt-5">
          {this.props.children}
        </div>
      </div>
    );
  }
}
