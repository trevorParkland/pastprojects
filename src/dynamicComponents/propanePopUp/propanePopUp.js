import React from 'react';
import * as Styled from './propanePopUpStyles';
import constants from '../../utils/utils';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import { addTrailingSlash, isExternalUrlhref } from '../../utils';

const PropanePopUp = ({ modalShow, handleModalShow }) => {
  const propanePopUpQuery = useStaticQuery(graphql`
    query propanePopUpDefault {
      allContentfulBluewaveEnergy(
        filter: {
          node_locale: { eq: "en-US" }
          identifier: { type: { eq: "homePageDeliveringMorePropane" } }
        }
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
            }
          }
        }
      }
    }
  `);
  const propanePopUpData =
    propanePopUpQuery.allContentfulBluewaveEnergy.edges[0].node.sections;

  const contentList = propanePopUpData.filter((section) => {
    return section.type === constants.COMMON.PROPANE_POP_UP.DEFAULT;
  })[0].list;

  const imageContent = contentList.filter((section) => {
    return section.type === constants.COMMON.PROPANE_POP_UP.IMAGE;
  })[0];

  const forHomeContent = contentList.filter((section) => {
    return section.type === constants.COMMON.PROPANE_POP_UP.FOR_HOME;
  })[0];

  const forBusinessContent = contentList.filter((section) => {
    return section.type === constants.COMMON.PROPANE_POP_UP.FOR_BUSINESS;
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

  const optionsStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText2>{children}</Styled.ParaText2>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Styled.LinkStyle
            href={
              isExternalUrlhref(node.data.uri)
                ? node.data.uri
                : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node.data.uri)
            }
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
        <Styled.CustomerSelect>
          {documentToReactComponents(
            JSON.parse(imageContent?.contentDetails?.raw),
            optionsMainStyle
          )}
          <Styled.RowWrapper>
            <Styled.Column xs={12} md={6}>
              <div>{forHomeContent.header}</div>
              {documentToReactComponents(
                JSON.parse(forHomeContent?.contentDetails?.raw),
                optionsStyle
              )}
            </Styled.Column>
            <Styled.Column xs={12} md={6}>
              <div>{forHomeContent.header}</div>
              {documentToReactComponents(
                JSON.parse(forBusinessContent?.contentDetails?.raw),
                optionsStyle
              )}
            </Styled.Column>
          </Styled.RowWrapper>
        </Styled.CustomerSelect>
      </Styled.MainModal>
    </>
  );
};
export default PropanePopUp;
