import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import LinkArrowImage from '../../images/icon-home-arrow.png';

export const CustomerServiceContainer = styled.div`
  background-image: url(${(props) => props.$backgroundImage});
  background-repeat: no-repeat;
  background-position: top center;
  @media (max-width: 767px) {
    background: #e5f2f9;
  }
`;
export const InnerContainer = styled(Container)`
  position: relative;
  display: block;
  height: 444px;
  margin: 0 auto;
  padding: 45px 0 0 0;
  max-width: 100% !important;
  @media (min-width: 1200px) {
    width: 1200px !important;
  }
  @media (max-width: 1200px) {
    width: 960px !important;
  }
  @media (max-width: 992px) {
    width: 728px !important;
  }
  @media (max-width: 767px) {
    height: auto;
    width: 100% !important;
    padding: 30px;
  }
`;
export const RowContent = styled(Row)`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const LeftColumn = styled(Col)`
  display: block;
  padding: 18px;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #fff;
`;
export const CustomerServiceImageDude = styled.img`
  margin: 0;
  border: 0;
  vertical-align: top;
  width: auto;
  height: 240px;
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 1200px) {
    height: 480px;
  }
`;
export const CustomerServiceImage = styled.img`
  vertical-align: top;
  position: absolute;
  top: 6px;
  left: 0;
  width: 26px;
  height: auto;
`;
export const CustomerServiceLogoImage = styled.img`
  vertical-align: top;
  width: 237px;
  height: auto;
  border: 0;
  @media (max-width: 992px) {
    width: 175px;
  }
`;

export const LeftPanelSpan = styled.span`
  display: block;
  margin: 10px 0 55px 0;
  color: #5fc5ff;
`;
export const LeftPara = styled.p`
  padding: 0 25px;
  margin: 0 0 20px 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  color: #00457c;
  letter-spacing: 0.02em;
  @media (max-width: 992px) {
    font-size: 14px;
    line-height: 19px;
  }
`;
export const DudeContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: hidden;
  @media (max-width: 991px) {
    height: 200px;
  }
`;

export const CSLogoContainer = styled.div`
  float: left;
  width: 100%;
  text-align: center;
`;
export const AnchorStyles = styled.a`
  padding-left: 30px;
  font-weight: bold;
  background: url(${LinkArrowImage}) no-repeat center left;
  text-decoration: none;
  color: #9fb577;
  background-size: 9px auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  font-family: 'Figtree-Regular', arial, sans-serif;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  -ms-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
  :hover {
    background-position: 10px center;
  }
  @media (max-width: 576px) {
    line-height: 22px;
  }
`;

export const AnchorStylesInternal = styled(Link)`
  padding-left: 30px;
  font-weight: bold;
  background: url(${LinkArrowImage}) no-repeat center left;
  text-decoration: none;
  color: #9fb577;
  background-size: 9px auto;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  font-family: 'Figtree-Regular', arial, sans-serif;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  -ms-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
  :hover {
    background-position: 10px center;
  }
  @media (max-width: 576px) {
    line-height: 22px;
  }
`;

export const Header2 = styled.h2`
  margin: 0 0 20px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: 0.02em;
  @media (max-width: 992px) {
    font-size: 27px;
    line-height: 32px;
  }
`;
export const HomeTextContainer = styled.div`
  float: left;
  padding: 20px 0 0 30px;
  text-align: center;
`;
