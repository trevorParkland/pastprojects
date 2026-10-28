import * as React from 'react';
import * as Styled from './migrationPanelStyles';
import { Row, Col } from 'react-bootstrap';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { useContentfulImages } from '../../hooks/useContentfulImages';

const MigrationPanel = ({ section }) => {
  const headerData = section.list.filter((item) => {
    return item.type === 'clientspaceText';
  })[0];
  const imageData = section.list.filter((item) => {
    return item.type === 'clientSpaceImage';
  })[0];
  const manageAccountData = section.list.filter((item) => {
    return item.type === 'manageAccountTextwithButton';
  })[0];
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.Header2>{children}</Styled.Header2>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        return (
          <Styled.LaptopImage
            src={asset.node.file.url}
            alt={asset.node.title}
          />
        );
      },
      [INLINES.HYPERLINK]: (node, children) =>
        isExternalUrl(node?.data?.uri) ? (
          <Styled.LinkAttribute target="_blank" href={isExternalUrlhref(node?.data?.uri) ? node?.data?.uri : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)}>
            {children}
          </Styled.LinkAttribute>
        ) : (
          <Styled.LinkAttributeInternal
            to={
              isExternalUrlhref(node?.data?.uri)
                ? node?.data?.uri
                :addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)
            }
          >
            {children}
          </Styled.LinkAttributeInternal>
        ),
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };
  return (
    <Styled.MigrationPanelContainer>
      <Styled.MigrationPanelInnerContainer fluid className="px-0">
        <Row className="g-0">
          <Col xs={12} lg>
            <Styled.Header2>
              <Styled.LeftSpan>{headerData?.header}</Styled.LeftSpan>
              {documentToReactComponents(
                JSON.parse(headerData?.contentDetails?.raw),
                optionsMainStyle
              )}
            </Styled.Header2>
          </Col>
          <Col xs={12} lg>
            {documentToReactComponents(
              JSON.parse(imageData?.contentDetails?.raw),
              optionsMainStyle
            )}
          </Col>
          <Styled.RightCol xs={12} lg>
            <Styled.ImproveText>{manageAccountData?.header}</Styled.ImproveText>
            {documentToReactComponents(
              JSON.parse(manageAccountData?.contentDetails?.raw),
              optionsMainStyle
            )}
          </Styled.RightCol>
        </Row>
      </Styled.MigrationPanelInnerContainer>
    </Styled.MigrationPanelContainer>
  );
};

export default MigrationPanel;
