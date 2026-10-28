import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const SLPMainContainer = styled.div`
  position: relative;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 20px;
  line-height: 32px;
  margin: 0 auto;
  padding: 0;
  justify-content: center;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  @media (max-width: 1399px) {
    font-size: 20px;
    line-height: 32px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Body = styled.div`
  padding: 40px 110px 0px;
  @media (max-width: 991px) {
    padding: 20px;
  }
`;
export const HeaderH2 = styled.h2`
  text-align: ${(props) => (props?.$textAlign ? 'left' : 'center')};
  position: relative;
  color: #00493b;
  font-size: 36px;
  line-height: 46px;
  padding: 50px 0 0 0;
  margin: 0 0 25px 0;
  font-weight: normal !important;
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 35px;
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
  position: relative;
  padding-right: 50px !important;
  :last-child {
    padding-right: 0px !important;
  }
  @media (max-width: 991px) {
    width: 100%;
    padding: 0px !important;
    margin-bottom: 0 !important;

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
  margin-bottom: 40px;
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
  width: 600px;
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.02em;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
