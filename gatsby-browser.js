// custom typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
// normalize CSS across browsers
import './src/styles/normalize.css';
// custom CSS styles
import './src/styles/style.css';
import './src/styles/marketo.css';

import './src/styles/fonts.css';
// Highlighting for code blocks
import 'prismjs/themes/prism.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export const shouldUpdateScroll = ({ routerProps }) => {
  return false;
};
