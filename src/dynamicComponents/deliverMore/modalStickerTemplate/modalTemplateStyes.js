import styled from 'styled-components';

export const AnchorStyles = styled.a`
  cursor: pointer;
  border-top: 14px solid #037ec4;
  background: #00457c;
  display: block;
  padding: 35px 45px 45px 40px;
  height: 100%;
  margin: -14px 10px 0 0;
  background: #fff;
  border-top: 14px solid #00457C;
  text-decoration: none;
  text-align: left;
  transition: all 0.15s ease-out;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  -ms-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
  :hover {
    color: #0a58ca;
    border-top: 14px solid #ffc325;
    background: #00457C;
  }
  @media (max-width: 991px) {
    margin: 0 0 20px 0;
    text-align: center;
  }
`;

export const ModalImage = styled.img`
  width: ${(props) => (props.$width ? '100px' : '102px')};
  float: right;
  height: auto;
  display: block;
  margin: 0 0 25px 9px !important;
  @media (max-width: 1200px) {
    float: none !important;
    margin: 0 auto 25px auto !important;
  }
`;
export const HeaderText = styled.h2`
  margin-bottom: 20px;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457C;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 23px;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-decoration: none;
  ${AnchorStyles}:hover & {
    color: #fff;
  }
  @media (min-width: 1200px) {
    font-size: 29px;
    line-height: 32px;
  }
`;
export const ParaText = styled.p`
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #737373;
  text-decoration: none;
  margin-bottom: 0;
  ${AnchorStyles}:hover & {
    color: #fff;
  }
  @media (max-width: 992px) {
    font-size: 15px;
    line-height: 17px;
  } 
`;
export const AnchorStylesWithoutLink = styled.div`
  border-top: 14px solid #037ec4;
  background: #00457c;
  display: block;
  padding: 35px 45px 45px 40px;
  height: 100%;
  margin: -14px 10px 0 0;
  background: #fff;
  border-top: 14px solid #00457C;
  text-decoration: none;
  text-align: left;
  transition: all 0.15s ease-out;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  -ms-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
  @media (max-width: 991px) {
    margin: 0 0 20px 0;
    text-align: center;
  }
  table {
    width: 100%;
  }
`;
export const HeaderTextWithoutLink = styled.h2`
  margin-bottom: 20px;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457C;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 23px;
  line-height: 28px;
  letter-spacing: 0.02em;
  text-decoration: none;
  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 35px;
  }
`;
export const ParaTextWithoutLink = styled.p`
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #737373;
  text-decoration: none;
  @media (max-width: 992px) {
    font-size: 15px;
    line-height: 17px;
  }
`;

export const HorizontalBreak = styled.hr`
  height: 1px;
  border: none;
  background: #e5e5e5;
  margin: 0;
  clear: both;
  opacity: 1 !important;
  margin: 15px 0;
`;
