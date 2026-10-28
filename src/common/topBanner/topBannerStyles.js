import styled from 'styled-components';
import { Row, Col, Container } from 'react-bootstrap';

export const BannerContainer = styled.div`
  background: #fff url(${(props) => props.$backgroundImageUrl}) no-repeat top
    center;
  @media (max-width: 991px) {
    background: #fff url(${(props) => props.$backgroundImageTabletUrl})
      no-repeat top center;
    background-size: auto 475px;
  }
  @media print {
    display: none !important;
  }
`;
export const BannerInnerContainer = styled(Container)`
  margin: auto;
  height: 416px;
  margin-top: -116px;
  width: 1200px !important;
  @media (max-width: 1200px) {
    max-width: 960px !important;
  }
  @media (max-width: 991px) {
    margin-top: -200px;
    height: 475px;
    max-width: 728px !important;
  }
`;
export const SubInnerContainer = styled.div`
  padding-top: 180px;
  @media (min-width: 1200px) {
    padding-top: 215px;
  }
  @media (max-width: 991px) {
    padding-top: 275px;
  }
  @media print {
    display: none;
    padding: 0px;
  }
`;
export const BannerRow = styled(Row)`
  height: 100%;
  margin: auto;
`;
export const BannerCol = styled(Col)`
  display: flex;
  align-items: center;

  width: 535px !important;
  @media (max-width: 1200px) {
    width: 420px !important;
  }
  @media (max-width: 991px) {
    width: 325px !important;
  }
`;
export const HeaderText = styled.div`
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 13px;
  line-height: 17px;
  color: #00457c;
  letter-spacing: 0.02em;
  font-weight: Bold;
`;
export const ParaText = styled.div`
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '20px')};
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : '26px')};
  padding-right: ${(props) =>
    props.$paddingRight ? props.$paddingRight : '0px'} !important;
  color: #037ec4;
  letter-spacing: 0.02em;
  b {
    margin: 0 0 5px 0;
    font-family: 'Figtree-Bold', arial, sans-serif;
    font-size: 13px;
    line-height: 17px;
    /* text-transform: uppercase; */
    color: #00457c;
  }
  @media (max-width: 1200px) {
    font-size: 20px !important;
    line-height: 26px !important;
  }
`;
