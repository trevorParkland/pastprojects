import styled from 'styled-components';
import { Col, Row, Container, Navbar } from 'react-bootstrap';
import Highlighter from 'react-highlight-words';
import { Link } from 'gatsby';

export const AboutContainer = styled(Container)`
  width: 1200px !important;
  max-width: 1200px !important;
  @media (max-width: 1200px) {
    max-width: 960px !important;
  }
  @media (max-width: 992px) {
    max-width: 728px !important;
  }
  @media (max-width: 767px) {
    width: 100% !important;
  }
  @media print {
    margin: 0 !important;
    width: 100vw !important;
    max-width: 100vw !important;
  }
`;

export const LeftContainer = styled(Col)`
  padding-top: 40px;
  padding-bottom: 40px;
  @media (min-width: 993px) {
    max-width: 280px !important;
  }
  @media (max-width: 992px) {
    position: absolute;
    right: 5%;
    padding: 25px 0 30px 0;
  }
`;

export const RightContainer = styled(Col)`
  padding: 40px 0 40px 40px !important;

  @media (max-width: 992px) {
    padding: 25px !important;
  }
`;

export const searchTitle = styled(Col)`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  font-size: 45px;
  line-height: 50px;
`;

export const inputSearch = styled.input`
  background: #ebf5fa;
  padding: 15px;
  border: none;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 14px;
  line-height: 14px;
  color: #666;
  margin-right: 5px;
  outline: none;
`;

export const inputSubmit = styled.input`
  background: #049fe1;
  padding: 16px;
  border: none;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #fff;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
`;

export const link = styled.a`
  float: right;
  position: relative;
  padding: 6px 50px 0 0;
  margin: 0;
  text-align: right;
  color: #049de1;
  font-size: 18px;
  text-decoration: none;
  font-family: Figtree-Regular, arial, sans-serif;
  letter-spacing: 0.02em;
  line-height: 18px;
  @media (max-width: 767px) {
    margin: 20px 0 0 0;
    float: left;
    padding: 12px 0 0 50px;
    text-align: left;
  }
`;

export const BreakTag = styled.br`
  @media (min-width: 1285px) {
    display: none;
  }
`;

export const locationImage = styled.img`
  position: absolute;
  width: 31px;
  height: auto;
  top: 0;
  right: 0;
  @media (max-width: 767px) {
    top: 5px;
    left: 0;
    width: 31px !important;
  }
`;

export const searchResult = styled.div`
  margin-bottom: 16px;
  margin-top: 24px;
  border-bottom: 1px solid #e5e5e5;
`;

export const resultAnchor = styled.a`
  text-decoration: none !important;
  color: #9fb577;
  font-size: 26px;
  font-weight: 300 !important;
  font-family: 'Figtree-Light', arial, sans-serif;
  webkit-transition: color 0.15s ease-out;
  -moz-transition: color 0.15s ease-out;
  -o-transition: color 0.15s ease-out;
  -ms-transition: color 0.15s ease-out;
  transition: color 0.15s ease-out;
`;


export const resultDesc = styled.p`
margin: 0px;
color: rgb(102, 102, 102);
font-family: Figtree-Regular, arial, sans-serif;
font-size: 15px;
line-height: 24px;
letter-spacing: 0.02em;
`;

export const pageLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #999;
  margin: 2px 0px 8px 0px;
  padding: 0px;
  display: block;
  font-size: 12px;
  color: #999;
  margin: 2px 0px 8px 0px;
  padding: 0px;
  display: block;
`;

export const noResults = styled.div`
  margin: 0;
  padding: 0;
  font-weight: bold;
  background-position: top center;
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  margin-top: 32px;
`;

export const paginationDiv = styled.div`
  text-align: center;
  position: relative;
`;

export const prev = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  margin-right: 4px;
  cursor: pointer;
`;
export const next = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  margin-right: 0px !important;
  cursor: pointer;
`;
export const SearchAnchor = styled.a`
  word-wrap: break-word;
  text-decoration: none;
  font-family: 'Figtree-Light',arial,sans-serif !important;
  font-size: 12px;
  color: rgb(153, 153, 153);
  margin: 2px 0px 8px;
  padding: 0px;
  display: block;

`;
export const Subheader = styled.h1`
font-family: 'Figtree-Light',arial,sans-serif !important;
font-weight: normal !important;
color: #00457c !important;
font-size: 26px;
line-height: 1.5;
text-decoration: none !important;
&:hover{
  color: #0a58ca !important;
}    
`;
export const Mainanchor = styled.a`
margin: 0px;
padding: 0px;
background-repeat: no-repeat;
background-position: center top;
color: rgb(102, 102, 102);
font-family: Figtree-Regular, arial, sans-serif;
font-size: 15px;
line-height: 24px;
letter-spacing: 0.02em;
text-decoration: none;
display: inline-block;
&:hover{
  color: #0a58ca;
}
`;
export const HighlighterHeader = styled(Highlighter)`
.HighlighterHeader{
  background-color: #efe795;
  &:hover{
    color: #0a58ca;
  }
}
    text-decoration: none;
    color: rgb(159, 181, 119);
    &:hover{
      color: #0a58ca;
    }
`; 
