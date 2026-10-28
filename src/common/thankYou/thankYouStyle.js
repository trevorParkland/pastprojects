import styled from 'styled-components';

export const ParaText = styled.div`
  color: #666;
  white-space: pre-wrap;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.02em;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    line-height: 22px;
  }
`;
export const Header = styled.h1`
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: 0.02em;
  margin-bottom: 35px;
  @media (max-width: 767px) {
    font-size: 35px;
    line-height: 40px;
  }
`;

export const LinkStyle = styled.a`
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #9fb577;
  background-size: 7px auto;
  text-decoration: none;
  text-align: left;
  transition: background-position 0.15s ease-out;
  :hover {
    color: #00457c;
  }
`;
