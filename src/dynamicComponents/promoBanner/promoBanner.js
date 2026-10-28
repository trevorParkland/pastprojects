import * as React from 'react';
import * as Styled from './promoBannerStyles';
import { Col, Row } from 'react-bootstrap';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';
const PromoBanner = ({ section }) => {
  return (
    <Styled.PromoBannerContainer>
      <Styled.PromoBannerInnerContainer fluid className="p-0">
        <Row className="g-0">
          <Styled.Column>
            {isExternalUrl(section?.path) ? (
              <Styled.AnchorTag target="_blank" href={isExternalUrlhref(section?.path)? section?.path : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + section?.path)}>
                <img src={section?.image?.file?.url} alt="No Image" />
              </Styled.AnchorTag>
            ) : (
              <Styled.AnchorTagInternal
                to={
                  isExternalUrlhref(section?.path)
                    ? section?.path
                    : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + section?.path)
                }
              >
                <img src={section?.image?.file?.url} alt="No Image" />
              </Styled.AnchorTagInternal>
            )}
          </Styled.Column>
        </Row>
      </Styled.PromoBannerInnerContainer>
    </Styled.PromoBannerContainer>
  );
};

export default PromoBanner;
