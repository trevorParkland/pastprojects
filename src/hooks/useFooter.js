import { graphql, useStaticQuery } from 'gatsby';
import constants from '../utils/utils';

export default () => {
  const { allContentfulBluewaveEnergy } = useStaticQuery(
    graphql`
      query commonfooter {
        allContentfulBluewaveEnergy(
          filter: {
            node_locale: { eq: "en-US" }
            identifier: { type: { eq: "common" } }
          }
        ) {
          edges {
            node {
              name
              slug
              title
              identifier {
                type
              }
              sections {
                ... on ContentfulFooter {
                  id
                  type
                  title
                  subText
                  socialNetworking {
                    title
                    type
                    path
                    image {
                      file {
                        fileName
                        url
                      }
                    }
                  }
                  products {
                    title
                    type
                    path
                    image {
                      file {
                        fileName
                        url
                      }
                      title
                    }
                  }
                  imageWithPath {
                    path
                    title
                    image {
                      file {
                        url
                      }
                    }
                  }
                  TextWithPaths {
                    text
                    type
                    path
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return allContentfulBluewaveEnergy.edges[0].node.sections.filter(
    (item) => item.type === constants.COMMON.FOOTER
  )[0];
};
