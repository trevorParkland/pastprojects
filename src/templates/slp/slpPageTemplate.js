import { graphql } from 'gatsby';
import * as React from 'react';
import loadable from '@loadable/component';
import { sectionList, FormTypes } from '../../constants/queryFragments';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Styled from './slpPageTemplateStyle';
import LogoOG from '../../images/logo-og.jpg';

const StandalonePageTemplate = ({ data }) => {
  const [loaded, setLoaded] = React.useState(false);

  React.useLayoutEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  const sectionIdentifier =
    data?.allContentfulBluewaveEnergy?.edges[0]?.node?.identifier?.type;
  const sectionsArray =
    data?.allContentfulBluewaveEnergy?.edges[0]?.node?.sections;

  return !loaded ? (
    <>
      <Helmet>
        <noscript>
          {`<iframe
                src="//www.googletagmanager.com/ns.html?id=GTM-P4JCPRM"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>`}
        </noscript>
        <title>
          {data?.allContentfulBluewaveEnergy?.edges[0]?.node?.title ??
            'Energy Solutions for Residential and Businesses | Bluewave Energy'}
        </title>
        {data?.allContentfulBluewaveEnergy?.edges[0]?.node?.metadata && (
          <meta
            name="description"
            content={
              data?.allContentfulBluewaveEnergy?.edges[0]?.node?.metadata
            }
          ></meta>
        )}
        <meta name="twitter:image" content={LogoOG}></meta>
        <meta property="og:image" content={LogoOG}></meta>
        {data?.allContentfulBluewaveEnergy?.edges[0]?.node?.hasIndex ===
          false && <meta name="robots" content="noindex" />}
      </Helmet>
      <>
        {sectionsArray &&
          sectionsArray.map((section, index) => {
            if (
              section?.type &&
              sectionList.includes(section?.type) &&
              !FormTypes?.includes(section?.type)
            ) {
              const SectionComponent = loadable(() =>
                import(
                  `../../dynamicComponents/${section.type}/${section.type}`
                )
              );
              return <SectionComponent key={index} sectionData={section} />;
            }
            return <></>;
          })}
      </>
    </>
  ) : (
    <>
      <Helmet>
        <noscript>
          {`<iframe
                src="//www.googletagmanager.com/ns.html?id=GTM-P4JCPRM"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>`}
        </noscript>
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
        <title>
          {data?.allContentfulBluewaveEnergy?.edges[0]?.node?.title ??
            'Energy Solutions for Residential and Businesses | Bluewave Energy'}
        </title>
        {data?.allContentfulBluewaveEnergy?.edges[0]?.node?.metadata && (
          <meta
            name="description"
            content={
              data?.allContentfulBluewaveEnergy?.edges[0]?.node?.metadata
            }
          ></meta>
        )}
        <meta name="twitter:image" content={LogoOG}></meta>
        <meta property="og:image" content={LogoOG}></meta>
        {data?.allContentfulBluewaveEnergy?.edges[0]?.node?.hasIndex ===
          false && <meta name="robots" content="noindex" />}
      </Helmet>
      <Styled.MainDiv
        $bgImage={
          sectionIdentifier === 'lordco'
            ? sectionsArray[0].image?.file?.url
            : ''
        }
      >
        {sectionsArray &&
          sectionsArray.map((section, index) => {
            if (section?.type && sectionList.includes(section?.type)) {
              const SectionComponent = loadable(() =>
                import(
                  `../../dynamicComponents/${section.type}/${section.type}`
                )
              );
              return <SectionComponent key={index} sectionData={section} />;
            }
            return <></>;
          })}
      </Styled.MainDiv>
    </>
  );
};

export default StandalonePageTemplate;

export const pageQuery = graphql`
  query allStandalonePagesQuery(
    $pageIdentifier: String!
    $contentfulContent: Boolean!
    $contentfulContentList: Boolean!
    $contentfulImageWithPath: Boolean!
    $contentfulImageContainer: Boolean! # $contentfulMultimediaText: Boolean!
    $contentfulListImagesWithPath: Boolean!
    $contentfulTextWithImage: Boolean!
  ) {
    allContentfulBluewaveEnergy(
      filter: { identifier: { type: { eq: $pageIdentifier } } }
    ) {
      edges {
        node {
          name
          identifier {
            type
          }
          slug
          title
          metadata
          hasIndex
          node_locale
          sections {
            __typename
            ...ImageWithPath @include(if: $contentfulImageWithPath)
            ...ImageContainer @include(if: $contentfulImageContainer)
            ...PageContent @include(if: $contentfulContent)
            ...ContentList @include(if: $contentfulContentList)
            ...ContentfulListImages @include(if: $contentfulListImagesWithPath)
            ...TextWithImage @include(if: $contentfulTextWithImage)
          }
        }
      }
    }
  }
`;
