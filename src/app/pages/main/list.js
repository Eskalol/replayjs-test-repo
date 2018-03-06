import React, { Component } from 'react';
import { Card, Button } from 'mdbreact';
import Moment from 'react-moment';
import 'moment-timezone';


class NewsRow extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td><Moment format="D.MM.YYYY, hh:mm:ss" date={this.props.news.date} /></td>
        <td>{this.props.news.name}</td>
        <td><Button color="unique" size="sm" href="#">Les!</Button></td>
      </tr>
    );
  }
}

export default class ListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          name: "News paper 1",
          date: Date.now(),
          url: 'http://www.menon.no/wp-content/uploads/2015/12/SamplePDF.pdf'
        }, {
          name: "News paper 2",
          date: Date.now(),
          url: 'http://www.menon.no/wp-content/uploads/2015/12/SamplePDF.pdf'
        }, {
          name: "News paper 3",
          date: Date.now(),
          url: 'http://www.menon.no/wp-content/uploads/2015/12/SamplePDF.pdf'
        }, {
          name: "News paper 4",
          date: Date.now(),
          url: 'http://www.menon.no/wp-content/uploads/2015/12/SamplePDF.pdf'
        }
      ]
    };
  }

  render() {
    return (
      <Card>
        <table className="table">
          <thead>
            <th>Release date</th>
            <th>Name</th>
            <th>Action</th>
          </thead>
          <tbody>
            {this.state.news.map((news, i) => <NewsRow key={i} news={news} />)}
          </tbody>
        </table>
      </Card>
    );
  }

}
