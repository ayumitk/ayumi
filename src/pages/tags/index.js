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
      allMarkdownRemark: PropTypes.shape({
        group: PropTypes.array,
      }),
    }).isRequired,
    intl: PropTypes.object.isRequired,
  }

  render() {
    const { data, intl } = this.props;
    const { group } = data.allMarkdownRemark;

    return (
      <Layout>
        <div>
          <SEO title="Tags" lang={intl.locale} />
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
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
