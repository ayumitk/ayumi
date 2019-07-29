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
            <h1>Hello, I am Ayumi, a UI/UX Designer and Front-end Developer based in Vancouver, Canada with 10+ years of experience.</h1>
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
