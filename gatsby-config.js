const cfg = {
  siteMetadata: {
    title: 'Ayumi.tk - UI/UX Designer & Developer',
    author: 'Ayumi Takahashi',
    description: 'Hi, I\'m Ayumi, a UI/UX Designer & Developer Based in Vancouver, Canada.',
    siteUrl: 'https://ayumi.tk/',
    social: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/ayumitk__',
      },
      {
        name: 'Github',
        url: 'https://github.com/ayumitk',
      },
      {
        name: 'Dribbble',
        url: 'https://dribbble.com/ayumitk',
      },
      {
        name: 'Behance',
        url: 'https://www.behance.net/ayumitk',
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/ayumi-takahashi-951831a9',
      },
    ],
    nav: [
      {
        title: 'About',
        href: '/about/',
      },
      {
        title: 'Blog',
        href: '/blog/',
      },
      {
        title: 'Work',
        href: '/work/',
      },
      {
        title: 'Contact',
        href: '/contact/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-code-titles', // IMPORTANT: this must be ahead of other plugins that use code blocks
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '100',
              icon: '<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
              className: 'custom-class',
              maintainCase: true,
              removeAccents: true,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['100', '200', '300', '500', '400', '600', '700', '800', '900'],
          },
          {
            family: 'Libre Baskerville',
            variants: ['400', '400i', '700'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ['en', 'ja'],
        // language file path
        defaultLanguage: 'en',
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-121956784-1',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Blog',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};

if (process.env.CONTEXT !== 'production') {
  cfg.plugins.push({
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'drafts',
      path: `${__dirname}/content/drafts`,
    },
  });
}

module.exports = cfg;
