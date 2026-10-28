import { graphql, useStaticQuery } from 'gatsby';
import constants from '../utils/utils';

export default () => {
  const { allContentfulBluewaveEnergy } = useStaticQuery(
    graphql`
      query commonTopBar {
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
                ... on ContentfulList {
                  id
                  list
                  type
                  title
                }
              }
            }
          }
        }
      }
    `
  );
  return allContentfulBluewaveEnergy.edges[0].node.sections.filter(
    (item) => item.type === constants.COMMON.COMMON_TOP_BAR
  )[0];
};
