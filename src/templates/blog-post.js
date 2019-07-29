import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Container } from '../styles/StyledComponents';
import '../styles/prism.scss';

import TableOfContents from '../components/TableOfContents';

const Date = styled.p`
  text-align:center;
  color:${props => props.theme.color.pink};
  font-weight: 700;
  font-family: 'Gilroy', serif;
`;

const PostContentWrapper = styled.div`
  hr {
    margin: 3rem 0;
    background:none;
  }
  h2 {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: solid 1px ${props => props.theme.color.lightGray};
  }
  h3 {
    color: ${props => props.theme.color.pink500};
    margin-bottom: 1rem;
  }
  p + p {
    margin-top: 1.5em;
  }
  ul {
    margin-bottom: 1.5rem;
  }
  code {
    background: rgba(33, 37, 41, 0.15);
    display: inline-block;
    padding: 0.15rem 0.35rem;
  }
  pre > code {
    background: transparent;
  }
`;

class BlogPostTemplate extends Component {
  static propTypes = {
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string,
          author: PropTypes.string,
        }),
      }),
      markdownRemark: PropTypes.shape({
        id: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        html: PropTypes.string.isRequired,
        tableOfContents: PropTypes.string.isRequired,
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
        frontmatter: PropTypes.shape({
          date: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
    location: PropTypes.object.isRequired,
  }

  render() {
    const { data, location } = this.props;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout location={location} title={siteTitle}>
        <div>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <Container>

            <header>
              <Date>{post.frontmatter.date}</Date>
              <h1>
                {post.frontmatter.title}
              </h1>
            </header>

            <TableOfContents
              toc={post.tableOfContents}
              slug={post.fields.slug}
            />

            <PostContentWrapper>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </PostContentWrapper>

          </Container>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
