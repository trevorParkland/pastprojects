import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import * as Styled from './clientSpaceStyle';
import constants from '../../utils/utils';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import styled from 'styled-components';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const ClientSpace = ({ modalShow, handleModalShow }) => {
  const clientSpaceQuery = useStaticQuery(graphql`
    query clientSpaceDefault {
      allContentfulBluewaveEnergy(
        filter: {
          node_locale: { eq: "en-US" }
          identifier: { type: { eq: "clientSpace" } }
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
  const clientSpaceData =
    clientSpaceQuery?.allContentfulBluewaveEnergy?.edges[0]?.node?.sections;

  const contentList = clientSpaceData?.filter((section) => {
    return section?.type === constants.DEFAULT_MENU.CLIENT_SPACE.CONTENT_LIST;
  })[0]?.list;

  const content = contentList?.filter((section) => {
    return section?.type === constants.DEFAULT_MENU.CLIENT_SPACE.CONTENT;
  })[0];

  const residentialContent = contentList?.filter((section) => {
    return (
      section?.type === constants.DEFAULT_MENU.CLIENT_SPACE.RESIDENTIAL_CONTENT
    );
  })[0];

  const commercialContent = contentList?.filter((section) => {
    return (
      section?.type === constants.DEFAULT_MENU.CLIENT_SPACE.COMMERCIAL_CONTENT
    );
  })[0];

  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  const optionsResidentialStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText2>{children}</Styled.ParaText2>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.ResidentialHeader>{children}&nbsp;</Styled.ResidentialHeader>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Styled.AnchorButtonResidential
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
          </Styled.AnchorButtonResidential>
        );
      },
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  const optionsCommercialStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText2>{children}</Styled.ParaText2>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.ResidentialHeader>{children}&nbsp;</Styled.ResidentialHeader>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Styled.AnchorButtonCommercial
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
          </Styled.AnchorButtonCommercial>
        );
      },
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
        <Styled.CustomerSelect>
          {content?.contentDetails?.raw &&
            documentToReactComponents(
              JSON.parse(content?.contentDetails?.raw),
              optionsMainStyle
            )}
          <Row>
            <Styled.Column xs={12} md={6}>
              {residentialContent?.contentDetails?.raw &&
                documentToReactComponents(
                  JSON.parse(residentialContent?.contentDetails?.raw),
                  optionsResidentialStyle
                )}
            </Styled.Column>
            <Styled.Column xs={12} md={6}>
              {commercialContent?.contentDetails?.raw &&
                documentToReactComponents(
                  JSON.parse(commercialContent?.contentDetails?.raw),
                  optionsCommercialStyle
                )}
            </Styled.Column>
          </Row>
        </Styled.CustomerSelect>
      </Styled.MainModal>
    </>
  );
};
export default ClientSpace;
