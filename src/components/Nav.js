import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Language from './Language';

const StyledNav = styled.div`
  margin-left:auto;
  display:flex;
  @media (max-width: 565.98px) {
    display:none;
  }
`;

class Nav extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props;
    const { nav } = data.site.siteMetadata;

    return (
      <StyledNav>
        <nav>
          {nav.map(item => (
            <Link to={item.href} key={item.title} style={{ marginLeft: '1rem' }}>{item.title}</Link>
          ))}
        </nav>
        <Language />
      </StyledNav>
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
