import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'gatsby';

export const LocationMapContainer = styled.div`
  background: #00457c;
`;
export const InnerContainer = styled(Container)`
  padding: 0 0 0 0;
  align-content: center;
  display: block;
  max-width: 100% !important;
  @media (min-width: 1200px) {
    width: 1200px !important;
  }
  @media (max-width: 1200px) {
    width: 960px !important;
  }
  @media (max-width: 991px) {
    width: 100% !important;
    padding: 0 30px 30px 30px !important;
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
  @media (max-width: 992px) and (min-width: 768px), (min-width: 1200px) {
    border-right: 1px solid #18659d;
  }
`;

export const LocationsImage = styled.img`
  max-width: 100%;
  margin: 0;
  height: auto;
  @media (min-width: 1200px) {
    width: 824px;
    height: 444px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    width: 700px;
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
export const LeftPanelSpan = styled.span`
  display: block;
  margin: 10px 0 55px 0;
  color: #5fc5ff;
  @media (max-width: 1199px) {
    margin: 10px 0 25px 0;
  }
  @media (max-width: 991px) {
    margin: 10px 0 15px 0;
  }
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
  color: #b2bc73;
  text-decoration: none;
  :hover {
    color: #5fc5ff;
  }
  @media (min-width: 1200px) {
    &.padding-20 {
      padding-right: 20px;
    }
    &.margin-20 {
      margin-left: 20px;
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
  color: #b2bc73;
  text-decoration: none;
  :hover {
    color: #5fc5ff;
  }
  @media (min-width: 1200px) {
    &.padding-20 {
      padding-right: 20px;
    }
    &.margin-20 {
      margin-left: 20px;
    }
  }
`;
