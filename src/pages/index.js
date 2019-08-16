import React, { Component } from 'react';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import BlogRoll from '../components/BlogRoll';

import { Container } from '../styles/StyledComponents';

const Hero = styled(Container)`
  text-align:center;
  padding: 10rem 0;
`;

const Hello = styled.div`
  font-size: 10rem;
  line-height: 0.95;
  margin-bottom: 3rem;
  color: #ff5851;
  letter-spacing: -0.25rem;
  @media (max-width: 565.98px) {
    font-size: 7.5rem;
  }
  span{
    color:${props => props.theme.color.black};
  }
`;

const Status = styled.div`
  font-size: 3rem;
  @media (max-width: 565.98px) {
    font-size: 2.2rem;
  }
`;

const SkillSet = styled.div`
  margin-bottom: 8rem;
  @media (min-width: 768px) {
    display:flex;
  }
  > div{
    display: flex;
    @media (min-width: 768px) {
      width: 50%;
    }
    > div{
      max-width:550px;
      text-align:center;
      padding: 5rem 0;
    }
  }
`;

const StyledLink = styled(Link)`
  background: ${props => props.theme.color.pink};
  padding: 1rem 2rem;
  display: inline-block;
  color: #FFF;
  text-decoration: none;
  &:hover{
    opacity: 0.9;
    text-decoration: none;
    color: #FFF;
  }
`;

class IndexPage extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
  }

  render() {
    const { intl } = this.props;

    return (
      <Layout>
        <>
          <SEO title="Home" lang={intl.locale} />
          <Hero>
            <h1>
              <Hello>
                Hello
                <span>.</span>
                <br />
                I am Ayumi,
              </Hello>
              <Status>
                UI/UX Designer & Developer
                <br />
                with 10+ years of experience
                <br />
                based in Vancouver, Canada.
              </Status>
            </h1>
          </Hero>
          <SkillSet>
            <div style={{ background: '#ff5851', color: '#FFF' }}>
              <div style={{ marginLeft: 'auto' }}>
                <h2>UI/UX Design</h2>
                <h3>Things I enjoy designing:</h3>
                <p>UX, UI, Web, Mobile, Apps, Branding, Logos</p>
                <h3>Design Tools:</h3>
                <p>Sketch, Photoshop, Illustrator, Adobe DX, Pen & Paper, Invision, Zeplin</p>
              </div>
            </div>
            <div style={{ background: '#1c1b20', color: '#ababab' }}>
              <div style={{ marginRight: 'auto' }}>
                <h2 style={{ color: '#fff' }}>Front-end Dev</h2>
                <h3 style={{ color: '#fff' }}>Languages I speak:</h3>
                <p>HTML, CSS/Sass, JavaScript</p>
                <h3 style={{ color: '#fff' }}>Dev Tools:</h3>
                <p>Visual Studio Code, Bootstrap, React, Gulp, Webpack, npm, Git, Wordpress, Gatsby</p>
              </div>
            </div>
          </SkillSet>
          <Container>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Latest Tips</h2>
            <BlogRoll />
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <StyledLink to="/blog/">See More</StyledLink>
            </div>
          </Container>
        </>
      </Layout>
    );
  }
}

export default injectIntl(IndexPage);
