/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable  no-unused-vars */

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/layout/Alert';
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
    console.log(text);
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

  setAlert = (msg, type) => {
    this.setState({
      showAlert: {
        msg,
        type,
      },
    });

    setTimeout(() => {
      this.setState({
        showAlert: null,
      });
    }, 3000);
  };

  render() {
    const {
      loading, users, showClearUsers, showAlert,
    } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          {showAlert && showAlert.msg && showAlert.type && (
            <Alert alert={showAlert} />
          )}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClearUsers={showClearUsers}
                    setAlert={this.setAlert}
                  />
                  <div className="container">
                    <Users loading={loading} users={users} />
                  </div>
                </>
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
