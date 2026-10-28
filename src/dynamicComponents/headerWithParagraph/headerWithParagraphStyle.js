import styled from 'styled-components';
import LinkArrowImage from '../../images/arrow-blue.png';
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
  a {
    cursor: pointer;
    text-decoration: none;
    text-decoration: none;
    code {
      color: #9fb577 !important;
    }
  }
  code {
    font-size: 12px;
    line-height: 18px;
    color: #666;
    font-family: 'Figtree-Regular', arial, sans-serif;
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
export const OrderedList = styled.ol`
  margin: 0 0 30px 0;
  padding-left: 25px;
  counter-reset: standard-counter;
  li {
    position: relative;
    margin: 0;
    background: none;
    padding: 15px 0 15px 20px;
    p {
      margin: 0px;
    }
    @media (max-width: 767px) {
      padding-left: 25px;
    }
    ::before {
      content: counter(standard-counter) '.';
      counter-increment: standard-counter;
      position: absolute;
      left: 0px;
      text-align: center;
      top: 0px;
      padding: 15px 0 0 0;
      color: #00447c;
      font-family: 'Gotham', arial, sans-serif;
      font-size: 18px;
      @media (max-width: 767px) {
        top: 11px;
        width: 30px;
        height: 30px;
        padding: 3px 0 0 0;
        font-size: 20px;
        line-height: 20px;
      }
    }
  }
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 4px 0 4px 25px;
  list-style: none;
  background: url(${LinkArrowImage}) no-repeat 0 10px;
  background-size: 7px auto;
  p {
    margin: 0;
  }
`;
export const LinkStyle = styled.a`
  cursor: pointer;
  font-size: 15px;
  text-decoration: none;
  color: #9fb577;
  :hover {
    text-decoration: none;
    color: #037ec4;
    outline: none;
  }
`;
export const ImageStyle = styled.img`
  height: auto !important;
  width: auto !important;
  border: 0;
  vertical-align: top;
  margin-bottom: 30px;
  @media (max-width: 1399px) {
    width: 100% !important;
  }
`;
export const LeftImageStyle = styled.img`
  width: 31px;
  height: auto;
  margin-right: 10px;
  border: 0px;
  vertical-align: top;
  margin-bottom: 30px;
  float: left;
  @media (max-width: 1399px) {
    float: left;
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

export const SpanStyle = styled.span`
  position: relative;
  top: -105px;
  @media (max-width: 991px) {
    top: -80px;
  }
  @media (max-width: 767px) {
    top: -70px;
  }
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56%;
  margin: 40px 0 40px 0;
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 3px #969696;
`;

export const HeaderH4 = styled.h4`
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 18px;
  color: #484848; ;
`;
export const HeaderH5 = styled.h5`
  color: #00447c;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 34px;
  line-height: 38px;
  margin: 0 0 35px;
  @media (max-width: 991px) {
    font-size: 28px;
  }
`;

export const HeaderH6 = styled.h6`
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  white-space: pre-wrap;
  font-size: 19px;
  line-height: 28px;
  margin-bottom: 30px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 19px;
    line-height: 25px;
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
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    width: 100% !important;
    margin: 0 0 25px 0 !important;
    word-break: break-word;
  }
  :hover {
    background-position: 90% center;
    text-decoration: none;
    color: #037ec4;
  }
`;
