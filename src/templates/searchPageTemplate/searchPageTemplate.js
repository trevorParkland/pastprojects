import { graphql, Link, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { navigate } from 'gatsby';
import React, { useState, useRef, useEffect } from 'react';
import { Col, Row, Container, Navbar } from 'react-bootstrap';
import DefaultHeaderMenu from '../../components/defaultHeaderMenu/defaultHeaderMenu';
import BootstrapNavbar from '../../components/navigationBar/mainMenu/navigationBar';
import Footer from '../../components/footer/footer';
import TopBanner from '../../common/topBanner/topBanner';
import BreadcrumbsBlock from '../../common/breadcrumbsBlock/breadcrumbsBlock';
import constants, { menuItemsType } from '../../utils/utils';
import * as Styled from './searchPageTemplateStyle';
import SearchPage from './SearchPage';
import LocationsIcon from '../../images/icon-view-locations.gif';
import LogoOG from '../../images/logo-og.jpg';

const BreadcrumbsBlockData = {
  backgroundColor: '#049de1',
  borderTopColor: '#037ec4',
  title: 'Locations',
};

const SearchPageTemplate = ({ data, location }) => {
  const params = new URLSearchParams(location.search.slice(1));
  const q = params.get('q') || '';
  const inputEl = useRef(null);
  const [query, setQuery] = React.useState(q);
  const [showMapLeftPanel, setShowMapLeftPanel] = useState(true);
  const locationsCommon = data.locationsCommonSection.sections;
  const topBannerData = locationsCommon?.filter(
    (section) => section.type === constants.LOCATION_BLUEWAVE.LOCATION_TOP_BAR
  )[0];

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = () => {
    // `inputEl.current` points to the mounted search input element
    const q = inputEl.current.value;
    if (q) {
      navigate(`/search/?q=${q}`);
    }
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 13 || event.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    setQuery(params.get('q') || '');
  }, [location]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{'Search | Bluewave Energy'}</title>
        <meta name="twitter:image" content={LogoOG}></meta>
        <meta property="og:image" content={LogoOG}></meta>
      </Helmet>
      <DefaultHeaderMenu />
      <BootstrapNavbar
        activePath={'location.pathname'}
        activePathImageTop="#037ec4"
        activeLink={''}
      />
      <TopBanner
        topBannerData={{ ...topBannerData, headerWithText: null }}
        fontSize="28px"
        lineHeight="34px"
        paddingRight="100px"
        path={location.pathname}
      />
      <BreadcrumbsBlock
        {...BreadcrumbsBlockData}
        title={'Search'}
        path={location.pathname}
        isSearch={true}
        onClick={() => {
          setShowMapLeftPanel(!showMapLeftPanel);
        }}
      />

      <Styled.AboutContainer className="p-0">
        <Row className="g-0 ">
          <Styled.LeftContainer lg={4}></Styled.LeftContainer>
          <Styled.RightContainer xs={12} lg={8}>
            <Styled.searchTitle>Search</Styled.searchTitle>
            <Row className="g-0">
              <Col xs md={8} lg>
                <Styled.inputSearch
                  ref={inputEl}
                  name="query"
                  type="text"
                  value={query}
                  onChange={handleChange}
                  onKeyUp={handleKeyUp}
                />
                <Styled.inputSubmit
                  name="submit"
                  type="submit"
                  value="Search"
                  onClick={handleSubmit}
                />
              </Col>
              <Col xs={12} md={4} lg>
                <Styled.link
                  href={
                    process.env.GATSBY_DOMAIN_URL +
                    '/locations/?type=branch,both'
                  }
                >
                  Looking for a branch?
                  <Styled.BreakTag />
                  &nbsp;View our locations map
                  <Styled.locationImage src={LocationsIcon} />
                </Styled.link>
              </Col>
            </Row>
            <SearchPage data={data} location={location} />
          </Styled.RightContainer>
        </Row>
      </Styled.AboutContainer>
      <Footer />
    </>
  );
};

export default SearchPageTemplate;

export const pageQuery = graphql`
  query SearchPageMyQuery {
    locationsCommonSection: contentfulBluewaveEnergy(
      identifier: { type: { eq: "locationCommon" } }
    ) {
      name
      slug
      title
      metadata
      identifier {
        type
      }
      sections {
        ... on ContentfulImageContainer {
          id
          title
          type
          image {
            file {
              fileName
              url
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    LunrIndex
  }
`;
