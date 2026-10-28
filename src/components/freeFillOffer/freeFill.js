import * as React from 'react';
import * as Styled from './freeFillStyles';
import { Col, Row } from 'react-bootstrap';

const FreeFill = (props) => {
  return (
    <Styled.FreeFillContainer>
      <Styled.AnchorTag href={`${props?.section?.path}`}>
        <Styled.FreeFillInnerContainer fluid>
          <Row>
            <Col xs={1} className="d-lg-none" />
            <Styled.Column>
              <img
                // src={`${props.section.image.file.url}?w=990&fit=fill`}  //contentful image api
                src={`${props?.section?.image?.file?.url}`}
                alt="No Image"
              />
            </Styled.Column>
            <Col xs={1} className="d-lg-none" />
            {/* <Col xs={12} lg={3} className="m-auto">
              <Styled.FillFreeText>
                Free fill on propane up to 600L
              </Styled.FillFreeText>
            </Col>
            <Col xs={12} lg={4}>
              <Styled.FireImage
                src={props.section.image.file.url}
                alt="No Image"
              />
            </Col>
            <Col xs={12} lg={4} xxl={2} className="m-auto">
              <Styled.LearnMoreText>Learn More</Styled.LearnMoreText>
            </Col> */}
            {/* <Col lg={1} className="d-none d-lg-block" /> */}
          </Row>
        </Styled.FreeFillInnerContainer>
      </Styled.AnchorTag>
    </Styled.FreeFillContainer>
  );
};

export default FreeFill;
