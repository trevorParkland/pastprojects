import styled from 'styled-components';

export const Body = styled.div`
  width: 840px;
  margin: 0 auto;
  padding: 80px 0;
  padding-bottom: 0;
  text-align: center;
  @media (max-width: 870px) {
    width: 100%;
    padding: 35px;
    padding-bottom: 0;
  }
`;

export const Header = styled.h1`
  font-size: 30px;
  padding: 0;
  margin: 0 0 25px 0;
  text-align: center;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-weight: normal !important;
  color: #00493b;
  @media (max-width: 870px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

export const Header2 = styled.h2`
  display: inline-block;
  margin: 0 0 35px 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-weight: bold !important;
  text-align: center;
  color: #00493b;
  font-size: 18px;
  line-height: 20px;
  @media (max-width: 870px) {
    font-size: 20px;
    line-height: 25px;
  }
`;

export const Paragraph = styled.p`
  color: #00493b;
  background: #f9f9f9;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
`;
