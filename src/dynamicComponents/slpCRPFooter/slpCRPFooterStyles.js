import styled from 'styled-components';

export const FootContainer = styled.div`
  background: #ededed;
`;

export const TitleDesktopImage = styled.img`
  max-width: 540px;
  height: auto;
  @media (max-width: 991px) {
    display: none !important;
  }
`;

export const Foot = styled.div`
  width: 600px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  text-align: center;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;

  p {
    font-size: 12px;
    line-height: 18px;
    color: #9a9a9a;
    margin: 0 0 35px 0;
    padding: 0;
  }
  @media (max-width: 870px) {
    width: 100%;
    padding: 35px;
  }
`;
