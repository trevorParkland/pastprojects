import styled from 'styled-components';

export const ButtonStyle = styled.a`
  text-decoration: none;
  display: block;
  position: fixed;
  top: 280px;
  right: 0;
  z-index: 999999;
  padding: 13px 23px 15px 23px;
  background: rgb(0, 166, 232);
  font-family: 'Figtree-Bold', arial, sans-serif;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold !important;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  transform: rotate(90deg);
  transform-origin: 100% 0;
  letter-spacing: 0.02em;
  :hover {
    background: rgb(237, 123, 34);
    color: #fff;
    padding-top: 20px;
    text-decoration: none;
  }
  @media (max-width: 767px) {
    top: auto;
    bottom: 0;
    right: 10px;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 0;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    transform: rotate(0);
    transform-origin: 100% 0;
  }
`;
export const ParaText = styled.p`
  margin: 0px;
  i {
    font-style: italic;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 1399px) {
      font-size: 15px;
      line-height: 22px;
    }
    @media (max-width: 767px) {
      font-size: 13px;
      line-height: 20px;
    }
  }
`;
