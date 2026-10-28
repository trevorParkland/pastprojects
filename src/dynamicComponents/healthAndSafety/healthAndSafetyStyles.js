import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import LinkArrowImage from '../../images/arrow-blue.png';
import { Link } from 'gatsby';

export const CustomerServiceContainer = styled.div`
  background: #fff;
`;
export const InnerContainer = styled(Container)`
  margin: 0 auto;
  padding: 60px 0;
  @media (max-width: 991px) {
    padding: 30px !important;
  }
`;
export const RowContent = styled(Row)`
  display: flex;
  justify-content: center;
  margin: auto;
`;
export const LeftColumn = styled(Col)`
  position: relative;
  display: block;
  height: auto;
  margin: 0 auto;
  padding: 10px;
  @media (max-width: 991px) {
    padding: 0;
  }
`;
export const MiddleColumn = styled(Col)`
  text-align: center;
  padding: 12px 40px 0 40px;
  @media (max-width: 991px) {
    padding: 8px 40px 0 40px !important;
    margin: 0 0 40px 0;
  }
`;
export const RightColumn = styled(Col)`
  display: block;
  padding: 0;
  text-align: right;
`;

export const ToZeroImage = styled.img`
  margin: 0;
  border: 0;
  vertical-align: top;
  width: auto;
  height: 150px;
  @media (min-width: 1199px) {
    height: 175px;
  }
  @media (max-width: 767px) {
    height: auto;
    width: 50%;
    display: inline-block;
    margin: 0 auto 20px auto;
  }
`;
export const ImageColumn = styled(Col)`
  text-align: center;
`;

export const LeftPara = styled.p`
  margin: 0 0 20px 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  color: #666;
  letter-spacing: 0.02em;
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 19px;
  }
`;

export const AnchorStyles = styled.a`
  padding-left: 30px;
  font-weight: bold;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  background: url(${LinkArrowImage}) no-repeat center left;
  text-decoration: none;
  color: #9fb577;
  background-size: 9px auto;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  -ms-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
  :hover {
    background-position: 10px center;
    color: #037ec4;
  }
  @media (max-width: 576px) {
    line-height: 22px;
  }
`;

export const AnchorStylesInternal = styled(Link)`
  padding-left: 30px;
  font-weight: bold;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  background: url(${LinkArrowImage}) no-repeat center left;
  text-decoration: none;
  color: #9fb577;
  background-size: 9px auto;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  -ms-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
  :hover {
    background-position: 10px center;
    color: #037ec4;
  }
  @media (max-width: 576px) {
    line-height: 22px;
  }
`;

export const Header2 = styled.h2`
  padding: 0;
  font-size: 30px;
  line-height: 40px;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  letter-spacing: 0.02em;
  margin-bottom: 20px !important;
  @media (min-width: 1200px) {
    font-size: 45px;
    line-height: 55px;
  }
`;
