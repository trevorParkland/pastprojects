import styled from 'styled-components';

export const HeadContainer = styled.div`
  background: #00457C;
`;

export const Head = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 23px 0 23px 0;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 25px 0;
    display: block;
  }
`;
export const HeadLogo = styled.img`
  float: left;
  width: 100%;
  height: auto;
  max-width: 300px;
  border: 0;
  vertical-align: top;
  @media (max-width: 991px) {
    float: none;
    padding-left: 40px;
    padding-right: 40px;
    display: block;
    margin: 0 auto;
    text-align: center;
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
  letter-spacing: 0.02em;
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 15px;
  font-family: 'Figtree-Bold', arial, sans-serif;
  color: #ffc324;
  @media (max-width: 767px) {
    line-height: 22px;
  }
  b {
    font-family: 'Figtree-Bold', arial, sans-serif;
  }
`;
