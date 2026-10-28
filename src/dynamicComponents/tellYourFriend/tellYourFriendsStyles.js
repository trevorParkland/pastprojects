import styled from 'styled-components';
import { Row, Container } from 'react-bootstrap';

export const TellYourFriendsContainer = styled.div`
  background: -webkit-radial-gradient(
    center 80px,
    100% 180%,
    #058268 0%,
    #00493b 50%
  );
`;
export const TellYourFriendsInnerContainer = styled(Container)`
  color: #fff;
  margin: auto;
  padding: 35px 0 45px 0;
  align-content: center;
`;
export const LearnMoreText = styled.p`
  text-align: center;
  font-size: 28px;
  line-height: 35px;
  margin-bottom: 0 px;
  background: #1c9ad6;
  padding: 20 px;
  width: 200 px;
  margin: 0 auto;
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
  max-width: 100%;
`;
export const RowContent = styled(Row)`
  width: 875px !important;
  @media (max-width: 767px) {
    width: 280px !important;
  }
`;
