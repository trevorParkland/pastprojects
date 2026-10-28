import styled from 'styled-components';
import DotImage from '../../images/dot-bk.png';

export const HeaderH1 = styled.h1`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 35px;
    line-height: 40px;
  }
`;
export const HeaderH2 = styled.h2`
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

export const ParaText = styled.p`
  margin: 0 0 30px 0;
  padding: 0;
`;

export const HeaderH3 = styled.h3`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #48b4f1;
  font-size: 26px;
  line-height: 35px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`;

export const HorizontalBreak = styled.hr`
  height: 1px;
  border: none;
  background: #e5e5e5;
  margin: 50px 0;
  clear: both;
  opacity: 1 !important;
  @media (max-width: 767px) {
    margin: 30px 0;
  }
`;

export const DivStyle = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`;
