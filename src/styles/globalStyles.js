import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`	
/*------------------------------
    Gen. GENERAL 
------------------------------*/
	
	* {
		box-sizing: border-box;		
		-box-sizing: border-box;
		-moz-box-sizing: border-box;
		-text-size-adjust: none;
		}
	
		body {
			margin: 0;
			padding: 0;
			background-color: #fff;
			background-repeat: no-repeat;
			background-position: top center;
			color: #666;
			font-family: "Figtree-Regular", arial, sans-serif;
			font-size: 15px;
			line-height: 24px;
			letter-spacing: 0.02em;
		}

		img {
			border: 0;
			vertical-align: top;
		}

		h1 {
			margin: 0 0 35px 0;
			padding: 0;
			font-family: "Figtree-Light", arial, sans-serif;
			font-weight: normal !important;
			color: #00457C;
			font-size: 45px;
			line-height: 50px;
		}
		

		h2 {
			margin: 0 0 35px 0 !important;
			padding: 0;
			font-family: "Figtree-Light", arial, sans-serif;
			font-weight: normal !important;
			color: #037EC4;
			font-size: 32px;
			line-height: 38px;
		}
		h3 {
			margin: 0 0 35px 0;
			padding: 0;
			font-family: "Figtree-Light", arial, sans-serif;
			font-weight: normal !important;
			color: #48B4F1;
			font-size: 26px;
			line-height: 35px;
		}
		h1 strong,
		h2 strong,
		h3 strong {
			font-family: "Figtree-Light", arial, sans-serif;
			font-weight: normal !important;
		}

		hr {
			height: 1px;
			border: none;
			background: #e5e5e5;
			margin: 50px 0;
			clear: both;
		}

		p {
			margin: 0 0 30px 0;
			padding: 0;
		}
		p.intro {
			font-size: 19px;
			line-height: 28px;
		}
		p.note {
			font-size: 12px;
			line-height: 18px;
		}

		strong {
			font-family: "Figtree-Bold", arial, sans-serif;
		}

		a:hover,
		a:active,
		a:focus,
		object {
			outline: none;
		}
		a {
			text-decoration: none;
			color: #9fb577;
			webkit-transition: color 0.15s ease-out;
			-moz-transition: color 0.15s ease-out;
			-o-transition: color 0.15s ease-out;
			-ms-transition: color 0.15s ease-out;
			transition: color 0.15s ease-out;
		}
		a:hover {
			text-decoration: none;
			color:#037EC4;
		}

		form,
		input,
		textarea {
			margin: 0;
			padding: 0;
			outline: none;
			-webkit-border-radius: 0;
		}
		/* SEARCH FIELD PLACEHOLDER - STANDARD */
		::-webkit-input-placeholder {
		/* WebKit browsers */
			padding-top: 2px;
			color: #aaa;
		}
		:-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
			padding-top: 2px;
			color: #aaa;
		}
		::-moz-placeholder {
		/* Mozilla Firefox 19+ */
			padding-top: 2px;
			color: #aaa;
		}
		:-ms-input-placeholder {
		/* Internet Explorer 10+ */
			padding-top: 2px;
			color: #aaa;
		}
		label.placeholder {
		/* Internet Explorer 9- */
			color: #aaa !important;
		}

		/* SEARCH FIELD PLACEHOLDER - MOBILE */
		.topMobile-search ::-webkit-input-placeholder {
		/* WebKit browsers */
			color: #02649f;
		}
		.topMobile-search :-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
			color: #02649f;
		}
		.topMobile-search ::-moz-placeholder {
		/* Mozilla Firefox 19+ */
			color: #02649f;
		}
		.topMobile-search :-ms-input-placeholder {
		/* Internet Explorer 10+ */
			color: #02649f;
		}
		.topMobile-search label.placeholder {
		/* Internet Explorer 9- */
			color: #02649f !important;
		}

		blockquote {
			width: 100%;
			padding: 30px 40px 10px 40px;
			margin: 0 0 30px 30px;
			border: 4px solid #cde5f3;
			background: #fff;
		}
		blockquote .button,
		blockquote .button-light-blue,
		blockquote .button-dark-blue {
			margin: 0 0 30px 0;
		}
		blockquote h2 {
			margin-bottom: 25px;
		}

		sup,
		sub {
			font-size: 12px;
			line-height: 12px;
		}

@media print {
  @page {
    size: 370mm 427mm;
    margin: 14mm;
  }
}

`;

export default GlobalStyles;
