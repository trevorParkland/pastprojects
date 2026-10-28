import styled from 'styled-components';

export const RepsContainer = styled.div`
  width: 100%;
  height: auto;
  background: #00447c;
`;

export const Reps = styled.div`
  width: 850px;
  height: auto;
  margin: 0 auto;
  padding-top: 17px;
  padding-bottom: 17px;
  @media (max-width: 1199px) {
    margin: 0 auto;
    width: 90%;
    text-align: center;
  }
`;

export const RepsIntro = styled.div`
  font-family: 'Figtree-Regular', arial, sans-serif;
  display: inline-block;
  width: 275px;
  color: rgb(29, 156, 215);
  padding: 20px;
  padding-top: 70px;
  font-size: 17px;
  line-height: 28px;
  vertical-align: top;
  text-align: center;
  @media (max-width: 1199px) {
    padding-top: 30px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
`;

export const RepsCol2 = styled.div`
  display: inline-block;
  padding: 20px;
  text-align: center;
  padding-top: 80px;
  h3 {
    text-align: center;
  }
  a {
    color: rgb(29, 156, 215);
    text-decoration: none;
    :hover {
      text-decoration: none;
      color: rgb(159, 181, 119);
    }
  }
  @media (max-width: 1199px) {
    display: block;
    padding: 0;
  }
`;

export const RepUnorderedList = styled.ul`
  font-family: Figtree-Regular, arial, sans-serif;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #fff;
  font-size: 14px;
  list-style-type: none;
  text-align: center;
  padding: 0px;
  margin: 0px;
  padding-bottom: 20px;
  @media (max-width: 1199px) {
    text-align: center;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const RepListItem = styled.div`
  background: rgba(255, 255, 255, 0.75);
`;

export const RepsImage = styled.img`
  width: 250px;
  height: auto;
  margin: 0 auto;
  margin: 20px;
`;
