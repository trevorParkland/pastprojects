import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';
import arrowDown from './../../images/arrow-blue-mobile-nav.png';
import arrowUp from './../../images/arrow-blue-up.png';
import arrowBlue from './../../images/arrow-blue.png';
import { Link } from 'gatsby';

export const AccordionContainer = styled(Accordion)``;
export const AccordionItem = styled(Accordion.Item)`
  @media print {
    .accordion-collapse {
      display: block !important;
      height: auto !important;
    }
  }
`;

export const ListContainer = styled.ul`
  padding: 0;
  margin: 0 0 30px 0;
`;

export const ListText = styled.li`
  background: url(${arrowBlue}) no-repeat 0 10px;
  background-size: 7px auto;
  list-style: none;
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  padding: 4px 0 4px 25px;
  margin-bottom: 0;
  @media (max-width: 767px) {
    line-height: 22px;
  }
`;

export const AccordionHeader = styled(Accordion.Header)`
  border-bottom: 1px solid #e5e5e5;
  button {
    font-weight: normal !important;
    font-family: 'Figtree-Light', arial, sans-serif !important;
    font-size: 20px !important;
    line-height: 25px !important;
    letter-spacing: 0.02em !important;
    color: #48b4f1;
    :hover {
      text-decoration: none;
      color: #3989c3;
    }
    ::after {
      width: 40px;
      background: #fff url(${arrowDown}) no-repeat center right;
      background-size: 39px auto;
      padding-left: 50px;
    }
  }
  .accordion-button: not(.collapsed) {
    background-color: #fff;
    ::after {
      background: #fff url(${arrowUp}) no-repeat center right;
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
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
`;

export const LinkStyle = styled.a`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #9fb577;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  :hover {
    color: #00457c;
  }
`;

export const LinkStyleInternal = styled(Link)`
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #9fb577;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  :hover {
    color: #00457c;
  }
`;

export const AnchorButton = styled.a`
  padding: 16px 85px 14px 15px;
  margin: 0 5px 30px 0;
  text-decoration: none;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #037ec4;
  background: #ebf5fa url(${arrowBlue}) no-repeat 95% center;
  &:hover {
    background: #ebf5fa url(${arrowBlue}) no-repeat 90% center;

    transition: background-position 0.15s ease-out;
    border: none;
  }
  @media (max-width: 767px) {
    display: block;
  }
`;
export const AnchorButtonInternal = styled(Link)`
  padding: 16px 85px 14px 15px;
  margin: 0 5px 30px 0;
  text-decoration: none;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #037ec4;
  background: #ebf5fa url(${arrowBlue}) no-repeat 95% center;
  &:hover {
    background: #ebf5fa url(${arrowBlue}) no-repeat 90% center;

    transition: background-position 0.15s ease-out;
    border: none;
  }
  @media (max-width: 767px) {
    display: block;
  }
`;

export const ParaText = styled.div`
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  position: relative;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    line-height: 22px;
  }
`;
