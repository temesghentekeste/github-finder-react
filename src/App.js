/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unused-state */

import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const res = await axios.get('https://api.github.com/users');
    this.setState({
      users: res.data,
      loading: false,
    });
  }

  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
export default App;
