import React, { Component } from 'react';
import { kebabCase } from 'lodash';
import { graphql } from 'gatsby';
import { Link, injectIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import SEO from '../../components/seo';

import { Container } from '../../styles/StyledComponents';


class TagsPage extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string,
        }),
      }),
      allMarkdownRemark: PropTypes.shape({
        group: PropTypes.array,
      }),
    }).isRequired,
    location: PropTypes.object.isRequired,
  }

  render() {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const { group } = data.allMarkdownRemark;

    return (
      <Layout location={location} title={siteTitle}>
        <div>
          <SEO title="Tags" />
          <Container>
            <h1 style={{ padding: '5rem 0' }}>Tags</h1>
            <ul>
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {`${tag.fieldValue} (${tag.totalCount})`}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default injectIntl(TagsPage);

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
