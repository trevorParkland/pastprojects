import styled from 'styled-components';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'gatsby';

export const AccountContainer = styled(Container)`
  height: 626px;
  background: url(${(props) => props.$backgroundImage}) no-repeat;
  background-position: ${(props) => (props.$isLeft ? 'right' : 'left')};
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: -116px;

  @media (max-width: 991px) {
    height: 600px;
    margin-top: -200px;
    background-position: ${(props) =>
      props.$isLeft ? 'top right' : 'top left'};
  }

  @media (max-width: 767px) {
    height: 350px;
    background: url(${(props) => props.$backgroundImageSmallDevice}) no-repeat
      bottom ${(props) => (props.$isLeft ? 'right' : 'left')};
    margin-top: 0;
    padding-top: 30px;
    max-width: 100% !important;
  }
`;

export const WrapperInnerDiv = styled.div`
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
  text-transform: uppercase;
  color: #037ec4;
  padding-top: 190px;
  @media (max-width: 992px) {
    padding-top: 250px;
  }
  @media (max-width: 767px) {
    padding-top: 0;
  }
`;

export const AnchorAccountType = styled.a`
  display: block;
  position: relative;
  text-decoration: none;
  margin: 7px auto 0 auto;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 46px;
  line-height: 46px;
  text-transform: none;
  text-decoration: none;
  font-weight: normal !important;
  letter-spacing: 0.02em;

  opacity: 0.85;
  color: ${(props) => props.$color};
  :hover {
    color: ${(props) => props.$color};
  }
  @media (max-width: 992px) {
    font-size: 38px;
    line-height: 46px;
  }
  @media (max-width: 767px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

export const AnchorAccountTypeInternal = styled(Link)`
  display: block;
  position: relative;
  text-decoration: none;
  margin: 7px auto 0 auto;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 46px;
  line-height: 46px;
  text-transform: none;
  text-decoration: none;
  font-weight: normal !important;
  letter-spacing: 0.02em;

  opacity: 0.85;
  color: ${(props) => props.$color};
  :hover {
    color: ${(props) => props.$color};
  }
  @media (max-width: 992px) {
    font-size: 38px;
    line-height: 46px;
  }
  @media (max-width: 767px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

export const ImageStyleArrow = styled(Image)`
  ${AnchorAccountType}:hover & {
    opacity: 1;
    transform: translateX(30px);
    transition: transform 0.3s ease;
  }
  ${AnchorAccountTypeInternal}:hover & {
    opacity: 1;
    transform: translateX(30px);
    transition: transform 0.3s ease;
  }
  width: 14px;
  height: auto;
  color: #fff;
  filter: alpha(opacity=1);
  opacity: 0;
`;

export const TabRow = styled(Row)`
  align-self: flex-end;
  width: 100%;
  text-align: center;
`;

export const WrapperTabDiv = styled(Col)`
  text-align: center;
  border-right: ${(props) => (props.$isBorder ? '1px solid #ffffff' : '0px')};
  background: ${(props) => props.$color};
  :hover {
    background: ${(props) => props.$hoverColor};
  }
`;

export const WrapperImageCol = styled(Col)`
  display: none;
  @media (min-width: 1286px) {
    display: block !important;
  }
`;

export const TextRow = styled(Row)`
  padding: 13px 0 11px 15px;
  @media (max-width: 992px) {
    padding: 10px 9px 5px 12px;
  }
  @media (max-width: 767px) {
    padding: 15px;
  }
  @media (min-width: 1400px) {
    padding: 17px 0 13px 0;
  }
`;
export const AnchorTagButton = styled.a`
  color: #ffffff;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 13px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
  @media (max-width: 992px) {
    line-height: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 13px;
    line-height: 14px;
  }
`;

export const AnchorTagButtonInternal = styled(Link)`
  color: #ffffff;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 13px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
  @media (max-width: 992px) {
    line-height: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 14px;
    line-height: 14px;
  }
`;

export const ImageStyleLogo = styled(Image)`
  ${WrapperTabDiv}:hover & {
    transform: translateX(-10px);
    transition: transform 0.3s ease;
  }
  max-width: 100%;
  height: ${(props) => props.$height};
  color: #fff;
  margin-right: 10px;
`;
