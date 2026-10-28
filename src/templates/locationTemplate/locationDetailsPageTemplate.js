import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import * as Styled from './locationPageTemplateStyle';
import iconPinBranch from '../../images/icon-pin-branch.png';
import iconPinBoth from '../../images/icon-pin-both.png';
import iconPinCardlock from '../../images/icon-pin-cardlock.png';
import iconPinLubricant from '../../images/icon-pin-ldc.png';
import { graphql, useStaticQuery } from 'gatsby';
import MarketoForm from '../../common/marketoForm';
import constants, { menuItemsType } from '../../utils/utils';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import GoogleMapReact from 'google-map-react';
import LocationPinMarker from '../../common/locationMarker/locationMarker';
import PropanePopUp from '../../components/propanePopUp/propanePopUp';
import { LocationTypes } from '../../utils/utils';
import { MARKETO_FORMS_CONSTANTS } from '../../utils/marketoForms';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer/footer';
import TopBanner from '../../common/topBanner/topBanner';
import BreadcrumbsBlock from '../../common/breadcrumbsBlock/breadcrumbsBlock';
import DefaultHeaderMenu from '../../components/defaultHeaderMenu/defaultHeaderMenu';
import BootstrapNavbar from '../../components/navigationBar/mainMenu/navigationBar';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';
import LogoOG from '../../images/logo-og.jpg';

const LocationDetailsPageTemplate = ({ location }) => {
  const extractedUrlSlug = location?.pathname?.split('/');
  const activeLink = menuItemsType.LOCATIONS;

  let urlSlug = extractedUrlSlug[extractedUrlSlug?.indexOf('locations') + 1];
  const [modalShow, setModalShow] = React.useState(false);
  const handleModalShow = (isShow) => {
    isShow ? setModalShow(isShow) : setModalShow(!modalShow);
  };
  const locationDataQuery = useStaticQuery(graphql`
    query locationDataMyQuery {
      allContentfulLocation(
        filter: {
          brand: { brand: { in: ["Bluewave"] } }
          node_locale: { eq: "en-US" }
        }
      ) {
        edges {
          node {
            address1
            address2
            node_locale
            branchHours
            branchManager
            cardlockHours
            email
            hasDef
            type {
              type
            }
            hasDiesel
            hasGasoline
            hasHeatingOil
            hasHeatingEquipment
            hasLubricants
            hasPropane
            latitude
            location
            longitude
            phone
            tollfree
            pipelineCardAccepted
            postalCode
            serviceArea {
              serviceArea
            }
            city
            province
            id

            urlSlug
            pageTitle
            metaDescription
          }
        }
      }
      allContentfulBluewaveEnergy(
        filter: {
          node_locale: { eq: "en-US" }
          identifier: { type: { eq: "locationDetails" } }
        }
      ) {
        edges {
          node {
            title
            identifier {
              type
            }
            slug
            sections {
              ... on ContentfulContentList {
                id
                title
                type
                list {
                  type
                  title
                  header
                  subText
                  contentDetails {
                    raw
                  }
                }
              }
              ... on ContentfulTextWithMultipleImagesReferences {
                id
                title
                type
                headerText
                imagereferences {
                  ... on ContentfulMutipleImagesWithPath {
                    id
                    type
                    title
                    images {
                      title
                      file {
                        fileName
                        url
                      }
                    }
                    path
                  }
                }
              }
              ... on ContentfulContent {
                id
                title
                type
                header
                contentDetails {
                  raw
                }
              }
            }
          }
        }
      }
    }
  `);
  const locationDataEdge = locationDataQuery?.allContentfulLocation?.edges;
  let locationData;

  let res = locationDataEdge?.find((data) => data?.node?.urlSlug === urlSlug);

  res ? (locationData = res?.node) : navigate('/locations/', { replace: true });

  const locationCommonData =
    locationDataQuery?.allContentfulBluewaveEnergy?.edges[0]?.node?.sections;

  const productSupplierData = locationCommonData?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.PRODUCT_SUPPLIER
    );
  })[0];
  const productSupplierImages = locationCommonData?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT
        .PRODUCT_SUPPLIER_IMAGES
    );
  })[0]?.imagereferences;
  const dieselImages = productSupplierImages?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.DIESEL_IMAGE
    );
  })[0];

  const heatingOilImages = productSupplierImages?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.HEATING_OIL_IMAGE
    );
  })[0];
  const lubricantsImages = productSupplierImages?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.LUBRICANTS_IMAGE
    );
  })[0];
  const propaneImages = productSupplierImages?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.PROPANE_IMAGE
    );
  })[0];
  const defImages = productSupplierImages?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.DEF_IMAGE
    );
  })[0];

  const locationCommonDataList = locationCommonData?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.CONTENT_LIST
    );
  })[0]?.list;

  const alsoAvailable = locationCommonDataList?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.ALSO_AVAILABLE
    );
  })[0];

  const locationDetailsData = locationCommonDataList?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.LOCATION_DETAILS
    );
  })[0];

  const multiProductOffering = locationCommonDataList?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT
        .MULTI_PRODUCT_OFFERING
    );
  })[0];

  const customerExcellence = locationCommonDataList?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT
        .CUSTOMER_CARE_EXCELLENCE
    );
  })[0];

  const safetyReputation = locationCommonDataList?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.SAFETY_REPUTATION
    );
  })[0];

  const locationContactData = locationCommonDataList?.filter((section) => {
    return (
      section?.type ===
      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT.LOCATION_CONTACT
    );
  })[0];

  const [lat, setLat] = React.useState(parseFloat(locationData?.latitude));
  const [lng, setLng] = React.useState(parseFloat(locationData?.longitude));
  const [zoom, setZoom] = React.useState(10);

  const serviceAreas = locationData?.serviceArea?.serviceArea?.split(',');
  const getIcon = (type) => {
    if (type?.length > 1) {
      return iconPinBoth;
    } else {
      switch (type[0]?.type) {
        case LocationTypes.Branch:
          return iconPinBranch;

        case LocationTypes.Cardlock:
          return iconPinCardlock;

        case LocationTypes.LubricantDistributionCentre:
          return iconPinLubricant;
      }
    }
  };
  const productsCount = [
    locationData?.hasDiesel,
    locationData?.hasPropane,
    locationData?.hasHeatingOil,
    locationData?.hasLubricants,
  ].filter(Boolean).length;

  const HeaderGenerator = () => {
    let Header = '';
    let length = 0;

    if (locationData?.hasDiesel) {
      Header = Header + ' Diesel';
      length++;
      if (length === productsCount - 1) Header = Header + ' and';
      else {
        if (length !== productsCount) Header = Header + ',';
      }
    }
    if (locationData?.hasPropane) {
      Header = Header + ' Propane';
      length++;
      if (length === productsCount - 1) Header = Header + ' and';
      else {
        if (length !== productsCount) Header = Header + ',';
      }
    }
    if (locationData?.hasHeatingOil) {
      Header = Header + ' Heating Oil';
      length++;
      if (length === productsCount - 1) Header = Header + ' and';
      else {
        if (length !== productsCount) Header = Header + ',';
      }
    }
    if (locationData?.hasLubricants) {
      Header = Header + ' Lubricants';
      length++;
      if (length === productsCount - 1) Header = Header + ' and';
      else {
        if (length !== productsCount) Header = Header + ',';
      }
    }
    return Header;
  };

  const productSupplierHeader = () => {
    let Header = HeaderGenerator();
    let result = productSupplierData?.header?.replace('{Products}', Header);
    let FinalHeader = result?.replace('{city}', locationData.location);
    return FinalHeader;
  };

  const productNeedsHeader = () => {
    let Header = HeaderGenerator();
    let result = locationDetailsData?.header?.replace('{products}', Header);
    let FinalHeader = result?.replace('{city}', locationData.location);
    return FinalHeader;
  };

  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.Header2>{children}</Styled.Header2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.BoldHeader>{children}</Styled.BoldHeader>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.InlineLink
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(
                  process.env.GATSBY_DOMAIN_URL + node?.data?.uri
                )
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.InlineLink>
      ),
      [MARKS.BOLD]: (node, children) => (
        <Styled.BoldText>{children}</Styled.BoldText>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImages(node?.data?.target?.sys?.id);
        return (
          <Styled.ImageStyle
            src={asset?.node?.file?.url}
            alt={asset?.node?.title}
          />
        );
      },
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  const productSupplierStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText2>{children}</Styled.ParaText2>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.Header2>{children}</Styled.Header2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.Header3>{children}</Styled.Header3>
      ),
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  return locationData ? (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{locationData?.location + ' | Bluewave Energy'}</title>
        {locationData?.metaDescription && (
          <meta
            name="description"
            content={locationData?.metaDescription}
          ></meta>
        )}
        <meta name="twitter:image" content={LogoOG}></meta>
        <meta property="og:image" content={LogoOG}></meta>
      </Helmet>
      <DefaultHeaderMenu />
      <BootstrapNavbar activeLink={activeLink} />
      <TopBanner path={location?.pathname} />
      <BreadcrumbsBlock path={location?.pathname} isLocation />

      <Styled.MainContainer>
        <Row>
          <Styled.TopLeft xs={12} lg={6}>
            <Styled.LogoStyle
              className="d-none d-md-block"
              src={getIcon(locationData?.type)}
              alt="Pin Icon"
            />
            <Styled.TopHeader>{locationData?.location}</Styled.TopHeader>
            <Styled.ParaText>
              {locationData?.type?.map((locationType, index) => {
                return (
                  <div key={index}>
                    {locationType?.type}
                    {index !== locationData?.type?.length - 1 ? ',' : ''}
                  </div>
                );
              })}
            </Styled.ParaText>
            <Styled.HorizontalBreak />
            <Row>
              <Col xs={12} md={6}>
                <div style={{ marginBottom: '30px' }}>
                  <Styled.ParaText>
                    <div> {locationData?.address1}</div>
                    <div> {locationData?.address2}</div>
                    <Styled.AddressParaText>
                      {locationData?.location}, {locationData?.province}
                      &nbsp;{locationData?.postalCode}
                    </Styled.AddressParaText>
                  </Styled.ParaText>
                  <Styled.LinkStyle2
                    target="_blank"
                    href={`https://www.google.com/maps/dir/?api=1&destination=
                      ${locationData?.address1}, ${locationData?.location}, ${locationData?.province}, ${locationData?.postalCode}`}
                  >
                    Get Directions
                  </Styled.LinkStyle2>
                </div>
                <Styled.BoldText>Contact</Styled.BoldText>
                <div style={{ marginBottom: '30px' }}>
                  {locationData?.phone && (
                    <Styled.LinkStyle2
                      className="popup-anchor"
                      href={`tel:${locationData?.phone}`}
                      tabindex="0"
                    >
                      {locationData?.phone && locationData?.phone}
                    </Styled.LinkStyle2>
                  )}
                  {locationData?.tollfree && (
                    <Styled.LinkStyle2
                      className="popup-anchor"
                      href={`tel:${locationData?.tollfree}`}
                      tabindex="0"
                    >
                      <Styled.AddressParaText>
                        Toll free:
                      </Styled.AddressParaText>
                      {locationData?.tollfree}
                    </Styled.LinkStyle2>
                  )}
                  <Styled.LinkStyle2
                    className="popup-anchor"
                    href={`mailto:${locationData?.email}?subject=${locationData?.location} Contact Request`}
                  >
                    {locationData?.email}
                  </Styled.LinkStyle2>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <Styled.BoldText>Branch Manager</Styled.BoldText>
                <Styled.ParaText>{locationData?.branchManager}</Styled.ParaText>
                <Styled.BoldText>Branch Hours</Styled.BoldText>
                <Styled.ParaText>
                  <div>
                    {(locationData?.type?.length > 1 ||
                      (locationData?.type?.length === 1 &&
                        locationData?.type[0]?.type !==
                          LocationTypes.Cardlock)) &&
                      locationData?.branchHours}
                  </div>
                  <div>
                    {locationData?.cardlockHours &&
                      'Cardlock: ' + locationData?.cardlockHours}
                  </div>
                </Styled.ParaText>
                {!locationData?.pipelineCardAccepted && (
                  <Styled.ItalicText>
                    Pipeline card not accepted at this site
                  </Styled.ItalicText>
                )}
              </Col>
            </Row>
            <Styled.AnchorButton href="#contact-us-today" className="scroll">
              Contact Us
            </Styled.AnchorButton>
          </Styled.TopLeft>
          <Col xs={12} lg={6} className="d-none d-md-block">
            <Styled.MapStyle style={{ height: '370px' }}>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.GATSBY_GOOGLE_MAP_APIKEY,
                }}
                defaultZoom={zoom}
                center={{ lat, lng }}
                yesIWantToUseGoogleMapApiInternals
                options={{ streetViewControl: true }}
                onGoogleApiLoaded={({ map, maps }) => {
                  const marker = new maps.Marker({
                    position: new maps.LatLng(lat, lng),
                    icon: {
                      url: getIcon(locationData?.type), // url
                      scaledSize: new google.maps.Size(53, 50), // size
                    },

                    map: map,
                  });
                  const infowindow = new maps.InfoWindow({
                    content: `
                          <div class="infoWindow">
                              <h2>${locationData?.location} </h2>
                              <div class="infoWindow-left">
                                ${locationData?.address1}
                                <br />
                                ${locationData?.city}, ${
                      locationData?.province
                    }, ${locationData?.postalCode}
                                <br />
                                <br />
                                <h3>Contact</h3>
                                <a
                                  class="popup-anchor"
                                  href='tel:${locationData?.phone}'
                                  tabindex="0"
                                >
                                  ${
                                    locationData?.phone !== null
                                      ? locationData?.phone
                                      : ''
                                  }
                                </a>
                                <br/>
                                <a
                                  class="popup-anchor"
                                  href='tel:${locationData?.tollfree}'
                                  tabindex="0"
                                >
                                  ${
                                    locationData?.tollfree !== null
                                      ? locationData?.tollfree
                                      : ''
                                  }
                                </a>
                                <br />
                                <a
                                  class="popup-anchor"
                                  href='mailto:${locationData?.email}?subject=${
                      locationData?.location
                    } Contact Request'
                                >
                                  ${locationData?.email}
                                </a>
                              </div>
                              <div class="infoWindow-right">
                                <h3>Branch Manager</h3>
                                ${locationData?.branchManager}
                                <br />
                                <br />
                                <h3>Branch Hours</h3>
                                ${locationData?.branchHours}
                                <br />
                                <a
                                  class="popup-anchor"
                                  href=${
                                    isExternalUrlhref(locationData?.urlSlug)
                                      ? locationData?.urlSlug
                                      : addTrailingSlash(
                                          process.env.GATSBY_DOMAIN_URL +
                                            '/locations/' +
                                            locationData?.urlSlug
                                        )
                                  }
                                  
                                target=${
                                  isExternalUrl(locationData?.urlSlug)
                                    ? '_blank'
                                    : '_self'
                                }
                                >
                                  View Service Areas
                                </a>
                              </div>
                              <div class="clear"></div>
                          </div>
                    `,
                    ariaLabel: 'Marker',
                  });

                  marker.addListener('click', () => {
                    infowindow.open({
                      anchor: marker,
                      map,
                    });
                    map.panTo(marker.getPosition());
                  });
                }}
              ></GoogleMapReact>
            </Styled.MapStyle>
          </Col>
          <Styled.SectionBreak />
        </Row>
        <Row>
          <Col xs={12} md={locationData?.serviceArea ? 5 : 12} className="px-0">
            <Styled.MiddleBlockHeader>
              {productSupplierHeader()}
            </Styled.MiddleBlockHeader>
            {documentToReactComponents(
              JSON.parse(productSupplierData?.contentDetails?.raw),
              productSupplierStyle
            )}
            {locationData?.hasDiesel && (
              <Styled.AnchorStyleInternal
                href={
                  isExternalUrlhref(dieselImages?.path)
                    ? dieselImages?.path
                    : addTrailingSlash(
                        process.env.GATSBY_DOMAIN_URL + dieselImages?.path
                      )
                }
                target={isExternalUrl(dieselImages?.path) ? '_blank' : '_self'}
              >
                <Styled.ImageContainer
                  $backgroundImage={dieselImages?.images[0]?.file?.url}
                  $hoverUrl={dieselImages?.images[1]?.file?.url}
                  title={dieselImages?.images[0]?.title}
                />
              </Styled.AnchorStyleInternal>
            )}
            {locationData?.hasHeatingOil && (
              <Styled.AnchorStyleInternal
                href={
                  isExternalUrlhref(heatingOilImages?.path)
                    ? heatingOilImages?.path
                    : addTrailingSlash(
                        process.env.GATSBY_DOMAIN_URL + heatingOilImages?.path
                      )
                }
                target={
                  isExternalUrl(heatingOilImages?.path) ? '_blank' : '_self'
                }
              >
                <Styled.ImageContainer
                  $backgroundImage={heatingOilImages?.images[0]?.file?.url}
                  $hoverUrl={heatingOilImages?.images[1]?.file?.url}
                  title={heatingOilImages?.images[0]?.title}
                />
              </Styled.AnchorStyleInternal>
            )}
            {locationData?.hasPropane && (
              <Styled.AnchorStyle
                onClick={() => {
                  handleModalShow(true);
                }}
              >
                <Styled.ImageContainer
                  $backgroundImage={propaneImages?.images[0]?.file?.url}
                  $hoverUrl={propaneImages?.images[1]?.file?.url}
                  title={propaneImages?.images[0]?.title}
                />
              </Styled.AnchorStyle>
            )}
            {locationData?.hasLubricants && (
              <Styled.AnchorStyleInternal
                href={
                  isExternalUrlhref(lubricantsImages?.path)
                    ? lubricantsImages?.path
                    : addTrailingSlash(
                        process.env.GATSBY_DOMAIN_URL + lubricantsImages?.path
                      )
                }
                target={
                  isExternalUrl(lubricantsImages?.path) ? '_blank' : '_self'
                }
              >
                <Styled.ImageContainer
                  $backgroundImage={lubricantsImages?.images[0]?.file?.url}
                  $hoverUrl={lubricantsImages?.images[1]?.file?.url}
                  title={lubricantsImages?.images[0]?.title}
                />
              </Styled.AnchorStyleInternal>
            )}
            {locationData?.hasDef && (
              <Styled.ImageContainer
                $backgroundImage={defImages?.images[0]?.file?.url}
                $hoverUrl={defImages?.images[0]?.file?.url}
                title={defImages?.images[0]?.title}
              />
            )}
            {locationData?.hasGasoline && (
              <>
                {documentToReactComponents(
                  JSON.parse(alsoAvailable?.contentDetails?.raw),
                  optionsMainStyle
                )}
              </>
            )}
          </Col>
          {locationData?.serviceArea && (
            <>
              <Col md={1} />
              <Col xs={12} md={6}>
                <Styled.Header>{HeaderGenerator()} Service Areas</Styled.Header>
                {serviceAreas ? (
                  <Styled.ListContainer>
                    {serviceAreas?.map((item, index) => {
                      return (
                        <Styled.ListText key={index}>{item}</Styled.ListText>
                      );
                    })}
                  </Styled.ListContainer>
                ) : (
                  <Styled.ItalicText>
                    Please contact the branch to find all Service Areas.
                  </Styled.ItalicText>
                )}
              </Col>
            </>
          )}
          <Styled.SectionBreak />
          <PropanePopUp
            modalShow={modalShow}
            handleModalShow={handleModalShow}
          />
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <Styled.Header>{productNeedsHeader()}</Styled.Header>
            <Row>
              <Styled.Column xs={12} md={6}>
                {documentToReactComponents(
                  JSON.parse(locationDetailsData?.contentDetails?.raw),
                  optionsMainStyle
                )}
              </Styled.Column>
              <Styled.Column xs={12} md={6}>
                {documentToReactComponents(
                  JSON.parse(multiProductOffering?.contentDetails?.raw),
                  optionsMainStyle
                )}
                <Styled.ParaText3>
                  {multiProductOffering?.subText}
                </Styled.ParaText3>
              </Styled.Column>
            </Row>
            <Row>
              <Styled.Column xs={12} md={6}>
                {documentToReactComponents(
                  JSON.parse(customerExcellence?.contentDetails?.raw),
                  optionsMainStyle
                )}
              </Styled.Column>
              <Styled.Column xs={12} md={6}>
                {documentToReactComponents(
                  JSON.parse(safetyReputation?.contentDetails?.raw),
                  optionsMainStyle
                )}
              </Styled.Column>
            </Row>
          </Col>

          <Col xs={12} lg={6}>
            <Styled.Header id="contact-us-today">
              {locationContactData?.header}
            </Styled.Header>
            {documentToReactComponents(
              JSON.parse(locationContactData?.contentDetails?.raw),
              optionsMainStyle
            )}
            <MarketoForm
              type={MARKETO_FORMS_CONSTANTS.CONTACT_US_TODAY_LOCATION}
            />
          </Col>
        </Row>
      </Styled.MainContainer>
      <Footer />
    </React.Fragment>
  ) : (
    <></>
  );
};

export default LocationDetailsPageTemplate;
