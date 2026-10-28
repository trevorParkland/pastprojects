import styled from 'styled-components';

export const TermsBar = styled.div`
  background: rgb(0, 83, 155);
  width: 100%;
  height: auto;
  text-align: center;
`;

export const Terms = styled.div`
  padding: 30px;
  width: 880px;
  margin: 0 auto;
  padding-top: 50px;
  @media (max-width: 870px) {
    width: 100%;
    padding: 30px;
  }
`;

export const NoteStyle = styled.p`
  font-size: 12px;
  color: #fff;
  font-family: 'Figtree-Light', arial, sans-serif;
  margin: 0 0 20px 0;
  padding: 0;
  font-style: normal;
  letter-spacing: 0.02em;
`;
