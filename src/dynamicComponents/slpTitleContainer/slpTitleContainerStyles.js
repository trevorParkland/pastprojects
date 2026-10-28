import styled from 'styled-components';
import LinkArrowImage from '../../images/arrow-blue.png';

export const Container = styled.div`
  background: center/cover no-repeat url(${(props) => props.$background});
  padding-top: 80px;
  height:425px;
// ^Exclusively used for avenir agreement. No idea how this container is sizing. 
// Without absolute height, there's weird stuff occuring on bottom of container I can't locate-DY
  text-align: center !important;
  width: 100%;
  @media (max-width: 800px) {
    padding-top: 40px;
height:235px;
      // ^This is pretty exclusive to the avenir agreement graphic. Other sizing mechanism in place make desiging elements for this friggin' impossible.
  }
`;

export const InnerDiv = styled.div`
  padding-left: 6.5rem;
  padding-right: 6.5rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  width: 100%;
  @media (max-width: 1399px) {
    max-width: 920px;
  }
  @media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const ImageStyle = styled.img`
  border: 0;
  border-radius: 0.125rem;
  height: auto;
  max-width: 100%;
  margin-bottom: 0px;
  @media (max-width: 800px) {
    width: 650px;
  }
`;

export const HeaderH1 = styled.h1`
  margin: 0 0 35px 0;
  padding: 0;
  font-size: 3rem;
  line-height: 3rem;
  color: #1a4538;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-weight: bold !important;
  @media (max-width: 1399px) {
    font-size: 2.6rem;
    line-height: 2.6rem;
  }
`;
export const HeaderH2 = styled.h2`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #037ec4;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;

export const ParaText = styled.p`
  margin: 0 0 30px 0;
  padding: 0;
`;

export const HeaderH3 = styled.h3`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #48b4f1;
  font-size: 26px;
  line-height: 35px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`;

export const UnorderedList = styled.ul`
  margin: 0 0 30px 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 4px 0 4px 25px;
  list-style: none;
  background: url(${LinkArrowImage}) no-repeat 0 10px;
  background-size: 7px auto;
  p {
    margin: 0;
  }
`;
export const LinkStyle = styled.a`
  text-decoration: none;
  color: #9fb577;
  :hover {
    text-decoration: none;
    color: #037ec4;
    outline: none;
  }
`;

export const ButtonStyle = styled.a`
  text-transform: uppercase;
  position: absolute;
  top: 2vh;
  right: 2vh;
  background-color: #d9ece8;
  border: none;
  font-family: 'Helvetica Neue';
  z-index: 3;

  text-decoration: none;
  line-height: 100%;
  font-size: 1rem;
  font-weight: 500;
  justify-content: center;
  line-height: 1.5rem;
  margin: 0 1rem 1.2rem 0;
  padding: calc(0.4rem - 1px) 1rem;
  color: #111;
    display: none !important;
  :hover {
    background: linear-gradient(to bottom, #2b8265 5%, #41c464 100%);
    background-color: #2b8265;
    color: #111;
  }
`;
