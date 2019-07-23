import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import { Container } from '../styles/StyledComponents';
import { useStaticQuery, graphql } from 'gatsby';

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

const Header = () =>{

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

    return(
      <StyledHeader>
        <Container>
          <Brand to="/">{author}</Brand>
        </Container>
      </StyledHeader>
    )
}

export default Header;