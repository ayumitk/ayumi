import React, { Component } from 'react';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import BlogRoll from '../components/BlogRoll';

import { Container } from '../styles/StyledComponents';

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
            <h1 style={{ padding: '7rem 0' }}>
              Hello, I&apos;m Ayumi,
              <br />
              a UI/UX Designer & Front-end Developer
              <br />
              with 10+ years of experience
              <br />
              based in Vancouver, Canada.
            </h1>
            <h2>Latest Tips</h2>
            <BlogRoll />
            <Link to="/blog/">もっと見る</Link>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default injectIntl(IndexPage);
