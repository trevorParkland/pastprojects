if (process.env.STAGING) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}.staging`,
  });
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

const contentfulConfig = {
  spaceId: process.env.PARKLAND_SPACE_ID,
  accessToken: process.env.PARKLAND_ACCESS_TOKEN,
  environment: process.env.PARKLAND_ENV,
};

module.exports = {
  siteMetadata: {
    title: 'Parkland-Corporations Bluewave Portal',
    siteUrl: process.env.GATSBY_DOMAIN_URL,
    author: {
      name: 'Parkland',
      summary: 'Fuel industry',
    },
    description: '',

    social: {
      twitter: 'parkland',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allContentfulBluewaveEnergy(filter: {node_locale: {eq: "en-US"},hasIndex: {eq: false}} ) {
            nodes {
              slug
            }
          }
        }
      `,
        resolveSiteUrl: () => process.env.GATSBY_DOMAIN_URL,
        resolvePages: ({ allSitePage, allContentfulBluewaveEnergy }) => {
          const excludePages = allContentfulBluewaveEnergy?.nodes?.map(
            ({ slug }) => (slug?.slice(-1) === '/' ? slug : slug?.concat('/'))
          );
          const finalPages = allSitePage?.nodes?.filter(
            ({ path }) => !excludePages?.includes(path)
          );

          return finalPages;
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: `${process.env.GATSBY_DOMAIN_URL}/sitemap-index.xml`,
        policy: [{ userAgent: '*' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bluewave Energy',
        short_name: 'Bluewave',
        start_url: '/',
        background_color: '#ffffff',
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: 'minimal-ui',
        icon: 'src/images/blue_favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.PARKLAND_SPACE_ID,
        accessToken: process.env.PARKLAND_ACCESS_TOKEN,
        environment: process.env.PARKLAND_ENV,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            tags: (node) => node.frontmatter.tags,
            path: (node) => node.frontmatter.path,
          },
        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.tags !== 'exempt',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P4JCPRM',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N7R4CX',
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    }
  ],
};
