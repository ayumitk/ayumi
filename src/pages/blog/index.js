import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';

import BlogRoll from '../../components/BlogRoll';

import { Container } from '../../styles/StyledComponents';

class BlogPage extends Component {
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
          <SEO title="Blog" />
          <Container>
            <h1>Blog</h1>
            <BlogRoll />
          </Container>
        </div>
      </Layout>
    );
  }
}

export default injectIntl(BlogPage);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
