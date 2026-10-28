import styled from 'styled-components';
export const Container = styled.div`
  background: #1a4538;
  overflow-wrap: break-word;
`;
export const Body = styled.div`
  padding-bottom: 30px;
  width: 860px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Gotham';
  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    height: auto;
    padding: 35px;
  }
`;

export const Header = styled.h1`
  color: #fff;
  font-family: 'Gotham';
  font-size: 26px;
  line-height: 35px;
  margin-bottom: 35px;
  letter-spacing: 0.02em;
  font-weight: 300;
  padding-top: 0px;
  font-size: 1.8rem;
  @media (max-width: 1440px) {
    font-size: 1.5rem;
  }
`;
export const ParaText = styled.div`
  color: #666;
  white-space: pre-wrap;
  line-height: 24px;
  letter-spacing: 0.02em;
  margin-bottom: 30px;
  font-size: 20px;
  font-family: 'Gotham';
  @media (max-width: 767px) {
    line-height: 22px;
  }
  b {
    font-family: 'Gotham';
  }
`;

export const Header2 = styled.h2`
  color: #fff;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-weight: bold;
  margin-bottom: 0px;
  font-size: 2.4rem;
  line-height: 2.6rem;
  padding-top: 0.201rem;
  a {
    text-decoration: none;
    color: #fbc807;
    font-family: 'Figtree-Medium', arial, sans-serif;
    font-size: 2.4rem;
    line-height: 2.6rem;
  }
  @media (max-width: 1440px) {
    font-size: 1.8rem;
    line-height: 2.5rem;
    a {
      text-decoration: none;
      color: #fbc807;
      font-family: 'Figtree-Regular', arial, sans-serif;
      font-size: 1.8rem;
      line-height: 2.5rem;
    }
  }
`;

export const Header3 = styled.h3`
  color: #fbc807;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-weight: bold;
  margin-bottom: 0px;
  font-size: 1.9rem;
  line-height: 2.5rem;
  @media (max-width: 1440px) {
    font-size: 1.5rem;
    line-height: 2rem;
    padding-top: 0.2rem;
  }
`;

export const SuperScriptStyle = styled.sup`
  vertical-align: top;
  font-size: 18px;
  line-height: 30px;
`;

export const LinkStyle = styled.a`
  text-decoration: none;
  margin: 0 0 35px 0;
  cursor: pointer;
  color: #fbc807;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-weight: bold;
  margin-bottom: 0px;
  font-size: 1.9rem;
  line-height: 2.5rem;
`;
export const HorizontalBreak = styled.hr`
  height: 1px;
  border: none;
  background: #e5e5e5;
  margin: 50px 0;
  clear: both;
  opacity: 1;
  @media (max-width: 767px) {
    margin: 30px 0;
  }
`;
