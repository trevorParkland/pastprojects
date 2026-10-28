import styled from 'styled-components';

export const BottomLinksContainer = styled.div`
  background: rgba(255, 255, 255, 0.75);
`;

export const BottomLinks = styled.div`
  width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 17px;
  line-height: 18px;
  padding: 50px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const BottomLinksUnorderedList = styled.ul`
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const BottomLinksListItem = styled.li`
  float: left;
  width: ${(props) => (props.$catalog ? '50%' : '20%')};
  margin: 0;
  padding: 0;
  list-style: none;
  background: none;
  @media (max-width: 767px) {
    float: ${(props) => (props.$catalog ? 'left' : 'none')};
    width: ${(props) => (props.$catalog ? '50%' : '100%')};
    margin: ${(props) => (props.$catalog ? '0' : '0 0 25px 0')};
  }
`;

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
    color: #455560;
    text-decoration: none;
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
  @media (max-width: 767px) {
    display: block;
    margin: 0 auto 20px auto !important;
  }
`;

export const BottomLinksSpan = styled.span`
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  text-transform: none;
`;
export const DesktopBR = styled.br`
  @media (max-width: 767px) {
    display: none;
  }
`;
