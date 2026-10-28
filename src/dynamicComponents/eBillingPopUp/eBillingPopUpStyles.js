import arrowWhite from '../../images/arrow-white.png';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import crossImage from '../../images/crossImage.png';
import { Link } from 'gatsby';
export const ParaText = styled.div`
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 30px;
  line-height: 30px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 20px;
  }
`;
export const ParaText2 = styled.div`
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #037EC4;
`;

export const LinkStyle = styled.a`
  color: ${(props) => props.$color ?? '#00457C'};
  text-decoration: none;
  display: block;
  position: relative;
  margin: 7px auto 0 auto;
  font-family: 'Figtree-Light', arial, sans-serif;
  text-transform: none;
  font-size: 50px;
  line-height: 50px;
  opacity: 0.85;
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
  }
  :hover {
    color: ${(props) => props.$color ?? '#E8A300'};
  }
`;
export const LinkStyleInternal = styled(Link)`
  color: ${(props) => props.$color ?? '#00457C'};
  text-decoration: none;
  display: block;
  position: relative;
  margin: 7px auto 0 auto;
  font-family: 'Figtree-Light', arial, sans-serif;
  text-transform: none;
  font-size: 50px;
  line-height: 50px;
  opacity: 0.85;
  @media (max-width: 991px) {
  }
  @media (max-width: 767px) {
  }
  :hover {
    color: ${(props) => props.$color ?? '#E8A300'};
  }
`;

export const MainModal = styled(Modal)`
  border: none !important;
  background: none !important;
  text-align: center;
  .modal-dialog {
    max-width: 600px !important;
  }
  .modal-content {
    max-height: 350px !important;
  }
`;

export const CustomerSelect = styled(Container)`
  padding: 40px 0;
  background: #fff url(${(props) => props.$imageUrl}) no-repeat center -100px;
  max-width: 100% !important;
  overflow: hidden;
  @media (max-width: 767px) {
    padding: 0;
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
`;

export const RowWrapper = styled(Row)`
  margin: 30px auto 0 auto !important; ;
`;

export const ResidentialHeader = styled.h1`
  display: block;
  margin: 5px 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 25px;
  line-height: 28px;
  color: #858e53;
`;

export const CommercialHeader = styled.h1`
  display: block;
  margin: 5px 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 25px;
  line-height: 28px;
  color: #ce903c;
`;
export const TopImage = styled.img`
  width: auto;
  height: 100px;
  margin: 0 0 20px 0;
  @media (max-width: 767px) {
    width: 125px;
    height: auto;
  }
`;
