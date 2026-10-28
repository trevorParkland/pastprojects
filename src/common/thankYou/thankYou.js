import React from 'react';
import * as Styled from './thankYouStyle';
import constants from '../../utils/utils';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const ThankYou = () => {
  const thankYouQuery = useStaticQuery(graphql`
    query thankYouDefault {
      allContentfulBluewaveEnergy(
        filter: {
          node_locale: { eq: "en-US" }
          identifier: { type: { eq: "ThankYou" } }
        }
      ) {
        edges {
          node {
            title
            identifier {
              type
            }
            slug
            sections {
              ... on ContentfulHeaderWithText {
                id
                title
                type
                headerText
              }
              ... on ContentfulContent {
                id
                title
                type
                contentDetails {
                  raw
                }
              }
            }
          }
        }
      }
    }
  `);
  const thankYouData =
    thankYouQuery.allContentfulBluewaveEnergy.edges[0].node.sections;

  const headerText = thankYouData.filter((section) => {
    return section.type === constants.THANKYOU_BLUEWAVE.THANKYOU.HEADER_TEXT;
  })[0];

  const content = thankYouData.filter((section) => {
    return section.type === constants.THANKYOU_BLUEWAVE.THANKYOU.CONTENT;
  })[0];

  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.Header>{children}</Styled.Header>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Styled.LinkStyle
            href={
              isExternalUrlhref(node?.data?.uri)
                ? node?.data?.uri
                : addTrailingSlash(
                    process.env.GATSBY_DOMAIN_URL + node?.data?.uri
                  )
            }
            target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
          >
            {children}
          </Styled.LinkStyle>
        );
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };

  return (
    <>
      {thankYouData && (
        <>
          <Styled.Header>{headerText.headerText}</Styled.Header>
          {documentToReactComponents(
            JSON.parse(content?.contentDetails?.raw),
            optionsMainStyle
          )}
        </>
      )}
    </>
  );
};
export default ThankYou;
