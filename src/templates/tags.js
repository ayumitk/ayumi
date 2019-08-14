import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/seo';

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
                // featuredimage: PropTypes.string,
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
    const tagHeader = `Tag: ${tag} (${totalCount})`;

    return (
      <Layout location={location} title={siteTitle}>
        <div>
          <SEO title={tagHeader} />
          <Container>
            <h1 style={{ padding: '5rem 0' }}>{tagHeader}</h1>
            <BlogRollGrid>
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
                        <p>{date}</p>
                        <p>{description}</p>
                      </div>
                    </Link>
                  </article>
                );
              })}
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
