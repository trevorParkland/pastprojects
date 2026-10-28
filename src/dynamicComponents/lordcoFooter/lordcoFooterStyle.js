import styled from 'styled-components';

export const FootContainer = styled.div`
  background: #003663;
  height: auto;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const FootWrap = styled.div`
  width: 1060px;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (max-width: 1200px) {
    width: 90%;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Foot = styled.div`
  display: inline-block;
  width: 650px;
  text-align: left;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 14px;
  line-height: 130%;
  color: #fff;
  white-space: pre-line;
  @media (max-width: 1200px) {
    width: 100%;
    text-align: center;
    font-size: 13px;
  }
`;

export const FootLogo = styled.img`
  width: 300px;
  height: auto;
  display: inline;
  padding-left: 50px;
  @media (max-width: 1200px) {
    margin: 0 auto;
    max-width: 275px;
    display: block;
    float: none;
    padding-left: 0;
    padding-top: 20px;
  }
`;
