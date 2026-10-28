import React from 'react';
import * as Styled from './slpCRPRichTextStyles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

export default function SlpCRPRichText({ sectionData }) {
  const optionsHeaderMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.Header>{children}</Styled.Header>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.Header2>{children}</Styled.Header2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.Paragraph>{children}</Styled.Paragraph>
      ),
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <Styled.Body>
      {sectionData?.subText && (
        <Styled.Header2>{sectionData?.subText}</Styled.Header2>
      )}
      {sectionData?.contentDetails?.raw &&
        documentToReactComponents(
          JSON.parse(sectionData?.contentDetails?.raw),
          optionsHeaderMainStyle
        )}
    </Styled.Body>
  );
}
