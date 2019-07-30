import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MailOutline } from 'styled-icons/material/MailOutline';

import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { Github } from 'styled-icons/fa-brands/Github';
import { Dribbble } from 'styled-icons/fa-brands/Dribbble';
import { Behance } from 'styled-icons/fa-brands/Behance';
import { LinkedinIn } from 'styled-icons/fa-brands/LinkedinIn';

import { Container } from '../styles/StyledComponents';


const StyledFooter = styled.footer`
  background: ${props => props.theme.color.black};
  color: #FFF;
  text-align:center;
  margin-top:10rem;
  padding: 3rem 0;
  a{
    color:#FFF;
    &:hover{
      color:${props => props.theme.color.pink};
    }
  }
`;

const FooterNav = styled.nav`
  a{
    display: inline-block;
    padding:1rem;
  }
`;

const SocialLink = styled.nav`
  display:flex;
  justify-content: center;
  margin:2rem 0;
  a{
    display: block;
    background:#FFF;
    padding: 1rem;
    border-radius:100%;
    color:${props => props.theme.color.black};
    margin: 0.5rem;
    line-height:0;
    &:hover{
      background: ${props => props.theme.color.pink};
      color:${props => props.theme.color.black};
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin-top:2rem;
`;

const MailLink = styled.p`
  &:hover{
    color:${props => props.theme.color.pink};
  }
`;


class Footer extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          author: PropTypes.string,
          social: PropTypes.array,
          nav: PropTypes.array,
        }),
      }),
    }).isRequired,
  }

  render() {
    const { data } = this.props;
    const { author, social, nav } = data.site.siteMetadata;

    const socialIcons = [<Twitter />, <Github />, <Dribbble />, <Behance />, <LinkedinIn />];

    for (let i = 0; i < social.length; i += 1) {
      social[i].icon = socialIcons[i];
    }


    return (
      <StyledFooter>
        <Container>
          <FooterNav>
            {nav.map(item => (
              <Link to={item.href} key={item.title}>{item.title}</Link>
            ))}
          </FooterNav>
          <SocialLink>
            {social.map(item => (
              <a href={item.url} target="_blank" key={item.name}>{item.icon}</a>
            ))}
          </SocialLink>
          <MailLink>
            <MailOutline />
            {' '}
            <a href="mailto:hello@ayumi.tk " rel="external">hello@ayumi.tk</a>
          </MailLink>
          <Copyright>
            <Link to="/">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              {author}
            </Link>
          </Copyright>
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
            social{
              name
              url
            }
            nav{
              title
              href
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
