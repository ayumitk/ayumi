import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';

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
                featuredimage: PropTypes.string,
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
              date, title, description, featuredimage,
            } = node.frontmatter;

            return (
              <article key={slug}>
                <Link to={slug}>
                  <div className="blog-roll-grid__image">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: featuredimage,
                        alt: `featured image thumbnail for post ${title}`,
                      }}
                    />
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
          limit: 4
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
                featuredimage
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
