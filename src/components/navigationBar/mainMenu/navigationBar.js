import React from 'react';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import * as Styled from './navigationbarStyle';
import SubMenu from '../subMenu/subMenu';
import useMenus from '../../../hooks/useMenus';
import MobileNavbar from './mobileNavigation';
import { Helmet } from 'react-helmet';
import topNavBar from '../../../images/topMobile-nav-nav.png';
import { Link } from 'gatsby';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
  } from '../../../utils';

const BootstrapNavbar = (props) => {
  const [showSubMenu, setShowSubMenu] = React.useState(false);
  const [menuDetails, setMenuDetails] = React.useState({});
  const [hoverIndex, setHoverIndex] = React.useState();

  const menu = useMenus();
  const onMouseEnter = (key, index) => {
    setMenuDetails(
      menu.navigations.filter((item) => item.entryWithPath?.text === key)[0]
    );
    setShowSubMenu(
      !!menu.navigations.filter(
        (item) => item.entryWithPath?.text === key && item.subNavigations
      )[0]
    );
    setHoverIndex(index);
  };

  const onMouseLeave = () => {
    setShowSubMenu(false);
    setHoverIndex(null);
  };

  const callback = (e, isSubmenu, selectedItem, type) => {
    props &&
      props.onMenuSelect &&
      props.onMenuSelect(e, isSubmenu, selectedItem, type);
  };

  return (
    <>
      <Helmet></Helmet>
      <div className="d-none d-md-block" onMouseLeave={(e) => onMouseLeave()}>
        <Styled.MainContainer>
          <Navbar expand="md">
            <Row className="g-0 w-100">
              <Col md={12} lg={'auto'} className="text-center">
                <Navbar.Brand href="/">
                  <Styled.TopLogo
                    src={menu?.imageWithPath[0]?.image?.file?.url}
                    title={menu?.imageWithPath[0]?.title}
                  />
                </Navbar.Brand>
              </Col>
              <Col xs={2} className="d-block d-md-none">
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      background: `url(${topNavBar}) no-repeat 0 0`,
                      backgroundSize: '36px auto',
                    }}
                  ></div>
                </Navbar.Toggle>
              </Col>
              <Col xs={12} lg>
                <Styled.NavCollapse
                  id="basic-navbar-nav"
                  className="justify-content-md-center justify-content-lg-end"
                >
                  <Nav>
                    {menu?.navigations?.map((item, index) => {
                      return (
                        <Styled.NavItem key={index}>
                          <Styled.HeaderMenu
                            $activeImage={props?.activePathImage}
                            $activeImageTop={props?.activePathImageTop}
                            onMouseEnter={(e) => {
                              onMouseEnter(item?.entryWithPath?.text, index);
                            }}
                            onMouseOut={() => {
                              !item?.subNavigations && onMouseLeave();
                            }}
                            
                            href={
                              isExternalUrlhref(item?.entryWithPath?.path)
                                ? item?.entryWithPath?.path
                                : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.entryWithPath?.path)
                            }
                            target={isExternalUrl(item?.entryWithPath?.path) ? '_blank' : '_self'}
                            
                            className={
                              item?.type === props.activeLink
                                ? 'active'
                                : hoverIndex === index && 'hoverEffect'
                            }
                          >
                            {item?.entryWithPath?.text}
                          </Styled.HeaderMenu>
                        </Styled.NavItem>
                      );
                    })}
                  </Nav>
                </Styled.NavCollapse>
              </Col>
            </Row>
          </Navbar>
        </Styled.MainContainer>
        {showSubMenu && (
          <SubMenu
            onMouseLeave={(e) => onMouseLeave()}
            onMouseEnter={(e) => onMouseEnter('')}
            menuDetails={menuDetails}
            callback={callback}
          />
        )}
      </div>
      <div className="d-block d-md-none">
        <MobileNavbar
          showRequestCallBackProp={props.showRequestCallBackProp}
          setShowRequestCallBackProp={props.setShowRequestCallBackProp}
        />
      </div>
    </>
  );
};

export default BootstrapNavbar;
