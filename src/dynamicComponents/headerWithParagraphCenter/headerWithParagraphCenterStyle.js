import styled from 'styled-components';
import LinkArrowImage from '../../images/arrow-blue.png';

export const MainDiv = styled.div`
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: center;
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

  i {
    font-size: 19px;
    line-height: 28px;
    color: #666;
    font-family: 'Figtree-Regular', arial, sans-serif;
    letter-spacing: 0.02em;
    font-style: normal !important;
    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 25px;
    }
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
  background: url(${LinkArrowImage}) no-repeat 0 10px;
  background-size: 7px auto;
  p {
    margin: 0;
  }
`;
export const LinkStyle = styled.a`
  cursor: pointer;
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
