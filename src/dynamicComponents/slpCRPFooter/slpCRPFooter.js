import React from 'react';
import * as Styled from './slpCRPFooterStyles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function SlpCRPFooter({ sectionData }) {
  const optionsHeaderMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <Styled.FootContainer>
      <Styled.Foot>
        {sectionData?.contentDetails?.raw &&
          documentToReactComponents(
            JSON.parse(sectionData?.contentDetails?.raw),
            optionsHeaderMainStyle
          )}
      </Styled.Foot>
    </Styled.FootContainer>
  );
}
