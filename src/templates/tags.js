import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import { Container } from '../styles/StyledComponents';

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
      tag: PropTypes.array.isRequired,
    }).isRequired,
  }

  render() {
    const { data, location, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const siteTitle = data.site.siteMetadata.title;

    const postLinks = posts.map(post => (
      <article key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <PreviewCompatibleImage
            imageInfo={{
              image: post.node.frontmatter.featuredimage,
              alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
            }}
          />
          <h3>{post.node.frontmatter.title}</h3>
          <p>{post.node.frontmatter.date}</p>
          <p>{post.node.frontmatter.description}</p>
        </Link>
      </article>
    ));

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
            <BlogRollContainer>{postLinks}</BlogRollContainer>
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
