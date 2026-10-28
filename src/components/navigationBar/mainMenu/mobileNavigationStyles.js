import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';
import searchSiteImage from '../../../images/topMobile-nav-search.png';
import toolImage from '../../../images/topMobile-nav-tools.png';
import navBarImage from '../../../images/topMobile-nav-nav.png';
import callBackWhite from '../../../images/icon-callback-white.png';
import closeWhite from '../../../images/icon-close-white.png';

export const MainContainer = styled(Container)`
  width: 100%;
  border-top: 8px solid #00457c;
  padding: 25px 25px 30px 20px !important;
  color: #fff !important;
  background: #fff url(${(props) => props.$backgroundImage}) repeat-x top left;
  background-size: 1px auto;
  @media print {
    display: none;
  }
`;

export const DropDownContainer = styled.div`
  position: absolute;
  color: #fff;
  text-align: left;
  width: 100%;
  z-index: 2;
  background: #002849;
`;

export const TopLogo = styled.img`
  width: 141px;
  height: auto;
  @media print {
    display: none;
  }
`;

export const HeaderMenu = styled.a`
  display: block;
  padding: 10px 10px 10px 10px;
  text-align: left;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Figtree-Regular', arial, sans-serif;
  letter-spacing: 0.02em;
  line-height: 22px;
  color: #fff !important;
  border-top: 1px solid #1a3e5c;
  border-bottom: 1px solid #000c16;
  background: #002849;
`;

export const HeaderMenuClientSpace = styled(HeaderMenu)`
  background: #037ec4;
  border-top: 1px solid #3598d0;
  border-bottom: 1px solid #025889;
  cursor: pointer;
`;

export const SubHeaderMenu = styled(HeaderMenu)`
  padding: 10px 10px 10px 30px;
  font-size: 18px;
  line-height: 20px;
  border-top: 1px solid #1a5889;
  border-bottom: 1px solid #00294a;
  background: #00457c;
`;

export const SubHeaderMenuLast = styled(HeaderMenu)`
  padding: 10px 10px 10px 50px;
  font-size: 16px;
  line-height: 18px;
  border-top: 1px solid #3598d0;
  border-bottom: 1px solid #025889;
  background: #037ec4;
`;

export const SubSubHeaderMenuLast = styled(HeaderMenu)`
  padding: 10px 10px 10px 70px;
  font-size: 14px;
  line-height: 16px;
  border-top: 1px solid #3598d0;
  border-bottom: 1px solid #025889;
  background: #04a8e7;
`;

export const ArrowImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 43px;
  height: 43px;
  padding: 17px 0 0 10px;
  cursor: pointer;
`;

export const ArrowImage = styled.img`
  height: 12px;
  width: auto;
  border: 0;
  vertical-align: top;
`;

export const RelativeCol = styled(Col)`
  position: relative;
`;
export const NavMenu = styled.div`
  width: 36px;
  height: 36px;
  background: url(${navBarImage}) no-repeat 0 0;
  background-size: 36px auto;
  cursor: pointer;
  &.active {
    background-position: 0 -36px;
  }
`;

export const NavSearchSite = styled(NavMenu)`
  background: url(${searchSiteImage}) no-repeat 0 0;
  background-size: 36px auto;
  cursor: pointer;
`;

export const NavTool = styled(NavMenu)`
  background: url(${toolImage}) no-repeat 0 0;
  background-size: 36px auto;
  cursor: pointer;
`;

export const IconHome = styled(ArrowImage)`
  width: 17px;
  height: auto;
  position: absolute;
  top: 15px;
  right: 15px;
`;
export const IconClientSpace = styled(IconHome)`
  width: 12px;
`;

export const IconPhoneContainer = styled(HeaderMenu)`
  background-image: url(${(props) =>
    props.$backgroundImage ? closeWhite : callBackWhite});
  background-color: ${(props) =>
    props.$backgroundImage ? '#003763' : 'inherit'};
  background-repeat: no-repeat;
  background-position: center right;
  background-size: ${(props) => (props.$backgroundImage ? '32px' : '35px')} auto;
  cursor: pointer;
`;

export const SearchSiteContainer = styled(HeaderMenu)`
  width: 100%;
  height: 62px;
  background: #002849 url(${searchSiteImage}) no-repeat center right;
  background-size: auto 20px;
  input {
  }
  input[type='submit'] {
    width: 100%;
    height: 62px;
    background: none;
    border: none;
  }
`;
