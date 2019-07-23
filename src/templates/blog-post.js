import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import { Container } from '../styles/StyledComponents';
import '../styles/prism.scss';

import TableOfContents from '../components/TableOfContents';

const Date = styled.p`
  text-align:center;
  color:${props=> props.theme.color.pink};
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
    border-bottom: solid 1px ${props => props.theme.color.gray300};
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
    background: ${props => props.theme.color.gray200};
    display: inline-block;
    padding: 0.15rem 0.35rem;
  }
  pre > code {
    background: transparent;
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
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

          <TableOfContents toc={post.tableOfContents} />

          <PostContentWrapper>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </PostContentWrapper>

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
