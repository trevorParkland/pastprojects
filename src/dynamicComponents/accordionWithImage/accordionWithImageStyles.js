import styled from 'styled-components';
import downArrow from './../../images/arrow-green-down.png';
import upArrow from './../../images/arrow-green-up.png';

export const ExpandLink = styled.a`
  position: relative;
  padding: 22px 50px 22px 110px;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 20x;
  line-height: 24px;
  text-transform: uppercase;
  color: #b2bc73;
  border: 4px solid #eceedc;
  background: #fff url(${downArrow}) no-repeat center right;
  background-size: 39px auto;
  display: block;
  margin: 0;
  text-decoration: none;
  font-weight: normal !important;
  -moz-transition: background-color 0.15s ease-out;
  -o-transition: background-color 0.15s ease-out;
  -ms-transition: background-color 0.15s ease-out;
  transition: background-color 0.15s ease-out;
  cursor: pointer;
  :hover {
    color: #b2bc73;
    background-color: #eceedc !important;
  }
`;

export const ImageExpandLink = styled.img`
  top: ${(props) => (props.$top ? props.$top : '12px')};
  left: 20px;
  position: absolute;
  width: 70px;
  height: auto;
  border: 0;
  vertical-align: top;
  @media (max-width: 424px) {
    top: ${(props) => (props.$top ? props.$mobileTop : '25px')};
    width: 75px !important;
  }
`;
export const CollapseButton = styled.button`
  width: 100%;
  border: none;
  text-align: left;
  background-color: white;
  padding-bottom: 30px;
  &.active {
    ${ExpandLink} {
      background-color: #eceedc !important;
      background: #fff url(${upArrow}) no-repeat center right;
      background-size: 39px auto;
    }
  }
`;
export const formDiv = styled.div`
  @media print {
    display: block !important;
    height: auto !important;
  }
`;
