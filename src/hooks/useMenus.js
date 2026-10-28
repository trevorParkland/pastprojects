import { graphql, useStaticQuery } from 'gatsby';
import constants from '../utils/utils';

export default () => {
  const { allContentfulBluewaveEnergy } = useStaticQuery(
    graphql`
      query commonMenuBar {
        allContentfulBluewaveEnergy(
          filter: {
            node_locale: { eq: "en-US" }
            identifier: { type: { eq: "common" } }
          }
        ) {
          edges {
            node {
              name
              title
              identifier {
                type
              }
              sections {
                ... on ContentfulNavigationBar {
                  type
                  title
                  imageWithPath {
                    id
                    path
                    title
                    type
                    image {
                      file {
                        url
                        details {
                          image {
                            width
                            height
                          }
                        }
                      }
                      title
                    }
                  }
                  navigations {
                    type
                    title
                    headerWithText {
                      headerText
                      text {
                        text
                      }
                      title
                      type
                    }
                    entryWithPath {
                      id
                      path
                      text
                      type
                    }
                    textWithPath {
                      id
                      path
                      text
                      type
                    }
                    subNavigations {
                      ... on ContentfulSubNavigation {
                        id
                        type
                        textWithPath {
                          path
                          text
                          type
                        }
                        subMenusWithPaths {
                          ... on ContentfulTextWithPath {
                            id
                            path
                            text
                            type
                          }
                          ... on ContentfulSubNavigation {
                            id
                            textWithPath {
                              path
                              text
                            }
                            subMenusWithPaths {
                              ... on ContentfulTextWithPath {
                                id
                                text
                                path
                              }
                            }
                          }
                        }
                      }
                    }
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
    (section) => section.type === constants.COMMON.NAVIGATION
  )[0];
};
