import styled from 'styled-components';
import { Col, Container } from 'react-bootstrap';
import crossImage from './../../images/crossImage.png';
import arrow from './../../images/arrow-white.png';

export const DefaultHeaderContainer = styled.div`
  background: #00457c;
  @media print {
    display: none;
  }
`;
export const InnerDefaultHeaderContainer = styled(Col)`
  width: 1200px !important;
`;

export const mainContainer = {
  background: '#00457c',
  height: '35px',
};

export const defaultActive = {
  background: '#037ec4',
  paddingLeft: '10px',
  paddingRight: '10px',
};
export const HeaderFontStyle = {
  position: 'relative',
  display: 'block',
  height: '35px',
  paddingTop: '10px',
  fontFamily: 'Figtree-Medium, arial, sans-serif',
  fontSize: '11px',
  lineHeight: '11px',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: ' #5fc5ff',
  fontWeight: '600',
  textDecoration: 'none',
};

export const searchStyle = {
  paddingRight: '40px',
  backgroundImage: 'url(../src/images/icon-search.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center right',
  backgroundSize: 'auto 16px',
  cursor: 'pointer',
};

export const customerSelect = {
  padding: '60px 60px 60px 40px',
  background: '#00457c',
};

export const customerSelectTop = {
  marginBottom: '30px',
  // fontFamily: "Figtree-Regular",
  fontSize: '18px',
  lineHeight: '20px',
  textAlign: 'center',
  color: '#fff',
};

export const customerSelectLeft = {
  float: 'left',
  paddingRight: '10px',
  paddingLeft: '30px',
  textAlign: 'center',
  // width: "50%",
};

export const customerSelectRight = {
  float: 'left',
  paddingRight: '10px',
  paddingLeft: '30px',
  textAlign: 'center',
  // width: "50%",
};

export const residential = {
  display: 'block',
  margin: '5px 0',
  fontSize: '25px',
  lineHeight: '28px',
  color: '#858e53',
  fontWeight: 'bold',
};
export const commercial = {
  display: 'block',
  margin: '5px 0',
  fontSize: '25px',
  lineHeight: '28px',
  color: '#ce903c',
  fontWeight: 'bold',
};

export const customers = {
  marginBottom: '20px',
  fontSize: '20px',
  lineHeight: '24px',
  color: ' #fff',
};
export const TransparentButton = styled.button`
  font-family: Figtree-Medium, arial, sans-serif;
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #5fc5ff;
  background: transparent;
  border: 0;
  height: 45px;
  padding: 0;
  span {
    padding: 17px 15px 17px 20px;
  }
  .icon-margin-right {
    margin-right: 20px;
    margin-bottom: 5px;
  }
`;

export const linkStyleResi = {
  marginBottom: '3px !important',
  paddingRight: '40px',
  color: '#fff',
  background: `url(${arrow}) no-repeat 99% center`,
  backgroundSize: '23px auto',
  backgroundColor: '#858e53',
  textDecoration: 'none',
  display: 'inline-block',
  padding: '16px 54px 14px 26px',
  margin: '0 5px 5px 0',
  fontSize: '13px',
  lineHeight: '16px',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontWeight: 'bold',
};

export const linkStyleCommercial = {
  marginBottom: '3px !important',
  paddingRight: '40px',
  color: '#fff',
  background: `url(${arrow}) no-repeat 99% center`,
  backgroundSize: '23px auto',
  backgroundColor: '#ce903c',
  textDecoration: 'none',
  display: 'inline-block',
  padding: '16px 54px 14px 26px',
  margin: '0 5px 5px 0',
  fontSize: '13px',
  lineHeight: '16px',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontWeight: 'bold',
};

export const BlueButton = styled.button`
  font-family: Figtree-Medium, arial, sans-serif;
  font-size: 11px;
  line-height: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  background: #037ec4;
  border: 0;
  height: 45px;
  padding: 0;
  span {
    padding: 17px 15px 17px 20px;
  }
  img {
    height: auto;
    width: 12px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
`;

export const CloseImage = styled.a`
  background: url(${crossImage});
  position: absolute;
  right: -18px;
  top: -18px;
  width: 36px;
  height: 36px;
`;
export const SearchContainer = styled(Container)`
  background: #fff;
`;
