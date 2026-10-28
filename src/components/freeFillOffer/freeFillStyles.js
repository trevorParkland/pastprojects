import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';

export const FreeFillContainer = styled.div`
  background: -webkit-radial-gradient(
    center 80px,
    100% 180%,
    #1a93cf 0%,
    #00457c 50%
  );
`;
export const FreeFillInnerContainer = styled(Container)`
  color: #fff;
  margin: 0 auto;
  align-content: center;
`;
export const LearnMoreText = styled.p`
  text-align: center;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 0px;
  background: #1c9ad6;
  padding: 20px;
  width: 200px;
  margin: 0 auto;
  font-weight: bold;
  font-family: 'Figtree-Bold', arial, sans-serif;
  text-transform: uppercase;
`;
export const FillFreeText = styled.p`
  text-align: center;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 36px;
  text-transform: uppercase;
  line-height: 42px;
  margin-bottom: 0px;
`;
export const FireImage = styled.img`
  max-width: 300px;
  width: 100%;
  height: auto;
  padding: 30px;
`;

export const AnchorTag = styled.a`
  text-decoration: none;
`;

export const Column = styled(Col)`
  text-align: center;
  display: block;
  @media (min-width: 1200px) {
    padding: 20px 0 20px 0;
  }
  @media (max-width: 767px) {
    padding: 55px 35px 60px 35px;
  }

  img {
    max-width: 100%;
  }
`;
