import React from 'react';
import * as Styled from './iframeContainerStyles';
import { INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const IframeContainer = ({ sectionData, location }) => {
  React.useEffect(async () => {
    if (sectionData?.elementId === location?.hash?.replace('#', '')) {
      const waitedID = await new Promise((resolve) => {
        document?.getElementById(sectionData?.elementId) && resolve(true);
      });
      if (waitedID) {
        setTimeout(() => {
          window.location.href = `#${sectionData?.elementId}`;
        }, 500);
      }
    }
  }, [sectionData?.elementId]);

  React.useEffect(() => {
    window.iFrameResize(
      { log: false, heightCalculationMethod: 'max' },
      '#vizi_mjp'
    );
  }, []);

  const optionsMainStyle = {
    renderNode: {
      [INLINES.HYPERLINK]: (node) => (
        <Styled.Body>
          <Styled.Iframe
            id="vizi_mjp"
            sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox, allow-forms"
            style={{ width: '100%', border: 'none', height: '550vh' }}
            src={node?.data?.uri}
            frameborder="0"
          ></Styled.Iframe>
        </Styled.Body>
      ),
    },
  };
  return (
    <div>
      {sectionData?.contentDetails &&
        documentToReactComponents(
          JSON.parse(sectionData?.contentDetails?.raw),
          optionsMainStyle
        )}
    </div>
  );
};

export default IframeContainer;
