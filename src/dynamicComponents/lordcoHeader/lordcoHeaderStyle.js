import styled from 'styled-components';

export const HeadContainer = styled.div`
  background: #11467b;
  height: auto;
`;

export const Head = styled.div`
  width: 560px;
  height: 130px;
  margin: 0 auto;
  padding: 27px 0 0 0;
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    padding: 25px;
    text-align: center;
  }
`;

export const HeadLogo = styled.img`
  height: 90px;
  width: auto;
  padding: 15px;
  @media (max-width: 991px) {
    display: inline-block;
    height: 100px;
    width: auto;
    padding: 15px;
  }
`;

export const SubBar = styled.div`
  background: #1d9cd7;
  height: 37px;
  @media (max-width: 991px) {
    height: 50px;
  }
`;

export const HeaderH2 = styled.h2`
  font-family: Figtree-Medium, arial, sans-serif;
  color: rgb(255, 255, 255);
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  padding: 9px 5px 5px;
  font-weight: normal !important;
  line-height: 130%;
  letter-spacing: 0.02em;
  margin: 0.83em 0px;
  @media (max-width: 991px) {
    padding-top: 15px;
    font-size: 18px;
  }
`;
