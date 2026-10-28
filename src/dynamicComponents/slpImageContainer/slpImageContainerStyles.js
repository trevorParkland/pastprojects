import styled from 'styled-components';

export const ImageStyle = styled.div`
  background: url(${(props) => props.$background}) repeat-x bottom center;
  
  @media (max-width: 991px) {
    background-size: 1200px;
    height: 250px;
  }
`;

export const ImgContainer = styled.img`
  width: 90px;
  height: auto;
  margin: 0 auto 25px auto;
  text-align: center;
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
font-size: 34px;
line-height: 43px;
font-family: Figtree-Medium, arial, sans-serif;
margin: 0px 0px 35px;
color: rgb(17, 70, 123);
text-align: center;
letter-spacing: 0.02em;
padding: 0px !important;
font-weight: normal !important;
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
font-size: 34px;
line-height: 43px;
font-family: Figtree-Medium, arial, sans-serif;
margin: 0px 0px 35px;
color: rgb(17, 70, 123);
text-align: center;
letter-spacing: 0.02em;
padding: 0px !important;
font-weight: normal !important;
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
  
  width: 100%;
  text-align: center;
  width: 860px;
  height: auto;
  margin: 0px auto;
  padding: 50px 0px 240px;
  text-align: center;
  @media (max-width: 870px) {
    top: 170px;
  }
`;
export const FloatImageStyle = styled.img`
  width: 100%;
  height: auto;
  border: 0;
  vertical-align: top;
  width: 90px;
  height: auto;
  margin: 0px auto 25px;
  text-align: center;
  @media (max-width: 991px) {
    display: block;
    width: 290px;
    height: auto;
    padding-top: 50px;
    padding-bottom: 30px;
    margin: 0 auto;
  }
`;
export const ImageContainer = styled.div`
  width: 600px;
  height: auto;
  margin: 0 auto;
  padding: 60px 0px 0px 0px;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    padding: 0px 5% 10px 5%;
  }
`;

export const MainImageContainer = styled.div`
  background: #fff url(${(props) => props.$backgroundImage}) no-repeat top;
  background-size: contain;
  @media (max-width: 1440px) {
    background: #fff url(${(props) => props.$backgroundImage}) no-repeat top;
    background-size: cover;
  }
  @media (max-width: 991px) {
    background: #fff url(${(props) => props.$backgroundImage}) no-repeat top;
    background-size: 850px 200px;
    background-position: center -30px;
  }
  @media (max-width: 767px) {
    background: #fff url(${(props) => props.$backgroundImage}) no-repeat center;
    background-size: auto 200px;
    background-position: center -30px;
  }
  @media (max-width: 424px) {
    background-size: auto 200px;
    background-position: center -50px;
  }
`;

export const RowWrapper = styled.div`
  width: 860px;
  height: auto;
  margin: 0 auto;
  padding: 50px 0 240px 0;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    padding: 200px 50px 0 50px;
  }
`;

export const TopHeader = styled.h1`
  font-size: 34px;
  line-height: 43px;
  font-family: 'Figtree-Medium', arial, sans-serif;
  margin: 0 0 35px 0;
  padding: 0 !important;
  font-weight: normal !important;
  color: #11467b;
  text-align: center;
  letter-spacing: 0.02em;
  @media (max-width: 991px) {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 30px;
  }
`;

export const ParaTextMiddle = styled.div`
  white-space: pre-wrap;
  margin: 0 0 25px 0;
  padding: 0 15px;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #11467b;
  @media (max-width: 767px) {
    line-height: 22px;
  }
`;
