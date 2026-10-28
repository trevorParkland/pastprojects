import styled from 'styled-components';
import LinkArrowBlue from '../../images/arrow-blue.png';
import ArrowImage from '../../images/arrow-blue.png';

export const MainDiv = styled.div`
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 22px;
  }
`;
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
  b {
    font-family: 'Figtree-Bold', arial, sans-serif;
    font-weight: bold;
  }
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

export const UnorderedList = styled.ul`
  margin: 0 0 30px 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 4px 0 4px 25px;
  list-style: none;
  background: url(${LinkArrowBlue}) no-repeat 0 10px;
  background-size: 7px auto;
  p {
    margin: 0;
  }
`;

export const ImageStyle = styled.img`
  float: right;
  height: auto !important;
  width: auto !important;
  border: 0;
  vertical-align: top;
  margin: 0 0 30px 30px;
  max-width: 30%;
  @media (max-width: 767px) {
    display: block;
    float: none;
    margin: 0 0 30px 0 !important;
    max-width: 40%;
  }
  @media (max-width: 399px) {
    width: 60% !important;
  }
`;

export const HorizontalBreak = styled.hr`
  height: 1px;
  border: none;
  background: #e5e5e5;
  margin: 50px 0;
  clear: both;
  opacity: 1;
  @media (max-width: 767px) {
    margin: 30px 0;
  }
`;
export const ButtonStyle = styled.a`
  display: inline-block;
  padding: 16px 85px 14px 15px;
  margin: 0 5px 5px 0;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #037ec4 !important;
  background: url(${ArrowImage}) 95% center no-repeat rgb(235, 245, 250);
  background-size: 12px auto;
  transition: background-position 0.15s ease-out;
  border: none;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 767px) {
    width: 100% !important;
    margin: 0 0 25px 0 !important;
  }
  :hover {
    background-position: 90% center;
    text-decoration: none;
    color: #037ec4;
  }
`;
export const SpanStyle = styled.span`
  position: relative;
  top: -105px;
  @media (max-width: 991px) {
    top: -80px;
  }
`;
