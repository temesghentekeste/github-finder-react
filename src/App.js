/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */

import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}
export default App;
