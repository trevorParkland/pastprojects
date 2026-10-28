import styled from 'styled-components';
export const Container = styled.div`
  background: #1a4538;
`;
export const Body = styled.div`
  padding: 40px 110px;
  padding-bottom: 30px;
  width: 860px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Gotham';
  .mktoLabel,
  .mktoCheckboxList {
    color: #fff !important;
  }
  #mktoForm_8036,
  .mktoForm {
    position: relative;
    z-index: 2;
    border: 3px solid #fff;
    border-radius: 10px;
    padding: 30px 10px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  #mktoForm_8036 {
    max-width: 600px;
    input,
    textarea {
      padding: 7px;
      border: none;
      @media screen and (max-width: 991px) {
        width: 100% !important;
      }
    }
    input[type='checkbox'] {
      @media screen and (max-width: 991px) {
        width: auto !important;
      }
    }
    select,
    label {
      width: 250px;
      @media screen and (max-width: 991px) {
        width: 100% !important;
      }
    }
    textarea {
      width: 420px;
      @media screen and (max-width: 991px) {
        width: 100%;
        height: 4.6rem;
      }
    }
    span {
      color: #fff !important;
    }
    #LblExpressConsent {
      float: none;
      width: 100% !important;
    }
    .mktoCheckboxList {
      width: 125px !important;
      padding-left: 10px;
    }
  }
  .mktoForm .mktoRadioList,
  .mktoForm .mktoCheckboxList {
    padding: 0.3em;
    float: left;
  }
  .mktoForm .mktoRequiredField label.mktoLabel {
    font-weight: bold !important;
  }
  #mktoForm_8036 #Address,
  .mktoForm #Address {
    width: 420px !important;
    @media screen and (max-width: 991px) {
      width: 100% !important;
    }
  }
  .mktoButtonWrap,
  .mktoSimple {
    margin-left: 5px !important;
  }
  .mktoForm .mktoButtonWrap.mktoSimple .mktoButton {
    color: #fff;
    border: 1px solid #75ae4c;
    padding: 0.4em 1em;
    font-size: 1em;
    background-color: #99c47c !important;
    background-image: -webkit-linear-gradient(top, #99c47c, #75ae4c);
    background-image: -moz-linear-gradient(top, #99c47c, #75ae4c);
    background-image: linear-gradient(to bottom, #99c47c, #75ae4c);
  }
  .mktoForm .mktoRequiredField label.mktoLabel {
    font-weight: bold;
    width: 105px !important;
  }

  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    height: auto;
    padding: 35px;
  }
`;

export const Header3 = styled.h3`
  color: #fff;
  font-family: 'Figtree-Light';
  font-size: 26px;
  line-height: 35px;
  margin-bottom: 35px;
  letter-spacing: 0.02em;
  font-weight: 300;
  padding-top: 0px;
  font-size: 1.8rem;
  @media (max-width: 1399px) {
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
  font-family: 'Figtree-Black';
  font-weight: normal !important;
  color: #fff;
  font-weight: bold !important;
  font-size: 2.5rem;
  line-height: 2.8rem;
  letter-spacing: 0.02em;
  @media (max-width: 1399px) {
    font-size: 2.2rem;
  }
`;

export const Header = styled.h1`
  font-size: 38px;
  line-height: 42px;
  padding: 15px 0 0 0;
  margin: 0 0 25px 0;
  font-family: 'Gotham';
  font-weight: normal !important;
  color: #fff;
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 38px;
    padding-top: 20px;
  }
`;

export const SuperScriptStyle = styled.sup`
  vertical-align: top;
  font-size: 18px;
  line-height: 30px;
`;

export const LinkStyle = styled.a`
  text-decoration: none;
  color: #fff;
  transition: 0.25s ease-out;
  text-align: center;
  margin: 0 0 35px 0;
  font-family: 'Gotham';
  cursor: pointer;
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
