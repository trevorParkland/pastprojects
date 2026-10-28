import styled from 'styled-components';
import arrowBlue from '../../images/arrow-blue.png';

export const ImageStyleBlockRight = styled.img`
  width: ${(props) => (props.$width ? props.$width : '150px')};
  height: auto;
  float: right;
  text-align: center;
  margin: 0 0 30px 30px;
  @media (max-width: 424px) {
    width: 100% !important;
  }
  @media (max-width: 767px) {
    display: block;
    float: none;
    margin: 0 0 30px 0 !important;
  }
`;
export const LinkStyle = styled.a`
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #9fb577;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  :hover {
    color: #00457c;
  }
`;
export const Header3 = styled.h2`
  color: #48b4f1;
  font-family: Figtree-Light, arial, sans-serif;
  font-size: 26px;
  line-height: 35px;
  margin-bottom: 35px;
  letter-spacing: 0.02em;
  ${LinkStyle} {
    font-size: 26px;
    line-height: 35px;
  }
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`;
export const ParaText = styled.div`
  color: #666;
  white-space: pre-wrap;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    line-height: 22px;
  }
  b {
    font-family: 'Figtree-Bold', arial, sans-serif;
  }
`;
export const ListContainer = styled.ul`
  padding: 0;
  margin: 0 0 30px 0;
`;
export const ListText = styled.li`
  background: url(${arrowBlue}) no-repeat 0 10px;
  background-size: 7px auto;
  list-style: none;
  text-decoration: none;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  padding: 4px 0 4px 25px;
  margin-bottom: 0 !important;
  @media (max-width: 767px) {
    line-height: 22px;
  }
  ${ParaText} {
    margin-bottom: 0;
  }
`;
export const HorizontalBreak = styled.hr`
  margin-top: ${(props) => props.$marginTop ?? '20px'};
  margin-right: ${(props) => props.$marginRight ?? '0px'};
  margin-bottom: ${(props) => props.$marginBottom ?? '50px'};
  margin-left: ${(props) => props.$marginLeft ?? '0px'};
`;
export const Header2 = styled.h2`
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #037ec4;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.02em;
  margin-bottom: 35px;
  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;
export const ItalicParaText = styled(ParaText)`
  font-style: italic;
`;
export const AnchorButton = styled.a`
  padding: 16px 85px 14px 15px;
  margin: 0 5px 30px 0;
  text-decoration: none;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase !important;
  text-align: left;
  color: #037ec4;
  background: #ebf5fa url(${arrowBlue}) no-repeat 95% center;
  background-size: 12px auto;
  &:hover {
    background: #ebf5fa url(${arrowBlue}) no-repeat 91% center;
    background-size: 12px auto;
    transition: background-position 0.15s ease-out;
    border: none;
  }
  @media (max-width: 767px) {
    display: block;
  }
`;
export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56%;
  margin: 40px 0 40px 0;
`;

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 3px #969696;
`;
export const Header = styled.h1`
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: 0.02em;
  margin-bottom: 35px;
  @media (max-width: 991px) {
    width: 50%;
  }
  @media (max-width: 767px) {
    font-size: 35px;
    line-height: 40px;
    width: 100%;
  }
`;
