import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import DomReplay, {Hud} from 'domreplayhud';
import { CookiesProvider } from 'react-cookie';

import MainPage from './app/pages/main';
import LoginPage from './app/pages/login';
import SignUpPage from './app/pages/signup';
import AdminPage from './app/pages/admin';
import SettingsPage from './app/pages/settings';
import Base from './app/components/base';

import './index.scss';

ReactDOM.render(
  <CookiesProvider>
    <Router history={browserHistory}>
      <Route component={Base}>
        <Route path="/" component={MainPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/settings" component={SettingsPage}/>
      </Route>
    </Router>
  </CookiesProvider>,
  document.getElementById('root')
);

// const domreplay = new DomReplay({debugmode: true});
// const hud = new Hud(domreplay);
// hud.render();
