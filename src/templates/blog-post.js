import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import { kebabCase } from 'lodash';
import { DiscussionEmbed } from 'disqus-react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Bio from '../components/Bio';
import Share from '../components/Share';

import { Container } from '../styles/StyledComponents';
import '../styles/prism.scss';

import TableOfContents from '../components/TableOfContents';

const BlogTitle = styled.h1`
  font-size: 4rem;
  @media (max-width: 991.98px) {
    font-size: 3rem;
  }
  @media (max-width: 565.98px) {
    font-size: 2.8rem;
  }
`;

const Date = styled.p`
  text-align:center;
  color:${props => props.theme.color.pink};
  font-weight: 700;
  font-family: 'Gilroy', serif;
`;

const BlogContainer = styled(Container)`
  max-width: 840px;
  padding-top:5rem;
  @media (max-width: 565.98px) {
    padding-top:2.5rem;
  }
  h1{
    margin-bottom:3rem;
    @media (max-width: 565.98px) {
      padding-top:1rem;
    }
  }
`;

const PostContentWrapper = styled.div`
  a{
    color:${props => props.theme.color.pink};
    text-decoration:underline;
  }
  hr {
    margin: 7rem auto;
    display: block;
    height: 4px;
    width: 120px;
    background-color: rgba(33,37,41,0.1);
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 4px;
  }
  h2 {
    margin-bottom: 3rem;
    /* padding-bottom: 1.5rem; */
    /* border-bottom: solid 1px ${props => props.theme.color.lightGray}; */
    font-size: 3.2rem;
    @media (max-width: 565.98px) {
      font-size: 2.6rem;
    }
  }
  h3 {
    /* color: ${props => props.theme.color.pink}; */
    margin-top: 6rem;
    font-size: 2.2rem;
    font-weight:600;
  }
  em{
    font-weight:700;
    color: ${props => props.theme.color.black};
    font-style:normal;
  }
  p,
  blockquote,
  table {
    margin-top: 3rem;
  }
  ul{
    margin-top: 3rem;
    list-style: disc;
    padding-left: 2rem;
  }
  table{
    width: 100%;
    table-layout: fixed;
    border: 1px solid hsla(0,0%,0%,0.12);
    th{
      color: ${props => props.theme.color.black};
    }
    th,td{
      padding:1rem;
    }
  }
  blockquote {
    background: rgba(0,0,0,0.05);
    padding: 1.5rem 2rem;
    margin: 3rem 0 0 0;
    border-left: solid 3px ${props => props.theme.color.black};
    @media (max-width: 565.98px) {
      font-size: 1.4rem;
    }
    p{
      margin:0;
    }
    a{
      color:${props => props.theme.color.black};
    }
  }
  code {
    display: inline-block;
    padding: 0.15rem 0.35rem;
    /* color: ${props => props.theme.color.pink}; */
    color: ${props => props.theme.color.black};
    background: rgba(0, 0, 0, 0.075);
  }
  pre > code {
    background: transparent;
    color: #cbccc6;
    @media (max-width: 565.98px) {
      font-size: 1.4rem;
    }
    a{
      color: #cbccc6;
      text-decoration: none;
    }
  }
  .btn{
    display:block;
    max-width:300px;
    width:80%;
    margin:0 auto;
    background:${props => props.theme.color.pink};
    padding:1rem 2rem;
    color:${props => props.theme.color.black};
    border-radius:3px;
    text-decoration:none;
    text-align:center;
    font-weight: 700;
    &:hover{
      opacity:0.8;
    }
  }
`;

const TagList = styled.div`
  a{
    display: inline-block;
    margin-right: 1rem;
    color:${props => props.theme.color.pink};
    text-decoration:underline;
  }
`;

const Description = styled.p`
  @media (max-width: 565.98px) {
    font-size: 1.6rem;
  }
`;

class BlogPostTemplate extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          siteUrl: PropTypes.string,
          twitterUsername: PropTypes.string,
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
          featuredimage: PropTypes.object.isRequired,
        }),
      }),
    }).isRequired,
    location: PropTypes.object.isRequired,
  }

  render() {
    const { data, intl } = this.props;
    const post = data.markdownRemark;

    const featuredImgFluid = post.frontmatter.featuredimage.childImageSharp.fluid;

    const {
      siteUrl, twitterUsername,
    } = data.site.siteMetadata;

    const { excerpt, html, tableOfContents } = post;
    const { slug } = post.fields;
    const {
      date, title, description, tags,
    } = post.frontmatter;

    const disqusConfig = {
      shortname: process.env.GATSBY_DISQUS_NAME,
      config: { identifier: slug, title },
    };

    return (
      <Layout>
        <>
          <SEO
            title={title}
            description={description || excerpt}
            article
            image={featuredImgFluid}
            lang={intl.locale}
          />
          <BlogContainer>

            <header style={{ marginBottom: '2rem' }}>
              <Date>{date}</Date>
              <BlogTitle>{title}</BlogTitle>
              <Description>{description}</Description>
            </header>

            <div style={{ lineHeight: '0' }}>
              <Img fluid={featuredImgFluid} />
            </div>

            <TableOfContents
              toc={tableOfContents}
              slug={slug}
            />

            <PostContentWrapper>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </PostContentWrapper>

            <footer style={{ margin: '5rem 0' }}>
              <TagList>
                Tags :
                {tags && tags.length ? (
                  <>
                    {tags.map(tag => (
                      <Link key={`${tag}tag`} to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    ))}
                  </>
                ) : null}
              </TagList>

              <Share
                socialConfig={{
                  twitterUsername,
                  config: {
                    url: `${siteUrl}${slug}`,
                    title,
                  },
                }}
                tags={tags}
              />

              <Bio lang={intl.locale} />
            </footer>

            <DiscussionEmbed {...disqusConfig} />

          </BlogContainer>
        </>
      </Layout>
    );
  }
}

export default injectIntl(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        twitterUsername
        authorIntl{
          en
          ja
        }
        descriptionIntl{
          en
          ja
        }
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
        featuredimage{
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
