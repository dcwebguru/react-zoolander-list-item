import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/header-candy.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <Link to="/">
            <img className="logo" src="/img/footer-kitty.png"/>
          </Link>
        </footer>
      </div>
    );
  }
}