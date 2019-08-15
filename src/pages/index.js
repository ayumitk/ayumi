import React, { Component } from 'react';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import BlogRoll from '../components/BlogRoll';

import { Container } from '../styles/StyledComponents';

const SkillSet = styled.div`
  display:flex;
  margin-bottom: 7rem;
  > div{
    width: 50%;
    display: flex;
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
        <div>
          <SEO title="Home" lang={intl.locale} />
          <Container>
            <h1 style={{ padding: '7rem 0', textAlign: 'center' }}>
              <div style={{
                fontSize: '10rem', lineHeight: '1', marginBottom: '2.5rem', color: '#ff5851', letterSpacing: '-0.25rem',
              }}
              >
                Hello.
                <br />
                I am Ayumi,
              </div>
              <div style={{ fontSize: '3rem' }}>
                a UI/UX Designer & Developer
                <br />
                with 10+ years of experience
                <br />
                based in Vancouver, Canada.
              </div>
            </h1>
          </Container>
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
            <div style={{ background: '#1c1b20', color: '#dcdcdc' }}>
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
              <StyledLink to="/blog/">もっと見る</StyledLink>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default injectIntl(IndexPage);
