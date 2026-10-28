import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const InputStyle = styled.input`
  border: none;
  background: #ebf5fa;
  width: 100%;
  padding: 15px;
  margin: 0 0 25px 0;
  font-size: 16px;
  line-height: 16px;
  color: #666;
  font-family: 'Figtree-Regular' arial, sans-serif;
  color: #666;
  outline: none;
`;
export const ImageStyle = styled.img`
  width: auto;
  height: 50px;
  padding: 1px 35px 0px 0px;
`;
export const SearchSiteTitle = styled.h2`
  margin: 0 0 35px 0;
  padding: 0;
  font-weight: 300;
  color: #037ec4;
  font-size: 32px;
  line-height: 38px;
  padding: 10px 0px 0px 24px;
  font-family: 'Figtree-Light', arial, sans-serif;
`;
export const SearchSiteContainer = styled(Container)`
  display: block;
  background: #fff;
  z-index: 99999999;
  padding-top: 25px;
  width: 1200px !important;
`;
export const SearchSiteInput = styled.input`
  width: 100%;
  height: 62px;
  padding: 0 20px;
  font-family: 'Figtree-Regular', arial, sans-serif;
  font-size: 20px;
  line-height: 22px;
  color: #fff;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background: none;
  border: none;
  outline: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  &:focus {
    &::placeholder {
      color: #00457c;
      opacity: 1;
    }
    &:-ms-input-placeholder {
      color: #00457c;
    }
    &::-ms-input-placeholder {
      color: #00457c;
    }
  }
  &::placeholder {
    color: #fff;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: #fff;
  }
  &::-ms-input-placeholder {
    color: #fff;
  }
`;
