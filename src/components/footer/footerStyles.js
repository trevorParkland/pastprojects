import styled from 'styled-components';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'gatsby';

export const FooterContainer = styled.div`
  @media print {
    display: none;
  }
  background: #00457c;
  padding: 45px 0;
  text-align: center;
  @media (max-width: 992px) {
    padding-bottom: 20px;
  }
`;

export const FooterInnerContainer = styled(Container)`
  @media (min-width: 1200px) {
    width: 1200px !important;
  }
  @media (max-width: 1199px) {
    width: 960px !important;
  }
  @media (max-width: 991px) {
    width: 728px !important;
  }
  @media (max-width: 767px) {
    width: 100% !important;
  }
`;

export const FooterProductImage = styled(Image)`
  height: 60px;
  width: auto;
`;
export const FooterLogo = styled(Image)`
  height: 49px;
  width: auto;
`;
export const FooterSocialMediaLogo = styled(Image)`
  height: 20px;
  width: auto;
`;

export const FooterLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 0.02em;
  color: #049de1;
  &:hover {
    color: #fff;
  }
`;

export const FooterLinkInternal = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 0.02em;
  color: #049de1;
  &:hover {
    color: #fff;
  }
`;

export const FooterTextLargeScreen = styled.div`
  font-size: 20px;
  line-height: 27px;
  color: #5fc5ff;
  text-align: left;
  font-family: 'Figtree-Light', arial, sans-serif;
`;

export const FooterRow = styled(Row)`
  padding: 0 !important;
  @media (min-width: 1200px) {
    max-width: 1200px !important;
  }
`;
export const FooterCol = styled(Col)`
  @media (max-width: 992px) {
    padding: 0 !important;
  }
`;

export const FooterColNoPadding = styled(Col)`
  padding: 0 !important;
`;

export const SubFooterContainer = styled.div`
  margin-top: 20px;
  @media (max-width: 992px) {
    padding: 20px !important;
    background: #002849;
    position: absolute;
    width: 100%;
    left: 0;
  }
`;
export const FooterProductRow = styled(Row)`
  padding: 0 !important;
  @media (max-width: 992px) {
    padding: 20px !important;
  }
`;

export const SubFooterRow = styled(Row)`
  padding: 0 !important;
  @media (max-width: 992px) {
    padding-bottom: 10px !important;
  }
`;

export const ModalAnchor = styled.a`
  cursor: pointer;
`;

export const DesktopFooterContainer = styled.div`
@media(max-width: 991px) {
  display: none;
}
@media(min-width: 991px) {
  width:auto !important;
  margin-left: 5px;
}
.row {
  margin-bottom: 5px;
}
`;

export const MobileFooterContainer = styled.div`
@media(min-width: 992px) {
  display: none;  
  }

  @media(max-width: 992px) {
    width:auto;
    display: inline-flex;
    }
    .col-auto {
      margin-right: 5px;
    }

`;