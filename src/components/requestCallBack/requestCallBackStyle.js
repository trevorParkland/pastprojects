import styled from 'styled-components';
import { Row, Col, Form, Container, Button } from 'react-bootstrap';
import arrowWhite from '../../images/arrow-white.png';
export const MainContainer = styled(Container)`
  display: block;
  background: #fff;
  position: absolute;
  z-index: 999999999;
  text-align: center;
  width: 100%;
  @media (max-width: 767px) {
    position: relative !important;
    top: 0;
    left: 0;
    background: #00457c;
    box-shadow: none;
    color: #fff;
  }
`;
export const InnerContainer = styled(Container)`
  width: 1200px !important;
  max-width: 1200px !important;
  margin: 0 auto;
  padding: 25px 0;
  @media (max-width: 1200px) {
    width: 960px !important;
  }
  @media (max-width: 992px) {
    width: 728px !important;
  }
  @media (max-width: 767px) {
    width: 100% !important;
    margin: 0;
    padding: 25px !important;
  }
`;
export const RightCol = styled(Col)`
  padding: 6px 0 0 0;
`;
export const LeftTitle = styled.div`
  font-family: 'Figtree-Light', arial, sans-serif;
  font-size: 37px;
  line-height: 45px;
  color: #037ec4;
  text-align: left;
  letter-spacing: 0.02em;
  font-weight: normal !important;
  margin-bottom: 35px;
  padding: 3px 20px 0 0;
  @media (max-width: 1200px) {
    padding: 3px 0px 0 0;
  }
  @media (max-width: 767px) {
    padding: 0;
    font-size: 25px;
    line-height: 30px;
    color: #fff;
    margin-bottom: 20px;
  }
`;
export const FormCheck = styled(Form.Check)`
  text-align: left;
  font-size: 16px;
  line-height: 16px;
  color: #666;
  padding-left: 12px !important;
  font-family: 'Figtree-Regular', arial, sans-serif;
  .form-check-input {
    height: 22px;
    width: 22px;
    margin-left: 0 !important;
    :checked[type='radio'] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%230000ff'/%3e%3c/svg%3e");
      background-color: #fff;
      background-size: 22px auto;
    }
    &:focus {
      box-shadow: none !important;
    }
  }
  label {
    margin-top: 7px;
    margin-left: 10px;
  }
  @media (max-width: 767px) {
    color: #fff;
  }
`;
export const RadioRow = styled(Row)`
  text-align: left !important;
`;

export const RadioCol = styled(Col)`
  padding-top: 0;
  margin-bottom: 24px;
  padding-right: 0 !important;
  padding-left: 0 !important;
  position: relative;
  @media (max-width: 767px) {
    padding: 0 0 20px 0;
    width: 100%;
  }
`;

export const FormRow = styled(Row)`
  margin-bottom: 25px;
`;

export const FormControl = styled(Form.Control)`
  &.form-control {
    border: none;
    border-radius: 0;
    background: #ebf5fa;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Figtree-Regular', arial, sans-serif;
    color: #666;
    letter-spacing: 0.02em;
    padding: 15px;
    &:focus {
      box-shadow: none;
    }
    @media (max-width: 767px) {
      background: #fff;
    }
  }
`;

export const FormSelect = styled(Form.Select)`
  &.form-select {
    border: none;
    border-radius: 0;
    background-color: #ebf5fa;
    font-family: 'Figtree-Regular', arial, sans-serif;
    font-size: 16px;
    line-height: 16px;
    padding: 15px;
    color: #666;
    &:focus {
      box-shadow: none;
    }
    @media (max-width: 767px) {
      background-color: #fff;
    }
  }
`;

export const TextFormControl = styled(Form.Control)`
  border: none;
  width: 100%;
  height: 100px;
  border-radius: 0;
  background: #ebf5fa;
  font-size: 16px;
  line-height: 16px;
  font-family: 'Figtree-Regular', arial, sans-serif;
  color: #666;
  letter-spacing: 0.02em;
  padding: 15px;
  &:focus {
    border: none;
  }
  @media (max-width: 767px) {
    background: #fff;
  }
`;

export const SubmitText = styled.div`
  padding: 10px 30px 0 0;
  font-size: 16px;
  line-height: 16px;
  color: #666;
  font-family: 'Figtree-Regular', arial, sans-serif;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    color: #fff;
  }
`;

export const linkColor = styled.a`
  color: #9fb577;
  text-decoration: none;
  &:hover {
    color: #3989c3;
  }
`;

export const ButtonStyle = styled(Button)`
  text-align: left !important;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  padding: 10px 85px 10px 15px !important;
  border: none !important;
  width: auto !important;
  border-radius: 0 !important;
  background-color: #049fe1 !important;

  background: #049fe1 url(${arrowWhite}) no-repeat 99% center;
  background-size: 23px;
  text-align: left;
  &:hover {
    background: #049fe1 url(${arrowWhite}) no-repeat 95% center;
    background-size: 23px;
    border: none;
  }
`;
export const ButtonCol = styled(Col)`
  display: flex;
`;
export const FooterTextCol = styled(Col)`
  display: flex;
  text-align: left;
`;
