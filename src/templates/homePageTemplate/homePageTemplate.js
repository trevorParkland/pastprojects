import * as React from 'react';
import { HomePageContainer } from './homePageTemplateStyle';
import Notification from '../../components/notification/notification';
import PromoBanner from '../../components/promoBanner/promoBanner';
import DefaultHeaderMenu from '../../components/defaultHeaderMenu/defaultHeaderMenu';
import TellYourFriends from '../../components/tellYourFriend/tellYourFriends';
import BootstrapNavbar from '../../components/navigationBar/mainMenu/navigationBar';
import Footer from '../../components/footer/footer';
import MigrationPanel from '../../components/migrationDetail/migrationPanel';
import BluewavePledge from '../../components/bluewavePledgePane/bluewavePledge';
import DeliveringMore from '../../components/deliverMore/deliveringMore';
// import LocationMapPanel from '../../components/locationMap/locationMapPanel';
import CustomerService from '../../components/customerService/customerService';
import HealthAndSafety from '../../components/healthAndSafety/healthAndSafety';
import AccountTemplate from '../../components/navigationBar/accountTemplate/accountTemplate';
import { Row, Col, Container } from 'react-bootstrap';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, useStaticQuery } from 'gatsby';
import constants, { domainName } from '../../utils/utils';
import * as Styled from './homePageTemplateStyle';
import { Helmet } from 'react-helmet';
const templateAccount = [
  {
    accountTypeColor: '#737c47',
    anchorBGColor: '#858e53',
    anchorHoverColor: '#717947',
    isLeft: true,
  },
  {
    accountTypeColor: '#af7b33',
    anchorBGColor: '#ce903c',
    anchorHoverColor: '#af7b33',
  },
];
const HomePage = () => {
  const pageData = useStaticQuery(graphql`
    query mainPageQuery {
      allContentfulBluewaveEnergy(
        filter: {
          node_locale: { eq: "en-US" }
          identifier: { type: { eq: "homePage" } }
        }
      ) {
        edges {
          node {
            name
            slug
            metadata
            sections {
              ... on ContentfulMultimediaText {
                id
                title
                contentful_id
                text {
                  raw
                }
                type
              }
              ... on ContentfulHomeContainers {
                type
                title
                homecontainers {
                  textWithLink1 {
                    ... on ContentfulTextWithPath {
                      id
                      text
                      type
                      path
                    }
                  }
                  textWithLink2 {
                    ... on ContentfulTextWithPath {
                      id
                      text
                      type
                      path
                    }
                    ... on ContentfulTextWithPath {
                      id
                      path
                      type
                      text
                    }
                  }
                  textWithLink3 {
                    ... on ContentfulTextWithPath {
                      id
                      text
                      type
                      path
                    }
                  }
                  title
                  type
                  backgroundImages {
                    file {
                      url
                      fileName
                    }
                    title
                  }
                }
              }
              ... on ContentfulImageWithPath {
                id
                path
                image {
                  file {
                    url
                  }
                }
                title
                type
              }
              ... on ContentfulTextImageText {
                id
                type
                title
                textWithLink {
                  path
                  text
                  type
                }
                headerWithText1 {
                  headerText
                  id
                  text {
                    text
                  }
                }
                headerWithText2 {
                  type
                  id
                  text {
                    text
                  }
                  headerText
                }
                image {
                  file {
                    url
                    fileName
                  }
                }
              }
              ... on ContentfulTextsWithMultipleImages {
                id
                type
                title
                textWithLinks {
                  text
                  type
                  path
                }
                headerWithText {
                  headerText
                  text {
                    text
                  }
                }
                images {
                  file {
                    fileName
                    url
                  }
                }
              }
              ... on ContentfulCards {
                id
                title
                type
                carddetails {
                  headerText
                  title
                  type
                  path
                  image {
                    file {
                      fileName
                      url
                    }
                  }
                  description {
                    description
                  }
                }
              }
              ... on ContentfulImageContainer {
                id
                type
                title
                headerWithText {
                  type
                  title
                  headerText
                  text {
                    text
                  }
                }
                textWithPaths {
                  ... on ContentfulTextWithPath {
                    id
                    path
                    type
                    text
                  }
                }
                image {
                  file {
                    fileName
                    url
                  }
                  title
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
                    path
                    images {
                      file {
                        fileName
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      allContentfulDomains {
        edges {
          node {
            name
            domain
          }
        }
      }
      allContentfulNotificationMessage(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            node_locale
            name
            message {
              raw
            }
          }
        }
      }
    }
  `);
  const sections = pageData.allContentfulBluewaveEnergy.edges[0].node.sections;
  const domainList = pageData.allContentfulDomains.edges[0]?.node?.domain || [];
  const [isNotification, setIsNotification] = React.useState(
    domainList.includes(domainName)
  );

  const notificationData =
    pageData.allContentfulNotificationMessage.edges[0].node;

  const accountTemplateData = sections?.filter(
    (section) => section.type === constants.HOME.HOME_CONTAINERS
  )[0];

  return (
    <>
      <Helmet>
        {pageData.allContentfulBluewaveEnergy.edges[0]?.metadata && (
          <meta
            name="description"
            content={pageData.allContentfulBluewaveEnergy.edges[0]?.metadata}
          ></meta>
        )}
      </Helmet>
      <HomePageContainer>
        {isNotification ? (
          <Notification
            alertMessage={
              notificationData &&
              documentToReactComponents(
                JSON.parse(notificationData?.message?.raw)
              )
            }
          />
        ) : null}
        <DefaultHeaderMenu />
        <BootstrapNavbar />
        <Styled.ImageContainer className="p-0">
          <Row className="g-0">
            <Col xs={12} md>
              <AccountTemplate
                {...accountTemplateData?.homecontainers.filter(
                  (section) =>
                    section.type === constants.HOME.HOME_RESIDENTIAL_SECTION
                )[0]}
                {...templateAccount[0]}
              />
            </Col>
            <Col xs={12} md>
              <AccountTemplate
                {...accountTemplateData?.homecontainers.filter(
                  (section) =>
                    section.type === constants.HOME.HOME_COMMERCIAL_SECTION
                )[0]}
                {...templateAccount[1]}
              />
            </Col>
          </Row>
        </Styled.ImageContainer>
        <PromoBanner
          section={
            sections?.filter(
              (section) => section.type === constants.HOME.HOME_CARBON_OFFSET
            )[0]
          }
        />
        <MigrationPanel
          section={
            sections?.filter(
              (section) =>
                section.type === constants.HOME.HOME_RESIDENTIAL_CUSTOMERS
            )[0]
          }
        />
        <PromoBanner
          section={
            sections?.filter(
              (section) => section.type === constants.HOME.HOME_PROMO
            )[0]
          }
        />
        <Container fluid className="p-0">
          <DeliveringMore
            homeCards={
              sections?.filter(
                (section) => section.type === constants.HOME.HOME_CARDS
              )[0]
            }
            homeDeliveryProducts={
              sections?.filter(
                (section) =>
                  section.type === constants.HOME.HOME_DELIVERY_PRODUCTS
              )[0]
            }
          />
        </Container>
        {/* <LocationMapPanel
          section={
            sections?.filter(
              (section) => section.type === constants.HOME.HOME_MAP_CONTAINER
            )[0]
          }
        /> */}
        <CustomerService
          section={
            sections?.filter(
              (section) => section.type === constants.HOME.HOME_CUSTOMER_CARE
            )[0]
          }
        />
        <HealthAndSafety
          section={
            sections?.filter(
              (section) => section.type === constants.HOME.HOME_HSC_SECTION
            )[0]
          }
        />
        <BluewavePledge
          section={
            sections?.filter(
              (section) => section.type === constants.HOME.HOME_PLEDGE_PROGRAM
            )[0]
          }
        />
        <Footer />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
