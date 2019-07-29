import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';


import { Container } from '../styles/StyledComponents';

class BlogRoll extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return (
      <>
        <Container>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <h3>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            );
          })}
        </Container>
      </>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
