import styled from 'styled-components';

export const TermsBar = styled.div`
  background: #ededed;
  width: 100%;
  height: auto;
  text-align: center;
`;

export const Terms = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  font-size: 12px;
  line-height: 130%;
  color: #9a9a9a;
  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    padding: 40px 20px;
  }
`;

export const NoteStyle = styled.p`
  font-size: 12px;
  color: #9a9a9a;
  font-family: 'Figtree-Regular', arial, sans-serif;
  margin: 0 0 20px 0;
  padding: 0;
`;

export const ParaText = styled.div`
color: #666;
white-space: pre-wrap;
font-family: 'Figtree-Regular', arial, sans-serif;
font-size: 15px;
line-height: 24px;
letter-spacing: 0.02em;
margin-bottom: 20px;
@media (max-width: 767px) {
  line-height: 22px;
}
`;


export const Header = styled.h1`
margin: 0 0 20px 0;
font-size: 34px;
line-height: 40px;
padding: 0;
font-family: 'Figtree-Light', arial, sans-serif;
font-weight: normal !important;
color: #11467b;
letter-spacing: 0.02em;
text-align: center;
`;

export const Header2 = styled.h2`
padding: 0px;
font-family: Figtree-Light, arial, sans-serif;
color: rgb(17, 70, 123);
letter-spacing: 0.02em;
text-align: center;
font-weight: normal !important;
font-size: 34px;
`

export const ContentContainer = styled.div`
  position: relative;
  width: 850px;
  margin: 0 auto;
  padding: 50px 30px 30px 30px;
  color: #9a9a9a;
  text-align: center;
  white-space: pre-wrap;
    font-family: Figtree-Regular, arial, sans-serif;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.02em;
    margin-bottom: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const ImageStyleFooter = styled.img`
  display: block;
  width: 454px;
  height: auto;
  margin: 0 auto 20px auto;
  border: 0;
  vertical-align: top;
  @media (max-width: 767px) {
    width: 75%;
  }
`;

export const ContentWrapper = styled.div`
background: rgb(245, 245, 245);
`
  