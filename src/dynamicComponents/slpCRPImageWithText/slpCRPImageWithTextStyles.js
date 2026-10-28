import styled from 'styled-components';

export const ImageStyle = styled.div`
  background: url(${(props) => props.$background}) no-repeat bottom center;
  height: 550px;
  margin: 0 auto;
  padding: 180px 0px 0px 0px;
  text-align: center;
  @media (max-width: 870px) {
    height: auto;
    padding-top: 30px;
    background: #00372e;
    padding-bottom: 30px;
  }
`;
export const Heading = styled.h1`
  width: 430px;
  margin: 0 auto;
  padding: 30px;
  font-family: 'MrAlex', arial, sans-serif;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  color: #00539d;
  background: #ffc905;
  border-radius: 10px;
  @media (max-width: 870px) {
    position: relative;
    bottom: 0;
    width: 100%;
    padding: 20px;
    font-size: 30px;
    line-height: 35px;
  }
`;
export const InnerImageStyle = styled.img`
  width: 700px;
  height: auto;
  @media (max-width: 870px) {
    width: 100%;
    height: auto;
    display: block;
    padding: 5px 5% 5px 5%;
  }
`;
