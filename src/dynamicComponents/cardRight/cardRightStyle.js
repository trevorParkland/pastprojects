import styled from 'styled-components';
import LinkArrowImage from '../../images/arrow-blue.png';

export const BlockQuote = styled.blockquote`
  text-align: center;
  display: block;
  float: right;
  width: 47%;
  padding: 30px 40px 10px 40px;
  margin: 0 0 30px 30px;
  /* border: 4px solid #d9ece8; */
  border: 4px solid rgb(205, 229, 243);
  background: #fff;
  color: #666;
  font-style: normal;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    float: none !important;
    width: 100% !important;
    margin: 0 0 25px 0;
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
  a {
    color: #037ec4;
    :hover {
      color: #037ec4;
    }
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
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
  i {
    color: #edca11;
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
  margin-bottom: 20px;
  max-width: 60%;
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
