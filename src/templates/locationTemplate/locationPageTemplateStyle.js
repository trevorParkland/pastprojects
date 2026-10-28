import styled from 'styled-components';
import { Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import IconSearch from '../../images/icon-search.png';
import Swipe from '../../images/contentTableContainer-header.png';
import CheckBox from '../../images/checkbox.png';
import { Link } from 'gatsby';
import arrowBlue from './../../images/arrow-blue.png';
import Table from 'react-bootstrap/Table';

export const MainContainer = styled(Container)`
  text-align: left;
  width: 1200px !important;
  max-width: 1200px !important;
  padding: 45px 0 0 0 !important;
  margin: 0 auto !important;
  @media (max-width: 1200px) {
    max-width: 960px !important;
  }
  @media (max-width: 991px) {
    position: relative;
    max-width: 728px !important;
  }
  @media (max-width: 767px) {
    width: 100% !important;
    padding: 25px !important;
  }
  @media print {
    margin: 0 !important;
    width: 100vw !important;
    max-width: 100vw !important;
  }
`;

export const LocationContainer = styled(Container)`
  width: 1200px !important;
  max-width: 1200px !important;
  padding: 0 !important;
  margin: 0 auto;
  @media (max-width: 1200px) {
    max-width: 960px !important;
  }
  @media (max-width: 992px) {
    max-width: 728px !important;
  }
  @media (max-width: 767px) {
    width: 100% !important;
    padding: 25px !important;
    margin: 0;
  }
  @media print {
    margin: 0 !important;
    width: 100vw !important;
    max-width: 100vw !important;
  }
`;

export const GoogleMapContainer = styled.div`
  height: 500px;
  display: flow-root;
`;

export const TableSubContainer = styled(Col)`
  width: 100% !important;
  @media (max-width: 767px) {
    overflow-x: scroll;
    overflow-y: hidden;
    padding-top: 50px !important;
    background: #fff url(${Swipe}) no-repeat top left;
    background-size: contain;
  }
`;
export const LocationTable = styled(Table)`
  width: 100% !important;
  --bs-table-striped-bg: #fff !important;
  --bs-table-bg: rgba(0, 0, 0, 0.05) !important;

  @media (max-width: 767px) {
    width: 300% !important;
  }
  @media print {
    width: 100%;
  }
`;
export const CountriesListContainer = styled.div`
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  background-color: #00457c !important;
`;

export const CountriesListItem = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 15px;
  white-space: nowrap;
  background-color: ${(props) =>
    props.$selectedProvince == props.$currentProvince ? 'white' : `#00457c`};
  color: ${(props) =>
    props.$selectedProvince == props.$currentProvince ? '#00457c' : `white`};
  font-family: 'Figtree-Medium', arial, sans-serif;
  padding: 15px 22px 13px 22px !important;
  &:hover {
    background-color: ${(props) =>
      props.$selectedProvince == props.$currentProvince ? 'white' : `#074980`};
  }
`;

export const THead = styled.thead`
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.02em;
  font-family: 'Figtree-Regular', arial, sans-serif;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  background: #037ec4;
  text-shadow: none;
  border: none;
  @media print {
    border: 1px solid #888;
    th {
      border: 1px solid #888;
    }
    tr {
      border: 1px solid #888;
    }
  }
`;
export const TBody = styled.tbody`
  vertical-align: middle !important;
  @media print {
    border: 1px solid #888;
    th {
      border: 1px solid #888;
    }
    tr {
      border: 1px solid #888;
    }
  }
`;

export const Td = styled.td`
  padding: 6px 10px !important;
  font-size: 14px;
  text-align: left;
  border: none;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #666 !important;
  font-family: 'Figtree-Regular', arial, sans-serif;
  @media print {
    border: 1px solid #888;
  }
`;

export const CityText = styled.div`
  color: #666;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  text-transform: none;
  letter-spacing: 0.02em;
`;

export const LinkStyle = styled.a`
  text-decoration: none;
`;
export const LinkStyle2 = styled.a`
  display: block;
  text-decoration: none;
  color: #9fb577;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  :hover {
    text-decoration: none;
    color: #3989c3;
  }
`;
export const InlineLink = styled(LinkStyle2)`
  display: inline-block;
`;

export const AddressText = styled(CityText)`
  color: #9fb577;
  font-weight: normal;
  font-family: 'Figtree-Regular', arial, sans-serif;
  :hover {
    text-decoration: none;
    color: #3989c3 !important;
  }
`;
export const MapLeftBarContainer = styled.div`
  position: relative;
  z-index: 2;
  display: block;
  width: 280px;
  height: auto;
  margin: -45px 0 0 0;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 10%);
  background: #fff;
  top: -456px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const MapLeftBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
export const MapH2 = styled.h2`
  margin: 0 0 20px 0;
  padding: 0;
  font-family: 'Figtree-Medium', arial, sans-serif;
  color: #00457c;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  margin-bottom: 25px;
`;

export const CheckboxPin = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Figtree-Regular', arial, sans-serif;
  color: #037ec4;
  font-size: 18px;
  line-height: 22px;
  margin: 0 0 10px 0;
`;

export const LeftPanelHor = styled.hr`
  margin-bottom: 30px !important;
  margin-top: -6px !important;
  height: 0.7px;
`;

export const CheckBoxInput = styled(Form.Check)`
  margin-right: 23px !important;
  .form-check-input {
    margin-top: 0 !important;
    background-position: 0 -23px !important;
    background: url(${CheckBox}) no-repeat 0 0;
    padding: 2px 0 0 22px;
    display: inline-block;
    width: 100%;
    height: 22px;
    border-radius: 0 !important;
    box-shadow: none !important;
    border-color: #fff !important;
    cursor: pointer;
    :checked[type='checkbox'] {
      background: url(${CheckBox}) no-repeat 0 0;
      background-size: 22px auto;
    }
  }
`;

export const DropPinIcon = styled.img`
  width: 39px;
  height: auto;
  margin: -10px 10px 20px 0;
  border: 0;
  vertical-align: top;
  float: left;
`;

export const HorizontalBreak = styled.hr`
  margin: 10px 0 30px 0;
`;
export const SectionBreak = styled.hr`
  margin: 50px 0;
`;

export const ListingContainer = styled.div`
  display: block;
  margin: 5px 0 0 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
`;

export const ListingTitle = styled.a`
  text-decoration: none;
  color: #9fb577;
  transition: color 0.15s ease-out;
`;

export const ListingImage = styled.img`
  float: left;
  width: 32px;
  height: auto;
  margin: 0 20px 0 0;
  border: 0;
  vertical-align: top;
`;

export const MapSearch = styled.div`
  position: absolute;
  z-index: 99;
  top: 10px;
  left: 300px;
  width: 360px;
  height: 45px;
  background: #fff url(${IconSearch}) no-repeat center right;
  background-size: 35px auto;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 20%);
  @media (max-width: 991px) {
    top: 0;
    left: 0;
    position: relative;
    display: flex;
    margin: auto;
  }
`;

export const MapSearchSub = styled.div`
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const MapSearchInput = styled.div`
  float: left;
  width: 83%;
  height: 45px;
`;

export const MapSearchInputField = styled.input`
  width: 100%;
  height: 45px;
  padding: 14px 17px;
  background: none;
  border: none;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #888;
  outline: none;
`;

export const MapSearchSubmit = styled.div`
  float: right;
  width: 17%;
  height: 45px;
`;

export const MapSearchSubmitInput = styled.input`
  width: 100%;
  height: 45px;
  background: none;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  outline: none;
`;
export const ParaText = styled.div`
  font-size: 15px;
  line-height: 24px;
  margin: 0 0 30px 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  padding: 0;
  letter-spacing: 0.02em;
  color: #666;
  @media (max-width: 767px) {
    line-height: 22px;
  }
  b {
    font-weight: bold;
    font-family: 'Figtree-Bold', arial, sans-serif;
  }
`;
export const AddressParaText = styled(ParaText)`
  display: block;
  margin-bottom: 0;
`;
export const ItalicText = styled(ParaText)`
  margin-bottom: 0;
  font-style: italic;
`;
export const ParaText2 = styled(ParaText)`
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 40px;
  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 991px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const ParaText3 = styled(ParaText)`
  display: block;
  margin-top: -20px;
  font-size: 10px;
  line-height: 13px;
  margin-bottom: 0;
`;

export const Header = styled.h2`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #037ec4;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;
export const MiddleBlockHeader = styled(Header)`
  color: #00457c;
`;
export const NoRecordHeader = styled(Header)`
  margin-bottom: 20px;
  font-size: 25px;
  line-height: 30px;
`;
export const Header3 = styled(Header)`
  color: #48b4f1;
  font-size: 26px;
  line-height: 35px;
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`;
export const BoldHeader = styled.h3`
  margin: 0 0 25px 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #11467b;
  font-weight: normal !important;
  letter-spacing: 0.02em;
`;

export const TopHeader = styled(Header)`
  margin: 0 0 10px 0;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const ImageStyle = styled.img`
  width: auto;
  height: 90px;
  margin: 0 0 25px 0;
  border: 0;
  vertical-align: top;
`;

export const LogoStyle = styled.img`
  float: right;
  width: auto;
  height: auto;
  text-align: right;
  border: 0;
  vertical-align: top;
`;

export const Header2 = styled.h3`
  margin: 0 0 25px 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #11467b;
  padding: 0;
`;

export const BoldText = styled.div`
  margin: 0 0 10px 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 16px;
  line-height: 16px;
  color: #666;
  padding: 0;
  font-weight: normal !important;
`;
export const AnchorButton = styled.a`
  display: inline-block;
  padding: 16px 85px 14px 15px;
  margin: 0 5px 30px 0;
  text-decoration: none;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #037ec4;
  background: #ebf5fa url(${arrowBlue}) no-repeat 95% center;
  &:hover {
    background: #ebf5fa url(${arrowBlue}) no-repeat 90% center;

    transition: background-position 0.15s ease-out;
    border: none;
  }
`;

export const ListContainer = styled.ul`
  padding: 0;
  margin: 0 0 30px 0;
`;

export const ListText = styled.li`
  background: url(${arrowBlue}) no-repeat 0 10px;
  background-size: 7px auto;
  list-style: none;
  color: #666;
  text-decoration: none;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  padding: 4px 0 4px 25px;
  margin-bottom: 0;
  @media (max-width: 767px) {
    line-height: 22px;
  }
`;
export const Column = styled(Col)`
  padding-right: 40px !important;
`;
export const TopLeft = styled(Col)`
  padding-right: 45px !important;
`;
export const AnchorStyle = styled.a`
  text-decoration: none;
  color: #3989c3;
  -moz-transition: color 0.15s ease-out;
  -o-transition: color 0.15s ease-out;
  -ms-transition: color 0.15s ease-out;
  transition: color 0.15s ease-out;
  :hover {
    text-decoration: none;
    color: #9fb577;
  }
`;
export const AnchorStyleInternal = styled.a`
  text-decoration: none;
  color: #3989c3;
  -moz-transition: color 0.15s ease-out;
  -o-transition: color 0.15s ease-out;
  -ms-transition: color 0.15s ease-out;
  transition: color 0.15s ease-out;
  :hover {
    text-decoration: none;
    color: #9fb577;
  }
`;

export const ImageContainer = styled.div`
  display: inline-block;
  width: 105px;
  height: 105px;
  border: 4px solid #e4f0f6;
  border-radius: 50%;
  margin: 0 20px 10px 0;
  padding: 0;
  cursor: pointer;
  background-image: url(${(props) => props.$backgroundImage});
  background-repeat: no-repeat;
  background-size: 97px 97px;
  :hover {
    background-image: url(${(props) => props.$hoverUrl});
    background-size: 97px 97px;
  }
`;
export const ImageContainerWithoutBorder = styled(ImageContainer)``;

export const MapStyle = styled.div`
  width: 100%;
  height: 370px;
  @media (max-width: 991px) {
    height: 400px;
  }
`;

export const EastImage = styled.img`
  width: 100%;
  height: auto;
  border: 0;
  vertical-align: top;
`;

export const NoRecordLeftCol = styled(Col)`
  padding: 55px 0 0 0 !important;
  @media (max-width: 1200px) {
    padding: 40px 0 0 0 !important;
  }
  @media (max-width: 991px) {
    text-align: center !important;
    padding-left: 100px !important;
    padding-right: 100px !important;
  }
  @media (max-width: 767px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`;
export const NoRecordRightCol = styled(Col)`
  padding: 20px 0 0 0 !important;
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  @media (max-width: 992px) {
    width: 100%;
    box-shadow: none !important;
    border: 0 !important;
    padding: 0 !important;
  }
  @media print {
    display: none !important;
  }
`;

export const NavbarCollapse = styled(Navbar.Collapse)`
  background: #f5f5f5;
  z-index: 1;
  @media (min-width: 991px) {
    &.navbar-collapse {
      flex-direction: column;
      align-items: flex-start;
      background: #fff;
    }
  }
`;

export const TabContainer = styled.div`
  @media (max-width: 991px) {
    padding: 25px;
    background: #f5f5f5;
    position: absolute;
  }
`;

export const ResponsiveMenuSection = styled(Row)`
  margin-top: 0px;
  background-color: #049de1;
  border-top: 9px solid #037ec4;
  padding: 10px;
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
  @media print {
    display: none !important;
  }
`;

export const ResponsiveCol = styled(Col)`
  padding-top: 9px;
`;

export const ArrowImage = styled.img`
  width: 20px;
  height: auto;
  float: right;
  margin-right: 10px;
`;

export const HeaderText = styled.h1`
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 18px;
  line-height: 18px;
  color: #fff;
  text-align: left;
`;

export const LocationDataCol = styled(Col)`
  margin-top: 45px;
  @media (max-width: 991px) {
    margin-top: 15px;
  }
`;
