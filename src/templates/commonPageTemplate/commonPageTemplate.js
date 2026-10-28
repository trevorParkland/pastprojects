import * as React from 'react';
import loadable from '@loadable/component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { sectionList } from '../../constants/queryFragments';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import DefaultHeaderMenu from '../../components/defaultHeaderMenu/defaultHeaderMenu';
import BootstrapNavbar from '../../components/navigationBar/mainMenu/navigationBar';
import ActiveResidentialNav from '../../images/head-nav-active-residential.png';
import ActiveCommercialNav from '../../images/head-nav-active-commercial.png';
import BreadcrumbsBlock from '../../common/breadcrumbsBlock/breadcrumbsBlock';
import PageLeftMenu from '../../common/pageLeftMenu/pageLeftMenu';
import BlockLeftPanel from '../../common/blockLeftPanel/blockLeftPanel';
import TopBanner from '../../common/topBanner/topBanner';
import Footer from '../../components/footer/footer';
import * as Styled from './commonPageTemplateStyles';
import TabletRightMenu from '../../common/tabletRightMenu/tabletRightMenu';
import LogoOG from '../../images/logo-og.jpg';

const CommonPageTemplate = ({ data, location }) => {
  const [showRequestCallBackProp, setShowRequestCallBackProp] =
    React.useState(false);
  const handleRequestCallBack = () => {
    setShowRequestCallBackProp(true);
  };

  React.useLayoutEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  React.useEffect(() => {
    if (!location?.hash && typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  const pageType = location?.pathname?.split('/').find((n) => n);
  const path = location?.pathname?.split('/').find((i) => i !== pageType);

  const hamburgerHeader = {
    residential: 'menu - residential',
    commercial: 'menu - commercial',
    about: 'menu - about bluewave',
    contact: 'menu-contact',
  };

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

  const sectionsArray =
    data?.allContentfulBluewaveEnergy?.edges[0]?.node?.sections;

  return (
    <>
      <Helmet>
        <title>
          {data?.allContentfulBluewaveEnergy?.edges[0]?.node?.title
            ? data?.allContentfulBluewaveEnergy?.edges[0]?.node?.title +
              ' | Bluewave Energy'
            : 'Heating Oil & Propane Supplier for Home & Commercial | Bluewave Energy'}
        </title>
        {data?.allContentfulBluewaveEnergy?.edges[0]?.node?.metadata && (
          <meta
            name="description"
            content={
              data?.allContentfulBluewaveEnergy?.edges[0]?.node?.metadata
            }
          ></meta>
        )}
        {data?.allContentfulBluewaveEnergy?.edges[0]?.node?.hasIndex ===
          false && <meta name="robots" content="noindex" />}

        <meta name="twitter:image" content={LogoOG}></meta>
        <meta property="og:image" content={LogoOG}></meta>
      </Helmet>
      <DefaultHeaderMenu
        showRequestCallBackProp={showRequestCallBackProp}
        setShowRequestCallBackProp={setShowRequestCallBackProp}
      />
      <BootstrapNavbar
        showRequestCallBackProp={showRequestCallBackProp}
        setShowRequestCallBackProp={setShowRequestCallBackProp}
        activeLink={pageType}
        activePathImage={MenuBarColor[pageType]?.activePathImage}
        activePathImageTop={MenuBarColor[pageType]?.border}
      />
      <TopBanner path={location.pathname} />
      <BreadcrumbsBlock
        path={location.pathname}
        backgroundColor={MenuBarColor[pageType]?.background}
        borderTopColor={MenuBarColor[pageType]?.border}
      />
      <Styled.CommonPageContainer>
        <Styled.InnerContainer>
          <Styled.BodyLeft>
            <PageLeftMenu path={location.pathname} />
            <BlockLeftPanel
              path={location.pathname}
              backgroundColor={MenuBarColor[pageType]?.background}
              hoverBlockArea={MenuBarColor[pageType]?.background}
              defaultBorder={MenuBarColor[pageType]?.defaultCardBorderColor}
            />
          </Styled.BodyLeft>
          <Styled.BodyRight>
            <TabletRightMenu
              MenuBarColor={MenuBarColor}
              pageType={pageType}
              location={location}
              hamburgerHeader={hamburgerHeader}
            />

            <>
              {sectionsArray &&
                sectionsArray?.map((section, index) => {
                  if (section?.type && sectionList?.includes(section?.type)) {
                    const SectionComponent = loadable(() =>
                      import(
                        `../../dynamicComponents/${section?.type}/${section?.type}`
                      )
                    );
                    return (
                      <SectionComponent
                        key={index}
                        sectionData={section}
                        handleRequestCallBack={handleRequestCallBack}
                        location={location}
                      />
                    );
                  }
                })}
            </>
            <Styled.CardStyle>
              <BlockLeftPanel
                path={location.pathname}
                backgroundColor={MenuBarColor[pageType]?.background}
                hoverBlockArea={MenuBarColor[pageType]?.background}
                defaultBorder={MenuBarColor[pageType]?.defaultCardBorderColor}
              />
            </Styled.CardStyle>
          </Styled.BodyRight>
        </Styled.InnerContainer>
      </Styled.CommonPageContainer>

      <Footer />
    </>
  );
};

export default CommonPageTemplate;

export const pageQuery = graphql`
  query allCommonPagesQuery(
    $pageIdentifier: String!
    $contentfulContent: Boolean!
    $contentfulContentList: Boolean!
    # $contentfulMultimediaText: Boolean!
    $contentfulListImagesWithPath: Boolean!
    $contentfulImageWithPath: Boolean!
    $contentfulFaqs: Boolean!
    $contentfulTextWithImage: Boolean!
  ) {
    allContentfulBluewaveEnergy(
      filter: { identifier: { type: { eq: $pageIdentifier } } }
    ) {
      edges {
        node {
          name
          metadata
          identifier {
            type
          }
          slug
          hasIndex
          title
          metadata
          node_locale
          sections {
            ...PageContent @include(if: $contentfulContent)
            ...ContentList @include(if: $contentfulContentList)
            ...FAQContent @include(if: $contentfulFaqs)
            # ...MultimediaText @include(if: $contentfulMultimediaText)
            ...ImagesWithPathList @include(if: $contentfulListImagesWithPath)
            ...ImageWithPath @include(if: $contentfulImageWithPath)
            ...TextWithImage @include(if: $contentfulTextWithImage)
          }
        }
      }
    }
  }
`;
