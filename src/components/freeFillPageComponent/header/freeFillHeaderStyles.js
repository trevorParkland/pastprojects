import styled from 'styled-components';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'gatsby';

export const BlastImageContainer = styled(Container)`
  background: #00538c;
  width: 100%;
`;
export const HeaderContainer = styled(Container)`
  background: #11467b;
`;
export const ParaStyles = styled.p`
  float: left;
  margin: auto;
  font-size: 15px;
  line-height: 15px;
  text-transform: uppercase;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-weight: bold;
  color: #1c9bd7;
`;
export const ImageLogo = styled.img`
  max-width: 50%;
  height: auto;
  float: right;
`;
export const ImageBlast = styled.img`
  height: auto;
  max-width: 80%;
  margin: 0 auto;
  padding: 25px 0;
`;

export const AnchorTag = styled.a`
  text-decoration: none;
  color: #1d9cd7;
`;
export const RowContent = styled(Row)`
  display: flex;
  justify-content: center;
  margin: auto;
`;

export const LeftColumn = styled(Col)`
  text-align: right;
  padding: 12px;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #fff;
`;
