import styled from 'styled-components';

export const Iframe = styled.iframe`
  min-width: 100%;
  border: none;
`;

export const Body = styled.div`
  overflow-y: scroll;
  -webkit-overflow-scrolling:touch;
  height: 650px;
  @media (max-width: 767px) {
    height: 550px;
  }
`;
