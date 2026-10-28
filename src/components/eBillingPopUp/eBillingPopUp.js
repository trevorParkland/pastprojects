import React from 'react';
import { Modal, Container, Col } from 'react-bootstrap';
import * as Styled from './eBillingPopUpStyles';
import constants from '../../utils/utils';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const EBillingPopUp = ({ modalShow, handleModalShow }) => {
  const eBillingPopUpQuery = useStaticQuery(graphql`
    query eBillingPopUpDefaultOld {
      allContentfulBluewaveEnergy(
        filter: { identifier: { type: { eq: "contactCustomerCareeBilling" } } }
      ) {
        edges {
          node {
            identifier {
              type
            }
            title
            slug
            sections {
              __typename
              ... on ContentfulContentList {
                id
                title
                type
                list {
                  title
                  type
                  header
                  contentDetails {
                    raw
                  }
                }
              }
              ... on ContentfulImageWithPath {
                title
                type
                image {
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
        }
      }
    }
  `);
  const propanePopUpData =
    eBillingPopUpQuery.allContentfulBluewaveEnergy.edges[0].node.sections;

  const contentList = propanePopUpData.filter((section) => {
    return section.type === constants.COMMON.EBILLING_POP_UP.DEFAULT;
  })[0].list;

  const forHomeContent = contentList.filter((section) => {
    return section.type === constants.COMMON.EBILLING_POP_UP.FOR_HOME;
  })[0];

  const forBusinessContent = contentList.filter((section) => {
    return section.type === constants.COMMON.EBILLING_POP_UP.FOR_BUSINESS;
  })[0];

  const backgroundImage = propanePopUpData.filter((section) => {
    return section.type === constants.COMMON.EBILLING_POP_UP.BACKGROUND_IMAGE;
  })[0];

  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        if (asset) {
          return (
            <Styled.TopImage
              src={asset?.node?.file?.url}
              alt={asset?.node?.title}
            />
          );
        }
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };

  const optionsHomeStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText2>{children}</Styled.ParaText2>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
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
      ),
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  const optionsBusinessStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText2>{children}</Styled.ParaText2>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.LinkStyle
          $color="#a46b2c"
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
      ),
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  return (
    <>
      <Styled.MainModal
        show={modalShow}
        onHide={() => handleModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Styled.CloseImage
          onClick={() => {
            handleModalShow(false);
          }}
        />
        <Styled.CustomerSelect $imageUrl={backgroundImage?.image?.file?.url}>
          <Styled.RowWrapper>
            <Styled.Column xs={12} md={6}>
              <div>{forHomeContent?.header}</div>
              {documentToReactComponents(
                JSON.parse(forHomeContent?.contentDetails?.raw),
                optionsHomeStyle
              )}
            </Styled.Column>
            <Styled.Column xs={12} md={6}>
              <div>{forBusinessContent?.header}</div>
              {documentToReactComponents(
                JSON.parse(forBusinessContent?.contentDetails?.raw),
                optionsBusinessStyle
              )}
            </Styled.Column>
          </Styled.RowWrapper>
        </Styled.CustomerSelect>
      </Styled.MainModal>
    </>
  );
};
export default EBillingPopUp;
