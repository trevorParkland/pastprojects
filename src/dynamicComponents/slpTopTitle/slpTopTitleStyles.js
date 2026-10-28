import styled from 'styled-components';

export const TitleContainer = styled.div`
  width: 100%;
  height: 855px;
  margin: 0 auto;
  padding: 65px 0px 0px 0px;
  background: url(${(props) => props.$background}) repeat-x bottom center;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    padding: 45px 35px 0 35px;
    text-align: center;
    background-size: cover;
    height: 510px;
  }
`;

export const LinkStyle = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const ImageStyle = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  height: auto;
  margin-bottom: 40px;
  @media (max-width: 991px) {
    display: block;
    max-width: 300px;
    height: auto;
    margin: 0 auto;
  }
`;
export const HeadingContainer = styled.div`
  width: 650px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 991px) {
    width: 450px;
  }
  @media (max-width: 767px) {
    width: 100%;
    max-width: 330px;
  }
`;
export const Heading = styled.h1`
  text-align: center;
  position: relative;
  font-size: 60px;
  line-height: 65px;
  margin-bottom: 30px;
  color: #fff;
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Black', arial, sans-serif;
  font-weight: bold !important;
  code {
    color: #ffc905;
    font-family: 'Figtree-Black', arial, sans-serif;
    font-size: 4vw;
    line-height: 4vw;
  }
  @media (max-width: 991px) {
    line-height: 100%;
    font-size: 30px;
    margin-top: 20px;
    font-weight: bold;
  }
`;
export const ParaText = styled.p`
  margin-bottom: 40px;
  font-family: 'Figtree-Black', arial, sans-serif;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffbd18;
  font-weight: bold;
  a {
    i {
      font-size: inherit;
      line-height: inherit;
    }
  }
  @media (max-width: 991px) {
    font-size: 12px;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }
`;
