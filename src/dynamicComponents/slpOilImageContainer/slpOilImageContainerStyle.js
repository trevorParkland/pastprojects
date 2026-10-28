import styled from 'styled-components';

export const Body = styled.div`
  background: #00538c;
  height: auto;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #00493b;
`;

export const FloatImageStyle = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 70px;
  border: 0;
  vertical-align: top;
  @media (max-width: 991px) {
    display: block;
    width: 290px;
    height: auto;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 0 auto;
  }
`;
export const ImageContainer = styled.div`
  width: 420px;
  height: auto;
  margin: 0 auto;
  padding: 60px 0px 0px 0px;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    padding: 0px 5% 10px 5%;
    text-align: center;
  }
`;
