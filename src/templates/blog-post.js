import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import { kebabCase } from 'lodash';
import { DiscussionEmbed } from 'disqus-react';

import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import { Container } from '../styles/StyledComponents';
import '../styles/prism.scss';

import TableOfContents from '../components/TableOfContents';

const Date = styled.p`
  text-align:center;
  color:${props => props.theme.color.pink};
  font-weight: 700;
  font-family: 'Gilroy', serif;
`;

const BlogContainer = styled(Container)`
  max-width: 840px;
  padding-top:5rem;
  padding-bottom:5rem;
  h1{
    margin-bottom:3rem;
  }
`;

const PostContentWrapper = styled.div`
  hr {
    margin: 5rem 0;
    background:none;
  }
  h2 {
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
    border-bottom: solid 1px ${props => props.theme.color.lightGray};
  }
  h3 {
    color: ${props => props.theme.color.pink500};
    margin-bottom: 1rem;
  }
  p,
  blockquote,
  pre,
  table {
    margin-top: 3rem;
  }
  /* ul {
    margin-bottom: 2.5rem;
  } */
  code {
    background: rgba(33, 37, 41, 0.15);
    display: inline-block;
    padding: 0.15rem 0.35rem;
  }
  pre > code {
    background: transparent;
  }
`;

const StyledFooter = styled.footer`
  margin: 5rem 0;
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
          tags: PropTypes.array.isRequired,
          featuredimage: PropTypes.string,
        }),
      }),
    }).isRequired,
    location: PropTypes.object.isRequired,
  }

  render() {
    const { data, location } = this.props;
    const post = data.markdownRemark;

    const siteTitle = data.site.siteMetadata.title;
    const { excerpt, html, tableOfContents } = post;
    const { slug } = post.fields;
    const {
      date, title, description, featuredimage, tags,
    } = post.frontmatter;

    const disqusConfig = {
      shortname: process.env.GATSBY_DISQUS_NAME,
      config: { identifier: slug, title },
    };

    return (
      <Layout location={location} title={siteTitle}>
        <div>
          <SEO
            title={title}
            description={description || excerpt}
          />
          <BlogContainer>

            <header style={{ marginBottom: '2rem' }}>
              <Date>{date}</Date>
              <h1>{title}</h1>
              <p>{description}</p>
            </header>

            <div style={{ lineHeight: '0' }}>
              <PreviewCompatibleImage
                imageInfo={{
                  image: featuredimage,
                  alt: `featured image for post ${title}`,
                }}
              />
            </div>

            <TableOfContents
              toc={tableOfContents}
              slug={slug}
            />

            <PostContentWrapper>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </PostContentWrapper>

            <StyledFooter>
              {tags && tags.length ? (
                <div>
                  {tags.map(tag => (
                    <Link key={`${tag}tag`} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  ))}
                </div>
              ) : null}
            </StyledFooter>

            <DiscussionEmbed {...disqusConfig} />

          </BlogContainer>
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
        tags
        featuredimage
      }
    }
  }
`;
