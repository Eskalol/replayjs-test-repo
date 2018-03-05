import React, {Component} from 'react';
// import {Header} from './header';
// import {Title} from './title';
// import {Techs} from './techs/techs';
// import {Footer} from './footer';
import Navbar from './components/navbar';

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100%'
//   },
//   main: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column'
//   }
// };

export class Main extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}
