import styled from 'styled-components';
import arrowBlue from '../../../images/arrow-blue.png';
import { Link } from 'gatsby';

export const RightMenuPanelContainer = styled.h2`
  float: left;
  width: ${(props) => props.$width};
  @media (max-width: 991px) {
    width: 355px;
  }
`;

export const LiContainer = styled.li`
  position: relative;
  z-index: 2;
  margin: 0px;
  padding: 0px;
  list-style: none;
  background: none;
`;

export const LinkStyle = styled.a`
  display: block;
  padding: 8px 0px 8px 30px;
  font-size: 14px;
  font-family: 'Figtree-Medium', arial, sans-serif;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #00457c;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  :hover {
    background: url(${arrowBlue}) no-repeat 1px 9px;
    background-size: 7px auto;
    background-position: 12px 9px;
    color: #037ec4;
    background-color: #ededed;
  }
`;

export const Arrow = styled.div`
  display: none;
`;

export const ArrowImg = styled.img`
  width: auto;
  height: 12px;
`;

export const SubMenuList = styled.ul`
  position: absolute;
  z-index: 999999999999999;
  top: 0;
  left: ${(props) => props.$left};
  width: 310px;
  margin: 0;
  padding: 0;
  @media (max-width: 991px) {
    left: 0;
    position: relative;
  }
`;
export const SubMenuListItem = styled.li`
  position: relative;
  z-index: 2;
  margin: 0px;
  padding: 0px;
  list-style: none;
  background: none;
`;
export const SubMenuAnchor = styled.a`
  display: block;
  padding: 8px 0px 8px 40px;
  font-size: 12px;
  font-family: 'Figtree-Medium', arial, sans-serif;
  line-height: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #037ec4;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  :hover {
    background: url(${arrowBlue}) no-repeat 1px 9px;
    background-size: 7px auto;
    background-position: 20px 8px;
    color: #037ec4;
  }
`;

export const ListContainer = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
  margin-bottom: 0 !important;
  ${LiContainer}:last-of-type {
    ${SubMenuList} {
      @media (min-width: 992px) {
        position: relative;
        top: -30px;
      }
    }
  }
`;
