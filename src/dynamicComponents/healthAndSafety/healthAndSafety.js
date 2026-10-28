import * as React from 'react';
import { Col } from 'react-bootstrap';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';
import * as Styled from './healthAndSafetyStyles';

const HealthAndSafety = ({ section }) => {
  return (
    <Styled.CustomerServiceContainer>
      <Styled.InnerContainer>
        <Styled.RowContent>
          <Col lg className="d-none d-lg-block" />
          <Styled.LeftColumn xs={12} lg={3} xl={4}>
            <Styled.Header2>
              {section?.headerWithText?.headerText}
            </Styled.Header2>
          </Styled.LeftColumn>
          <Styled.MiddleColumn xs={12} lg={4}>
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
          </Styled.MiddleColumn>
          <Styled.RightColumn
            xs={12}
            lg="auto"
            className="justify-content-sm-center"
          >
            <Styled.RowContent>
              {section?.images?.map((item, index) => {
                return (
                  <Styled.ImageColumn xs={12} sm={'auto'} key={index}>
                    <Styled.ToZeroImage
                      src={item?.file?.url}
                      alt="Idle Smart"
                    ></Styled.ToZeroImage>
                  </Styled.ImageColumn>
                );
              })}
              <Col xxl={1} className="d-none d-xxl-block" />
            </Styled.RowContent>
          </Styled.RightColumn>
          <Col lg className="d-none d-lg-block" />
        </Styled.RowContent>
      </Styled.InnerContainer>
    </Styled.CustomerServiceContainer>
  );
};

export default HealthAndSafety;
