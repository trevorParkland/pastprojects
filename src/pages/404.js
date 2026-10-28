import * as React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import constants from '../utils/utils';
import { Helmet } from 'react-helmet';
import LogoOG from '../images/logo-og.jpg';

const Header = styled.h1`
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  font-size: ${(props) => props.$fontSize ?? '45px'};
  line-height: ${(props) => props.$lineHeight ?? ' 50px'};
  letter-spacing: 0.02em;
  margin-bottom: 35px;
  @media (max-width: 767px) {
    font-size: ${(props) => props.$fontSize ?? '35px'};
    line-height: ${(props) => props.$lineHeight ?? ' 40px'};
  }
`;

const TopBar = styled.div`
  background: #11467b;
  padding-bottom: 20px;
`;

const TopTagLine = styled.p`
  padding: 11px 0 20px 18px;
  text-transform: uppercase;
  font-family: 'Figtree-Bold', arial, sans-serif;
  color: #1c9bd7;
  text-align: center;
  float: none;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 13px;
  line-height: 13px;
  @media (max-width: 450px) {
    font-size: 9px;
    line-height: 9px;
  }
`;

const LogoStyle = styled.img`
  margin: auto;
  display: flex;
  padding: 20px;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const NotFoundPage = ({ data, location }) => {
  const pageData = data.allContentfulBluewaveEnergy.edges[0].node.sections;

  const topBarData = pageData.filter((section) => {
    return section.type === constants.PAGES.PROPANE_YOU_TRUST.TOP_BAR;
  })[0];
  React.useEffect(() => {
    if (location?.href !== location?.href?.toLowerCase()) {
      window.location.href = location?.href?.toLowerCase();
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Page Not Found | Bluewave Energy</title>
        <meta name="twitter:image" content={LogoOG}></meta>
        <meta property="og:image" content={LogoOG}></meta>
        <meta name="robots" content="noindex" />
      </Helmet>
      <TopBar>
        <LogoStyle src={topBarData?.image?.file?.url}></LogoStyle>
        <TopTagLine>{topBarData?.title}</TopTagLine>
      </TopBar>
      <Container className="pt-3">
        <Header>Page Not Found</Header>

        <a href="/" style={{ textDecoration: 'none' }}>
          Back to Home.
        </a>
      </Container>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query imageCommon {
    allContentfulBluewaveEnergy(
      filter: {
        node_locale: { eq: "en-US" }
        identifier: { type: { eq: "propaneYouCanTrust" } }
      }
    ) {
      edges {
        node {
          identifier {
            type
          }
          title
          sections {
            __typename
            ... on ContentfulImageWithPath {
              id
              path
              title
              type
              image {
                title
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
