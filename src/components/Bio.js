import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BioContainer = styled.div`
  display:flex;
  p{
    margin-left: 1rem;
  }
`;

function Bio({
  lang,
}) {
  const data = useStaticQuery(
    graphql`
      query {
        file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
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
      }
    `,
  );

  const bio = {
    avatar: data.file.childImageSharp.fixed,
    author: `${(lang === 'en') ? data.site.siteMetadata.authorIntl.en : data.site.siteMetadata.authorIntl.ja}`,
    description: ((lang === 'en') ? data.site.siteMetadata.descriptionIntl.en : data.site.siteMetadata.descriptionIntl.ja),
  };

  return (
    <BioContainer>
      <Image
        fixed={bio.avatar}
        alt={bio.author}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <p>
        <strong>{bio.author}</strong>
        <br />
        <span>{bio.description}</span>
      </p>
    </BioContainer>
  );
}

Bio.defaultProps = {
  lang: 'en',
};

Bio.propTypes = {
  lang: PropTypes.string,
};

export default Bio;
