import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const BlogRollContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 991.98px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 767.98px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 565.98px) {
    grid-template-columns: 1fr;
  }
  article{
    box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px, rgba(39, 44, 49, 0.03) 1px 3px 8px;
    background: rgb(255, 255, 255);
    a{
      display:block;
    }
    h3{
      margin-bottom: 0.5rem;
    }
    p{
      font-size: 1.4rem;
    }
  }
`;

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
        <BlogRollContainer>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <Link to={node.fields.slug} style={{ lineHeight: '0' }}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: node.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${node.frontmatter.title}`,
                    }}
                  />
                </Link>
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
        </BlogRollContainer>
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
