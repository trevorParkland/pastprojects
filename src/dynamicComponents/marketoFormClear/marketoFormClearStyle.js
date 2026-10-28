import styled from 'styled-components';
import DotImage from '../../images/dot-bk.png';

export const HeaderH1 = styled.h1`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #00457c;
  font-size: 45px;
  line-height: 50px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 35px;
    line-height: 40px;
  }
`;
export const HeaderH2 = styled.h2`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #037ec4;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;

export const ParaText = styled.p`
  margin: 0 0 30px 0;
  padding: 0;
`;

export const HeaderH3 = styled.h3`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Light', arial, sans-serif;
  font-weight: normal !important;
  color: #48b4f1;
  font-size: 26px;
  line-height: 35px;
  letter-spacing: 0.02em;
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`;

export const HorizontalBreak = styled.hr`
  height: 1px;
  border: none;
  background: #e5e5e5;
  margin: 50px 0;
  clear: both;
  opacity: 1 !important;
  @media (max-width: 767px) {
    margin: 30px 0;
  }
`;

export const DivStyle = styled.div`
  /* This is used to test if the stylesheet has been loaded yet*/
  #mktoStyleLoaded {
    background-color: #123456;
    display: none;
  }
  .mktoForm {
    text-align: left;
    color: #666 !important;
    font-family: 'Figtree-Medium', arial, sans-serif !important;
  }
  .mktoForm .mktoClear {
    clear: both;
    float: none;
  }
  .mktoForm div,
  .mktoForm label,
  .mktoForm p {
    text-align: left;
    padding: 0;
  }
  .mktoForm span {
    text-align: left;
    padding: 0;
    margin: 0 !important;
  }

  .mktoForm input,
  .mktoForm select,
  .mktoForm textarea {
    margin: 0;
    background-color: #d9ece8 !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    min-height: 1.9em !important;
    padding: 10px !important;
  }
  .mktoForm * {
    font-family: inherit;
  }
  .mktoForm .mktoOffset {
    float: left;
    height: 1.2em;
  }
  .mktoForm .mktoGutter {
    float: left;
    height: 1.2em;
    display: none;
  }
  .mktoForm .mktoFieldWrap {
    float: left;
  }
  .mktoForm .mktoFieldWrap .mktoInstruction {
    display: none;
  }
  .mktoForm .mktoLabel {
    float: left;
    line-height: 1.2em;
    padding-top: 0.3em;
  }
  .mktoForm .mktoField {
    line-height: 1.2em;
    font-size: 1em;
    float: left;
  }
  .mktoForm .mktoPlaceholder {
    float: left;
  }
  .mktoForm .mktoLogicalField {
    float: left;
  }
  .mktoForm fieldset {
    padding: 0;
    margin: 0;
  }
  .mktoForm fieldset legend {
    margin: 0 1em 0.5em;
    color: inherit;
  }
  .mktoForm a.mktoNotYou {
    cursor: pointer;
    color: #4692f3;
  }
  .mktoForm a.mktoNotYou:hover {
    text-decoration: none;
  }
  .mktoForm .mktoAsterix {
    float: right;
    color: #bf0000;
    padding-left: 5px;
    display: none;
  }
  .mktoField .mktoTextField .mktoHasWidth .mktoRequired {
    clear: left !important;
  }
  .mktoForm .mktoRadioList,
  .mktoForm .mktoCheckboxList {
    padding: 0.3em;
    float: left;
    clear: left;
  }
  .mktoForm .mktoCheckboxList > input {
    height: 1.2em !important;
  }
  .mktoForm .mktoRadioList > label,
  .mktoForm .mktoCheckboxList > label {
    margin-left: 1.5em;
    margin-top: 0.1em;
    margin-bottom: 0.6em;
    line-height: 1.2em;
    display: block;
    min-height: 12px;
  }
  .mktoForm.ie7 .mktoRadioList > label,
  .mktoForm.ie7 .mktoCheckboxList > label {
    padding: 0.2em 0 0;
  }
  .mktoForm .mktoRadioList > label > input,
  .mktoForm .mktoCheckboxList > label > input {
    float: left;
    margin: 0;
    margin-left: -1.5em;
  }
  .mktoForm input[type='radio'] {
    min-height: 1.4em !important;
  }
  .mktoForm input[type='checkbox'] {
    min-height: 0 !important;
  }
  .mktoForm input[type='radio']:checked {
    background: url(${DotImage}) no-repeat 2px 2px !important;
  }
  .mktoForm .mktoRadioList > input,
  .mktoForm .mktoCheckboxList > input {
    padding: 0;
  }
  .mktoForm .mktoLabelToLeft > label {
    text-align: right;
    margin-left: 0;
    margin-right: 1.5em;
  }
  .mktoForm .mktoLabelToLeft input[type='checkbox'],
  .mktoForm .mktoLabelToLeft input[type='radio'] {
    position: absolute;
    right: 0.3em;
  }
  .mktoForm.mktoLayoutAbove .mktoRequiredField .mktoAsterix {
    float: left;
    padding-left: 0;
    padding-right: 5px;
  }
  .mktoForm .mktoRequiredField .mktoAsterix {
    display: block;
    float: left;
  }
  .mktoForm .mktoRequiredField label.mktoLabel {
    font-weight: bold;
  }
  .mktoForm label.mktoLabel[for='ExpressConsent'] a {
    font-family: 'Figtree-Regular', arial, sans-serif !important;
    font-weight: normal !important;
    text-decoration: none;
    color: #9fb577;
  }

  .mktoForm input[type='text'],
  .mktoForm input[type='url'],
  .mktoForm input[type='email'],
  .mktoForm input[type='tel'],
  .mktoForm input[type='number'],
  .mktoForm input[type='date'] {
    padding: 0.1em 0.2em;
    line-height: 1.2em;
    margin: 0;
    clear: left;
  }
  .mktoForm input[type='range'] {
    padding: 0.25em 0;
    margin: 0;
  }
  .mktoForm input[type='range']::-ms-tooltip {
    display: none;
  }
  .mktoForm input[type='url'],
  .mktoForm input[type='text'],
  .mktoForm input[type='date'],
  .mktoForm input[type='tel'],
  .mktoForm input[type='email'],
  .mktoForm input[type='number'],
  .mktoForm textarea.mktoField,
  .mktoForm select.mktoField {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    clear: left;
  }
  .mktoForm .mktoFormRow {
    clear: both;
  }
  .mktoForm .mktoFormCol {
    float: left;
    position: relative;
    min-height: 2em;
    margin-bottom: 20px !important;
  }
  .mktoButtonRow {
    display: inline-block;
    position: relative;
  }
  .mktoForm textarea.mktoField {
    display: block;
    padding: 0.2em;
    margin: 0;
    line-height: 1.2em;
    overflow: auto;
    resize: none;
    float: none;
  }
  /* Firefox computes row height wrong for the last 13 years... https://bugzilla.mozilla.org/show_bug.cgi?id=33654 */
  .mktoForm textarea[rows='1'] {
    height: 2em;
  }
  .mktoForm textarea[rows='2'] {
    height: 3.4em;
  }
  .mktoForm textarea[rows='3'] {
    height: 4.6em;
  }
  .mktoForm textarea[rows='4'] {
    height: 5.8em;
  }
  .mktoForm textarea[rows='5'] {
    height: 7em;
  }
  .mktoForm textarea[rows='6'] {
    height: 8.2em;
  }
  .mktoForm textarea[rows='7'] {
    height: 9.4em;
  }
  .mktoForm textarea[rows='8'] {
    height: 10.6em;
  }
  .mktoForm.mktoLayoutCenter .mktoLabel {
    text-align: right;
  }
  .mktoForm.mktoLayoutAbove .mktoGutter {
    display: none;
  }
  .mktoForm.mktoLayoutAbove .mktoLabel {
    text-align: left;
  }
  .mktoForm.mktoLayoutAbove .mktoRadioList,
  .mktoForm.mktoLayoutAbove .mktoCheckboxList {
    float: none;
    clear: left;
  }
  .mktoForm.mktoLayoutAbove .mktoField,
  .mktoForm.mktoLayoutAbove .mktoLogicalField {
    clear: left;
  }
  .mktoForm.mktoLayoutAbove textarea.mktoField {
    float: left;
  }
  .mktoForm .mktoError {
    position: absolute;
    z-index: 99;
    color: #bf0000;
  }
  .mktoForm .mktoError .mktoErrorArrowWrap {
    width: 16px;
    height: 8px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 5px;
    z-index: 100;
  }
  .mktoForm.ie7 .mktoError .mktoErrorArrowWrap {
    top: -8px;
  }
  .mktoForm .mktoError .mktoErrorArrow {
    background-color: #e51b00;
    border: 1px solid #9f1300;
    border-right: none;
    border-bottom: none;
    display: inline-block;
    height: 16px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    width: 16px;
    margin-top: 5px;
  }
  /** These two styles are for browsers that don't support css transforms */
  /* .mktoForm .mktoError .mktoErrorArrowWrap.mktoArrowImage {
  background: transparent url("../images/callout-arrow-up-red.png") top center no-repeat;
  bottom: -7px;
} */
  .mktoForm .mktoError .mktoErrorArrowWrap.mktoArrowImage .mktoErrorArrow {
    display: none;
  }
  .mktoForm .mktoError .mktoErrorMsg {
    display: block;
    margin-top: 7px;
    background-color: #e51b00;
    background-image: -webkit-linear-gradient(#e51b00 43%, #ba1600 100%);
    background-image: -moz-linear-gradient(#e51b00 43%, #ba1600 100%);
    background-image: linear-gradient(#e51b00 43%, #ba1600 100%);
    background-image: -ms-linear-gradient(#e51b00 43%, #ba1600 100%);
    border: 1px solid #9f1300;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.65) 0 2px 7px, inset #ff3c3c 0 1px 0px;
    box-shadow: rgba(0, 0, 0, 0.65) 0 2px 7px, inset #ff3c3c 0 1px 0px;
    color: #f3f3f3;
    font-size: 1em;
    line-height: 1.2em;
    max-width: 16em;
    padding: 0.4em 0.6em;
    text-shadow: #901100 0 -1px 0;
  }
  .mktoForm .mktoError .mktoErrorMsg .mktoErrorDetail {
    display: block;
  }
  .mktoForm button.mktoButton {
    cursor: pointer;
    margin: 0;
    padding: 16px 25px 14px 25px !important;
    margin: 0 5px 5px 0 !important;
    font-family: 'Figtree-Medium', arial, sans-serif !important;
    font-size: 13px !important;
    line-height: 16px !important;
    text-transform: uppercase !important;
    text-align: left !important;
    color: #fff !important;
    background: #037ec4 !important;
    border: none !important;
    box-shadow: none !important;
  }
  .mktoForm button.mktoButton:disabled {
    opacity: 0.5;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)';
    filter: alpha(opacity=50);
    cursor: default;
  }
  .mktoNoJS .mktoLabel {
    display: block;
    padding-right: 10px;
    width: 110px;
    text-align: right;
  }
  .mktoNoJS input[type='text'] {
    width: 150px;
  }
  .mktoForm .cf_widget_socialsignon .cf_sign_on {
    margin-bottom: 1.5em;
  }
  .mktoForm .mktoRangeField .mktoRangeValue {
    zoom: 1;
    float: left;
    display: none;
    text-align: center;
    position: absolute;
    z-index: 99;
    color: #000;
  }
  .mktoForm.ie7 .mktoRangeField .mktoRangeValue,
  .mktoForm.ie6 .mktoRangeField .mktoRangeValue {
    position: relative;
  }
  .mktoForm .mktoRangeField.mktoHover .mktoRangeValue {
    display: block;
  }
  .mktoForm .mktoRangeField .mktoRangeValueArrowWrap {
    width: 16px;
    height: 8px;
    overflow: hidden;
    position: absolute;
    bottom: -7px;
    z-index: 100;
  }
  .mktoForm .mktoRangeField .mktoRangeValueArrow {
    background-color: #028d05;
    border: 1px solid #005602;
    height: 16px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    width: 16px;
    background-color: #007d04;
    border-left: none;
    border-top: none;
    margin-top: 5px;
    position: absolute;
    bottom: 5px;
  }
  /** These two styles are for browsers that don't support css transforms */
  /* .mktoForm .mktoRangeField .mktoRangeValueArrowWrap.mktoArrowImage {
  background: transparent url("../images/callout-arrow-down-green.png") top center no-repeat;
  bottom: -7px;
} */
  .mktoForm
    .mktoRangeField
    .mktoRangeValueArrowWrap.mktoArrowImage
    .mktoRangeValueArrow {
    display: none;
  }
  .mktoForm .mktoRangeField .mktoRangeValueText {
    display: block;
    background-color: #028d05;
    background-image: -webkit-linear-gradient(#028d05 43%, #007d04 100%);
    background-image: -moz-linear-gradient(#028d05 43%, #007d04 100%);
    background-image: linear-gradient(#028d05 43%, #007d04 100%);
    background-image: -ms-linear-gradient(#028d05 43%, #007d04 100%);
    border: 1px solid #005602;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.65) 0 2px 7px, inset #00a500 0 1px 0px;
    box-shadow: rgba(0, 0, 0, 0.65) 0 2px 7px, inset #00a500 0 1px 0px;
    color: #f3f3f3;
    font-size: 1em;
    line-height: 1.2em;
    padding: 0.4em 0.6em;
    text-shadow: #005602 0 -1px 0;
    text-align: center;
  }
  .mktoModal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .mktoModal .mktoModalMask {
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    zoom: 1;
    background: rgba(0, 0, 0, 0.5);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#80000000, endColorstr=#80000000);
    -ms-filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#80000000, endColorstr=#80000000)';
  }
  .mktoModal .mktoModalContent {
    position: absolute;
    z-index: 10001;
    background: #fff;
    padding: 10px;
  }
  .mktoModal .mktoModalClose {
    position: absolute;
    cursor: pointer;
    top: -10px;
    right: -10px;
    background: #000;
    color: #fff;
    width: 19px;
    height: 19px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    line-height: 19px;
    -webkit-border-radius: 19px;
    border-radius: 19px;
    text-align: center;
    border: 2px solid #ccc;
  }

  /* This part of the stylesheet is overrides for mobile browsers with screen width restrictions.
   It should always be at the end of the document. */
  @media only screen and (max-width: 480px) {
    .mktoForm,
    .mktoForm * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      padding: 10px;
    }
    .mktoForm .mktoGutter,
    .mktoForm .mktoOffset {
      display: none;
    }
    .mktoForm .mktoFormCol .mktoLabel {
      text-align: left;
      width: 100%;
    }
    .mktoForm .mktoFormCol {
      float: none;
    }
    .mktoForm .mktoFieldWrap {
      float: none;
    }
    .mktoForm fieldset {
      padding: 0 10px;
    }
    .mktoForm input[type='url'],
    .mktoForm input[type='text'],
    .mktoForm input[type='date'],
    .mktoForm input[type='tel'],
    .mktoForm input[type='email'],
    .mktoForm input[type='number'],
    .mktoForm textarea.mktoField,
    .mktoForm select.mktoField {
      width: 100%;
      height: 1.5em;
      line-height: 1.5em;
      font-size: 18px;
    }
    .mktoForm select.mktoField {
      height: auto;
    }
    .mktoForm .mktoFormRow .mktoField {
      clear: left;
    }
    .mktoForm .mktoFormRow .mktoFormCol {
      clear: both;
    }
    .mktoForm .mktoRadioList,
    .mktoForm .mktoCheckboxList {
      width: 100%;
    }
    .mktoForm .mktoFormRow .mktoRequiredField .mktoAsterix {
      float: left;
      padding-left: 0;
      padding-right: 5px;
    }
    .mktoModal .mktoModalContent {
      padding: 10px 0;
    }
    .mktoModal .mktoModalClose {
      right: 0;
    }
    .mktoForm .cf_widget_socialsignon {
      display: block;
    }
    .mktoForm .cf_widget_socialsignon .cf_sign_on {
      width: 100%;
    }
    .mktoForm .cf_widget_socialsignon .cf_sign_on_button {
      width: auto;
    }
  }
  @media only screen and (max-width: 480px),
    only screen and (max-device-width: 480px),
    only screen and (max-device-height: 480px) {
    .mktoMobileShow .mktoForm,
    .mktoForm * {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      padding: 10px;
    }
    .mktoMobileShow .mktoForm .mktoGutter,
    .mktoMobileShow .mktoForm .mktoOffset {
      display: none;
    }
    .mktoMobileShow .mktoForm .mktoFormCol .mktoLabel {
      text-align: left;
      width: 100%;
    }
    .mktoMobileShow .mktoForm .mktoFormCol {
      float: none;
    }
    .mktoMobileShow .mktoForm .mktoFieldWrap {
      float: none;
    }
    .mktoMobileShow .mktoForm fieldset {
      padding: 0 10px;
    }
    .mktoMobileShow .mktoForm input[type='url'],
    .mktoMobileShow .mktoForm input[type='text'],
    .mktoMobileShow .mktoForm input[type='date'],
    .mktoMobileShow .mktoForm input[type='tel'],
    .mktoMobileShow .mktoForm input[type='email'],
    .mktoMobileShow .mktoForm input[type='number'],
    .mktoMobileShow .mktoForm textarea.mktoField,
    .mktoMobileShow .mktoForm select.mktoField {
      width: 100%;
      height: 1.5em;
      line-height: 1.5em;
      font-size: 18px;
    }
    .mktoMobileShow .mktoForm select.mktoField {
      height: auto;
    }
    .mktoMobileShow .mktoForm .mktoFormRow .mktoField {
      clear: left;
    }
    .mktoMobileShow .mktoForm .mktoFormRow .mktoFormCol {
      clear: both;
    }
    .mktoMobileShow .mktoForm .mktoRadioList,
    .mktoMobileShow .mktoForm .mktoCheckboxList {
      width: 100%;
    }
    .mktoMobileShow .mktoForm .mktoFormRow .mktoRequiredField .mktoAsterix {
      float: left;
      padding-left: 0;
      padding-right: 5px;
    }
    .mktoMobileShow .mktoModal .mktoModalContent {
      padding: 10px 0;
    }
    .mktoMobileShow .mktoModal .mktoModalClose {
      right: 0;
    }
    .mktoMobileShow .mktoForm .cf_widget_socialsignon {
      display: block;
    }
    .mktoMobileShow .mktoForm .cf_widget_socialsignon .cf_sign_on {
      width: 100%;
    }
    .mktoMobileShow .mktoForm .cf_widget_socialsignon .cf_sign_on_button {
      width: auto;
    }
  }

  .mktoForm label.mktoLabel[for='ExpressConsent'],
  .mktoForm label.mktoLabel[for='ExpressConsent'] span,
  .mktoForm label.mktoLabel[for='ExpressConsent'] a {
    font-family: 'Figtree-Regular', arial, sans-serif !important;
    font-weight: normal !important;
  }

  label[for='ExpressConsent'],
  label[for='referralConsent'] {
    font-size: 11px;
  }
  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`;
