import styled from 'styled-components';

export const ImageStyle = styled.div`
  background: url(${(props) => props.$background}) repeat-x bottom center;
  height: 690px;
  margin: 0 0 40px 0;
  @media (max-width: 991px) {
    background-size: 1200px;
    height: 470px;
    margin: 0;
  }
`;
export const HeaderH2 = styled.h2`
  text-align: center !important;
  position: relative;
  margin: 0 0 35px 0;
  font-family: 'Figtree-Black', arial, sans-serif;
  font-size: 45px;
  line-height: 50px;
  color: #fff;
  span {
    color: #fec119;
  }
  @media (max-width: 1399px) {
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

export const TitleDiv = styled.div`
  position: absolute;
  text-align: center !important;
  width: 100%;
  top: 280px;
`;
export const Heading = styled.h1`
  text-align: center;
  position: relative;
  font-family: 'Figtree-Black', arial, sans-serif;
  font-size: 4vw;
  line-height: 4vw;
  color: #fff;
  display: inline;
  code {
    color: #ffc905;
    font-family: 'Figtree-Black', arial, sans-serif;
    font-size: 4vw;
    line-height: 4vw;
  }
  @media (max-width: 1199px) {
    font-size: 74px;
    line-height: 74px;
    code {
      font-size: 74px;
      line-height: 74px;
      color: #ffc905;
      font-family: 'Figtree-Black', arial, sans-serif;
    }
  }
  @media (max-width: 991px) {
    font-size: 45px;
    line-height: 45px;
    margin-bottom: 30px;
    code {
      font-size: 45px;
      line-height: 45px;
      color: #ffc905;
      font-family: 'Figtree-Black', arial, sans-serif;
    }
  }
  @media (max-width: 767px) {
    font-size: 45px;
    line-height: 45px;
    code {
      font-size: 45px;
      line-height: 45px;
      color: #ffc905;
      font-family: 'Figtree-Black', arial, sans-serif;
    }
  }
`;
export const SpanHeading = styled.h1`
  text-align: center;
  position: relative;
  font-family: 'Figtree-Black', arial, sans-serif;
  font-size: 4vw;
  line-height: 4vw;
  color: #ffc905;
  display: inline;
  code {
    color: #ffc905;
    font-family: 'Figtree-Black', arial, sans-serif;
    font-size: 4vw;
    line-height: 4vw;
  }
  @media (max-width: 1199px) {
    font-size: 74px;
    line-height: 74px;
    code {
      font-size: 74px;
      line-height: 74px;
      color: #ffc905;
      font-family: 'Figtree-Black', arial, sans-serif;
    }
  }
  @media (max-width: 991px) {
    font-size: 45px;
    line-height: 45px;
    margin-bottom: 30px;
    code {
      font-size: 45px;
      line-height: 45px;
      color: #ffc905;
      font-family: 'Figtree-Black', arial, sans-serif;
    }
  }
  @media (max-width: 767px) {
    font-size: 45px;
    line-height: 45px;
    code {
      font-size: 45px;
      line-height: 45px;
      color: #ffc905;
      font-family: 'Figtree-Black', arial, sans-serif;
    }
  }
`;
export const HeadingContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 320px;
  @media (max-width: 991px) {
    top: 170px;
  }
`;
export const FloatImageStyle = styled.img`
  max-width: 400px;
  height: auto;
  @media (max-width: 991px) {
    display: block;
    max-width: 300px;
    width: 100%;
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    margin: 0 auto;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 40px 0px 0px 0px;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0px 35px 10px 35px;
  }
`;
