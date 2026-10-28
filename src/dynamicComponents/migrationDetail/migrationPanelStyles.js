import styled from 'styled-components';
import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

export const MigrationPanelContainer = styled.div`
  background-color: #fff;
`;
export const MigrationPanelInnerContainer = styled(Container)`
  display: block;
  width: 1200px !important;
  height: auto;
  padding: 55px 0 50px 0;
  margin: 0 auto;
  @media (max-width: 1199px) {
    width: 950px !important;
  }
  @media (max-width: 991px) {
    width: 690px !important;
  }
  @media (max-width: 767px) {
    width: 100% !important;
    padding: 35px !important;
  }
`;
export const ImproveText = styled.p`
  text-align: center;
  color: #0c483a;
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-family: 'Figtree-Regular', arial, sans-serif;
  line-height: 26px;
  letter-spacing: 0.02em;
  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
export const LaptopImage = styled.img`
  max-width: 100%;

  @media (max-width: 767px) {
    max-width: 250px;
    width: 100%;
    padding: 30px 0 40px 0;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    width: 300px;
    padding: 30px 0 40px 0;
  }
  @media (min-width: 992px) {
    width: 300px;
  }
  @media (min-width: 1200px) {
    width: 347px;
  }
`;
export const Header2 = styled.h2`
  text-align: center;
  color: #0c483a;
  line-height: 40px;
  font-family: 'Figtree-Bold', arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  font-weight: bold;
  font-size: 35px;
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 34px;
  }
  @media (min-width: 1200px) {
    font-size: 47px;
    line-height: 50px;
  }
`;
export const LeftSpan = styled.span`
  display: block;
  margin-bottom: 10px;
  color: #ffca05;
  font-size: 20px;
  line-height: 26px;
  @media (min-width: 1200px) {
    font-size: 27px;
    line-height: 33px;
  }
`;
export const RightSpan = styled.span`
  display: block;
  height: auto;
  font-size: 13px;
  font-family: 'Figtree-Regular', arial, sans-serif;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.7);
  word-wrap: normal;
  letter-spacing: 0.02em;
`;
export const LinkAttribute = styled.a`
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  margin: 25px 0 0 0;
  font-weight: bold;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #0c483a;
  text-decoration: none;
  background: #ffca05;
  border-radius: 10px;
  :hover {
    color: #ffca05;
    background: #0c483a;
  }
  transition: all 0.25s ease-out;
  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const LinkAttributeInternal = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
  margin: 25px 0 0 0;
  font-weight: bold;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #0c483a;
  text-decoration: none;
  background: #ffca05;
  border-radius: 10px;
  :hover {
    color: #0c483a;
    background: #00457c;
  }
  transition: all 0.25s ease-out;
  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const RightCol = styled(Col)`
  padding-top: 24px;
  margin: 0 auto;
`;
