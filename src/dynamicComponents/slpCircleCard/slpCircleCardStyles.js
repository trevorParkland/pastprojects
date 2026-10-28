import styled from 'styled-components';

export const CardDiv = styled.div`
  background: #fbc807;
  border-radius: 50%;
  border: 7px solid #fff;
  overflow: hidden;
  height: auto;
`;

export const ImageStyle = styled.img`
  margin-top: 27px;
  height: 90px;
  width: auto;
  object-fit: contain;
  border: 0;
  border-radius: 0.125rem;
  max-width: 100%;
  @media (max-width: 1339px) {
    height: 65px;
    margin-top: 20px;
  }
`;
export const Figure = styled.figure`
  background: #fff;
  height: 143px;
  margin: -1px 0px 0px;
  width: 100%;
  border-radius: 150px 150px 0 0;
  @media (max-width: 1399px) {
    height: 107px;
  }
`;
export const HeaderH3 = styled.h3`
  font-family: 'Gotham';
  font-weight: bold;
  letter-spacing: -3px;
  font-size: 2.7rem;
  color: #1a4538;
  padding-top: 18px;
  padding-bottom: 5px;
  margin-bottom: 0px;
  @media (max-width: 1399px) {
    font-size: 2rem;
    padding-top: 18px;
  }
  i {
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    font-size: 1rem;
    letter-spacing: -1px;
    top: -0.8rem;
    color: #1a4538;
    font-style: normal;
  }
`;

export const SubScript = styled.h4`
  font-family: 'Gotham';
  color: #1a4538;
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin-bottom: 0px;
  font-style: normal;
  margin-top: 0;
  max-width: 40em;
  padding-top: 0.301rem;
`;

export const HeaderH4 = styled.h4`
  font-family: 'Gotham';
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 400;
  white-space: nowrap;
  text-transform: uppercase;
  color: #1a4538;
  padding-bottom: 18px;
  @media (max-width: 1440px) {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;

export const BodyContainer = styled.div`
  padding: 10px;
  @media (max-width: 991px) {
    padding: 20px;
  }
  @media (max-width: 426px) {
    padding: 10px;
  }
`;
