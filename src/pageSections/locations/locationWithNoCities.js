import React from 'react';
import { Container, Row } from 'react-bootstrap';
import * as Styled from '../../templates/locationTemplate/locationPageTemplateStyle';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const LocationWithNoCities = () => {
  const locationWithNoCitiesDataQuery = useStaticQuery(graphql`
    query locationWithNoCitiesDataMyQuery {
      allContentfulLocationWithNoRecords(
        filter: {
          node_locale: { eq: "en-US" }
          type: { eq: "locationWithNoRecords" }
        }
      ) {
        edges {
          node {
            title
            type
            header
            assetLink
            subtext {
              raw
            }
            asset {
              title
              file {
                fileName
                url
              }
            }
          }
        }
      }
    }
  `);
  const locationWithNoCitiesEdge =
    locationWithNoCitiesDataQuery?.allContentfulLocationWithNoRecords?.edges[0];

  const locationWithNoCitiesHeader = locationWithNoCitiesEdge?.node?.header;
  const locationWithNoCitiesImage = locationWithNoCitiesEdge?.node?.asset?.file;

  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.InlineLink
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
        </Styled.InlineLink>
      ),
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <>
      <Container>
        <Row>
          <Styled.NoRecordLeftCol xs={12} lg={6}>
            <Styled.NoRecordHeader>
              {locationWithNoCitiesHeader}
            </Styled.NoRecordHeader>
            {documentToReactComponents(
              JSON.parse(locationWithNoCitiesEdge?.node?.subtext?.raw),
              optionsMainStyle
            )}
          </Styled.NoRecordLeftCol>
          <Styled.NoRecordRightCol xs={12} lg={6}>
            <Styled.AnchorStyle
              href={locationWithNoCitiesEdge?.node?.assetLink}
              target="_blank"
            >
              <Styled.EastImage
                src={locationWithNoCitiesImage?.url}
                alt={locationWithNoCitiesImage?.fileName}
              ></Styled.EastImage>
            </Styled.AnchorStyle>
          </Styled.NoRecordRightCol>
        </Row>
      </Container>
    </>
  );
};

export default LocationWithNoCities;
