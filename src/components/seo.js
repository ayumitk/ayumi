import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description, title, image, pathname, article, lang,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            titleIntl{
              en
              ja
            }
            descriptionIntl{
              en
              ja
            }
            siteUrl
            defaultImage: image
            twitterUsername
          }
        }
      }
    `,
  );

  const seo = {
    title,
    titleTemplate: `%s | ${(lang === 'en') ? site.siteMetadata.titleIntl.en : site.siteMetadata.titleIntl.ja}`,
    description: description || ((lang === 'en') ? site.siteMetadata.descriptionIntl.en : site.siteMetadata.descriptionIntl.ja),
    image: `${site.siteUrl}${image || site.siteMetadata.defaultImage}`,
    url: `${site.siteMetadata.siteUrl}${pathname || '/'}`,
    article,
    twitterUsername: site.siteMetadata.twitterUsername,
  };

  // console.log(seo);

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={seo.title}
        titleTemplate={seo.titleTemplate}
      >
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        {/* meta og */}
        <meta property="og:type" content="business.business" />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(seo.article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}

        {/* meta twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.twitterUsername && (
          <meta name="twitter:creator" content={seo.twitterUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}

      </Helmet>
    </>
  );
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
  lang: 'en',
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  lang: PropTypes.string,
};

export default SEO;
