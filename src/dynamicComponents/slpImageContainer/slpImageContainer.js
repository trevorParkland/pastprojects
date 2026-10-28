import React from 'react';
import useContentfulAssets from '../../hooks/useContentfulAssets';
import * as Styled from './slpImageContainerStyles';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Col, Row } from 'react-bootstrap';

function SlpImageContainer({ sectionData }) {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulAssets(node?.data?.target?.sys?.id);
        return asset?.node?.file?.url?.includes('image') ? (
          <Styled.ImageStyle
            src={asset?.node?.file?.url}
            alt={asset?.node?.title}
          />
        ) : (
          <></>
        );
      },
    },
    renderText: (text) =>
      text?.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />]),
  };
  return (
    <Styled.MainImageContainer $backgroundImage={sectionData?.image?.file?.url}>
      <Styled.RowWrapper>
        <Row>
          {sectionData?.headerWithText && (
            <Styled.TopHeader>
              {sectionData?.headerWithText?.headerText}
            </Styled.TopHeader>
          )}
          {sectionData?.assets &&
            sectionData?.assets?.map((asset, key) => {
              return (
                <Col xs={12} md className="px-0" key={key}>
                  <Styled.ImgContainer
                    src={asset?.file?.url}
                    alt={asset?.title}
                  />
                  <Styled.ParaTextMiddle>
                    {asset.description}
                  </Styled.ParaTextMiddle>
                </Col>
              );
            })}
        </Row>
      </Styled.RowWrapper>
    </Styled.MainImageContainer>
  );
}
export default SlpImageContainer;
