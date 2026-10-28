import styled from 'styled-components';

export const HeadContainer = styled.div`
  background: #00457c;
`;

export const Head = styled.div`
  width: 560px;
  height: 80px;
  margin: 0 auto;
  padding: 23px 0 0 0;
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    padding: 25px 0;
  }
`;
export const HeadLogo = styled.img`
  float: left;
  width: 252px;
  height: auto;
  padding: 0 18px 0 0;
  text-align: right;
  @media (max-width: 991px) {
    padding: 0 0 10px 0;
    display: block;
    margin: 0 auto;
    text-align: center;
    float: none;
  }
`;
export const LinkStyle = styled.a`
  cursor: pointer;
`;

export const TitleDiv = styled.div`
  padding: 25px 0 0 18px;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const ParaText = styled.div`
  float: left;
  padding: 10px 0 0 18px;
  font-size: 15px;
  line-height: 15px;
  text-transform: uppercase;
  font-family: 'Figtree-Bold', arial, sans-serif;
  color: #1c9bd7;
  margin: 0 0 20px 0;
  letter-spacing: 0.02em;
  @media (max-width: 991px) {
    float: none;
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 13px;
    line-height: 13px;
  }
  b {
    font-family: 'Figtree-Bold', arial, sans-serif;
  }
`;
