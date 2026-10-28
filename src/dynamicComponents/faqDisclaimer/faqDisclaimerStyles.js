import styled from 'styled-components';
import LinkArrowImage from '../../images/arrow-blue.png';

export const MainDiv = styled.div`
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.02em;
`;
export const LinkStyle = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #9fb577;
  :hover {
    text-decoration: none;
    color: #037ec4;
    outline: none;
  }
`;
export const ParaText = styled.p`
  margin: 0 0 30px 0;
  padding: 0;
  b {
    font-family: 'Figtree-Bold', arial, sans-serif;
    font-weight: bold;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    text-decoration: none;
    code {
      color: #9fb577 !important;
    }
  }
  code {
    font-size: 12px;
    line-height: 18px;
    color: #666;
    font-family: 'Figtree-Regular', arial, sans-serif;
  }

  i {
    font-size: 19px;
    line-height: 28px;
    color: #666;
    font-family: 'Figtree-Regular', arial, sans-serif;
    letter-spacing: 0.02em;
    font-style: normal !important;
    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;
