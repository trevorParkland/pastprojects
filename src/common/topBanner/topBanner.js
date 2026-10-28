import * as React from 'react';
import * as Styled from './topBannerStyles';
import { Row } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const TopBanner = ({ path }) => {
  const result = path?.split('/')?.filter((n) => n);
  const commonBanner = useStaticQuery(graphql`
    query commonBannerQuery {
      allContentfulBluewaveEnergy(
        filter: { identifier: { type: { eq: "bluewaveCommonBanner" } } }
      ) {
        edges {
          node {
            id
            name
            title
            sections {
              ... on ContentfulListOfImageWithPath {
                id
                type
                title
                listOfImagesWithPath {
                  image {
                    file {
                      fileName
                      url
                    }
                  }
                  title
                  type
                  richText {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const pageType = result[0];
  const commonBannerSections =
    commonBanner.allContentfulBluewaveEnergy.edges[0].node.sections;

  const commonBannerData = commonBannerSections?.filter(
    (section) => section.type === result[0]
  )[0];
  const commonBannerDataDesktop = commonBannerData?.listOfImagesWithPath.filter(
    (section) => section.type === 'bannerImage'
  )[0];

  const commonBannerDataTablet = commonBannerData?.listOfImagesWithPath?.filter(
    (section) => section.type === 'bannerImageTablet'
  )[0];
  const Styles = {
    residential: {
      fontSize: '20px',
      lineHeight: '26px',
      paddingRight: '0',
    },
    commercial: {
      fontSize: '28px',
      lineHeight: '34px',
      paddingRight: '100px',
    },
    locations: {
      fontSize: '28px',
      lineHeight: '34px',
      paddingRight: '100px',
    },
    about: {
      fontSize: '20px',
      lineHeight: '26px',
      paddingRight: '100px',
    },
    contact: {
      fontSize: '28px',
      lineHeight: '34px',
      paddingRight: '145px',
    },
  };
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.HeaderH3]: (node, children) => (
        <Styled.HeaderText>{children}</Styled.HeaderText>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText
          $fontSize={Styles[pageType].fontSize}
          $lineHeight={Styles[pageType].lineHeight}
          $paddingRight={Styles[pageType].paddingRight}
        >
          {children}
        </Styled.ParaText>
      ),
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <>
      <Styled.BannerContainer
        $backgroundImageUrl={commonBannerDataDesktop?.image?.file?.url}
        $backgroundImageTabletUrl={
          commonBannerDataTablet?.image?.file?.url ??
          commonBannerDataDesktop?.image?.file?.url
        }
        className="d-none d-md-block"
      >
        <Styled.BannerInnerContainer className="px-0">
          <Styled.SubInnerContainer>
            <Styled.BannerRow>
              <Styled.BannerCol xs={12} className="px-0">
                <Row className="g-0">
                  {commonBannerDataDesktop?.richText?.raw &&
                    documentToReactComponents(
                      JSON.parse(commonBannerDataDesktop?.richText?.raw),
                      optionsMainStyle
                    )}
                </Row>
              </Styled.BannerCol>
            </Styled.BannerRow>
          </Styled.SubInnerContainer>
        </Styled.BannerInnerContainer>
      </Styled.BannerContainer>
    </>
  );
};

export default TopBanner;
