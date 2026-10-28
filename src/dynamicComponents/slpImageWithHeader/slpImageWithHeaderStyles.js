import styled from 'styled-components';

export const HeadContainer = styled.div`
  background: #00539f;
`;

export const Head = styled.div`
  width: 320px;
  height: auto;
  margin: 0 auto;
  padding: 23px 0 23px 0;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    height: auto;
    padding: 25px 0;
  }
`;
export const HeadLogo = styled.img`
  float: left;
  width: 100%;
  height: auto;
  max-width: 300px;
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
