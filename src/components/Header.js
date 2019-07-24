import React from 'react';
import { Link } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../styles/StyledComponents';
import Language from './Language';


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

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;

  return (
    <StyledHeader>
      <Container style={{ display: 'flex' }}>
        <Brand to="/">{author}</Brand>
        <Language />
      </Container>
    </StyledHeader>
  );
};

export default Header;
