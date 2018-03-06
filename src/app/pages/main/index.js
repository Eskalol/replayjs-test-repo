import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { NavItem, NavbarNav } from 'mdbreact';

import NavBar from '../../components/navbar';
import GridView from './grid';
import ListView from './list';


class NavBarItems extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <NavbarNav className="mr-auto pl-lg-4 pl-md-4 pl-sm-2 pl-xl-4">
        <NavItem>
          { this.props.listViewActive && (
            <a onClick={this.props.toggleView(true)} href="#grid">
              <i className="fa fa-th fa-2x white-text ml-2 mr-4 mt-2">
              </i>
            </a>
          )}
          { this.props.gridViewActive && (
            <a onClick={this.props.toggleView(false)} href="#list">
              <i className="fa fa-th-list fa-2x white-text ml-2 mr-4 mt-2">
              </i>
            </a>
          )}
        </NavItem>
        <NavItem className="ml-2">
          <div className="form-inline">
            <div className="md-form mt-0">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
            </div>
          </div>
        </NavItem>
      </NavbarNav>
    );
  }
}


class MainPage extends Component {

  constructor(props) {
    super(props);
    const { cookies } = this.props;
    const { hash } = window.location;

    if (hash) {
      console.log(hash);
      this.state = {
        gridViewActive: hash === '#grid' || hash !== '#list',
        listViewActive: hash === '#list'
      }
    } else {
      console.log(!!cookies.get('activeView'));
      this.state = {
        gridViewActive: (cookies.get('activeView') === 'gridView' || !cookies.get('activeView')),
        listViewActive: (cookies.get('activeView') === 'listView')
      };
    }

    this.handleToggleView = this.handleToggleView.bind(this);
  }

  handleToggleView(bool) {
    return () => {
      const { cookies } = this.props;
      cookies.set('activeView', bool ? 'gridView' : 'listView', { path: '/' });
      this.setState({
        gridViewActive: bool,
        listViewActive: !bool
      })
    }
  }

  render() {
    return (
      <div>
        <NavBar>
          <NavBarItems toggleView={this.handleToggleView}
                       gridViewActive={this.state.gridViewActive}
                       listViewActive={this.state.listViewActive}/>
        </NavBar>
        <div className="m-3">
          {this.state.gridViewActive && <GridView />}
          {this.state.listViewActive && <ListView />}
        </div>
      </div>
    );
  }
}

export default withCookies(MainPage);
