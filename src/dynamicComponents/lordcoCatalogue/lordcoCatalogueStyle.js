import styled from 'styled-components';

export const TitleContainer = styled.div`
  text-align: center;
  height: auto;
`;

export const Title = styled.div`
  margin-top: 0px;
  @media (max-width: 991px) {
    margin-top: 10px;
    width: 100%;
    height: auto;
    text-align: center;
    h1 {
      line-height: 100%;
    }
  }
`;

export const Header = styled.h1`
  font-family: Figtree-Light, arial, sans-serif;
  color: rgb(17, 70, 123);
  font-size: 34px;
  line-height: 36px;
  font-weight: normal !important;
  letter-spacing: 0.02em;
  margin: 0.67em 0px;
  @media (max-width: 991px) {
    line-height: 100%;
  }
`;

export const BottomLinksCatalog = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
  font-size: 17px;
  line-height: 18px;
`;

export const BottomLinksContainer = styled.div`
  background: rgba(255, 255, 255, 0.75);
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
