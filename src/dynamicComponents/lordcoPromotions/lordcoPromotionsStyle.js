import styled from 'styled-components';

export const PromotionsContainer = styled.div`
  background: #fff;
  height: auto;
  padding-bottom: 30px;
`;

export const PromotionsWrap = styled.div`
  margin: 0 auto;
  width: 900px;
  padding: 20px;
  text-align: center;
  h2 {
    color: #1d9cd7;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const HeaderH1 = styled.h1`
  font-family: Figtree-Light, arial, sans-serif;
  color: rgb(17, 70, 123);
  font-size: 34px;
  line-height: 36px;
  letter-spacing: 0.02em;
  margin: 0.67em 0px;
  font-weight: normal !important;
`;

export const Promotions = styled.div`
  text-align: center;
  margin: 0 auto;
  display: inline-block;
  padding: 15px;
  @media (max-width: 1000px) {
    padding-top: 20px;
    display: block;
  }
`;
