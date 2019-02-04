require('dotenv').config()
const config = require(`./src/site/config.js`)

module.exports = {
  siteMetadata: config.siteMetadata,
  plugins: [
    // source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/static/netlify-uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'markdown-content',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/images`,
        name: 'instagram-images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: 'instagram-data',
      },
    },

    // transform
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1800,
            },
          },
          `gatsby-remark-embed-video`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    'gatsby-transformer-json',
    `gatsby-transformer-sharp`,

    // build
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/site/typography`,
        omitGoogleFont: true,
      },
    },

    // optimize
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GA_CODE}`,
        head: true, // Puts tracking script in the head instead of the body
        anonymize: true, // Setting this parameter is optional
        respectDNT: true, // Setting this parameter is also optional
        exclude: [], // Avoids sending pageview hits from custom paths
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/404', '/bericht-verzonden', '/admin'],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `${config.siteMetadata.siteUrl}`,
        sitemap: `${config.siteMetadata.siteUrl}/sitemap.xml`,
        policy: [
          {
            userAgent: '*',
            disallow: ['/404', '/bericht-verzonden', '/admin'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: config.manifest,
    },
    {
      resolve: 'gatsby-plugin-svgr',
      // options: {
      //   include: `./src/images/icons`,
      // },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify', //keep last
      options: {
        headers: {
          '/sw.js': ['Cache-Control: no-cache'], //dont cache the service worker!
        },
        // mergeSecurityHeaders: false,
      },
    },
  ],
}
