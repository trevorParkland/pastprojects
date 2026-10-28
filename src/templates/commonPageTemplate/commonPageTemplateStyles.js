import styled from 'styled-components';

export const CommonPageContainer = styled.div``;

export const InnerContainer = styled.div`
  width: 1200px;
  overflow: auto;
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  margin: 0 auto;
  @media (max-width: 1199px) {
    width: 960px;
  }
  @media (max-width: 991px) {
    position: relative;
    width: 728px;
  }
  @media (max-width: 767px) {
    position: relative;
    width: 100%;
    margin: 0;
  }
`;
export const BodyLeft = styled.div`
  float: left;
  width: 280px;
  margin: 45px 0;
  @media (max-width: 991px) {
    display: none;
  }
`;
export const BodyRight = styled.div`
  float: right;
  width: 920px;
  padding: 45px 0 55px 55px;
  @media (max-width: 1199px) {
    width: 680px;
  }
  @media (max-width: 991px) {
    float: none;
    width: 728px;
    padding: 25px 0 55px 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 25px;
  }
`;

export const ArrowImage = styled.img`
  width: 20px;
  height: auto;
  float: right;
  margin-right: 10px;
`;

export const HeaderText = styled.h1`
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 18px;
  line-height: 18px;
  color: #fff;
  text-align: left;
  text-transform: uppercase;
`;

export const Menubar = styled.a`
  display: none;
  @media (max-width: 991px) {
    position: relative;
    display: block;
    float: right;
    width: 50%;
    margin: 0 0 13px 50px;
    padding: 23px 30px;
    font-family: 'Figtree-Medium', arial, sans-serif;
    font-size: 18px;
    line-height: 18px;
    text-transform: uppercase;
    color: #fff;
    background: ${(props) =>
      props.$background ? props.$background : '#037EC4'};
    border-top: 9px solid
      ${(props) => (props.$borderColor ? props.$borderColor : '#037ec4')};
    cursor: pointer;
    letter-spacing: 0.02em;
    text-decoration: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
  :hover {
    color: #fff;
  }
`;
export const MenubarBody = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
    position: absolute;
    z-index: 100;
    top: 100px;
    right: 0;
    width: 50%;
    margin: 0;
    padding: 25px;
    background: #f5f5f5;
    box-shadow: 2px 2px 4px rgb(0 0 0 / 20%);
    float: left;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const CardStyle = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;
