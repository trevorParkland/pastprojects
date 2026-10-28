import * as React from 'react';
import { isExternalUrlhref } from '../../utils';
import isExternalUrl from '../../utils';
import * as Styled from './blockLeftPanelStyles';
import { graphql, useStaticQuery } from 'gatsby';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const BlockLeftPanel = ({
  path,
  backgroundColor,
  hoverBlockArea,
  defaultBorder,
}) => {
  const result = path?.split('/').filter((n) => n);
  const commonCard = useStaticQuery(graphql`
    query commonCardQuery {
      allContentfulBluewaveEnergy(
        filter: { identifier: { type: { eq: "commonCardSection" } } }
      ) {
        edges {
          node {
            title
            name
            sections {
              ... on ContentfulCards {
                id
                title
                type
                carddetails {
                  title
                  type
                  headerText
                  path
                  image {
                    file {
                      fileName
                      url
                    }
                  }
                  description {
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const commonCardSections =
    commonCard?.allContentfulBluewaveEnergy?.edges[0]?.node?.sections;
  const commonCardData = commonCardSections?.filter(
    (section) => section.type === result[0]
  )[0];
  const commonCardsList = commonCardData?.carddetails;
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.Paragraph>{children}</Styled.Paragraph>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Styled.LinkStyle
            href={
              isExternalUrlhref(node?.data?.uri)
                ? node?.data?.uri
                : process.env.GATSBY_DOMAIN_URL + node?.data?.uri
            }
            target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
          >
            {children}
          </Styled.LinkStyle>
        );
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <>
      {commonCardsList?.map((cards, index) =>
        cards?.path !== '!' ? (
          <Styled.Anchor
            href={
              isExternalUrlhref(cards?.path)
                ? cards?.path
                : process.env.GATSBY_DOMAIN_URL + cards?.path
            }
            target={isExternalUrl(cards?.path) ? '_blank' : '_self'}
            key={index}
          >
            <Styled.BlockContainer
              $hoverBlockArea={hoverBlockArea}
              $defaultBorder={defaultBorder}
            >
              <Styled.BlockTitle $backgroundColor={backgroundColor}>
                {cards?.title}
              </Styled.BlockTitle>
              <Styled.BlockArea>
                <Styled.CardCol>
                  {cards?.title !== 'eBilling' && cards?.image && (
                    <Styled.Img src={cards?.image?.file?.url} />
                  )}
                  {cards?.headerText.trim() && (
                    <Styled.Heading3>{cards?.headerText}</Styled.Heading3>
                  )}
                  {cards?.description?.description.trim() !== '!' && (
                    <Styled.Paragraph>
                      {cards?.description?.description}
                    </Styled.Paragraph>
                  )}
                  {cards?.title === 'eBilling' && cards?.image && (
                    <Styled.Img
                      $width="100%"
                      $floatNone="true"
                      src={cards?.image?.file?.url}
                    />
                  )}
                </Styled.CardCol>
              </Styled.BlockArea>
            </Styled.BlockContainer>
          </Styled.Anchor>
        ) : (
          <Styled.NoAnchorDiv key={index}>
            <Styled.BlockContainer
              $hoverBlockArea={hoverBlockArea}
              $defaultBorder={defaultBorder}
            >
              <Styled.BlockTitle $backgroundColor={backgroundColor}>
                {cards?.title}
              </Styled.BlockTitle>
              <Styled.BlockArea>
                <Styled.CardCol>
                  {cards?.title !== 'eBilling' && cards?.image && (
                    <Styled.Img src={cards?.image?.file?.url} />
                  )}
                  {cards?.headerText.trim() && (
                    <Styled.Heading3>{cards?.headerText}</Styled.Heading3>
                  )}
                  {cards?.description?.description.trim() !== '!' && (
                    <Styled.Paragraph>
                      {cards?.description?.description}
                    </Styled.Paragraph>
                  )}
                </Styled.CardCol>
              </Styled.BlockArea>
            </Styled.BlockContainer>
          </Styled.NoAnchorDiv>
        )
      )}
    </>
  );
};

export default BlockLeftPanel;
