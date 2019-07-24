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
        icon: 'Twitter',
      },
      {
        name: 'Github',
        url: 'https://github.com/ayumitk',
        icon: 'Github',
      },
      {
        name: 'Dribbble',
        url: 'https://dribbble.com/ayumitk',
        icon: 'Dribbble',
      },
      {
        name: 'Behance',
        url: 'https://www.behance.net/ayumitk',
        icon: 'Behance',
      },
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/ayumi-takahashi-951831a9',
        icon: 'LinkedinIn',
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
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
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
