import React, { Component } from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';

import { Container } from '../../styles/StyledComponents';

class WorkPage extends Component {
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
          <SEO title="Work" />
          <Container>
            <h1 style={{ padding: '5rem 0' }}>Work</h1>
            <p>Under Construction</p>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default injectIntl(WorkPage);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
