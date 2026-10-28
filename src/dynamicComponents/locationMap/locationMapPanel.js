import * as React from 'react';
import * as Styled from './locationMapPanelStyles';
import { Col, Row } from 'react-bootstrap';
import iconHomeMap from '../../images/icon-home-map.png';
import iconHomeContact from '../../images/icon-home-contact.png';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

const LocationMapPanel = ({ section }) => {
  const sectionData = (sectionType) =>
    section?.textWithPaths?.filter((item) => item.type === sectionType)[0];

  return (
    <Styled.LocationMapContainer $background={section?.image?.file?.url}>
      <Styled.InnerContainer>
        <Styled.RowContent className="g-0 justify-content-center">
          <Col xs={12} lg></Col>
          <Styled.LeftColumn xs={12} lg={5} className="m-auto">
            <Row className="g-0 justify-content-center">
              <Styled.ColStyle xs={12}>
                <Styled.HeaderH2>
                  {section?.headerWithText?.headerText}
                </Styled.HeaderH2>
              </Styled.ColStyle>
              <Styled.ColumnWithRightBorderTab xs={12} md="auto">
                {isExternalUrl(sectionData('homeLocationsMap').path) ? (
                  <Styled.AnchorLocationsStyles
                    href={
                      isExternalUrlhref(sectionData('homeLocationsMap').path)
                        ? sectionData('homeLocationsMap').path
                        : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                          sectionData('homeLocationsMap').path)
                    }
                    target="_blank"
                    className="padding-20"
                  >
                    <Styled.LocationsImageLink
                      src={iconHomeMap}
                      alt="Locations Map"
                    ></Styled.LocationsImageLink>
                    {sectionData('homeLocationsMap').text}
                  </Styled.AnchorLocationsStyles>
                ) : (
                  <Styled.AnchorLocationsStylesInternal
                    to={
                      isExternalUrlhref(sectionData('homeLocationsMap').path)
                        ? sectionData('homeLocationsMap').path
                        : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                          sectionData('homeLocationsMap').path)
                    }
                    className="padding-20"
                  >
                    <Styled.LocationsImageLink
                      src={iconHomeMap}
                      alt="Locations Map"
                    ></Styled.LocationsImageLink>
                    {sectionData('homeLocationsMap').text}
                  </Styled.AnchorLocationsStylesInternal>
                )}
              </Styled.ColumnWithRightBorderTab>
              <Styled.RightCol xs={12} md="auto">
                {isExternalUrl(sectionData('contactUsMapLink').path) ? (
                  <Styled.AnchorLocationsStyles
                    href={
                      isExternalUrlhref(sectionData('contactUsMapLink').path)
                        ? sectionData('contactUsMapLink').path
                        : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                          sectionData('contactUsMapLink').path)
                    }
                    target="_blank"
                    className="margin-20"
                  >
                    <Styled.LocationsImageLink
                      src={iconHomeContact}
                      alt="Contact Us"
                    ></Styled.LocationsImageLink>
                    {sectionData('contactUsMapLink').text}
                  </Styled.AnchorLocationsStyles>
                ) : (
                  <Styled.AnchorLocationsStylesInternal
                    to={
                      isExternalUrlhref(sectionData('contactUsMapLink').path)
                        ? sectionData('contactUsMapLink').path
                        : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                          sectionData('contactUsMapLink').path)
                    }
                    className="margin-20"
                  >
                    <Styled.LocationsImageLink
                      src={iconHomeContact}
                      alt="Contact Us"
                    ></Styled.LocationsImageLink>
                    {sectionData('contactUsMapLink').text}
                  </Styled.AnchorLocationsStylesInternal>
                )}
              </Styled.RightCol>
            </Row>
          </Styled.LeftColumn>
        </Styled.RowContent>
      </Styled.InnerContainer>
    </Styled.LocationMapContainer>
  );
};

export default LocationMapPanel;
