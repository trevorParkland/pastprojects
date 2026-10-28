import styled from 'styled-components';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'gatsby';

export const FooterContainer = styled(Container)`
  background: #ededed;
  margin: 0;
  display: block;
`;
export const InnerContainer = styled(Container)`
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  font-size: 12px;
  line-height: 130%;
  color: #9a9a9a;
  /* color: #00447c; */
`;
export const ParaStyles = styled.p`
  font-size: 15px;
  color: #9a9a9a;
  margin: 0 0 20px 0;
  padding: 0;
`;
