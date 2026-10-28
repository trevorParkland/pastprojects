import React from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';
import * as Styled from './mobileNavigationStyles';
import useMenus from '../../../hooks/useMenus';
import arrowDown from '../../../images/arrow-blue-mobile-nav.png';
import iconAccount from '../../../images/icon-account.png';
import iconHome from '../../../images/icon-account.png';
import ClientSpace from '../../clientSpace/clientSpace';
import RequestCallback from '../../requestCallBack/requestCallback';
import MobileSearchSite from '../../searchSite/mobileSearchSite';

import constants from '../../../utils/utils';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../../utils';

const MobileNavbar = ({
  showRequestCallBackProp,
  setShowRequestCallBackProp,
}) => {
  const [showSearchSite, setShowSearchSite] = React.useState(false);
  const [showRequestCallback, setShowRequestCallback] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  const [showSubNavigation, setShowSubNavigation] = React.useState(false);
  const [showSubMenus, setShowSubMenus] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [showSubRequestCallBack, setSubShowRequestCallBack] =
    React.useState(false);

  const [navIndex, setNavIndex] = React.useState();
  const [subNavIndex, setSubNavIndex] = React.useState();

  const [subSubNavIndex, setSubSubNavIndex] = React.useState();
  const [showSubSubMenus, setShowSubSubMenus] = React.useState(false);

  const handleModalShow = (isShow) => {
    setModalShow(isShow);
  };

  const menu = useMenus();

  const clientSpaceQuery = useStaticQuery(graphql`
    query clientSpaceMobileLink {
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

  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="m-0">{children}</p>,
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.HeaderMenuClientSpace
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(
                  process.env.GATSBY_DOMAIN_URL + node?.data?.uri
                )
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
          <Styled.IconClientSpace src={iconAccount} />
        </Styled.HeaderMenuClientSpace>
      ),
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  const onClickSearch = () => {
    setShowSearchSite((prev) => !prev);
    setShowRequestCallback(false);
    setShowMenu(false);
    if (setShowRequestCallBackProp) {
      setShowRequestCallBackProp(false);
    }
  };
  const onClickTool = () => {
    setShowSearchSite(false);
    setShowRequestCallback((prev) => (showRequestCallBackProp ? false : !prev));
    setShowMenu(false);
    if (setShowRequestCallBackProp) {
      setShowRequestCallBackProp(false);
    }
  };
  const onClickMenu = () => {
    setShowSearchSite(false);
    setShowRequestCallback(false);
    setShowMenu((prev) => !prev);
    if (setShowRequestCallBackProp) {
      setShowRequestCallBackProp(false);
    }
  };
  const requestCallBackClick = () => {
    handleModalShow(false);
    setSubShowRequestCallBack(
      showRequestCallBackProp ? false : !showSubRequestCallBack
    );
    if (setShowRequestCallBackProp) {
      setShowRequestCallBackProp(false);
    }
  };
  const clientSpaceClick = () => {
    handleModalShow(true);
  };

  return (
    <>
      <Styled.MainContainer
        fluid
        $backgroundImage={menu?.imageWithPath[2]?.image?.file?.url}
      >
        <Navbar expand={false} className="p-0">
          <Row className="g-0 w-100">
            <Col xs="auto">
              <Navbar.Brand href="/" className="m-0">
                <Styled.TopLogo
                  src={menu?.imageWithPath[1]?.image?.file?.url}
                  alt={menu?.imageWithPath[1]?.title}
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <Row className="g-0 justify-content-end">
                <Col xs="auto">
                  <Styled.NavSearchSite
                    className={showSearchSite && 'active'}
                    onClick={onClickSearch}
                  ></Styled.NavSearchSite>
                </Col>
                <Col xs="auto">
                  <Styled.NavTool
                    className={
                      (showRequestCallback || showRequestCallBackProp) &&
                      'active'
                    }
                    onClick={onClickTool}
                  ></Styled.NavTool>
                </Col>
                <Col xs="auto">
                  <Styled.NavMenu
                    className={showMenu && 'active'}
                    onClick={onClickMenu}
                  ></Styled.NavMenu>
                </Col>
              </Row>
            </Col>
          </Row>
        </Navbar>
      </Styled.MainContainer>
      <Styled.DropDownContainer>
        {showSearchSite && <MobileSearchSite />}
        {(showRequestCallback || showRequestCallBackProp) && (
          <>
            <Row className="g-0">
              <Styled.RelativeCol xs={12}>
                <Styled.HeaderMenu href={'/'}>
                  Home
                  <Styled.IconHome src={iconHome} />
                </Styled.HeaderMenu>
              </Styled.RelativeCol>

              <Styled.RelativeCol xs={12}>
                <Styled.IconPhoneContainer
                  $backgroundImage={
                    showSubRequestCallBack || showRequestCallBackProp
                  }
                  onClick={requestCallBackClick}
                >
                  Request a Callback
                </Styled.IconPhoneContainer>
              </Styled.RelativeCol>
              {(showSubRequestCallBack || showRequestCallBackProp) && (
                <div className="d-block d-md-none">
                  <RequestCallback />
                </div>
              )}
              <Styled.RelativeCol xs={12}>
                {clientSpaceTextWithPathRaw ? (
                  documentToReactComponents(
                    JSON.parse(clientSpaceTextWithPathRaw),
                    optionsMainStyle
                  )
                ) : (
                  <Styled.HeaderMenuClientSpace onClick={clientSpaceClick}>
                    Client Space
                    <Styled.IconClientSpace src={iconAccount} />
                  </Styled.HeaderMenuClientSpace>
                )}
              </Styled.RelativeCol>
              {modalShow && (
                <ClientSpace
                  modalShow={modalShow}
                  handleModalShow={handleModalShow}
                />
              )}
            </Row>
          </>
        )}
        {showMenu &&
          menu?.navigations?.map((item, index) => {
            return (
              <div key={index}>
                <Row className="g-0">
                  <Styled.RelativeCol>
                    <Styled.HeaderMenu
                      href={
                        isExternalUrlhref(item?.entryWithPath?.path)
                          ? item?.entryWithPath?.path
                          : addTrailingSlash(
                              process.env.GATSBY_DOMAIN_URL +
                                item?.entryWithPath?.path
                            )
                      }
                      target={
                        isExternalUrl(item?.entryWithPath?.path)
                          ? '_blank'
                          : '_self'
                      }
                    >
                      {item?.entryWithPath?.text}
                    </Styled.HeaderMenu>
                    {item?.subNavigations && (
                      <Styled.ArrowImageContainer
                        onClick={() => {
                          if (navIndex === index) {
                            setShowSubNavigation(false);
                            setNavIndex(-1);
                            setSubNavIndex(-1);
                          } else {
                            setShowSubNavigation(true);
                            setSubNavIndex(-1);
                            setNavIndex(index);
                          }
                        }}
                      >
                        <Styled.ArrowImage src={arrowDown} alt="" />
                      </Styled.ArrowImageContainer>
                    )}
                  </Styled.RelativeCol>

                  {index === navIndex &&
                    item?.subNavigations &&
                    showSubNavigation && (
                      <div>
                        {item?.subNavigations?.map((itemSub, index) => {
                          return (
                            <Styled.RelativeCol xs={12} key={index}>
                              <Styled.SubHeaderMenu
                                href={
                                  isExternalUrlhref(itemSub?.textWithPath?.path)
                                    ? itemSub?.textWithPath?.path
                                    : addTrailingSlash(
                                        process.env.GATSBY_DOMAIN_URL +
                                          itemSub?.textWithPath?.path
                                      )
                                }
                                target={
                                  isExternalUrl(itemSub?.textWithPath?.path)
                                    ? '_blank'
                                    : '_self'
                                }
                              >
                                {itemSub?.textWithPath?.text}
                              </Styled.SubHeaderMenu>
                              {itemSub?.subMenusWithPaths && (
                                <Styled.ArrowImageContainer
                                  onClick={() => {
                                    if (subNavIndex === index) {
                                      setShowSubMenus(false);
                                      setSubNavIndex(-1);
                                    } else {
                                      setShowSubMenus(true);
                                      setSubNavIndex(index);
                                    }
                                  }}
                                >
                                  <Styled.ArrowImage src={arrowDown} alt="" />
                                </Styled.ArrowImageContainer>
                              )}

                              {index === subNavIndex &&
                                itemSub?.subMenusWithPaths &&
                                showSubNavigation &&
                                showSubMenus && (
                                  <div>
                                    {itemSub?.subMenusWithPaths?.map(
                                      (itemSubMenu, index) => {
                                        return (
                                          <Styled.RelativeCol
                                            xs={12}
                                            key={index}
                                          >
                                            <Styled.SubHeaderMenuLast
                                              href={
                                                isExternalUrlhref(
                                                  itemSubMenu?.path ??
                                                    itemSubMenu?.textWithPath
                                                      ?.path
                                                )
                                                  ? itemSubMenu?.path ??
                                                    itemSubMenu?.textWithPath
                                                      ?.path
                                                  : addTrailingSlash(
                                                      process.env
                                                        .GATSBY_DOMAIN_URL +
                                                        (itemSubMenu?.path ??
                                                          itemSubMenu
                                                            ?.textWithPath
                                                            ?.path)
                                                    )
                                              }
                                              target={
                                                isExternalUrl(
                                                  itemSubMenu?.path ??
                                                    itemSubMenu?.textWithPath
                                                      ?.path
                                                )
                                                  ? '_blank'
                                                  : '_self'
                                              }
                                            >
                                              {itemSubMenu?.text ??
                                                itemSubMenu?.textWithPath?.text}
                                            </Styled.SubHeaderMenuLast>
                                            {itemSubMenu?.subMenusWithPaths && (
                                              <Styled.ArrowImageContainer
                                                onClick={() => {
                                                  if (
                                                    subSubNavIndex === index
                                                  ) {
                                                    setShowSubSubMenus(false);
                                                    setSubSubNavIndex(-1);
                                                  } else {
                                                    setShowSubSubMenus(true);
                                                    setSubSubNavIndex(index);
                                                  }
                                                }}
                                              >
                                                <Styled.ArrowImage
                                                  src={arrowDown}
                                                  alt=""
                                                />
                                              </Styled.ArrowImageContainer>
                                            )}
                                            {itemSubMenu?.subMenusWithPaths &&
                                              index === subSubNavIndex &&
                                              showSubNavigation &&
                                              showSubMenus &&
                                              showSubSubMenus &&
                                              itemSubMenu?.subMenusWithPaths.map(
                                                (itemSubSubSubMenu, index) => (
                                                  <Styled.RelativeCol
                                                    xs={12}
                                                    key={index}
                                                  >
                                                    <Styled.SubSubHeaderMenuLast
                                                      href={
                                                        isExternalUrlhref(
                                                          itemSubSubSubMenu?.path
                                                        )
                                                          ? itemSubSubSubMenu?.path
                                                          : addTrailingSlash(
                                                              process.env
                                                                .GATSBY_DOMAIN_URL +
                                                                itemSubSubSubMenu?.path
                                                            )
                                                      }
                                                      target={
                                                        isExternalUrl(
                                                          itemSubSubSubMenu?.path
                                                        )
                                                          ? '_blank'
                                                          : '_self'
                                                      }
                                                    >
                                                      {itemSubSubSubMenu?.text}
                                                    </Styled.SubSubHeaderMenuLast>
                                                  </Styled.RelativeCol>
                                                )
                                              )}
                                          </Styled.RelativeCol>
                                        );
                                      }
                                    )}
                                  </div>
                                )}
                            </Styled.RelativeCol>
                          );
                        })}
                      </div>
                    )}
                </Row>
              </div>
            );
          })}
      </Styled.DropDownContainer>
    </>
  );
};

export default MobileNavbar;
