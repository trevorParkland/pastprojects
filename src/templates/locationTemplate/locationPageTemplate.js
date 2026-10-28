import * as React from 'react';
import { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import DefaultHeaderMenu from '../../components/defaultHeaderMenu/defaultHeaderMenu';
import BootstrapNavbar from '../../components/navigationBar/mainMenu/navigationBar';
import Footer from '../../components/footer/footer';
import TopBanner from '../../common/topBanner/topBanner';
import BreadcrumbsBlock from '../../common/breadcrumbsBlock/breadcrumbsBlock';
import constants, { menuItemsType } from '../../utils/utils';
import LocationDefault from '../../pageSections/locations/locationDefault';

const BreadcrumbsBlockData = {
  backgroundColor: '#049de1',
  borderTopColor: '#037ec4',
  title: 'Locations',
};

const LocationPageTemplate = ({ data, location }) => {
  const activeLink = menuItemsType.LOCATIONS;
  const [showMapLeftPanel, setShowMapLeftPanel] = useState(true);

  return (
    <>
      {/* <Helmet>
          <meta charSet="utf-8" />
          <title></title>
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
            {(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-P4JCPRM')}
          </script>
        </Helmet> */}
      <DefaultHeaderMenu />
      <BootstrapNavbar
        activePath={location.pathname}
        activePathImageTop="#037ec4"
        activeLink={activeLink}
      />
      <TopBanner path={location.pathname} />
      <BreadcrumbsBlock
        {...BreadcrumbsBlockData}
        path={location.pathname}
        isLocation={true}
        onClick={() => {
          setShowMapLeftPanel(!showMapLeftPanel);
        }}
      />
      <LocationDefault
        showMapLeftPanel={showMapLeftPanel}
        location={location}
      />
      <Footer />
    </>
  );
};

export default LocationPageTemplate;

export const pageQuery = graphql`
  query LocationPageMyQuery {
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
          headerWithText {
            headerText
            headerSubText: text {
              text
            }
          }
        }
      }
    }
  }
`;
