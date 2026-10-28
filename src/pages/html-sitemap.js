import * as React from 'react';
import { useEffect, useState } from 'react';
import { graphql, navigate } from 'gatsby';
import Footer from '../components/footer/footer';
import GlobalStyles from '../styles/globalStyles';
import {
  HtmlSitemapMainDiv,
  HtmlSiteMapHeader,
  HtmlSitemapTitle,
  HtmlSitemapLink,
} from '../styles';
import BootstrapNavbar from '../components/navigationBar/mainMenu/navigationBar';
import { addTrailingSlash } from '../utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import ActiveResidentialNav from '../images/head-nav-active-residential.png';
import ActiveCommercialNav from '../images/head-nav-active-commercial.png';

const HtmlSitemap = ({ data, location }) => {
  React.useLayoutEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const path = location?.pathname?.split('/')[1];
  const [showRequestCallBackProp, setShowRequestCallBackProp] =
    React.useState(false);
  const handleRequestCallBack = () => {
    setShowRequestCallBackProp(true);
  };
  const pageType = location?.pathname?.split('/').find((n) => n);
  const MenuBarColor = {
    residential: {
      background: '#b2bc73',
      border: '#737c47',
      defaultCardBorderColor: '#ECEEDC',
      activePathImage: ActiveResidentialNav,
    },
    commercial: {
      background: '#ce903c',
      border: '#a46b2c',
      defaultCardBorderColor: '#F0DFC8',
      activePathImage: ActiveCommercialNav,
    },
    locations: {
      background: '#049de1',
      border: '#037ec4',
      defaultCardBorderColor: '#CDE5F3',
    },
    about: {
      background: '#049de1',
      border: '#037ec4',
      defaultCardBorderColor: '#CDE5F3',
    },
    contact: {
      background: '#049de1',
      border: '#037ec4',
      defaultCardBorderColor: '#CDE5F3',
    },
  };

  const allSlugs = [
    ...data?.allContentfulBluewaveEnergy?.edges
      ?.filter((edge) => {
        if (
          edge?.node?.slug &&
          !edge?.node?.slug?.includes('modal') &&
          !edge?.node?.slug?.includes('404') &&
          !edge?.node?.slug?.includes('{city}')
        ) {
          return edge?.node?.slug;
        }
      })
      ?.map((edge) => {
        return {
          slug: addTrailingSlash(edge?.node?.slug),
          title: edge?.node?.title,
        };
      }),
    { slug: '/search/', title: 'Search Site' },
    ...data?.allContentfulLocation?.edges?.map((edge) => {
      return {
        slug: '/locations/' + addTrailingSlash(edge?.node?.urlSlug),
        title: edge?.node?.location ?? edge?.node?.city,
      };
    }),
  ].sort((a, b) => a?.slug?.localeCompare(b?.slug));

  const SlugList = allSlugs?.filter(function (x, i, a) {
    return a?.indexOf(x) === i;
  });

  return (
    <>
      <Helmet>
        <title>Site Map | Bluewave Energy</title>
      </Helmet>
      <GlobalStyles />
      <BootstrapNavbar
        showRequestCallBackProp={showRequestCallBackProp}
        setShowRequestCallBackProp={setShowRequestCallBackProp}
        activeLink={pageType}
        activePathImage={MenuBarColor[pageType]?.activePathImage}
        activePathImageTop={MenuBarColor[pageType]?.border}
      />
      <HtmlSitemapMainDiv>
        {SlugList.map((slug, index) => (
          <HtmlSiteMapHeader
            $leftSpace={slug?.slug?.split('/')?.length - 1}
            key={index}
          >
            <HtmlSitemapLink href={process.env.GATSBY_DOMAIN_URL + slug?.slug}>
              {slug?.title}
            </HtmlSitemapLink>
          </HtmlSiteMapHeader>
        ))}
      </HtmlSitemapMainDiv>

      <Footer />
    </>
  );
};

export default HtmlSitemap;
export const pageQuery = graphql`
  query SitemapQuery {
    allContentfulBluewaveEnergy(
      filter: { node_locale: { eq: "en-US" }, hasIndex: { ne: false } }
    ) {
      edges {
        node {
          slug
          title
          name
        }
      }
    }
    allContentfulLocation(
      filter: {
        brand: { brand: { eq: "Bluewave" }, node_locale: { eq: "en-US" } }
      }
    ) {
      edges {
        node {
          urlSlug
          city
          location
        }
      }
    }
  }
`;
