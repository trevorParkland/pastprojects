import { graphql, useStaticQuery } from 'gatsby';

const useContentfulAssets = (assetId) => {
  const { assetsArray } = useStaticQuery(
    graphql`
      query allContentfulAssets {
        assetsArray: allContentfulAsset {
          edges {
            node {
              contentful_id
              title
              description
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

export default useContentfulAssets;
