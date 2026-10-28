import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import * as Styled from '../../templates/locationTemplate/locationPageTemplateStyle';
import IconPinBranch from '../../images/icon-pin-branch.png';
import IconPinCardlock from '../../images/icon-pin-cardlock.png';
import IconPinBoth from '../../images/icon-pin-both.png';
import IconPinIdc from '../../images/icon-pin-ldc.png';
import IconListing from '../../images/icon-listing.gif';
import GoogleMapReact from 'google-map-react';
import { Row, Col, Navbar, Nav } from 'react-bootstrap';
import { LocationTypes } from '../../utils/utils';
import LocationWithNoCities from './locationWithNoCities';
import Hamburger from '../../images/icon-hamburger.png';
import { Helmet } from 'react-helmet';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';
import LogoOG from '../../images/logo-og.jpg';

const locationCountries = ['ALL', 'AB', 'BC', 'MB', 'NT', 'SK', 'EAST'];
let markersArray = [];
const LocationDefault = ({ data, location, showMapLeftPanel }) => {
  const [selectedProvince, setSelectedProvince] = useState(
    locationCountries[0]
  );
  const [showLocalBranchesMarkers, setShowLocalBranchesMarkers] =
    useState(true);
  const [map, setMap] = useState();
  const [maps, setMaps] = useState();

  const [showCardlockMarkers, setShowCardlockMarkers] = useState(true);
  const [showLubricantMarkers, setShowLubricantMarkers] = useState(true);
  const input = useRef(null);
  const inputTablet = useRef(null);

  let InfoWindowObject = null;

  const closeOtherInfo = () => {
    if (InfoWindowObject) {
      /* detach the info-window from the marker ... undocumented in the API docs */
      InfoWindowObject?.set('marker', null);
      /* and close it */
      InfoWindowObject?.close();
      /* blank the Object */
      InfoWindowObject = null;
    }
  };

  typeof window !== 'undefined' &&
    window.addEventListener('pageshow', (event) => {
      const historyTraversal =
        event?.persisted ||
        (typeof window?.performance != 'undefined' &&
          window?.performance?.navigation?.type === 2);

      if (historyTraversal) {
        window?.location?.reload();
      }
    });

  const locationDataQuery = useStaticQuery(graphql`
    query locationDataMyQueryDefault {
      allContentfulLocation(
        filter: {
          node_locale: { eq: "en-US" }
          brand: { brand: { eq: "Bluewave" } }
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
            spaceId
            useLatLongOnly
            urlSlug
          }
        }
      }
    }
  `);

  const [locationsData, setLocationsData] = useState(
    locationDataQuery?.allContentfulLocation?.edges
  );

  const [lat, setLat] = useState(
    parseFloat(locationsData[0]?.node?.latitude) || 0
  );
  const [lng, setLng] = useState(
    parseFloat(locationsData[0]?.node?.longitude) || 0
  );

  const [zoom, setZoom] = useState(4);

  const getMarkerIcon = (types) => {
    var markerIcon = null;
    if (types?.length == 1) {
      types?.forEach((locationType) => {
        if (locationType?.type == LocationTypes.Branch) {
          showLocalBranchesMarkers && markerIcon == null
            ? (markerIcon = IconPinBranch)
            : null;
        }
        if (locationType?.type == LocationTypes.Cardlock) {
          showCardlockMarkers && markerIcon == null
            ? (markerIcon = IconPinCardlock)
            : null;
        }
        if (locationType?.type == LocationTypes.LubricantDistributionCentre) {
          showLubricantMarkers ? (markerIcon = IconPinIdc) : null;
        }
      });
    } else {
      showLocalBranchesMarkers || showCardlockMarkers
        ? (markerIcon = IconPinBoth)
        : null;
    }
    return markerIcon;
  };

  const searchByCityNameOrPostalCode = (searchText) => {
    let searchResult = locationsData?.find(
      (item) =>
        item?.node?.city?.toLowerCase() === searchText ||
        item?.node?.postalCode?.toLowerCase() === searchText ||
        item?.node?.location?.toLowerCase() === searchText
    );
    if (searchResult) {
      setLat(parseFloat(searchResult?.node?.latitude));
      setLng(parseFloat(searchResult?.node?.longitude));
      setZoom(10);
    } else {
      var geocoder = new google.maps.Geocoder();
      geocoder?.geocode({ address: searchText }, function (results, status) {
        if (status === 'OK') {
          setLat(results[0]?.geometry?.location?.lat());
          setLng(results[0]?.geometry?.location?.lng());
          setZoom(10);
        }
      });
    }
  };

  useEffect(() => {
    if (location?.search) {
      setShowLocalBranchesMarkers(
        location?.search?.includes(LocationTypes.Branch.toLowerCase())
      );
      setShowCardlockMarkers(
        location?.search?.includes(LocationTypes.Cardlock.toLowerCase())
      );
      setShowLubricantMarkers(location?.search?.includes('ldc'));
    }
  }, []);

  useEffect(() => {
    let result = locationDataQuery?.allContentfulLocation?.edges;

    if (selectedProvince != locationCountries[0]) {
      result = result?.filter(
        (data) => data?.node?.province == selectedProvince
      );
    }

    if (!showLocalBranchesMarkers) {
      result = result?.filter(
        (data) =>
          data?.node?.type[0]?.type != LocationTypes.Branch ||
          data?.node?.type?.length > 1
      );
    }

    if (!showCardlockMarkers) {
      result = result?.filter(
        (data) =>
          data?.node?.type[0]?.type != LocationTypes.Cardlock ||
          data?.node?.type?.length > 1
      );
    }

    if (!showLubricantMarkers) {
      result = result?.filter(
        (data) =>
          data?.node?.type[0]?.type != LocationTypes.LubricantDistributionCentre
      );
    }

    if (!showLocalBranchesMarkers && !showCardlockMarkers) {
      result = result?.filter((data) => data?.node?.type?.length == 1);
    }

    setLocationsData(result);
    setLat(parseFloat(result[0]?.node?.latitude));
    setLng(parseFloat(result[0]?.node?.longitude));
  }, [
    selectedProvince,
    showLocalBranchesMarkers,
    showCardlockMarkers,
    showLubricantMarkers,
  ]);

  useEffect(() => {
    //delete all markers
    if (markersArray?.length >= 1) {
      markersArray?.forEach((marker) => {
        marker?.setMap(null);
      });
      markersArray = [];
    }
    if (maps && map && markersArray.length < 1) {
      locationsData?.map((location, index) => {
        if (location?.node?.address1) {
          const marker = new maps.Marker({
            position: new maps.LatLng(
              location?.node?.latitude ?? 0,
              location?.node?.longitude ?? 0
            ),
            icon: {
              url: getMarkerIcon(location?.node?.type), // url
              scaledSize: new google.maps.Size(53, 50), // size
            },
            map: map,
          });
          markersArray?.push(marker);
          const infoWindow = new maps.InfoWindow({
            content: `
                          <div class="infoWindow">
                              <h2>${location?.node?.location} </h2>
                              <div class="infoWindow-left">
                                ${location?.node?.address1}
                                <br />
                                ${location?.node?.city}, ${
              location?.node?.province
            }, ${location?.node?.postalCode}
                                <br />
                                <br />
                                <h3>Contact</h3>
                                <a
                                  class="popup-anchor"
                                  href='tel:${location?.node?.phone}'
                                  tabindex="0"
                                >${
                                  location?.node?.phone !== null
                                    ? location?.node?.phone
                                    : ''
                                }
                                  
                                </a>
                                <br/>
                                <a
                                  class="popup-anchor"
                                  href='tel:${location?.node?.tollfree}'
                                  tabindex="0"
                                >
                                  ${
                                    location?.node?.tollfree !== null
                                      ? location?.node?.tollfree
                                      : ''
                                  }
                                </a>
                                <br />
                                <a
                                  class="popup-anchor"
                                  href='mailto:${
                                    location?.node?.email
                                  }?subject=${
              location?.node?.location
            } Contact Request'
                                >
                                  ${location?.node?.email}
                                </a>
                              </div>
                              <div class="infoWindow-right">
                                <h3>Branch Manager</h3>
                                ${location?.node?.branchManager}
                                <br />
                                <br />
                                <h3>Branch Hours</h3>
                                ${location?.node?.branchHours}
                                <br />
                                <a
                                  class="popup-anchor"
                                  href=${
                                    isExternalUrlhref(location?.node?.urlSlug)
                                      ? location?.node?.urlSlug
                                      : addTrailingSlash(
                                          process.env.GATSBY_DOMAIN_URL +
                                            '/locations/' +
                                            location?.node?.urlSlug
                                        )
                                  }
                                  target=${
                                    isExternalUrl(location?.node?.urlSlug)
                                      ? '_blank'
                                      : '_self'
                                  }
                                >
                                  View Service Areas
                                </a>
                              </div>
                              <div class="clear"></div>
                          </div>`,
            ariaLabel: 'Marker',
          });
          //marker.setMap(null);
          marker?.addListener('click', () => {
            closeOtherInfo();
            infoWindow?.open({
              anchor: marker,
              map,
            });
            map.panTo(marker?.getPosition());
            InfoWindowObject = infoWindow;
          });
        }
      });
    }
  }, [locationsData, map, maps]);

  const SearchComponent = () => {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Locations | Bluewave Energy</title>
          {locationDataQuery?.allContentfulLocation?.edges[0]?.metadata && (
            <meta
              name="description"
              content={
                locationDataQuery?.allContentfulLocation?.edges[0]?.metadata
              }
            ></meta>
          )}
          <meta name="twitter:image" content={LogoOG}></meta>
          <meta property="og:image" content={LogoOG}></meta>
          <noscript>
            {`<iframe
                src="//www.googletagmanager.com/ns.html?id=GTM-P4JCPRM"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>`}
          </noscript>
          ,
          <script>
            {typeof window !== 'undefined' &&
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js',
                });
                var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-P4JCPRM')}
          </script>
        </Helmet>
        <Styled.MapSearch>
          <Styled.MapSearchSub>
            <Styled.MapSearchInput>
              <Styled.MapSearchInputField
                ref={inputTablet}
                type="text"
                placeholder="Search by City or Postal Code"
                onKeyUp={(event) => {
                  if (event.key === 'Enter') {
                    searchByCityNameOrPostalCode(event?.target?.value);
                  }
                }}
              />
            </Styled.MapSearchInput>
            <Styled.MapSearchSubmit>
              <Styled.MapSearchSubmitInput
                type="submit"
                value=""
                onClick={() => {
                  searchByCityNameOrPostalCode(inputTablet?.current?.value);
                }}
              />
            </Styled.MapSearchSubmit>
          </Styled.MapSearchSub>
        </Styled.MapSearch>
      </>
    );
  };

  return (
    <Styled.LocationContainer>
      <Row className="d-none d-md-flex d-lg-none">
        <Col style={{ position: 'relative', margin: 'auto' }} md={6}>
          <SearchComponent />
        </Col>
        <Col md={6}>
          <Navbar expand="lg">
            <Styled.NavbarToggle aria-controls="responsive-navbar-nav">
              <Styled.ResponsiveMenuSection className="g-0">
                <Styled.ResponsiveCol md={12}>
                  <Styled.ArrowImage src={Hamburger} alt="Hamburger icon" />
                  <Styled.HeaderText>FILTER LOCATIONS</Styled.HeaderText>
                </Styled.ResponsiveCol>
              </Styled.ResponsiveMenuSection>
            </Styled.NavbarToggle>
            <Styled.NavbarCollapse id="responsive-navbar-nav">
              <Nav.Link as="div" href="#" className="p-0">
                <Styled.TabContainer>
                  <Styled.MapH2>
                    What type of location are you looking for?
                  </Styled.MapH2>
                  <div>
                    <Styled.CheckboxPin>
                      <Styled.CheckBoxInput
                        type="checkbox"
                        id={LocationTypes.Branch}
                        value={LocationTypes.Branch}
                        onChange={() =>
                          setShowLocalBranchesMarkers(!showLocalBranchesMarkers)
                        }
                        checked={showLocalBranchesMarkers}
                      />
                      <span>
                        <Styled.DropPinIcon
                          src={IconPinBranch}
                          alt="Local Branch"
                        />
                        Local Branch
                      </span>
                    </Styled.CheckboxPin>
                    <Styled.CheckboxPin>
                      <Styled.CheckBoxInput
                        type="checkbox"
                        id={LocationTypes.Cardlock}
                        value={LocationTypes.Cardlock}
                        checked={showCardlockMarkers}
                        onChange={() =>
                          setShowCardlockMarkers(!showCardlockMarkers)
                        }
                      />
                      <span>
                        <Styled.DropPinIcon
                          src={IconPinCardlock}
                          alt="Local Branch"
                        />
                        Cardlock
                      </span>
                    </Styled.CheckboxPin>
                  </div>
                  <Styled.CheckboxPin style={{ marginLeft: '45px' }}>
                    <span>
                      <Styled.DropPinIcon
                        src={IconPinBoth}
                        alt="Local Branch"
                      />
                      Both
                    </span>
                  </Styled.CheckboxPin>
                  <Styled.LeftPanelHor />
                  <Styled.CheckboxPin>
                    <Styled.CheckBoxInput
                      type="checkbox"
                      id={LocationTypes.LubricantDistributionCentre}
                      value={LocationTypes.LubricantDistributionCentre}
                      checked={showLubricantMarkers}
                      onChange={() =>
                        setShowLubricantMarkers(!showLubricantMarkers)
                      }
                    />
                    <span>
                      <Styled.DropPinIcon
                        src={IconPinIdc}
                        alt=" Lubricant Distribution Centre"
                      />
                      Lubricant Distribution Centre
                    </span>
                  </Styled.CheckboxPin>

                  <Styled.ListingContainer>
                    <Styled.ListingTitle href="#tabs" className="scroll">
                      <Styled.ListingImage src={IconListing} />
                      View Location Listing
                    </Styled.ListingTitle>
                  </Styled.ListingContainer>
                </Styled.TabContainer>
              </Nav.Link>
            </Styled.NavbarCollapse>
          </Navbar>
        </Col>
      </Row>
      <Row className="g-0 d-none d-md-block">
        <Styled.LocationDataCol>
          <Styled.GoogleMapContainer>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.GATSBY_GOOGLE_MAP_APIKEY,
                libraries: ['places', 'geometry'],
              }}
              center={{ lat, lng }}
              zoom={zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => {
                setMap(map);
                setMaps(maps);
              }}
              options={{ streetViewControl: true }}
            />

            <Styled.MapLeftBarContainer>
              {showMapLeftPanel && (
                <Styled.MapLeftBar>
                  <Styled.MapH2>
                    What type of location are you looking for?
                  </Styled.MapH2>
                  <div>
                    <Styled.CheckboxPin>
                      <Styled.CheckBoxInput
                        type="checkbox"
                        id={LocationTypes.Branch}
                        value={LocationTypes.Branch}
                        onChange={() =>
                          setShowLocalBranchesMarkers(!showLocalBranchesMarkers)
                        }
                        checked={showLocalBranchesMarkers}
                      />
                      <span>
                        <Styled.DropPinIcon
                          src={IconPinBranch}
                          alt="Local Branch"
                        />
                        Local Branch
                      </span>
                    </Styled.CheckboxPin>
                    <Styled.CheckboxPin>
                      <Styled.CheckBoxInput
                        type="checkbox"
                        id={LocationTypes.Cardlock}
                        value={LocationTypes.Cardlock}
                        checked={showCardlockMarkers}
                        onChange={() =>
                          setShowCardlockMarkers(!showCardlockMarkers)
                        }
                      />
                      <span>
                        <Styled.DropPinIcon
                          src={IconPinCardlock}
                          alt="Local Branch"
                        />
                        Cardlock
                      </span>
                    </Styled.CheckboxPin>
                  </div>
                  <Styled.CheckboxPin style={{ marginLeft: '45px' }}>
                    <span>
                      <Styled.DropPinIcon
                        src={IconPinBoth}
                        alt="Local Branch"
                      />
                      Both
                    </span>
                  </Styled.CheckboxPin>
                  <Styled.LeftPanelHor />
                  <Styled.CheckboxPin>
                    <Styled.CheckBoxInput
                      type="checkbox"
                      id={LocationTypes.LubricantDistributionCentre}
                      value={LocationTypes.LubricantDistributionCentre}
                      checked={showLubricantMarkers}
                      onChange={() =>
                        setShowLubricantMarkers(!showLubricantMarkers)
                      }
                    />
                    <span>
                      <Styled.DropPinIcon
                        src={IconPinIdc}
                        alt=" Lubricant Distribution Centre"
                      />
                      Lubricant Distribution Centre
                    </span>
                  </Styled.CheckboxPin>
                  <Styled.ListingContainer>
                    <Styled.ListingTitle href="#tabs" className="scroll">
                      <Styled.ListingImage src={IconListing} />
                      View Location Listing
                    </Styled.ListingTitle>
                  </Styled.ListingContainer>
                </Styled.MapLeftBar>
              )}
              <Styled.MapSearch>
                <div>
                  <Styled.MapSearchInput>
                    <Styled.MapSearchInputField
                      ref={input}
                      type="text"
                      placeholder="Search by City or Postal Code"
                      onKeyUp={(event) => {
                        if (event?.key === 'Enter') {
                          searchByCityNameOrPostalCode(event?.target?.value);
                        }
                      }}
                    />
                  </Styled.MapSearchInput>
                  <Styled.MapSearchSubmit>
                    <Styled.MapSearchSubmitInput
                      type="submit"
                      value=""
                      onClick={() => {
                        searchByCityNameOrPostalCode(input?.current?.value);
                      }}
                    />
                  </Styled.MapSearchSubmit>
                </div>
              </Styled.MapSearch>
            </Styled.MapLeftBarContainer>
          </Styled.GoogleMapContainer>
        </Styled.LocationDataCol>
      </Row>
      <Row className="g-0" id="tabs">
        <Col xs={12} sm={12} md={12} lg style={{ marginTop: '45px' }}>
          <Styled.CountriesListContainer>
            {locationCountries?.map((item, index) => {
              return (
                <Styled.CountriesListItem
                  key={index}
                  onClick={() => setSelectedProvince(item)}
                  $selectedProvince={selectedProvince}
                  $currentProvince={item}
                >
                  {item}
                </Styled.CountriesListItem>
              );
            })}
          </Styled.CountriesListContainer>
        </Col>
      </Row>
      <Row style={{ paddingTop: '20px' }} className="g-0 ">
        {selectedProvince == 'EAST' ? (
          <LocationWithNoCities />
        ) : (
          <Styled.TableSubContainer xs={12} sm={12} md={12} lg>
            <Styled.LocationTable striped borderless>
              <Styled.THead>
                <tr>
                  <th style={{ width: '25%' }}>ADDRESS</th>
                  <th style={{ width: '15%' }}>PHONE</th>
                  <th style={{ width: '15%' }}>EMAIL</th>
                  <th style={{ width: '10%' }}>TYPE</th>
                  <th style={{ width: '15%' }}>MANAGER</th>
                  <th style={{ width: '20%' }}>HOURS</th>
                </tr>
              </Styled.THead>
              <Styled.TBody>
                {locationsData
                  ?.sort((a, b) =>
                    a?.node?.location?.localeCompare(b?.node?.location)
                  )
                  .map((item, index) => {
                    return (
                      <tr key={index}>
                        <Styled.Td>
                          <div className="d-flex flex-column ">
                            <Styled.LinkStyle
                              href={
                                isExternalUrlhref(item?.node?.urlSlug)
                                  ? item?.node?.urlSlug
                                  : addTrailingSlash(
                                      process.env.GATSBY_DOMAIN_URL +
                                        '/locations/' +
                                        item?.node?.urlSlug
                                    )
                              }
                              target={
                                isExternalUrl(
                                  '/locations/' + item?.node?.urlSlug
                                )
                                  ? '_blank'
                                  : '_self'
                              }
                            >
                              <Styled.CityText>
                                {item?.node?.location}
                              </Styled.CityText>
                              <Styled.AddressText>
                                <div> {item?.node?.address1}</div>
                                <div> {item?.node?.address2}</div>
                                <div>
                                  {item?.node?.city}, {item?.node?.province}
                                  &nbsp;&nbsp;
                                  {item?.node?.postalCode}
                                </div>
                              </Styled.AddressText>
                            </Styled.LinkStyle>
                            {!item?.node?.pipelineCardAccepted && (
                              <Styled.ItalicText>
                                Pipeline card not accepted at this site
                              </Styled.ItalicText>
                            )}
                          </div>
                        </Styled.Td>
                        <Styled.Td>
                          <Styled.LinkStyle2
                            className="popup-anchor"
                            href={`tel:${item?.node?.phone}`}
                            tabindex="0"
                          >
                            {item?.node?.phone && item?.node?.phone}
                          </Styled.LinkStyle2>
                          {item?.node?.tollfree && (
                            <Styled.LinkStyle2
                              className="popup-anchor"
                              href={`tel:${item?.node?.tollfree}`}
                              tabindex="0"
                            >
                              <Styled.AddressParaText>
                                Toll free:
                              </Styled.AddressParaText>
                              {item?.node?.tollfree}
                            </Styled.LinkStyle2>
                          )}
                        </Styled.Td>
                        <Styled.Td>
                          <Styled.LinkStyle2
                            className="popup-anchor"
                            href={`mailto:${item?.node?.email}?subject=${item?.node?.location} Contact Request`}
                          >
                            {item?.node?.email}
                          </Styled.LinkStyle2>
                        </Styled.Td>
                        <Styled.Td>
                          {item?.node?.type?.map((locationType, index) => {
                            return (
                              <div style={{ display: 'block' }} key={index}>
                                {locationType?.type}
                                {index !== item?.node?.type?.length - 1
                                  ? ','
                                  : ''}
                              </div>
                            );
                          })}
                        </Styled.Td>
                        <Styled.Td>{item?.node?.branchManager}</Styled.Td>
                        <Styled.Td>
                          <div>
                            {(item?.node?.type?.length > 1 ||
                              (item?.node?.type?.length === 1 &&
                                item?.node?.type[0]?.type !==
                                  LocationTypes.Cardlock)) &&
                              item?.node?.branchHours}
                          </div>
                          <div>
                            {item.node?.cardlockHours &&
                              'Cardlock: ' + item?.node?.cardlockHours}
                          </div>
                        </Styled.Td>
                      </tr>
                    );
                  })}
              </Styled.TBody>
            </Styled.LocationTable>
          </Styled.TableSubContainer>
        )}
      </Row>
    </Styled.LocationContainer>
  );
};

export default LocationDefault;
