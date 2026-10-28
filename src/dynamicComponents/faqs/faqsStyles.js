import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';
import ArrowBlue from '../../images/arrow-blue.png';
import ArrowDown from '../../images/arrow-blue-mobile-nav.png';
import ArrowUp from '../../images/arrow-blue-up.png';

export const AccordionContainer = styled(Accordion)``;
export const AccordionItem = styled(Accordion.Item)`
  @media print {
    .accordion-collapse {
      display: block !important;
      height: auto !important;
    }
  }
  border: none !important;
`;
export const ParaText = styled.div`
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  position: relative;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    line-height: 22px;
  }
`;
export const ListContainer = styled.ul`
  padding: 0;
  margin: 0 0 30px 0;
`;

export const ListText = styled.li`
  margin: 0;
  padding: 4px 0 4px 25px;
  list-style: none;
  background: url(${ArrowBlue}) no-repeat 0 10px;
  background-size: 7px auto;
  list-style: none;
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  padding: 4px 0 4px 25px;
  margin-bottom: 0;
  @media (max-width: 767px) {
    line-height: 22px;
  }
  ${ParaText} {
    margin-bottom: 0;
  }
`;

export const AccordionHeader = styled(Accordion.Header)`
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 0 !important;
  button {
    font-weight: normal !important;
    font-family: 'Figtree-Light', arial, sans-serif !important;
    font-size: 20px !important;
    line-height: 25px !important;
    letter-spacing: 0.02em !important;
    padding: 15px;
    color: #48b4f1;
    :hover {
      text-decoration: none;
      color: #037ec4;
    }
    ::after {
      width: 40px;
      background: #fff url(${ArrowDown}) no-repeat center right;
      background-size: 39px auto;
      padding-left: 50px;
    }
  }
  .accordion-button: not(.collapsed) {
    color: #0c63e4 !important;
    background-color: #fff;
    ::after {
      background: #fff url(${ArrowUp}) no-repeat center right;
      background-size: 39px auto;
      padding-left: 50px;
      transform: none;
    }
  }
  .accordion-button:focus {
    border-color: none;
    box-shadow: none;
  }
  .accordion-button:hover {
    background-color: #f5f5f5;
    ::after {
      background-color: #f5f5f5;
    }
  }
  .accordion-button:active {
    color: #037ec4 !important;
  }
`;

export const AccordionBody = styled(Accordion.Body)`
  padding: 0 20px !important;
  margin: 20px 0 0 0;
  font-size: 20px;
  line-height: 24px;
  overflow: hidden;
  display: block;
  letter-spacing: 0.02em;
  img {
    width: 100%;
  }
  table {
    position: relative;
    z-index: 99;
    width: 100%;
    margin: 0 0 30px 0;
    background: #fff;
    border-spacing: 0;
    tr {
      td {
        padding: 6px 10px;
        border: none;
        ${ParaText} {
          margin: 0 !important;
          b {
            font-style: normal;
            font-size: 14px;
            text-align: left;
            font-family: 'Figtree-Bold', arial, sans-serif;
            font-weight: bold;
          }
          i {
            font-style: normal;
          }
        }
      }
    }
    tr:nth-child(odd) {
      background: #f5f5f5;
    }
    tr:first-child {
      background: #037ec4;
      th {
        padding: 10px;
        ${ParaText} {
          margin: 0 !important;
          b {
            color: #fff !important;
            font-size: 14px;
            text-align: left;
            text-transform: uppercase;
            font-family: 'Figtree-Bold', arial, sans-serif;
            font-weight: bold;
          }
        }
      }
    }
    @media (max-width: 767px) {
      width: 300%;
    }
  }
`;

export const LinkStyle = styled.a`
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  text-decoration: none;
  color: #9fb577;
  transition: 0.25s ease-out;
  transition: background-position 0.15s ease-out;
  :hover {
    color: #037ec4;
  }
`;

export const Header2 = styled.h2`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #037ec4;
  font-size: 32px;
  line-height: 38px;
  position: relative;
  @media (max-width: 760px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;
export const Header2Center = styled.h2`
  text-align: center;
  margin-bottom: 35px;
  position: relative;
  font-family: 'MrAlex', sans-serif;
  font-size: 45px;
  line-height: 50px;
  color: #037ec4;
  padding: 0;
  font-weight: normal;
  font-style: normal;
  @media (max-width: 1439px) {
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 35px;
  }
`;
export const ButtonStyle = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 16px 85px 14px 15px;
  margin: 0 5px 20px 0;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #037ec4;
  background: url(${ArrowBlue}) 95% center no-repeat #ebf5fa;
  transition: background-position 0.15s ease-out;
  border: none;
  @media (max-width: 767px) {
    width: 100% !important;
    margin: 0 0 25px 0 !important;
  }
  :hover {
    background: url(${ArrowBlue}) 90% center no-repeat #ebf5fa;
    transition: background-position 0.15s ease-out 0s;
    border: none;
  }
`;

export const Body = styled.div`
  margin-bottom: 30px;
`;

export const SpanStyle = styled.span`
  position: relative;
  top: -200px;
  @media (max-width: 991px) {
    top: -50px;
  }
`;

export const AssetImageStyle = styled.img`
width: inherit !important;
vertical-align: top;
`
