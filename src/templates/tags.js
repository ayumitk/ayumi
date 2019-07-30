import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import { Container, BlogRollGrid } from '../styles/StyledComponents';

class TagRoute extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string,
        }),
      }),
      allMarkdownRemark: PropTypes.shape({
        totalCount: PropTypes.number.isRequired,
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              fields: PropTypes.shape({
                slug: PropTypes.string.isRequired,
              }),
              frontmatter: PropTypes.shape({
                date: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                featuredimage: PropTypes.string,
              }),
            }),
          }).isRequired,
        ),
      }),
    }).isRequired,
    location: PropTypes.object.isRequired,
    pageContext: PropTypes.shape({
      tag: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { data, location, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const siteTitle = data.site.siteMetadata.title;

    const { tag } = pageContext;
    const { totalCount } = data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`;

    return (
      <Layout location={location} title={siteTitle}>
        <div>
          <SEO title={tagHeader} />
          <Container>
            <h1 style={{ padding: '5rem 0' }}>{tagHeader}</h1>
            <BlogRollGrid>
              {posts.map(post => (
                <article key={post.node.fields.slug}>
                  <Link to={post.node.fields.slug}>
                    <div className="blog-roll-grid__image">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.node.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                        }}
                      />
                    </div>
                    <div className="blog-roll-grid__inner">
                      <h3>{post.node.frontmatter.title}</h3>
                      <p>{post.node.frontmatter.date}</p>
                      <p>{post.node.frontmatter.description}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </BlogRollGrid>
            <Link to="/tags/">Browse all tags</Link>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredimage
          }
        }
      }
    }
  }
`;
