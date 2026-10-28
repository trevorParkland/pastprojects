import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

export const PromoBannerContainer = styled.div`
  background: #fff;
`;

export const PromoBannerInnerContainer = styled(Container)`
  color: #fff;
  margin: 0 auto;
  align-content: center;
`;

export const AnchorTag = styled.a`
  text-decoration: none;
`;

export const AnchorTagInternal = styled(Link)`
  text-decoration: none;
`;

export const Column = styled(Col)`
  text-align: center;
  display: block;
  @media (min-width: 992px) {
    padding: 20px 0 20px 0;
  }
  @media (max-width: 992px) {
    padding-top: 15px !important;

  }

  img {
    max-width: 100%;
  }
`;
