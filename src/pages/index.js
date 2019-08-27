import React, { Component } from 'react';
import { injectIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import BlogRoll from '../components/BlogRoll';
import WorkRoll from '../components/WorkRoll';

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
                <h2><FormattedMessage id="skill.design.title" /></h2>
                <h3><FormattedMessage id="skill.design.what-i-do.title" /></h3>
                <p><FormattedMessage id="skill.design.what-i-do.list" /></p>
                <h3><FormattedMessage id="skill.design.tools.title" /></h3>
                <p><FormattedMessage id="skill.design.tools.list" /></p>
              </div>
            </div>
            <div style={{ background: '#1c1b20', color: '#ababab' }}>
              <div style={{ marginRight: 'auto' }}>
                <h2 style={{ color: '#fff' }}><FormattedMessage id="skill.dev.title" /></h2>
                <h3 style={{ color: '#fff' }}><FormattedMessage id="skill.dev.languages.title" /></h3>
                <p><FormattedMessage id="skill.dev.languages.list" /></p>
                <h3 style={{ color: '#fff' }}><FormattedMessage id="skill.dev.tools.title" /></h3>
                <p><FormattedMessage id="skill.dev.tools.list" /></p>
              </div>
            </div>
          </SkillSet>
          <Container>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Blog</h2>
            <BlogRoll />
            <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '15rem' }}>
              <StyledLink to="/blog/"><FormattedMessage id="read_more" /></StyledLink>
            </div>
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Work</h2>
            <WorkRoll />
            <div style={{ textAlign: 'center', marginTop: '5rem' }}>
              <StyledLink to="/work/"><FormattedMessage id="read_more" /></StyledLink>
            </div>
          </Container>
        </>
      </Layout>
    );
  }
}

export default injectIntl(IndexPage);
