const React = require('react');
// exports.onPreRenderHTML = ({ setHeadComponents }) => {
//   return setHeadComponents();
// };
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  let headComponents = getHeadComponents();
  headComponents = [
    ...[
      <script
        key="munchkinKey"
        type="text/javascript"
        src="https://munchkin.marketo.net/munchkin.js"
        async
      />,
      <script
        key="bluewaveenergyKey"
        src="https://pages.bluewaveenergy.ca/js/forms2/js/forms2.min.js"
        async
      ></script>,
      <script
        key="iframeKey"
        src="https://s3.amazonaws.com/data.vizirecruiter.com/iframeResizer.min.js"
      ></script>,
    ],
    ...headComponents,
  ];
  replaceHeadComponents(headComponents);
};
