import styled from 'styled-components';

export const BottomLinksAnchor = styled.a`
  display: block;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  color: #6f9397;
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: uppercase;
  text-align: center;
  color: #11467b;
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: #455560;
  }
  p {
    line-height: 16px;
  }
`;

export const BottomLinksImage = styled.img`
  display: inline-block;
  width: ${(props) => (props.$width ? '62px' : '67px')};
  height: auto;
  margin: 0 0 20px 0 !important;
  @media (max-width: 650px) {
    display: block;
    margin: 0 auto 20px auto !important;
  }
`;

export const PdfImage = styled.img`
  width: 150px;
  height: auto;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.3);
`;
