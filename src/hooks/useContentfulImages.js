import { graphql, useStaticQuery } from 'gatsby';

export const useContentfulImages = (assetId) => {
  const { assetsArray } = useStaticQuery(
    graphql`
      query allContentfulAssetsImage {
        assetsArray: allContentfulAsset {
          edges {
            node {
              contentful_id
              title
              file {
                url
                details {
                  image {
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  const asset = assetsArray.edges.find((edge) => {
    return edge.node.contentful_id === assetId;
  });
  return asset;
};
