import styled from 'styled-components';

export const ClosureAlertContainer = styled.div`
  width: 100%;
  background: #f49a3c;
  height: auto !important;
  text-align: center;
`;
export const ClosureAlert = styled.div`
  margin: 0 auto;
  padding: 20px 20px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Figtree-Regular', arial, sans-serif;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #fff;
  p {
    margin: 0;
  }
  a {
    color: #00457c;
    text-decoration: none;
    @media screen and (max-width: 980px) {
      display: block;
    }
  }
`;
