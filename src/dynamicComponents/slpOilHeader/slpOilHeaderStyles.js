import styled from 'styled-components';
import GreenArch from '../../images/green_arch.png';
import DarkGreenArch from '../../images/dark_green_arch.png';

export const ImageStyle = styled.div`
  background: bottom/cover no-repeat url(${(props) => props.$background});
  width: 100%;
  border: 0;
  vertical-align: top;
  text-align: center;
  position: relative;
  z-index: 1;
  :before {
    background: top/cover no-repeat url(${GreenArch});
    bottom: 15px;
    height: 315px;
    content: '';
    position: absolute;
    z-index: -1;
    left: 0px;
    width: 100%;
    @media (max-width: 767px) {
      height: 270px;
    }
  }
  ::after {
    bottom: -6px;
    height: 120px;
    background: top/cover no-repeat url(${DarkGreenArch});
    content: '';
    position: absolute;
    z-index: -1;
    left: 0px;
    width: 100%;
  }
  @media (max-width: 991px) {
    background-size: cover;
  }
`;
export const HeaderH2 = styled.h2`
  text-align: left;
  position: relative;
  margin: 0 0 35px 0;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 3rem;
  line-height: 3.5rem;
  color: #fff;
  font-weight: bold;
  @media (max-width: 1399px) {
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 1.8rem;
    line-height: 2.3rem;
    margin-bottom: 28px;
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
  font-family: 'Figtree-Regular, arial, sans-serif';
  color: #1a4538;
  display: inline;
  line-height: 2.7rem;
  font-size: 3rem;
  text-align: left;
  font-weight: 400;
  margin-bottom: 0px;
  max-width: 40em;
  font-style: normal;
  @media (max-width: 767px) {
    font-size: 2.1rem;
    line-height: 2.2rem;
    code {
      font-size: 40px;
      line-height: 40px;
      color: #ffc905;
      font-family: 'Figtree-Regular', arial, sans-serif;
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
      font-family: 'Figtree-Regular', arial, sans-serif;
    }
  }
  @media (max-width: 767px) {
    font-size: 2.1rem;
    line-height: 2.2rem;

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
  font-family: 'Figtree-Regular', arial, sans-serif;
  margin-bottom: 0px;
  font-size: 40px;
  font-weight: 400;
  color: #1a4538;
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
  text-align: left;
  margin-bottom: 30px;
`;
export const FloatImageStyle = styled.img`
  max-width: 100%;
  width: 100%;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
    height: auto;
    padding-top: 10px;
    padding-bottom: 30px;
    margin: 0 auto;
  }
`;
export const ImageLogoStyle = styled.img`
  height: auto;
  width: 650px;
  max-width: 100%;
`;
export const InnerDiv = styled.div`
  padding-left: 6.5rem;
  padding-right: 6.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  @media (max-width: 1399px) {
    max-width: 920px;
  }
  @media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const ImageContainer = styled.div`
  padding-top: 80px;
  margin-bottom: 80px;
  @media (max-width: 767px) {
    margin-bottom: 20px;
    padding-top: 80px;
  }
`;

export const AssetContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  height: auto;
  max-width: 100%;
  @media (max-width: 991px) {
    padding: 0;
  }
`;

export const ButtonStyle = styled.a`
  text-transform: uppercase;
  position: absolute;
  top: 2vh;
  right: 2vh;
  background-color: #d9ece8;
  border: none;
  font-family: 'Helvetica Neue';
  z-index: 3;
  text-decoration: none;
  line-height: 100%;
  font-size: 1rem;
  font-weight: 500;
  justify-content: center;
  line-height: 1.5rem;
  margin: 0 1rem 1.2rem 0;
  padding: calc(0.4rem - 1px) 1rem;
  color: #111;
  :hover {
    background: linear-gradient(to bottom, #2b8265 5%, #41c464 100%);
    background-color: #2b8265;
    color: #111;
  }
`;
