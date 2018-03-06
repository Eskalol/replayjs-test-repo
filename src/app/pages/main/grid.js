import React, { Component } from 'react';
import { Card, CardImage, CardTitle, CardText, CardBody, Button } from 'mdbreact';
import { Document, Page } from 'react-pdf';
import Moment from 'react-moment';
import 'moment-timezone';


class NewsCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-5 col-sm-10 col-lg-3 col-lx-3 p-1">
        <Card>
          <CardImage tag="div">
            <Document file={this.props.news.url}/>
          </CardImage>
          <CardBody>
            <CardTitle>{this.props.news.name}</CardTitle>
            <CardText>{this.props.news.name} gitt ut <Moment format="D.MM.YYYY, hh:mm:ss" date={this.props.news.date} /></CardText>
            <div className="text-center">
              <Button color="unique" href="#">Les!</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}



export default class GridView extends Component {

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
      <div className="row">
        {this.state.news.map((news, i) => <NewsCard news={news} key={i} />)}
      </div>
    );
  }
}
