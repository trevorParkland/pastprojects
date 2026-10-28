import arrowWhite from '../../images/arrow-white.png';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import crossImage from '../../images/crossImage.png';

export const ParaText = styled.div`
  color: #fff;
  white-space: pre-wrap;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    line-height: 22px;
  }
`;
export const ParaText2 = styled.div`
  color: #fff;
  margin-bottom: 20px;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 20px;
  line-height: 24px;
  margin: 0 0 20px 0;
  letter-spacing: 0.02em;
  text-align: center;
  @media (max-width: 767px) {
    font-size: 17px;
    line-height: 20px;
    display: inline;
  }
`;

export const AnchorButtonResidential = styled.a`
  display: inline-block;
  background-color: #858e53 !important;
  margin-bottom: 3px !important;
  margin: 0 5px 5px 0;
  padding: 16px 40px 14px 15px;
  text-decoration: none;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #fff !important;
  background: url(${arrowWhite}) no-repeat 99% center;
  background-size: 23px auto;
  :hover {
    color: #fff !important;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const AnchorButtonCommercial = styled.a`
  display: inline-block;
  background-color: #ce903c !important;
  margin-bottom: 3px !important;
  margin: 0 5px 5px 0;
  padding: 16px 40px 14px 15px;
  text-decoration: none;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #fff !important;
  background: url(${arrowWhite}) no-repeat 99% center;
  background-size: 23px auto;
  :hover {
    color: #fff !important;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const MainModal = styled(Modal)`
  border: none !important;
  background: none !important;
  .modal-dialog {
    max-width: 800px !important;
  }
  .modal-content {
    max-height: 325px !important;
  }
`;

export const CustomerSelect = styled(Container)`
  padding: 60px 40px 30px 40px !important;
  background: #00457c;
  max-width: 100% !important;
  overflow-y: auto;

  @media (max-width: 767px) {
    padding: 30px !important;
  }
`;

export const CloseImage = styled.a`
  background: url(${crossImage});
  position: absolute;
  right: -18px;
  top: -18px;
  width: 36px;
  height: 36px;
`;

export const Column = styled(Col)`
  padding-right: 10px;
  padding-left: 30px;
  text-align: center;
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }
`;

export const ResidentialHeader = styled.h1`
  display: block;
  margin: 5px 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 25px;
  line-height: 28px;
  color: #858e53;
  @media (max-width: 767px) {
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
  }
`;
export const CommercialHeader = styled.h1`
  display: block;
  margin: 5px 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 25px;
  line-height: 28px;
  color: #ce903c;
  @media (max-width: 767px) {
    display: inline-block;
    font-size: 17px;
    line-height: 20px;
  }
`;
