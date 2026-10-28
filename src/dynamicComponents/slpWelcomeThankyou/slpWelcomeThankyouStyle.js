import styled from 'styled-components';

export const MainDiv = styled.div`
  margin: 0;
  padding: 0;
  color: #00483b;
  background: #fff;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export const InnerDiv = styled.div`
  padding: 75px;
  text-align: center;
  width: 820px;
  margin: 0 auto;
  @media (max-width: 991px) {
    padding: 35px;
    width: 100%;
  }
`;

export const ImageStyle = styled.img`
  display: block;
  width: 100%;
  max-width: 320px;
  height: auto;
  margin: 0 auto 50px auto;
`;

export const HeaderH1 = styled.h1`
  padding: 0;
  margin: 0 0 30px 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 50px;
  line-height: 50px;
  color: rgb(0, 69, 124);
  font-weight: normal !important;
  text-transform: uppercase;
  letter-spacing: 0.02em;
`;

export const ParaText = styled.p`
  margin: 0 0 20px 0;
  padding: 0;
  color: #484848;
  font-size: 20px;
`;
