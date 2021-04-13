/* eslint-disable camelcase */
import React, { Component } from 'react';

export default class UserItem extends Component {
  constructor() {
    super();
    this.state = {
      login: 'mojombo',
      avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
      html_url: 'https://github.com/mojombo',
    };
  }

  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt={login}
          className="round-img"
          style={{ width: '60px' }}
        />
        <h2>{login}</h2>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}
