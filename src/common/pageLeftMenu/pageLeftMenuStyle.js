import styled from 'styled-components';
import arrowBlue from '../../images/arrow-blue.png';
import { Link } from 'gatsby';

export const RightMenuPanelContainer = styled.div`
  margin-bottom: 30px;
  @media print {
    display: none;
  }
`;

export const ListContainer = styled.ul`
  margin-left: 0px;
  padding-left: 0px;
`;

export const LiContainer = styled.li`
  z-index: 2;
  margin: 0px;
  padding: 0px;
  list-style: none;
  background: none;
  font-size: 14px;
  font-family: 'Figtree-Medium', arial, sans-serif;
  line-height: 18px;
  letter-spacing: 0.04em;
`;

export const LinkStyleInternal = styled(Link)`
  display: block;
  padding: 15px 0px 8px 40px;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #00457c;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  cursor: pointer;
  :hover {
    background: url(${arrowBlue}) no-repeat 1px 9px;
    background-size: 7px;
    background-position: 20px 16px;
    color: #037ec4;
  }
  &.active {
    background: url(${arrowBlue}) no-repeat 1px 9px;
    background-size: 7px;
    background-position: 20px 16px;
    color: #037ec4;
  }
`;

export const LinkStyle = styled.a`
  display: block;
  padding: 15px 0px 8px 40px;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #00457c;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  cursor: pointer;
  :hover {
    background: url(${arrowBlue}) no-repeat 1px 9px;
    background-size: 7px;
    background-position: 20px 16px;
    color: #037ec4;
  }
  &.active {
    background: url(${arrowBlue}) no-repeat 1px 9px;
    background-size: 7px;
    background-position: 20px 16px;
    color: #037ec4;
  }
`;

export const ActiveLink = {
  background: `url(${arrowBlue}) no-repeat 1px 9px`,
  backgroundSize: '7px',
  backgroundPosition: '20px 16px',
  color: '#037ec4',
};
export const Arrow = styled.div`
  display: none;
`;

export const ArrowImg = styled.img`
  width: auto;
  height: 12px;
`;

export const SubMenuList = styled.ul`
  z-index: 999999999999999;
  top: 0;
  margin: 0;
  padding: 0;
  margin-left: 2%;
`;
export const SubMenuListItem = styled.li`
  z-index: 2;
  margin: 0px;
  padding: 0px;
  list-style: none;
  background: none;
  font-size: 12px;
  font-family: 'Figtree-Medium', arial, sans-serif;
  line-height: 15px;
`;

export const SubMenuAnchorInternal = styled.a`
  display: block;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: unset;
  color: #666;
  padding: 8px 0px 8px 60px;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  :hover {
    background: url(${arrowBlue}) no-repeat -7px 14px;
    background-size: 7px auto;
    background-position: 40px 9px;
  }
`;

export const SubSubMenuAnchorInternal = styled(SubMenuAnchorInternal)`
  padding: 8px 0px 8px 90px;
`;

export const SubMenuAnchor = styled.a`
  display: block;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.04em;
  text-transform: unset;
  color: #666;
  padding: 8px 0px 8px 60px;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  :hover {
    background: url(${arrowBlue}) no-repeat -7px 14px;
    background-size: 7px auto;
    background-position: 40px 9px;
  }
`;

export const SubSubMenuAnchor = styled(SubMenuAnchor)`
  padding: 8px 0px 8px 90px;
  :hover {
    background: url(${arrowBlue}) no-repeat -7px 14px;
    background-size: 7px auto;
    background-position: 60px 9px;
  }
`;

export const ActiveSubLink = {
  background: `url(${arrowBlue}) no-repeat -7px 14px`,
  backgroundSize: '7px auto',
  backgroundPosition: '40px 9px',
  color: '#037ec4',
};

export const ActiveSubSubLink = {
  ...ActiveSubLink,
  paddingLeft: '90px',
  backgroundPosition: '60px 9px',
};
