/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable  no-unused-vars */

import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Users from './components/users/Users';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
      showClearUsers: false,
      showAlert: {
        msg: '',
        type: '',
      },
    };
  }

  async componentDidMount() {
    // this.setState({
    //   loading: true,
    // });
    // const res = await axios.get(
    //   `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}`,
    // );
    // this.setState({
    //   users: res.data,
    //   loading: false,
    // });
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}}`,
    );
    this.setState({
      users: res.data.items,
      loading: false,
      showClearUsers: true,
    });
  };

  clearUsers = () => this.setState({ users: [], showClearUsers: false });

  showAlert = (msg, type) => {
    this.setState({
      showAlert: {
        msg,
        type,
      },
    });
  };

  render() {
    const {
      loading, users, showClearUsers, showAlert,
    } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClearUsers={showClearUsers}
          showAlert={this.showAlert}
        />
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
export default App;
