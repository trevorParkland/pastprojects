import styled from 'styled-components';

export const ImageStyle = styled.img`
  height: auto;
  width: auto;
  margin-bottom: 20px;
  vertical-align: top;
`;
export const HeaderH2 = styled.h2`
  font-size: 20px;
  line-height: 24px;
  color: #636466;
  padding: 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  b {
    color: #636466;
  }
  @media (max-width: 991px) {
    font-size: 21px;
    line-height: 34px;
    b {
      color: #636466;
    }
  }
`;

export const ParagraphStyle = styled.p`
  text-align: center;
  color: #636466;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 18px;
  padding: 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  margin-bottom: 40px;
  b {
    color: #636466;
  }
  code {
    font-size: 13px;
    line-height: 15px;
    color: #636466;
    padding: 0;
    font-family: 'Figtree-Regular', arial, sans-serif;
  }
  @media (max-width: 991px) {
    font-size: 21px;
    line-height: 34px;
    margin: 0;
    b {
      color: #636466;
    }
  }
`;

export const LinkStyle = styled.a`
  text-decoration: none;
  color: #049fe1;
  text-decoration: none;
  white-space: pre-wrap;
    font-family: Figtree-Regular, arial, sans-serif;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.02em;
    margin-bottom: 20px;
    :hover {
      color:rgb(17, 70, 123);
    }
  b {
    color: rgb(17, 70, 123);
  }
`;

export const Header1 = styled.h1`
  font-size: 46px;
  line-height: 56px;
  padding: 25px 0 0 0;
  margin: 0 0 25px 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-weight: normal !important;
  color: #636466;
`;

export const Body = styled.div`
  position: relative;
  margin: 0 auto !important;
  padding: 0;
  text-align: center;
  padding-bottom: 30px;
  margin: 0;
  padding: 0;
  color: #636466;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 15px;
  line-height: 130%;
  letter-spacing: 0.02em;
  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    height: auto;
    padding:25px;
`;
