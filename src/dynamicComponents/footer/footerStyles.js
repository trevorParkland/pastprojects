import styled from 'styled-components';
import { Image } from 'react-bootstrap';

export const FooterContainer = styled.div`
  clear: both;
  @media print {
    display: none;
  }
  background: #00457C;
  text-align: center;
`;

export const FooterInnerContainer = styled.div`
  width: 1200px !important;
  padding: 45px 0;
  margin: 0 auto;
  @media (max-width: 1199px) {
    width: 960px !important;
  }
  @media (max-width: 991px) {
    width: 728px !important;
  }
  @media (max-width: 767px) {
    width: 100% !important;
    margin: 0;
    padding: 35px 25px;
  }
`;

export const FooterLogo = styled(Image)`
  height: 65px;
  width: auto;
  margin-top: -2px;
  @media (max-width: 767px) {
    display: block;
    margin: 0 auto;
  }
`;

export const FooterLeft = styled.div`
  float: left;
  width: 270px;
  margin: 0 50px 0 0;
  @media (max-width: 1199px) {
    width: 270px;
    margin: 0 35px 0 0;
  }
  @media (max-width: 991px) {
    width: 270px;
    margin: 0 60px 0 0;
  }
  @media (max-width: 767px) {
    float: none;
    width: 100%;
    margin: 0 0 25px 0;
  }
`;
export const ImageStyle = styled.img`
  width: 101px;
  height: auto;
  @media (max-width: 767px) {
    display: block;
    margin: 0 auto;
  }
`;

export const FooterProductImage = styled(Image)`
  width: auto;
  height: 71px;
`;

export const FooterTextLargeScreen = styled.div`
  float: left;
  width: 185px;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 23px;
  line-height: 36px;
  color: #00a081;
  @media (max-width: 1199px) {
    display: none;
  }
`;

export const AnchorStyle = styled.a`
  text-decoration: none;
  color: #9fb577;
`;

export const FootMiddle = styled.div`
  display: block;
  float: left;
  width: 570px;
  @media (max-width: 1199px) {
    width: 230px;
    margin: 0 30px 0 0;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export const FootMiddleRight = styled.div`
  float: left;
  width: 385px;
  margin: -7px 0 0 0;
`;

export const FootRight = styled.div`
  float: right;
  width: 260px;
  text-align: right;
  @media (max-width: 1199px) {
    width: 240px;
    font-size: 18px;
    line-height: 18px;
  }
  @media (max-width: 767px) {
    float: none;
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;
