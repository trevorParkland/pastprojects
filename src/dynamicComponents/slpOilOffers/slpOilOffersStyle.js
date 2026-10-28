import styled from 'styled-components';

export const Body = styled.div`
  background: #fff;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #00493b;
`;

export const InnerBody = styled.div`
  width: 860px;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 30px;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    height: auto;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const HeaderH1 = styled.h1`
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 32px;
  line-height: 42px;
  padding: 25px 0 0 0;
  margin: 0 0 25px 0;
  color: #00493b;
  font-weight: bold;
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 38px;
    padding-top: 20px;
  }
`;

export const ImageStyle = styled.img`
  width: 107px;
  height: auto !important;
  border: 0;
  vertical-align: top;
  margin-bottom: 20px;
`;

export const HeaderH2 = styled.h2`
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: 16px;
`;

export const TextStyle = styled.p`
  font-size: 10px;
`;

export const DivStyle = styled.div`
  display: inline-block;
  width: 32%;
  text-align: center;
  font-size: 16px;
  vertical-align: top;
  @media (max-width: 991px) {
    display: block;
    width: 100%;
    padding: 25px;
  }
`;
