import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import BlogRoll from '../components/BlogRoll';

import { Container } from '../styles/StyledComponents';

class IndexPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string,
        }),
      }),
    }).isRequired,
    location: PropTypes.object.isRequired,
  }

  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={location} title={siteTitle}>
        <div>
          <SEO title="All posts" />
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
            <BlogRoll />
            <Link to="/blog/">もっと見る</Link>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default injectIntl(IndexPage);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
