import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from '../styles/StyledComponents';
import Nav from './Nav';


const StyledHeader = styled.header`
  background:#FFF;
`;

const Brand = styled(Link)`
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  &:hover{
    text-decoration: none;
  }
`;

class Header extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props;
    const { author } = data.site.siteMetadata;

    return (
      <StyledHeader>
        <Container style={{ display: 'flex' }}>
          <Brand to="/">{author}</Brand>
          <Nav />
        </Container>
      </StyledHeader>
    );
  }
}


export default () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);
