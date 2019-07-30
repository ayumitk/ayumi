import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Link, injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';


import { Container } from '../styles/StyledComponents';

const BlogRoll = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  article{
    box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
    background: rgb(255, 255, 255);
    h3{
      margin-bottom: 0.5rem;
    }
    p{
      font-size: 1.4rem;
    }
  }
`;

class BlogList extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string,
        }),
      }),
      allMarkdownRemark: PropTypes.shape({
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
      currentPage: PropTypes.number.isRequired,
      numPages: PropTypes.number.isRequired,
    }).isRequired,
  }

  render() {
    const { data, location, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const siteTitle = data.site.siteMetadata.title;
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    return (
      <Layout location={location} title={siteTitle}>
        <div>
          <SEO title="Blog" />
          <Container>
            <h1 style={{ padding: '5rem 0' }}>Blog</h1>
            <BlogRoll>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <article key={node.fields.slug}>
                    <div style={{ lineHeight: '0' }}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: node.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${node.frontmatter.title}`,
                        }}
                      />
                    </div>
                    <div style={{ padding: '1.5rem 2rem 3rem 2rem' }}>
                      <h3>
                        <Link to={node.fields.slug}>
                          {title}
                        </Link>
                      </h3>
                      <p>{node.frontmatter.date}</p>
                      <p>{node.frontmatter.description}</p>
                    </div>
                  </article>
                );
              })}
            </BlogRoll>
            <ul>
              {!isFirst && (
                <Link to={`/blog/${prevPage}/`} rel="prev">
                  ← Previous Page
                </Link>
              )}
              {Array.from({ length: numPages }, (_, i) => (
                <li
                  key={`pagination-number${i + 1}`}
                >
                  <Link
                    to={`/blog/${i === 0 ? '' : i + 1}/`}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
              {!isLast && (
              <Link to={`/blog/${nextPage}/`} rel="next">
                Next Page →
              </Link>
              )}
            </ul>
          </Container>
        </div>
      </Layout>
    );
  }
}

export default injectIntl(BlogList);

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            featuredimage
          }
        }
      }
    }
  }
`;
