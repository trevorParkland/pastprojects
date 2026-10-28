import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'gatsby';

export const LocationMapContainer = styled.div`
  background: #00457C url(${(props) => props.$background}) no-repeat top center;
  @media (max-width: 1199px) {
    background-position: -445px 0;
  }
  @media (max-width: 991px) {
    background-position: -300px -50px;
  }
  @media (max-width: 767px) {
    background-position: -100px 0;
    background-size: 200% auto;
  }
`;
export const InnerContainer = styled.div`
  display: block;
  width: 1200px;
  height: 350px;
  margin: 0 auto;
  @media (max-width: 1199px) {
    width: 960px;
    height: 350px;
  }
  @media (max-width: 991px) {
    width: 728px;
    height: 580px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 0 30px 30px 30px;
  }
`;
export const RowContent = styled(Row)`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const LeftColumn = styled(Col)`
  display: block;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 35px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  letter-spacing: 0.02em;
  @media (min-width: 1200px) {
    font-size: 46px;
    line-height: 54px;
    width: 367px !important;
  }
  @media (max-width: 992px) {
    padding-top: 40px;
  }
`;

export const ColumnWithRightBorderTab = styled(Col)`
  @media (max-width: 991px) and (min-width: 768px), (min-width: 991px) {
    *:first-child {
      border-right: 1px solid #18659d;
    }
  }
  padding: 0 !important;
`;

export const RightCol = styled(Col)`
  padding: 0 !important;
  @media (max-width: 767px) {
    margin-left: -30px;
  }
`;

export const LocationsImageLink = styled.img`
  vertical-align: top;
  position: absolute;
  top: 6px;
  left: 0;
  width: 26px;
  height: auto;
`;

export const AnchorLocationsStyles = styled.a`
  position: relative;
  display: inline-block;
  float: none;
  padding: 13px 0 13px 43px;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffc325;
  text-decoration: none;
  :hover {
    color: #fff;
  }
  @media (min-width: 768px) {
    &.padding-20 {
      padding-right: 20px;
    }
    &.margin-20 {
      margin-left: 20px;
    }
  }
  @media (max-width: 767px) {
    &.padding-20 {
      padding-right: 0;
    }
    &.margin-20 {
      margin-left: 0;
    }
  }
`;

export const AnchorLocationsStylesInternal = styled(Link)`
  position: relative;
  display: inline-block;
  float: none;
  padding: 13px 0 13px 43px;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #ffc325;
  text-decoration: none;
  :hover {
    color: #fff;
  }
  @media (min-width: 768px) {
    &.padding-20 {
      padding-right: 20px;
    }
    &.margin-20 {
      margin-left: 20px;
    }
  }
  @media (max-width: 767px) {
    &.padding-20 {
      padding-right: 0;
    }
    &.margin-20 {
      margin-left: 0;
    }
  }
`;
export const ColStyle = styled(Col)`
  padding: 60px 0 0 0;
  text-align: center;
  @media (max-width: 991px) {
    padding: 340px 0 0px 0;
  }
  @media (max-width: 767px) {
    padding-top: 45vw;
    padding-bottom: 0;
  }
`;

export const HeaderH2 = styled.h2`
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
`;
