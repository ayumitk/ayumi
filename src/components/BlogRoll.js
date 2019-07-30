import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PreviewCompatibleImage from './PreviewCompatibleImage';

import { BlogRollGrid } from '../styles/StyledComponents';

class BlogRoll extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                date: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                featuredimage: PropTypes.string,
              }),
              fields: PropTypes.shape({
                slug: PropTypes.string.isRequired,
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
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <div className="blog-roll-grid__image">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: node.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${node.frontmatter.title}`,
                      }}
                    />
                  </div>
                  <div className="blog-roll-grid__inner">
                    <h3>{title}</h3>
                    <p>{node.frontmatter.date}</p>
                    <p>{node.frontmatter.description}</p>
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
