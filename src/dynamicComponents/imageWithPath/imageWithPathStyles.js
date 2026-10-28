import styled from 'styled-components';
import HomeBottom from '../../images/homeBottom-item-bg.gif';

export const LinkContainer = styled.a`
  position: relative;
  height: 185px;
  display: block;
  padding-top: 20px;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-weight: normal !important;
  color: #037EC4;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  :hover {
    color: #037EC4;
    background: url(${HomeBottom}) repeat-x bottom left;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 15%);
  }
`;

export const ImageStyle = styled.img`
  display: block;
  width: 161px;
  height: auto;
  margin: 0 auto 20px auto;
`;

export const ParaText = styled.p`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 130px;
`;
