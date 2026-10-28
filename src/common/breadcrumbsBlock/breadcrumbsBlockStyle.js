import styled from 'styled-components';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'gatsby';

export const HeaderContainer = styled.div`
  background: #00457c;
  min-height: 60px;
  @media (max-width: 425px) {
    height: auto;
  }
  @media print {
    background: none;
  }
`;

export const InnerContainer = styled(Container)`
  width: 1200px !important;

  max-width: 1200px !important;

  @media (max-width: 1200px) {
    max-width: 960px !important;
  }

  @media (max-width: 991px) {
    max-width: 728px !important;
  }

  @media (max-width: 767px) {
    max-width: 100% !important;
  }
`;

export const HeaderRow = styled(Row)`
  text-align: center;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 0 !important;
`;

export const HeaderCol = styled(Col)`
  min-height: 69px;
  padding: 0 30px !important;
  max-width: 280px !important;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : '#049de1'};
  border-top: 9px solid
    ${(props) => (props.$borderTopColor ? props.$borderTopColor : '#037ec4')};
  margin: -9px 0 0 0 !important;
  @media print {
    border-top: none;
  }
`;

export const RowInHeaderCol = styled(Row)`
  align-items: center;
  height: 100%;
  min-height: 56px;
`;

export const ParaCol = styled(Col)`
  padding: 10px 0 10px 55px !important;
  align-self: center;
  @media (max-width: 991px) {
    min-height: 60px;
    align-items: center;
    display: flex;
  }
  @media (max-width: 767px) {
    min-height: 60px;
    display: flex;
    align-items: center;
  }
  @media (max-width: 425px) {
    padding: 10px 25px !important;
  }
`;
export const PrinterLogoCol = styled(Col)`
  padding: 0px 0 0 55px;
  align-self: center;
  @media print {
    display: none;
  }
`;

export const HeaderText = styled.div`
  font-size: 18px;
  line-height: 18px;
  color: #fff;
  text-align: left;
  @media print {
    display: none;
  }
`;
export const ParaText = styled.div`
  color: #5fc5ff;
  text-align: left;
  font-size: 11px;
  letter-spacing: 1px;
  a {
    color: #5fc5ff;
    text-decoration: none;
    &:hover {
      color: #ffffff;
    }
  }
`;
export const AnchorText = styled(Link)`
  margin: 0 10px 0 0;
  text-transform: uppercase;
`;
export const AnchorText2 = styled.a`
  margin: 0 10px 0 10px;
`;
export const PathText = styled.div`
  display: inline-block;
  margin: 0 10px 0 10px;
  color: #fff;
`;
export const LogoImage = styled(Image)`
  width: 23px;
  height: auto;
  vertical-align: top;
  cursor: pointer;
  @media print {
    display: none;
  }
`;
export const DownArrowImage = styled(Image)`
  padding-top: 3px;
  width: 16px;
  height: auto;
  vertical-align: top;
  @media print {
    display: none;
  }
`;
