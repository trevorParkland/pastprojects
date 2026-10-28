import styled from 'styled-components';

export const MainContainer = styled.div`
  display: inline-block;
  width: 32%;
  padding: 25px;
  margin-bottom: 40px;
  text-align: center;
  vertical-align: top;
  color: #00539f;
  background: #fff;
  font-family: 'Helvetica-Condensed', arial, sans-serif;
  font-size: 20px;
  line-height: 26px;
  @media (max-width: 870px) {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 40px;
    border-right: none !important;
    border-left: none !important;
  }
`;

export const Body = styled.div`
  width: 840px;
  margin: 0 auto;
  padding: 80px 0;
  padding-bottom: 0;
  text-align: center;
  ${MainContainer} {
    :nth-child(odd) {
      border-left: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
    }
  }
  @media (max-width: 870px) {
    width: 100%;
    padding: 35px;
    padding-bottom: 0;
  }
`;

export const Heading = styled.h1`
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 30px;
  margin: 0 0 25px 0;
  text-align: center;
  color: #00493b;
`;
