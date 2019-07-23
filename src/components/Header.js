import React, {Component} from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import { Container } from '../styles/StyledComponents';

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

class Header extends Component{
  render(){
    return(
      <StyledHeader>
        <Container>
          <Brand to="/">Ayumi Takahashi</Brand>
        </Container>
      </StyledHeader>
    )
  }
}

export default Header;