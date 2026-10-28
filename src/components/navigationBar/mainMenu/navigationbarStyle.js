import styled from 'styled-components';
import { Container, Col, Navbar, Nav } from 'react-bootstrap';
import ActiveNavImage from '../../../images/head-nav-active.png';
import BackgroundImage from '../../../images/flyout-bg.png';
import { Link } from 'gatsby';
export const NavCollapse = styled(Navbar.Collapse)`
  @media (max-width: 991px) {
    margin-top: 90px !important;
    text-align: left;
  }
  @media (max-width: 767px) {
    text-align: left;
    background: #002849;
    a {
      color: #fff !important;
    }
  }
`;
export const MainContainer = styled(Container)`
  height: 116px;
  padding: 24px 0 0 0 !important;
  width: 1200px !important;
  @media (max-width: 1200px) {
    width: 960px !important;
  }
  @media (max-width: 991px) {
    width: 728px !important;
    height: 200px;
    padding-top: 30px !important;
  }
  @media (max-width: 767px) {
    margin: 0 !important;
    padding: 25px 25px 30px 20px !important;
    max-width: 100vw !important;
    border-top: 8px solid #00457c;
    background: #fff;
  }
  @media print {
    display: none;
  }
`;
export const StyledNavbar = styled(Navbar)`
  align-items: baseline !important;
`;

export const TopLogo = styled.img`
  width: 250px;
  height: auto;
  @media (min-width: 1200px) {
    width: 342px;
    height: auto;
  }
  @media (max-width: 991px) {
    width: 400px;
  }
`;

export const NavItem = styled(Nav.Item)``;
export const HeaderMenu = styled.a`
  display: block;
  height: 65px;
  padding: 14px 18px !important;
  line-height: 14px;
  font-size: 14px;
  font-family: Figtree-Medium, arial, sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0;
  color: #00457c !important;
  &.hoverEffect {
    background: url(${(props) => props.$activeImage ?? ActiveNavImage});
    background-position: center -57px;
    background-size: auto 102px;
    background-repeat: no-repeat;
    border: none;
  }
  &.active {
    background: url(${(props) => props.$activeImage ?? ActiveNavImage});
    padding: 9px 18px 14px 18px !important;
    background-position: center -1px;
    background-size: auto 102px;
    background-repeat: no-repeat;
    border-top: 5px solid ${(props) => props.$activeImageTop ?? '#037ec4'};
    color: #fff !important;
    @media (max-width: 1200px) {
      padding: 9px 15px 14px 15px !important;
    }
    @media (max-width: 991px) {
      padding: 10px 26px 14px 26px !important;
    }
  }

  @media (max-width: 1200px) {
    font-size: 13px;
    line-height: 13px;
    padding: 14px 15px !important;
  }
  @media (max-width: 991px) {
    padding: 14px 26px !important;
  }
`;

export const Layout = styled(Container)`
  height: auto;
  position: absolute;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 10%);
  z-index: 40;
  background: url(${BackgroundImage}) repeat-x bottom left;
  width: 100% !important;
  padding: 40px 0 0px 0;
  padding-bottom: ${(props) => props.$paddingBottom};

  margin-top: -15px;
  @media (max-width: 991px) {
    margin-top: 30px;
    padding-bottom: 0;
    background: #fff;
  }
`;

export const LayoutLeftCol = styled(Col)`
  width: 50%;
  text-align: right;
  border-right: 1px solid #d5d5d5;
`;

export const pStyle = {
  margin: '0 0 30px 0',
  padding: '0',
};
