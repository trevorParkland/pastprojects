const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { GraphQLJSONObject } = require(`graphql-type-json`);
const striptags = require(`striptags`);
const lunr = require(`lunr`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const addTrailingSlash = (slug) => {
    if (slug.includes('?') && slug[slug.indexOf('?') - 1] !== '/') {
      return (
        slug.substring(0, slug.indexOf('?')) +
        '/' +
        slug.substring(slug.indexOf('?'), slug.length)
      );
    }
    if (slug.includes('#') && slug[slug.indexOf('#') - 1] !== '/') {
      return (
        slug.substring(0, slug.indexOf('#')) +
        '/' +
        slug.substring(slug.indexOf('#'), slug.length)
      );
    }
    if (slug.includes('#') && slug[slug.indexOf('#') - 1] === '/') {
      return slug;
    }

    return slug[slug.length - 1] === '/' ? slug : slug.concat('/');
  };

  const createHomePage = graphql(`
    query homePageQuery {
      allContentfulBluewaveEnergy(
        filter: {
          node_locale: { eq: "en-US" }
          identifier: { type: { eq: "homePage" } }
        }
      ) {
        edges {
          node {
            name
            slug
            title
          }
        }
      }
    }
  `).then((result) => {
    result?.data?.allContentfulBluewaveEnergy?.edges.forEach(({ node }) => {
      createPage({
        path: `/`,
        component: path.resolve(
          './src/templates/homePageTemplate/homePageTemplate.js'
        ),
        context: {
          slug: `${node.slug}`,
        },
      });
    });
  });

  const createLocationsPage = graphql(`
    query LocationPageQuery {
      allContentfulBluewaveEnergy(
        filter: {
          node_locale: { eq: "en-US" }
          identifier: { type: { eq: "locationCommon" } }
        }
      ) {
        edges {
          node {
            name
            identifier {
              type
            }
            slug
            title
            pageGroup {
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allContentfulBluewaveEnergy.edges.forEach(({ node }) => {
      if (node?.pageGroup?.title === 'location') {
        createPage({
          path: `${addTrailingSlash(node?.slug)}`,
          component: path.resolve(
            './src/templates/locationTemplate/locationPageTemplate.js'
          ),
          context: {
            slug: `/locations`,
          },
        });
      }
    });
  });

  const createLocationDetailsPage = graphql(`
    query locationDetailsPageQuery {
      allContentfulLocation(
        filter: { brand: { brand: { in: ["Bluewave"] } } }
      ) {
        edges {
          node {
            urlSlug
            node_locale
          }
        }
      }
    }
  `).then((result) => {
    result?.data?.allContentfulLocation?.edges?.forEach(({ node }) => {
      if (node?.node_locale === 'en-US') {
        createPage({
          path: `/locations/${addTrailingSlash(node?.urlSlug)}`,
          component: path.resolve(
            './src/templates/locationTemplate/locationDetailsPageTemplate.js'
          ),
          context: {
            pageSlug: `${node?.urlSlug}`,
          },
        });
      }
    });
  });

  const createSearchPage = graphql(`
    query SearchPageQuery {
      allContentfulBluewaveEnergy(
        filter: {
          node_locale: { eq: "en-US" }
          identifier: { type: { eq: "locationCommon" } }
        }
      ) {
        edges {
          node {
            name
            identifier {
              type
            }
            slug
            title
          }
        }
      }
    }
  `).then((result) => {
    result?.data?.allContentfulBluewaveEnergy?.edges.forEach(({ node }) => {
      createPage({
        path: '/search/',
        component: path.resolve(
          './src/templates/searchPageTemplate/searchPageTemplate.js'
        ),
        context: {
          slug: '/search',
        },
      });
    });
  });

  const createCommonPages = graphql(`
    query commonPagesCreateQuery {
      allContentfulBluewaveEnergy {
        edges {
          node {
            name
            identifier {
              type
            }
            slug
            title
            contentModels
            pageGroup {
              title
            }
          }
        }
      }
    }
  `).then((result) =>
    result?.data?.allContentfulBluewaveEnergy?.edges?.forEach(({ node }) => {
      if (node?.pageGroup?.title === 'commonPage') {
        createPage({
          path: `${addTrailingSlash(node?.slug)}`,
          component: path.resolve(
            `./src/templates/commonPageTemplate/commonPageTemplate.js`
          ),
          context: {
            pageSlug: `${node?.slug}`,
            pageIdentifier: `${node?.identifier?.type}`,
            contentfulContent: node?.contentModels?.includes('content'),
            contentfulContentList: node?.contentModels?.includes('contentList'),
            contentfulFaqs: node?.contentModels?.includes('faqs'),
            contentfulImageWithPath:
              node?.contentModels?.includes('imageWithLink'),
            contentfulMultimediaText:
              node?.contentModels?.includes('multimediaText'),
            contentfulTextWithImage:
              node?.contentModels?.includes('textWithImage'),
            contentfulListImagesWithPath: node?.contentModels?.includes(
              'listOfImagesWithPath'
            ),
          },
        });
      }
    })
  );
  const createStandalonePages = graphql(`
    query commonPagesCreateQuery {
      allContentfulBluewaveEnergy {
        edges {
          node {
            name
            identifier {
              type
            }
            slug
            title
            contentModels
            pageGroup {
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    // eslint-disable-next-line no-unused-expressions
    result?.data?.allContentfulBluewaveEnergy?.edges?.forEach(({ node }) => {
      if (node?.pageGroup?.title === 'standAlone') {
        createPage({
          path: `${addTrailingSlash(node?.slug)}`,
          component: path.resolve(`./src/templates/slp/slpPageTemplate.js`),
          context: {
            pageSlug: `${node?.slug}`,
            pageIdentifier: `${node?.identifier?.type}`,
            contentfulContent: node?.contentModels?.includes('content'),
            contentfulContentList: node?.contentModels?.includes('contentList'),
            contentfulImageContainer:
              node?.contentModels?.includes('imageContainer'),
            contentfulImageWithPath:
              node?.contentModels?.includes('imageWithLink'),
            contentfulMultimediaText:
              node?.contentModels?.includes('multimediaText'),
            contentfulTextWithImage:
              node?.contentModels?.includes('textWithImage'),
            contentfulListImagesWithPath: node?.contentModels?.includes(
              'listOfImagesWithPath'
            ),
          },
        });
      }
    });
  });
  return Promise.all([
    createCommonPages,
    createHomePage,
    createLocationsPage,
    createSearchPage,
    createLocationDetailsPage,
    createStandalonePages,
  ]);
};

exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (source, args, context, info) => {
          const blogNodes = context.nodeModel.getAllNodes({
            type: `ContentfulBluewaveEnergy`,
          });
          const type = info.schema.getType(`ContentfulBluewaveEnergy`);
          return createIndex(blogNodes, type, cache);
        },
      },
    },
  });
};

const createIndex = async (blogNodes, type, cache) => {
  const cacheKey = `IndexLunr`;
  const cached = await cache.get(cacheKey);
  if (cached) {
    return cached;
  }
  const documents = [];
  const store = {};
  // iterate over all posts
  for (const node of blogNodes) {
    const slug = node?.slug;
    const title = node?.title;
    const content = node?.metadata;

    // const [html, excerpt] = await Promise.all([
    //   type.getFields().html.resolve(node),
    //   type.getFields().excerpt.resolve(node, { pruneLength: 40 }),
    // ]);
    // once html is resolved, add a slug-title-content object to the documents array
    if (content) {
      documents.push({
        slug,
        title,
        content,
      });

      store[slug] = {
        slug,
        title,
        content,
      };
    }
  }
  const index = lunr(function () {
    this.ref('slug');
    this.field('title');
    this.field('content');
    for (const doc of documents) {
      this.add(doc);
    }
  });

  const json = { index: index.toJSON(), store };
  await cache.set(cacheKey, json);
  return json;
};
