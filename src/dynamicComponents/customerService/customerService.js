import * as React from 'react';
import * as Styled from './customerServiceStyles';
import { Row, Col } from 'react-bootstrap';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

const CustomerService = ({ section }) => {
  return (
    <Styled.CustomerServiceContainer
      $backgroundImage={section?.images[0]?.file?.url}
    >
      <Styled.InnerContainer className="px-0">
        <Styled.DudeContainer>
          <Styled.CustomerServiceImageDude
            src={section?.images[2]?.file?.url}
            alt="Customer Care Excellence"
          ></Styled.CustomerServiceImageDude>
        </Styled.DudeContainer>
        <Row className="g-0">
          <Col xs={12} md={3} lg="auto">
            <Styled.CSLogoContainer>
              <Styled.CustomerServiceLogoImage
                src={section?.images[1]?.file?.url}
                alt="Customer Care Excellence"
              ></Styled.CustomerServiceLogoImage>
            </Styled.CSLogoContainer>
          </Col>
          <Col xs={12} md={9} lg={7} xl={6}>
            <Styled.HomeTextContainer>
              <Styled.Header2>
                {section?.headerWithText?.headerText}
              </Styled.Header2>
              <Styled.LeftPara>
                {section?.headerWithText?.text?.text}
              </Styled.LeftPara>
              {isExternalUrl(section?.textWithLinks?.path) ? (
                <Styled.AnchorStyles
                  href={
                    isExternalUrlhref(section?.textWithLinks?.path)
                      ? section?.textWithLinks?.path
                      : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                        section?.textWithLinks?.path)
                  }
                  target="_blank"
                >
                  {section?.textWithLinks?.text}
                </Styled.AnchorStyles>
              ) : (
                <Styled.AnchorStylesInternal
                  to={
                    isExternalUrlhref(section?.textWithLinks?.path)
                      ? section?.textWithLinks?.path
                      : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                        section?.textWithLinks?.path)
                  }
                >
                  {section?.textWithLinks?.text}
                </Styled.AnchorStylesInternal>
              )}
            </Styled.HomeTextContainer>
          </Col>
        </Row>
      </Styled.InnerContainer>
    </Styled.CustomerServiceContainer>
  );
};

export default CustomerService;
