import * as React from 'react';
import * as Styled from './bluewavePledgeStyles';
import { Row, Col } from 'react-bootstrap';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

const BluewavePledge = ({ section }) => {
  return (
    <Styled.BluewavePledgeContainer bgUrl={section?.images[0]?.file?.url}>
      <Styled.BluewavePledgeInnerContainer fluid>
        <Row className="justify-content-center g-0">
          <Col lg />
          <Styled.RowContent className="g-0">
            <Col lg className="d-none d-lg-block "></Col>
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              lg={'auto'}
            >
              <Styled.FireImage
                src={section?.images[1]?.file?.url}
                alt="No Image"
              />
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              lg
              className="m-auto"
            >
              <Styled.LeftContent>
                <Styled.LeftContentP>
                  {section?.headerWithText?.text?.text}
                </Styled.LeftContentP>
                {isExternalUrl(section?.textWithLinks?.path) ? (
                  <Styled.AnchorLinkStyles
                    href={
                      isExternalUrlhref(section?.textWithLinks?.path)
                        ? section?.textWithLinks?.path
                        : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                          section?.textWithLinks?.path)
                    }
                    target="_blank"
                  >
                    {section?.textWithLinks?.text}
                  </Styled.AnchorLinkStyles>
                ) : (
                  <Styled.AnchorLinkStylesInternal
                    to={
                      isExternalUrlhref(section?.textWithLinks?.path)
                        ? section?.textWithLinks?.path
                        : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                          section?.textWithLinks?.path)
                    }
                  >
                    {section?.textWithLinks?.text}
                  </Styled.AnchorLinkStylesInternal>
                )}
              </Styled.LeftContent>
            </Col>
          </Styled.RowContent>
          <Col lg />
        </Row>
      </Styled.BluewavePledgeInnerContainer>
    </Styled.BluewavePledgeContainer>
  );
};

export default BluewavePledge;
