import styled from 'styled-components';

export const MainContainer = styled.div`
  background: #037ec4 url(${(props) => props.$background}) no-repeat top center;
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    background: #037ec4 url(${(props) => props.$backgroundMobile}) no-repeat top
      center;
    font-size: 15px;
    line-height: 22px;
  }
`;
export const InnerContainer = styled.div`
  display: block;
  width: 1040px;
  height: 330px;
  padding: 45px 0 0 0;
  margin: 0 auto;
  text-align: left;
  @media (max-width: 1199px) {
    width: 950px;
    padding-left: 50px;
  }
  @media (max-width: 991px) {
    width: 690px;
    padding-left: 30px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 235px 35px 35px 35px;
    text-align: center;
    display: none;
  }
`;
export const InnerContainerMobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 235px 35px 35px 35px;
    text-align: center;
    display: block;
  }
`;

export const HeaderH2 = styled.h2`
  margin-bottom: 20px;
  font-family: 'Figtree-Black', arial, sans-serif;
  font-size: 55px;
  line-height: 50px;
  text-transform: uppercase;
  color: #00483b;
  @media (max-width: 1199px) {
    margin-bottom: 20px;
    font-size: 45px;
    line-height: 40px;
  }
  @media (max-width: 767px) {
    text-align: center;
    font-size: 35px;
    line-height: 30px;
    color: #ffc116;
  }
`;
export const ParaText = styled.p`
  margin-bottom: 20px;
  @media (max-width: 1199px) {
    width: 300px;
  }
  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
    color: #fff;
  }
`;
export const anchorButton = styled.a`
  padding: 20px;
  text-align: center;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 20px;
  text-transform: uppercase;
  color: #00483b;
  background: #ffc116;
  transition: all 0.25s ease-out;
  text-decoration: none;
  display: inline-block;
  margin: 0 5px 5px 0;
  line-height: 16px;
  border: none;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 200px !important;
    margin: 0 auto !important;
  }
  :hover {
    background: #0c483a;
    color: #ffc116;
  }
`;
