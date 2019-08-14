import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Language from './Language';

const NavContainer = styled.div`
  margin-left:auto;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 767.98px) {
    display: none;
  }
  a{
    color: ${props => props.theme.color.black};
    display: block;
    line-height: 1;
    @media (min-width: 768px) {
      margin-right: 2rem;
    }
    &:hover{
      color: ${props => props.theme.color.black};
      opacity: 0.8;
    }
  }

  &.active {
    display: block;
    background: ${props => props.theme.color.black};
    width: 100%;
    position: absolute;
    left: 0;
    top: 48px;
    z-index: 9999;

    a {
      color: #fff;
      padding: 1.5rem;
      border-bottom: solid 1px rgba(255, 255, 255, 0.1);
      text-align: center;
    }
  }
`;

const HamburgerButton = styled.button`
  @media (min-width: 768px) {
    display:none;
  }
  width: 25px;
  height: 25px;
  padding: 0;
  border: 0;
  background: transparent;
  margin-left: auto;

  span,
  span::before,
  span::after {
    position: absolute;
    height: 2px;
    width: 25px;
    background: ${props => props.theme.color.black};
    display: block;
    content: "";
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  span:before {
    top: -8px;
  }

  span:after {
    bottom: -8px;
  }

  &.active {
    span::before {
      transform: rotate(-45deg);
      top: 0;
    }

    span {
      background: transparent;
    }

    span::after {
      transform: rotate(45deg);
      bottom: 0;
    }
  }
`;

class Nav extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  state = {
    isActive: false,
  }

  toggleHamburger = () => {
    this.setState((prevState) => {
      if (prevState.isActive) {
        return {
          isActive: !prevState.isActive,
        };
      }
      return {
        isActive: !prevState.isActive,
      };
    });
  }

  render() {
    const { isActive } = this.state;

    const { data } = this.props;
    const { nav } = data.site.siteMetadata;

    return (
      <>
        <HamburgerButton
          className={isActive ? 'active' : ''}
          onClick={this.toggleHamburger}
          type="button"
          aria-label="Navigation Toggle Button"
        >
          <span />
        </HamburgerButton>
        <NavContainer className={isActive ? 'active' : ''}>
          {nav.map(item => (
            <Link to={item.href} key={item.title}>{item.title}</Link>
          ))}
          <Language />
        </NavContainer>
      </>
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
