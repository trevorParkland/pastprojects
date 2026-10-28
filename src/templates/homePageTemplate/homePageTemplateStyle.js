import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';

export const HomePageContainer = styled.div`
  text-align: center;
`;

export const HomePageAlert = styled.div`
  background: #f49a3c;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  padding: 20px 25px;
`;

export const HomePageTopBar = styled.div`
  background: #00457c;
  text-align: center;
  text-transform: uppercase;
  color: #5fc5ff;
`;

export const HomePageNavBar = styled.div`
  background: white;
  text-align: center;
  text-transform: uppercase;
`;

export const HomePageOfferBanner = styled.div`
  background: -webkit-radial-gradient(
    center 80px,
    100% 180%,
    #1a93cf 0%,
    #00457c 50%
  );
  color: white;
  min-height: 200px;
`;

export const HomePageImageBanner = styled.div`
  background: #f2f0ee url(${(props) => props.imageUrl}) no-repeat top center;
  color: #666;
  min-height: 50px;
`;
export const HomeLeftAlignBannerText = styled.div``;

export const HomePledgeBannerImage = styled.img`
  height: 20px;
`;

export const HomePageFeatureCol = styled(Col)`
  height: 200px;
  &:hover {
    background: #00457c;
  }
`;

export const ImageContainer = styled(Container)`
  max-width: 1900px !important;
  @media (max-width: 1200px) {
    max-width: 1200px !important;
  }
  @media (max-width: 991px) {
    max-width: 1000px !important;
  }
  @media (max-width: 767px) {
    max-width: 780px !important;
  }
`;
