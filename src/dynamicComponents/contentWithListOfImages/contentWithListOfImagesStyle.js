import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const MainDiv = styled.div`
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  display: block;
  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 22px;
    display: none;
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

export const ColumnStyle = styled(Col)``;
