import styled from 'styled-components';

export const SubFooterContainer = styled.div`
  background: #037ec4;
`;

export const SubFooterInnerContainer = styled.div`
  width: 1200px;
  height: 41px;
  margin: 0 auto;
  padding: 13px 0 11px 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 11px;
  line-height: 11px;
  text-transform: uppercase;
  color: #fff;
  @media (max-width: 1199px) {
    width: 960px !important;
  }
  @media (max-width: 991px) {
    width: 728px !important;
  }
  @media (max-width: 767px) {
    width: 100% !important;
    height: 102px;
  }
`;

export const DivStyle = styled.div`
  float: left;
  width: 50%;
  padding: 4px 0 0 0;
  @media (max-width: 767px) {
    float: none;
    width: 100%;
    padding: 15px 0 50px 0;
    text-align: center;
  }
`;

export const ListStyle = styled.ul`
  float: left;
  margin: 0;
  padding: 0;
  @media (max-width: 767px) {
    float: none;
    display: inline-block;
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  margin: 0 10px 0 0;
  padding: 0;
  list-style: none;
  background: none;
`;
export const AnchorStyle = styled.a`
  color: #e4b01f;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  :hover {
    color: #fff;
  }
`;
export const LogoStyle = styled.img`
  width: auto;
  height: 20px;
  margin-top: -7px;
`;
