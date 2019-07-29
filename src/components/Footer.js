import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../styles/StyledComponents';


const StyledFooter = styled.footer`
  background: ${props => props.theme.color.black};
  color: #FFF;
  text-align:center;
  a{
    color:#FFF;
  }
`;

class Footer extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props;
    const { author } = data.site.siteMetadata;

    return (
      <StyledFooter>
        <Container>
          <Link to="/">
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            {author}
          </Link>
        </Container>
      </StyledFooter>
    );
  }
}


export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
