import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import Language from './Language';

class Nav extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props;
    const { nav } = data.site.siteMetadata;

    return (
      <div style={{ marginLeft: 'auto', display: 'flex' }}>
        <nav>
          {nav.map(item => (
            <Link to={item.href} key={item.title} style={{ marginLeft: '1rem' }}>{item.title}</Link>
          ))}
        </nav>
        <Language />
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query NavQuery {
        site {
          siteMetadata {
            nav{
              title
              href
            }
          }
        }
      }
    `}
    render={data => <Nav data={data} />}
  />
);
