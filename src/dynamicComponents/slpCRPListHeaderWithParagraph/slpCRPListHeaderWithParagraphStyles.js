import styled from 'styled-components';
import IconArrowYellowRight from '../../images/arrow-blue.png';

export const MainContainer = styled.div`
  display: inline-block;
  width: 32%;
  padding: 25px;
  margin-bottom: 40px;
  text-align: center;
  vertical-align: top;
  color: #00539f;
  background: #fff;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 20px;
  line-height: 26px;
  @media (max-width: 870px) {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 40px;
    border-right: none;
  }
`;

export const HeaderH2 = styled.h2`
  text-align: ${(props) => (props.$textAlign ? 'center' : 'left')};
  position: relative;
  margin: 0 0 35px 0;
  font-family: 'MrAlex', sans-serif;
  font-size: 45px;
  line-height: 50px;
  color: #00539d;
  @media (max-width: 1399px) {
    font-size: 40px;
    line-height: 45px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 35px;
  }
`;
export const HeaderH3 = styled.h3`
  margin: 0 0 35px 0;
  font-family: 'HelveticaNeue-Light', sans-serif;
  font-size: 32px;
  line-height: 37px;
  color: #00a6e8;
  text-align: ${(props) => (props.$textAlign ? 'center' : 'left')};
  @media (max-width: 1399px) {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const CodeNumber = styled.div`
  width: 36px;
  height: 36px;
  padding: 8px;
  margin: 0 auto 25px auto;
  text-align: center;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 22px;
  background: #00493b;
  color: #fff;
  border-radius: 50%;
`;

export const Bold = styled.b`
  display: inline;
`;

export const Italic = styled.i`
  font-family: 'Figtree-Regular', arial, sans-serif;
  display: block;
  margin-top: 20px;
  @media (max-width: 870px) {
    margin-top: 10px;
  }
`;

export const Heading = styled.h1`
  margin: 0 0 35px 0;
  font-family: 'MrAlex', arial, sans-serif;
  font-size: 50px;
  line-height: 55px;
  text-align: center;
  color: #00539d;
  @media (max-width: 870px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

export const ParaText = styled.p`
  margin-bottom: 0px;
  font-family: 'Figtree-Bold', arial, sans-serif;
  color: #00493b;
  font-size: 15px;
  line-height: 130%;
`;

export const ImageStyle = styled.img`
  height: auto;
  width: auto;
  border: 0;
  vertical-align: top;
  margin: 0 0 40px 0;
  @media (max-width: 1399px) {
    margin-bottom: 30px;
  }
`;
export const SuperScriptStyle = styled.sup`
  vertical-align: top;
  font-size: 18px;
  line-height: 30px;
`;
export const UnorderedList = styled.ul`
  margin: 0 0 30px 0;
  padding: 0;
`;
export const ListItem = styled.li`
  padding: 0 0 15px 50px;
  background-size: 30px auto;
  list-style: none;
  margin: 0;
  p {
    margin: 0;
  }

  @media (max-width: 767px) {
    padding-top: 1px;
    padding-left: 40px;
    background-position: 0 0;
    background-size: 25px auto;
  }
`;
export const ListItemArrow = styled.li`
  padding: 0 0 15px 30px;
  background: url(${IconArrowYellowRight}) no-repeat 0 9px;
  background-size: 10px auto;
  list-style: none;
  margin: 0;
  p {
    margin: 0;
  }
  @media (max-width: 1399px) {
    background-position: 0 9px;
  }
  @media (max-width: 767px) {
    background-position: 0 5px;
  }
`;
export const LinkStyle = styled.a`
  text-decoration: none;
  color: #00a6e8;
  transition: 0.25s ease-out;
`;
export const ListItemNumber = styled.li`
  position: relative;
  margin: 0;
  padding: 15px 0 15px 65px;
  p {
    margin: 0px;
  }
  @media (max-width: 767px) {
    padding-left: 50px;
  }
  ::before {
    content: counter(standard-counter);
    counter-increment: standard-counter;
    position: absolute;
    left: 0px;
    width: 40px;
    text-align: center;
    padding: 6px 0 0 0;
    font-family: 'MrAlex', arial, sans-serif;
    font-size: 30px;
    line-height: 30px;
    background: #00493b;
    color: #fff;
    border: 2px solid #ffc905;
    border-radius: 50%;

    @media (max-width: 767px) {
      top: 11px;
      width: 30px;
      height: 30px;
      padding: 3px 0 0 0;
      font-size: 20px;
      line-height: 20px;
    }
  }
`;
export const OrderListItem = styled.ol`
  margin: 0 0 30px 0;
  list-style-type: none;
  counter-reset: standard-counter;
  position: relative;
  padding: 0;
`;
export const ButtonStyle = styled.a`
  display: inline-block;
  position: relative;
  top: 0;
  padding: 15px 35px;
  margin-right: 10px;
  margin-bottom: 40px;
  font-family: 'MrAlex', sans-serif;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  font-weight: bold;
  color: #00a6e8;
  border: 2px solid #00a6e8;
  box-shadow: 0 0 0 2px rgb(255 255 255 / 0%);
  border-radius: 100px;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1399px) {
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  @media (max-width: 1199px) {
    font-size: 25px;
    line-height: 25px;
  }

  @media (max-width: 767px) {
    font-size: 22px;
    line-height: 25px;
  }
  i {
    @media (max-width: 767px) {
      font-size: 22px;
      line-height: 25px;
    }
  }
  :hover {
    top: -5px;
    color: #f7991c;
    border-color: #f7991c;
    box-shadow: 0 5px 0 0 #f7991c;
  }
`;
