import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const SLPMainContainer = styled.div`
  color: #00483b;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  width: 100%;
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export const InnerBody = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 60px 0;
  @media (max-width: 991px) {
    width: 100%;
    padding: 35px;
  }
`;
export const HeaderH2 = styled.h2`
  text-align: center;
  position: relative;
  color: rgb(0, 69, 124);
  font-size: 36px;
  line-height: 46px;
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-weight: normal !important;
  @media (max-width: 991px) {
    margin-bottom: 20px;
    font-size: 26px;
    line-height: 33px;
  }
`;
export const HeaderH3 = styled.h3`
  text-align: ${(props) => props.textAlign};
  position: relative;
  margin: 0 0 35px 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 32px;
  line-height: 37px;
  font-weight: normal !important;
  color: #00a6e8;
  @media (max-width: 991px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const Columns = styled.div`
  :after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ' ';
    clear: both;
    height: 0;
  }
`;

export const HorizontalBreak = styled.hr`
  height: 1px;
  border: none;
  background: rgba(0, 0, 0, 0.15);
  margin: 30px 0;
  clear: both;
  @media (max-width: 991px) {
    margin: 25px 0;
  }
`;
export const ColumnThird = styled(Col)`
  width: 30%;
  text-align: center;
  position: relative;
  border-right: 1px solid #ededed;
  padding: 7px 25px 3px 25px !important;
  :last-child {
    border: none;
  }
  p {
    margin: 0 !important;
  }
  @media (max-width: 991px) {
    padding: 15px 0 !important;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid #ededed;
    ul:first-child {
      margin-top: -30px !important;
    }
  }
`;

export const HeadingH4 = styled.h4`
  padding: 0 0 15px 0;
  margin: 0 0 35px 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 24px;
  line-height: 29px;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-weight: normal !important;
  @media (max-width: 1399px) {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const ParaText = styled.p`
  margin-bottom: 0;
  @media (max-width: 1399px) {
    margin-bottom: 30px;
  }
  i {
    font-style: italic;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 1399px) {
      font-size: 15px;
      line-height: 22px;
    }
    @media (max-width: 767px) {
      font-size: 13px;
      line-height: 20px;
    }
  }
  a {
    margin-bottom: 0 !important;
  }
  code {
    margin: 0;
  }
`;
export const OrderedList = styled.ol`
  margin: 0 0 30px 0;
  padding: 0;
  list-style-type: none;
  counter-reset: standard-counter;
`;
export const ListItem = styled.li`
  padding: 0 0 15px 50px;

  background-size: 30px auto;
  list-style: none;
  margin: 0;
  @media (max-width: 767px) {
    padding-top: 1px;
    padding-left: 40px;
    background-position: 0 0;
    background-size: 25px auto;
  }
`;
export const LinkStyle = styled.a`
  text-decoration: none;
  color: #00a6e8;
  transition: 0.25s ease-out;
`;
export const UnorderedList = styled.ul`
  margin: 0 0 30px 0;
  padding: 0;
`;

export const HeadingContainer = styled.div`
  width: 580px;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.02em;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const RowStyle = styled(Row)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  @media (max-width: 991px) {
    display: block;
  }
`;
