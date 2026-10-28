import styled from 'styled-components';
import ArrowBlue from '../../images/arrow-blue-small.png';

export const WhiteContainer = styled.div`
  background: #fff;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: rgba(0, 0, 0, 0.75);
`;

export const InnerDiv = styled.div`
  height: 700px;
  width: 740px;
  margin: 0 auto;
  padding: 40px 0 310px 0;
  @media (max-width: 767px) {
    padding: 30px;
    width: 100%;
    height: auto;
  }
`;

export const ParaText = styled.p`
  margin: 0 0 20px 0;
  padding: 0;
  text-align: center;
`;

export const ButtonStyle = styled.a`
  display: inline-block;
  padding: 16px 85px 14px 15px;
  margin: 0 5px 5px 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #037ec4;
  background: #ebf5fa url(${ArrowBlue}) no-repeat 99% center;
  background-size: 23px auto;
  transition: background-position 0.15s ease-out;
  border: none;
  cursor: pointer;
  text-decoration: none !important;
  letter-spacing: 0.02em;
  :hover {
    text-decoration: none !important;
    background-position: 95% center;
    color: #11467b;
    outline: none;
  }
`;
export const HeaderH1 = styled.h1`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  text-align: center;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 35px;
    line-height: 40px;
  }
`;
