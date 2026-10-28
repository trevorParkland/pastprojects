import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import GreenArc from '../../images/green_arch.png';
import DarkGreenArc from '../../images/dark_green_arch.png';
export const ImageStyle = styled.div`
  background: center/cover no-repeat url(${(props) => props.$background});
  position: relative;
  z-index: 1;
  padding-top: 30px;
  padding-bottom: 35px;
  @media (max-width: 767px) {
    background-size: cover;
  }
  :before {
    background: top/cover no-repeat url(${GreenArc});
    bottom: 15px;
    height: 315px;
    content: '';
    position: absolute;
    z-index: -1;
    left: 0px;
    width: 100%;
    @media (max-width: 767px) {
      height: 270px;
    }
  }
  ::after {
    bottom: -6px;
    height: 120px;
    background: top/cover no-repeat url(${DarkGreenArc});
    content: '';
    position: absolute;
    z-index: -1;
    left: 0px;
    width: 100%;
  }
`;

export const FloatImageStyle = styled.img`
  margin-bottom: -40px;
  margin-top: -338px;
  max-width: 620px;
  margin-left: 320px;
  @media (max-width: 1399px) {
    margin-top: -275px;
    max-width: 79%;
    margin-left: 130px;
  }
  @media (max-width: 767px) {
    margin-top: 0px;
    max-width: 620px;
    margin-left: 0;
    width: 100%;
  }
`;

export const HeaderH2 = styled.h2`
  position: relative;
  margin-bottom: 0.8rem;
  font-family: 'Figtree-Black', arial, sans-serif;
  font-size: 3rem;
  line-height: 3.2rem;
  font-weight: bold;
  color: #fff;
  span {
    color: #fec119;
  }
  @media (max-width: 1399px) {
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
`;
export const HeaderH3 = styled.h3`
  position: relative;
  margin-bottom: 0.9rem;
  font-family: 'Figtree-Black', arial, sans-serif;
  font-size: 3.2em;
  line-height: 3.5rem;
  font-weight: bold;
  color: #fbc807;
  span {
    color: #fec119;
  }
  @media (max-width: 1399px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;
export const RowStyle = styled(Row)`
  display: grid;
  grid-gap: 0 1.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: auto;
  justify-content: center;
  text-align: center;
  @media (max-width: 991px) {
    display: block;
  }
`;

export const Container = styled.div`
  padding-left: 6.5rem;
  padding-right: 6.5rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  width: 100%;
  @media (max-width: 1399px) {
    max-width: 920px;
  }
  @media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ImageContainer = styled.div`
  text-align: center !important;
  margin-left: auto;
  margin-top: -100px;
  margin-bottom: -40px;
  @media (max-width: 1440px) {
    margin-top: -80px;
    max-width: 79%;
  }
  @media (max-width: 424px) {
    width: 100%;
    margin-left: 0px;
    margin-bottom: 30px;
    margin-top: 0px;
  }
`;
export const HeadingContainer = styled.div`
  width: 470px;
  text-align: left;
  @media (max-width: 1399px) {
    max-width: 40em;
    width: 370px;
  }
  @media (max-width: 991px) {
    width: 350px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
