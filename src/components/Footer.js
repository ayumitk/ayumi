import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  a{
    color:#FFF;
  }
`;

const SocialLink = styled.a`
  svg{
    width: 2rem;
    height: 2rem;
  }
`;

class Footer extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props;
    const { author, social } = data.site.siteMetadata;

    const socialIcons = [<Twitter />, <Github />, <Dribbble />, <Behance />, <LinkedinIn />];

    for (const i in social) {
      social[i].icon = socialIcons[i];
    }


    return (
      <StyledFooter>
        <Container>
          <nav>
            {social.map(item => (
              <SocialLink href={item.url} target="_blank" key={item.name}>{item.icon}</SocialLink>
            ))}
          </nav>
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
            social{
              name
              url
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
