import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../styles/StyledComponents';


const StyledFooter = styled.footer`
  background: ${props => props.theme.color.black};
  color: #FFF;
  text-align:center;
  a{
    color:#FFF;
  }
`;

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

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
};

export default Footer;
