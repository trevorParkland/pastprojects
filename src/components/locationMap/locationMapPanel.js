import * as React from 'react';
import * as Styled from './locationMapPanelStyles';
import { Col, Row } from 'react-bootstrap';
import iconHomeMap from '../../images/icon-home-map.png';
import iconHomeContact from '../../images/icon-home-contact.png';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const LocationMapPanel = ({ section }) => {
  const sectionData = (sectionType) =>
    section?.textWithPaths?.filter((item) => item.type === sectionType)[0];

  return (
    <Styled.LocationMapContainer>
      <Styled.InnerContainer>
        <Styled.RowContent className="g-0 justify-content-center">
          <Col xs={12} lg>
            <Styled.LocationsImage
              src={section?.image?.file?.url}
            ></Styled.LocationsImage>
          </Col>
          <Styled.LeftColumn xs={12} lg={4} className="m-auto">
            <Row className="g-lg-0 justify-content-center">
              <Col xs={12}>
                {section?.headerWithText?.headerText}
                <Styled.LeftPanelSpan>
                  {section?.headerWithText?.text?.text}
                </Styled.LeftPanelSpan>
              </Col>
              <Styled.ColumnWithRightBorderTab xs="auto" lg={12} xl="auto">
                <Styled.AnchorLocationsStyles
                  href={
                    isExternalUrlhref(sectionData('homeLocationsMap').path)
                      ? sectionData('homeLocationsMap').path
                      : addTrailingSlash(
                          process.env.GATSBY_DOMAIN_URL +
                            sectionData('homeLocationsMap').path
                        )
                  }
                  target={
                    isExternalUrl(sectionData('homeLocationsMap').path)
                      ? '_blank'
                      : '_self'
                  }
                  className="padding-20"
                >
                  <Styled.LocationsImageLink
                    src={iconHomeMap}
                    alt="Locations Map"
                  ></Styled.LocationsImageLink>
                  {sectionData('homeLocationsMap').text}
                </Styled.AnchorLocationsStyles>
              </Styled.ColumnWithRightBorderTab>
              <Col xs="auto" lg={12} xl="auto">
                <Styled.AnchorLocationsStyles
                  href={
                    isExternalUrlhref(sectionData('homeContactUs').path)
                      ? sectionData('homeContactUs').path
                      : addTrailingSlash(
                          process.env.GATSBY_DOMAIN_URL +
                            sectionData('homeContactUs').path
                        )
                  }
                  target={
                    isExternalUrl(sectionData('homeContactUs').path)
                      ? '_blank'
                      : '_self'
                  }
                  className="margin-20"
                >
                  <Styled.LocationsImageLink
                    src={iconHomeContact}
                    alt="Contact Us"
                  ></Styled.LocationsImageLink>
                  {sectionData('homeContactUs').text}
                </Styled.AnchorLocationsStyles>
              </Col>
            </Row>
          </Styled.LeftColumn>
        </Styled.RowContent>
      </Styled.InnerContainer>
    </Styled.LocationMapContainer>
  );
};

export default LocationMapPanel;
