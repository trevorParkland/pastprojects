import styled from 'styled-components';

export const HeaderDiv = styled.div`
  background: #023027;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: rgba(0, 0, 0, 0.75);
`;

export const InnerDiv = styled.div`
  width: 740px;
  height: auto;
  margin: 0 auto;
  padding: 55px 75px;
  @media (max-width: 767px) {
    padding: 55px 35px;
    width: 100%;
    height: auto;
  }
`;

export const Header = styled.h1`
  font-size: 46px;
  line-height: 46px;
  font-family: 'Figtree-Bold';
  color: #fff;
  padding: 0;
  text-align: center;
`;
