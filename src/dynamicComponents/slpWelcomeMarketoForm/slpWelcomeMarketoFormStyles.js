import styled from 'styled-components';

export const Body = styled.div`
  padding: 4.05vw 30%;
  text-align: left;
  background: #ededed;
  word-wrap: break-word;
  @media (max-width: 991px) {
    width: 100%;
    margin: 0;
    height: auto;
    padding: 35px;
  }
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

export const Header3 = styled.h2`
  color: #00493b;
  margin-bottom: 35px;
  letter-spacing: 0.02em;
  font-family: 'Figtree-Regular', arial, sans-serif;
  text-transform: none;
  font-size: 36px;
  line-height: 46px;
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`;
export const ParaText = styled.div`
  color: #484848;
  white-space: pre-wrap;
  line-height: 22px;
  letter-spacing: 0.02em;
  margin-bottom: 30px;
  font-size: 18px;
  font-family: 'Figtree-Regular', arial, sans-serif;
  @media (max-width: 767px) {
    line-height: 22px;
    font-size: 16px;
  }
  b {
    font-family: 'Figtree-Regular', arial, sans-serif;
  }
`;

export const Header2 = styled.h2`
  font-weight: normal !important;
  color: rgb(0, 69, 124);
  font-size: 32px;
  letter-spacing: 0.02em;
  margin-bottom: 35px;
  font-family: 'Figtree-Regular', arial, sans-serif;
  text-transform: none;
  font-size: 36px;
  line-height: 46px;
  padding: 25px 0 0 0;
  @media (max-width: 991px) {
    margin-bottom: 20px;
    font-size: 26px;
    line-height: 33px;
  }
`;

export const Header = styled.h1`
  margin: 0 0 35px 0;
  padding: 0;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-weight: 500;
  color: #00493b;
  font-size: 34px;
  line-height: 36px;
  @media (max-width: 991px) {
    font-size: 30px;
    line-height: 38px;
    padding-top: 0px;
  }
`;

export const SuperScriptStyle = styled.sup`
  vertical-align: top;
  font-size: 18px;
  line-height: 30px;
`;

export const LinkStyle = styled.a`
  text-decoration: none;
  transition: 0.25s ease-out;
  text-align: center;
  margin: 0 0 35px 0;
  font-family: 'Figtree-Regular', arial, sans-serif;
  cursor: pointer;
  color: rgb(0, 166, 232);
  @media (max-width: 767px) {
    line-height: 22px;
    font-size: 16px;
  }
`;

export const FormBody = styled.div`
white-space: pre-line;
 #mktoStyleLoaded {
  /* css load detection, do not remove */
  color:#123456 !important;
}

.mktoForm {
	font-family: 'Figtree-Regular', arial, sans-serif !important;
	color: #666 !important;
}

.mktoForm fieldset {
  border:1px solid #aeb0b6 !important;
  -webkit-border-radius:0 !important;
  -moz-border-radius:0 !important;
  border-radius:0 !important;
}
.mktoForm fieldset legend{
  padding:0 1em !important;
}

.mktoForm .mktoLabel {
  padding-top: 0.7em !important;
}

.mktoForm label.mktoLabel[for="ExpressConsent"],
.mktoForm label.mktoLabel[for="ExpressConsent"] span,
.mktoForm label.mktoLabel[for="ExpressConsent"] a {
  font-family: 'Figtree-Regular', arial, sans-serif !important;
  font-weight: normal !important;
  font-size: 12px !important;
  line-height: 17px !important;
  -webkit-text-size-adjust: none;
  }
.mktoForm label.mktoLabel[for="ExpressConsent"] sup {
  font-family: 'Figtree-Regular', arial, sans-serif !important;
  font-weight: normal !important;
  font-size: 9px !important;
  line-height: 17px !important;
  -webkit-text-size-adjust: none;
  }
.mktoForm label.mktoLabel[for="referralConsent"],
.mktoForm label.mktoLabel[for="referralConsent"] span,
.mktoForm label.mktoLabel[for="referralConsent"] a {
  font-family: 'Figtree-Regular', arial, sans-serif !important;
  font-weight: normal !important;
  font-size: 12px !important;
  line-height: 17px !important;
  -webkit-text-size-adjust: none;
  }
.mktoForm label.mktoLabel[for="referralConsent"] sup {
  font-family: 'Figtree-Regular', arial, sans-serif !important;
  font-weight: normal !important;
  font-size: 9px !important;
  line-height: 17px !important;
  -webkit-text-size-adjust: none;
  }
.mktoForm label.mktoLabel[for="contestTerms"],
.mktoForm label.mktoLabel[for="contestTerms"] span,
.mktoForm label.mktoLabel[for="contestTerms"] a {
  font-family: 'Figtree-Regular', arial, sans-serif !important;
  font-weight: normal !important;
  font-size: 12px !important;
  line-height: 17px !important;
  -webkit-text-size-adjust: none;
  }
.mktoForm label.mktoLabel[for="contestTerms"] sup {
  font-family: 'Figtree-Regular', arial, sans-serif !important;
  font-weight: normal !important;
  font-size: 9px !important;
  line-height: 17px !important;
  -webkit-text-size-adjust: none;
  }

.mktoForm input[type=text],
.mktoForm input[type=url],
.mktoForm input[type=email],
.mktoForm input[type=tel],
.mktoForm input[type=number],
.mktoForm input[type=date],
.mktoForm select.mktoField,
.mktoForm textarea.mktoField{
  -webkit-appearance: none !important;
  background-color:#fff !important;
  line-height:1.5em !important;
  color:#000 !important;
  border: 1px solid rgba(0,0,0,0.2) !important;
  -webkit-border-radius:0 !important;
  -moz-border-radius:0 !important;
  border-radius:0 !important;
  padding:0.2em 0.3em !important;
  box-shadow:none !important;
  min-height:1.9em !important;
  padding: 10px !important;
  margin-top: 8px !important;
}
.mktoForm input[type=text]:focus,
.mktoForm input[type=url]:focus,
.mktoForm input[type=email]:focus,
.mktoForm input[type=tel]:focus,
.mktoForm input[type=number]:focus,
.mktoForm input[type=date]:focus,
.mktoForm select.mktoField:focus,
.mktoForm textarea.mktoField:focus{
  outline:none !important;
  border:none !important;
  color:#000 !important;
}
.mktoForm textarea.mktoField{
  height: 150px !important;
}

.mktoForm select.mktoField::-ms-expand {
  display: none !important;
}

.mktoForm select.mktoField {
  -moz-appearance: none !important;
  text-indent: 0.01px !important;
  text-overflow: "" !important;
  padding:10px !important;
}


.mktoForm div.mktoLogicalField {
  border:1px solid transparent !important;
  -webkit-border-radius:7px !important;
  -moz-border-radius:7px !important;
  border-radius:7px !important;
}

.mktoForm input.mktoField.mktoInvalid,
.mktoForm select.mktoField.mktoInvalid,
.mktoForm textarea.mktoField.mktoInvalid,
.mktoForm div.mktoLogicalField.mktoInvalid{
  background: #ffd9d9 !important;
  border: none !important;
}

.mktoForm .mktoRadioList > label,
.mktoForm .mktoCheckboxList > label{
  margin-bottom:0.6em !important;
  -webkit-user-select: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
}

.mktoForm input[type=checkbox],
.mktoForm input[type=radio] {
  width:1em !important;
  height:1em !important;
  opacity:0 !important;
}

.mktoForm input[type=checkbox] + label:before,
.mktoForm input[type=radio] + label:before
{
  content: "" !important;  
  position:absolute !important;
  width:1em !important;
  height:1em !important;  
  margin-left:-1.5em !important;
  line-height:1em !important;
  background-color:#fff !important;
  box-shadow:inset 1px 1px 4px 1px #ddd !important;
  font-family:Arial, sans-serif !important;
  font-size:13px !important;
  border:1px solid #aeb0b6 !important;
}

.mktoForm .mktoLabelToLeft input[type=checkbox] + label:before,
.mktoForm .mktoLabelToLeft input[type=radio] + label:before{
  margin-left:0 !important;
  right:0.3em !important;
}

.mktoForm input[type=checkbox]:checked + label:before,
.mktoForm input[type=radio]:checked + label:before {
  text-align:center !important;
  color:#000 !important;
}

.mktoForm input[type=checkbox]:focus + label:before,
.mktoForm input[type=radio]:focus + label:before{
  border:1px solid #888 !important;
}

.mktoForm input[type=checkbox] + label:before{
  border-radius:2px !important;

}
.mktoForm input[type=checkbox]:checked + label:before{
  content:"\2713 " !important;
}

.mktoForm input[type=radio] + label:before{
  border-radius:1em !important;
}
.mktoForm input[type=radio]:checked + label:before{
  content:"\25CF " !important;
}

.mktoForm.mktoNoCheckedSupport input[type=checkbox] + label:before,
.mktoForm.mktoNoCheckedSupport input[type=radio] + label:before{
  display:none !important;
}
.mktoForm.mktoNoCheckedSupport select.mktoField,
.mktoForm.ie7 select.mktoField,
.mktoForm.ie6 select.mktoField {
  background-image:none !important;
  padding-right:0.3em !important;
}

.mktoForm textarea.mktoField{
  resize: none !important;
}

button.mktoButton {
	position: relative !important;
  top: 0 !important;
  padding: 16px 25px 14px 25px !important;
	margin: 0 5px 5px 0 !important;
	font-family: 'Figtree-Bold', arial, sans-serif !important;
	font-size: 16px !important;
	line-height: 16px !important;
	text-transform: uppercase !important;
	text-align: left !important;
	color: #fff !important;
	background: #00a6e8 !important;
	border: none !important;
  border-radius: 100px !important;
	box-shadow: none !important;
  transition: all 0.25s ease-out;
	}
button.mktoButton:hover {
  top: -5px !important;
  color: #fff !important;
  border-color: #f7991c !important;
  box-shadow: 0 5px 0 0 #f7991c !important;
  }
.mktoButtonWrap {
  margin-left: 10px !important;
  }
	
.mktoForm label[for=Address] strong {
	font-weight: normal !important;
	}

`;
