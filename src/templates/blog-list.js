import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Link, injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/Layout';

import { Container, BlogRollGrid, PageTitle } from '../styles/StyledComponents';

const Pagination = styled.ul`
  display:flex;
  justify-content: center;
  a{
    display:block;
    /* border: solid 1px ${props => props.theme.color.gray}; */
    border:solid 1px rgba(0,0,0,0.2);
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    &:hover{
      text-decoration: none;
      background: rgba(0,0,0,0.1);
      border-color: rgba(0,0,0,0.1);
    }
  }
  li{
    &.active{
      a{
        background:${props => props.theme.color.pink};
        border-color: ${props => props.theme.color.pink};
        font-weight:700;
        &:hover{
          cursor:default;
        }
      }
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
                featuredimage: PropTypes.object.isRequired,
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
        <>
          <SEO title={`Blog Page ${currentPage}`} />
          <Container>
            <PageTitle>Blog</PageTitle>

            <BlogRollGrid style={{ marginBottom: '5rem' }}>
              {posts.map(({ node }) => {
                const { slug } = node.fields;
                const {
                  date, title, description,
                } = node.frontmatter;

                const featuredImgFluid = node.frontmatter.featuredimage.childImageSharp.fluid;

                return (
                  <article key={slug}>
                    <Link to={slug}>
                      <div className="blog-roll-grid__image">
                        <Img fluid={featuredImgFluid} />
                      </div>
                      <div className="blog-roll-grid__inner">
                        <h3>{title}</h3>
                        <p className="date">{date}</p>
                        <p>{description}</p>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </BlogRollGrid>

            <Pagination>
              {!isFirst && (
                <Link to={`/blog/${prevPage}/`} rel="prev">
                  ← Prev
                </Link>
              )}
              {Array.from({ length: numPages }, (_, i) => (
                <li
                  className={`${currentPage === i + 1 ? 'active' : ''}`}
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
                Next →
              </Link>
              )}
            </Pagination>

          </Container>
        </>
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
            featuredimage{
              childImageSharp {
                fluid(maxWidth: 640) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
