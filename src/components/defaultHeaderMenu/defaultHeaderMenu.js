import * as React from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import SearchSite from '../searchSite/searchSite';
import RequestCallback from '../requestCallBack/requestCallback';
import useDefaultMenus from '../../hooks/useDefaultMenus';
import { ImPhoneHangUp } from '@react-icons/all-files/im/ImPhoneHangUp';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import { VscChromeClose } from '@react-icons/all-files/vsc/VscChromeClose';
import * as Styled from './defaultHeaderMenuStyle';
import constants from '../../utils/utils';
import iconAccount from '../../images/icon-account.png';
import ClientSpace from '../clientSpace/clientSpace';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const DefaultHeaderMenu = ({
  showRequestCallBackProp,
  setShowRequestCallBackProp,
}) => {
  const menu = useDefaultMenus();

  const clientSpaceQuery = useStaticQuery(graphql`
    query clientSpaceLink {
      allContentfulBluewaveEnergy(
        filter: {
          node_locale: { eq: "en-US" }
          identifier: { type: { eq: "clientSpace" } }
        }
      ) {
        edges {
          node {
            identifier {
              type
            }
            title
            slug
            sections {
              ... on ContentfulContentList {
                id
                title
                type
                list {
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
    }
  `);

  const clientSpaceTextWithPathRaw =
    clientSpaceQuery?.allContentfulBluewaveEnergy?.edges[0]?.node?.sections
      .find(
        (item) => item.type === constants.DEFAULT_MENU.CLIENT_SPACE.CONTENT_LIST
      )
      ?.list?.find(
        (listItem) =>
          listItem.type ===
          constants.DEFAULT_MENU.CLIENT_SPACE.CONTENT_TEXT_WITH_LINK
      )?.contentDetails?.raw;

  const [modalShow, setModalShow] = React.useState(false);
  const [showSearchSite, setShowSearch] = React.useState(false);
  const [showRequestCallBack, setShowRequestCallBack] = React.useState(false);

  const handleModalShow = (isShow) => {
    setModalShow(isShow);
  };

  const requestCallBackClick = () => {
    handleModalShow(false);
    setShowSearch(false);
    setShowRequestCallBack(
      showRequestCallBackProp ? false : !showRequestCallBack
    );
    if (setShowRequestCallBackProp) {
      setShowRequestCallBackProp(false);
    }
  };

  const clientSpaceClick = () => {
    handleModalShow(true);
    setShowSearch(false);
    setShowRequestCallBack(false);
    if (setShowRequestCallBackProp) {
      setShowRequestCallBackProp(false);
    }
  };
  const searchSiteClick = () => {
    handleModalShow(false);
    setShowSearch(!showSearchSite);
    setShowRequestCallBack(false);
    if (setShowRequestCallBackProp) {
      setShowRequestCallBackProp(false);
    }
  };

  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="m-0">{children}</p>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(
                  process.env.GATSBY_DOMAIN_URL + node?.data?.uri
                )
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          <Styled.BlueButton>
            <span>{children}</span>
            <img src={iconAccount} />
          </Styled.BlueButton>
        </a>
      ),
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  return (
    <>
      <Styled.DefaultHeaderContainer>
        <Container fluid className="d-none d-md-block">
          <Row>
            <Col lg className="d-none d-lg-block" />
            <Styled.InnerDefaultHeaderContainer xs="auto">
              <Row className="g-0 justify-content-md-center justify-content-lg-end">
                {menu?.list?.map((item, index) => {
                  return (
                    <Col xs="auto" key={index}>
                      {item === constants.DEFAULT_MENU.REQUEST_A_CALLBACK && (
                        <Styled.TransparentButton
                          onClick={() => requestCallBackClick()}
                        >
                          <span>{item}</span>
                          {showRequestCallBack || showRequestCallBackProp ? (
                            <VscChromeClose
                              color="#5fc5ff"
                              size="25px"
                              className="icon-margin-right"
                            />
                          ) : (
                            <ImPhoneHangUp
                              style={{
                                color: 'transparent',
                                stroke: '#5fc5ff',
                                strokeWidth: '1px',
                              }}
                              className="icon-margin-right"
                              size="20px"
                            />
                          )}
                        </Styled.TransparentButton>
                      )}

                      {item === constants.DEFAULT_MENU.SEARCH_SITE && (
                        <Styled.TransparentButton
                          onClick={() => searchSiteClick()}
                        >
                          <span>{item}</span>
                          {showSearchSite ? (
                            <VscChromeClose
                              color="#5fc5ff"
                              size="25px"
                              className="icon-margin-right"
                            />
                          ) : (
                            <BsSearch
                              color="#5fc5ff"
                              size="20px"
                              className="icon-margin-right"
                            />
                          )}
                        </Styled.TransparentButton>
                      )}

                      {item === constants.DEFAULT_MENU.CLIENT_SPACE.DEFAULT &&
                        (clientSpaceTextWithPathRaw ? (
                          documentToReactComponents(
                            JSON.parse(clientSpaceTextWithPathRaw),
                            optionsMainStyle
                          )
                        ) : (
                          <Styled.BlueButton onClick={() => clientSpaceClick()}>
                            <span>{item}</span>
                            <img src={iconAccount} />
                          </Styled.BlueButton>
                        ))}
                    </Col>
                  );
                })}
              </Row>
            </Styled.InnerDefaultHeaderContainer>
            <Col lg className="d-none d-lg-block" />
          </Row>
        </Container>
        {showSearchSite && (
          <Styled.SearchContainer fluid>
            <SearchSite />
          </Styled.SearchContainer>
        )}
        {(showRequestCallBack || showRequestCallBackProp) && (
          <div className="d-none d-md-block">
            <RequestCallback />
          </div>
        )}
      </Styled.DefaultHeaderContainer>
      <ClientSpace modalShow={modalShow} handleModalShow={handleModalShow} />
    </>
  );
};
export default DefaultHeaderMenu;
