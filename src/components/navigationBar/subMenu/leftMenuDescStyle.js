import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import arrowBlue from '../../../images/arrow-blue.png';

export const MainContainer = styled(Container)`
  float: right !important;
  width: 600px !important;
  padding: 0 60px 0 80px !important;
  @media (max-width: 1200px) {
    width: 480px !important;
    padding: 0 60px 0 0 !important;
  }
  @media (max-width: 992px) {
    width: 364px !important;
    padding: 0 60px 0 0 !important;
  }
`;

export const Heading2 = styled.h2`
  margin: 0px 0px 25px 0px;
  font-size: 38px;
  line-height: 38px;
  padding: 0px;
  color: #037ec4;
  font-family: 'Figtree-Light', arial, sans-serif;
  letter-spacing: 0.02em;
`;

export const Desc = styled.p`
  margin: 0 0 30px 0;
  text-align: right;
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
`;

export const LinkContainer = styled.p``;

export const LinkButton = styled.a`
  width: auto !important;
  background-color: #fff !important;
  display: inline-block;
  padding: 16px 85px 14px 15px;
  margin: 0 5px 5px 0;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  text-align: left;
  color: #037ec4;
  background: #ebf5fa url(${arrowBlue}) no-repeat 95% center;
  background-size: 10px auto;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #037ec4;
    background-position: 90% center;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 992px) {
    border: 1px solid #e5e5e5;
    width: 100% !important;
  }
`;
export const LinkButtonInternal = styled(Link)`
  width: auto !important;
  background-color: #fff !important;
  display: inline-block;
  padding: 16px 85px 14px 15px;
  margin: 0 5px 5px 0;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  text-align: left;
  color: #037ec4;
  background: #ebf5fa url(${arrowBlue}) no-repeat 95% center;
  background-size: 10px auto;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #037ec4;
    background-position: 90% center;
    transition: all 0.3s ease-in-out;
  }
  @media (max-width: 992px) {
    border: 1px solid #e5e5e5;
    width: 100% !important;
  }
`;
