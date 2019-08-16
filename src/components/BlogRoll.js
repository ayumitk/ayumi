import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { BlogRollGrid } from '../styles/StyledComponents';

class BlogRoll extends Component {
  static propTypes = {
    data: PropTypes.shape({
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
  }

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <>
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
      </>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 6
          ) {
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
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
