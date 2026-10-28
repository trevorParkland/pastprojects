import styled from 'styled-components';

export const BodyContainer = styled.div`
  background: #fff;
`;
export const Body = styled.div`
  color: #00493b;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 18px;
  line-height: 130%;
  letter-spacing: 0.02em;
  padding-bottom: 30px;
  width: 860px;
  margin: 0 auto;
  padding: 0;
  padding-top: 35px;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    height: auto;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const HeaderH1 = styled.h1`
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 32px;
  line-height: 42px;
  padding: 15px 0 0 0;
  margin: 0 0 25px 0;
  color: #00493b;
  font-weight: bold;
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 38px;
    padding-top: 20px;
  }
`;

export const IconDiv = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 34%;
  text-align: center;
  font-size: 16px;
  @media (max-width: 991px) {
    display: block;
    width: 100%;
    padding: 25px;
  }
`;

export const ImageStyle = styled.img`
  height: 100px;
  border: 0;
  vertical-align: top;
  margin-bottom: 20px;
`;

export const Header = styled.strong`
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  display: block;
  margin-bottom: 20px;
`;
export const TextStyle = styled.div`
  margin-bottom: 25px;
  display: block;
  b {
    font-family: 'Figtree-Bold', arial, sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: block;
  }
  code {
    font-family: 'Figtree-Regular', arial, sans-serif;
    text-align: center;
    color: #00493b;
    font-size: 21px;
    line-height: 24px;
  }
`;
export const SubText = styled.div`
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin-top: 10px;
`;

export const ParaText = styled.p`
  margin: 0 0 20px 0;
  padding: 0;
`;
export const MarketoDiv = styled.div`
  width: 520px;
  margin: 0 auto;
  padding: 25px 0;
  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    padding: 0 20px;
  }
`;

export const AnchorStyle = styled.a`
  text-decoration: none;
  color: #00493b;
`;
