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

export const HeaderH2 = styled.h2`
  margin: 0 0 15px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00538c;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const ImageStyle = styled.img`
  max-width: 250px;
  height: auto;
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 0;
  vertical-align: top;
  @media (max-width: 991px) {
    width: 80%;
  }
`;

export const HeaderH3 = styled.p`
  font-size: 26px;
  line-height: 36px;
  margin: 0 0 20px 0;
  padding: 0;
`;

export const HeaderH4 = styled.p`
  margin: 0 0 20px 0;
  padding: 0;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-weight: bold;
`;

export const ParaText = styled.p`
  color: #777;
  margin: 0 0 20px 0;
  padding: 0;
  b {
    font-family: 'Figtree-Bold', arial, sans-serif;
    color: #00447c;
    font-size: 18px;
    letter-spacing: 0.02em;
  }
`;

export const LinkStyle = styled.a`
  text-decoration: none !important;
  color: #1d9cd7;
  :hover {
    text-decoration: none !important;
    color: #00447c;
  }
`;
export const Header4 = styled.h4`
  margin: 0 0 15px 0;
  padding: 0;
  font-weight: normal !important;
  color: #00447c;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 26px;
  line-height: 36px;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 26px;
    line-height: 36px;
  }
`;
