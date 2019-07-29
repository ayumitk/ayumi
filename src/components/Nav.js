import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import Language from './Language';

class Nav extends Component {
  render() {
    return (
      <div style={{ marginLeft: 'auto', display: 'flex' }}>
        <nav>
          <Link to="/about/">About</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/work/">Work</Link>
          <Link to="/contact/">Contact</Link>
        </nav>
        <Language />
      </div>
    );
  }
}

export default Nav;
