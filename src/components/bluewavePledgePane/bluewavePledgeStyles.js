import styled from 'styled-components';
import { Row, Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import LinkArrowImage from '../../images/icon-home-arrow.png';

export const AnchorLinkStyles = styled.a`
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
  }
  @media (max-width: 576px) {
    line-height: 22px;
  }
`;

export const AnchorLinkStylesInternal = styled(Link)`
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
  }
  @media (max-width: 576px) {
    line-height: 22px;
  }
`;

export const BluewavePledgeContainer = styled.div`
  background: #f2f0ee url(${(props) => props.bgUrl}) no-repeat top center;
  @media (max-width: 1200px) and (min-width: 992px) {
    background-position: -350px top;
  }
  @media (max-width: 992px) {
    background: #f2f0ee;
  }
`;
export const BluewavePledgeInnerContainer = styled(Container)`
  margin: auto;
  padding: 60px 0;
  color: #666;
  align-content: center;
  @media (min-width: 992px) {
    max-height: 360px;
  }
  @media (max-width: 767px) {
    padding: 30px !important;
  }
`;
export const BluewaveHeartImage = styled.img`
  max-width: 100%;
`;
export const FireImage = styled.img`
  max-width: 100%;
  @media (max-width: 767px) {
    height: auto;
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 344px;
  }
`;
export const LeftContent = styled.div`
  text-align: center;
  
  margin: 0 0 0 80px;
  @media (max-width: 1199px) {
    width: 275px;
    padding: 15px 0 0 0;
    margin: 0 0 0 50px;
  }
  @media (max-width: 991px) {
    width: 325px;
    padding: 15px 15px 0 0;
    margin: 0 0 0 50px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 30px;
    margin:0;
  }
      
}
`;
export const LeftContentP = styled.p`
  margin: 0 0 30px 0;
  padding: 0;
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  @media (max-width: 576px) {
    font-size: 14px;
    line-height: 19px;
  }
`;
export const EnergyPledgeLink = styled.div`
  padding-left: 30px;
  font-weight: bold;
  background: url(${LinkArrowImage}) no-repeat center left;
  background-size: 9px auto;
  text-decoration: none;
  color: #9fb577;
`;
export const RowContent = styled(Row)`
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
