import * as React from 'react';
import * as Styled from './promoBannerStyles';
import { Col, Row } from 'react-bootstrap';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const PromoBanner = ({ section }) => {
  return (
    <Styled.PromoBannerContainer>
      <Styled.PromoBannerInnerContainer fluid className="p-0">
        <Row className="g-0">
          <Styled.Column>
            <Styled.AnchorTag
              href={
                isExternalUrlhref(section?.path)
                  ? section?.path
                  : addTrailingSlash(
                      process.env.GATSBY_DOMAIN_URL + section?.path
                    )
              }
              target={isExternalUrl(section?.path) ? '_blank' : '_self'}
            >
              <img src={section?.image?.file?.url} alt="No Image" />
            </Styled.AnchorTag>
          </Styled.Column>
        </Row>
      </Styled.PromoBannerInnerContainer>
    </Styled.PromoBannerContainer>
  );
};

export default PromoBanner;
