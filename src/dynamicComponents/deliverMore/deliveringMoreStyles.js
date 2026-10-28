import styled from 'styled-components';
import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

export const DeliveringMoreContainer = styled.div`
  background: #ededed;
`;
export const DeliveringMoreInnerContainer = styled(Container)`
  color: #fff;
  margin: auto;
  padding: 10px;
  align-content: center;
`;
export const RowContentCard = styled(Row)`
  display: flex;
  justify-content: center;
  @media (max-width: 992px) and (min-width: 760px) {
    margin: 0 20px 20px 20px;
  }
  @media (min-width: 992px) {
    margin-bottom: 34px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (max-width: 760px) {
    padding: 30px;
  }
`;
export const DeliveringTitle = styled.div`
  padding: 40px 0 0 0;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: -0.01em;
  color: #00457C;
  text-align: center;
  font-family: 'Figtree-Light', arial, sans-serif;
  @media (max-width: 992px) {
    padding: 10px 0 25px 0;
  }

  @media (max-width: 760px) {
    padding: 0 30px 20px 30px;
  }
  @media (min-width: 1200px) {
    font-size: 46px;
    line-height: 52px;
  }
`;
export const pathStyles1 = styled.path`
  fill: #ffffff;
`;
export const pathStyles2 = styled.path`
  fill: #1c9bd7;
`;
export const pathStyles3 = styled.path`
  fill: #00447c;
  fill-rule: evenodd;
`;

export const circleStyle = styled.circle`
  fill: #ffffff;
`;
export const AnchorStyle = styled.a`
  text-decoration: none;
  color: #3989c3;
  cursor: pointer;
  -moz-transition: color 0.15s ease-out;
  -o-transition: color 0.15s ease-out;
  -ms-transition: color 0.15s ease-out;
  transition: color 0.15s ease-out;
  :hover {
    text-decoration: none;
    color: #9fb577;
  }
`;

export const AnchorStyleInternal = styled(Link)`
  text-decoration: none;
  color: #3989c3;
  -moz-transition: color 0.15s ease-out;
  -o-transition: color 0.15s ease-out;
  -ms-transition: color 0.15s ease-out;
  transition: color 0.15s ease-out;
  :hover {
    text-decoration: none;
    color: #9fb577;
  }
`;

export const ImageContainer = styled.div`
  height: 135px;
  width: 135px;
  cursor: pointer;
  background-image: url(${(props) => props.backgroundImage});
  background-size: 135px 135px;
  :hover {
    background-image: url(${(props) => props.hoverUrl});
    background-size: 135px 135px;
  }
  @media (max-width: 767px) {
    margin: auto;
    margin-bottom: 20px;
  }
  @media (min-width: 1200px) {
    height: 188px;
    width: 188px;
    background-size: 188px 188px;
    :hover {
      background-size: 188px 188px;
    }
  }
`;

export const DeliveringContainer = styled(Container)`
  padding: 0 0 40px 0;
`;

export const ColContentCard = styled(Col)`
@media (max-width: 992px) and (min-width: 760px) {
  :first-child {
    padding: 0 20px 0 0;
  }
  :last-child {
    padding: 0 0 0 20px;
  }
  
}
@media(max-width: 760px) {
  margin-bottom: 20px;
}
`;