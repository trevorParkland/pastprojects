import React from 'react';
import * as Styled from './slpStickyNoteStyles';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
  } from '../../utils';

const SlpStickyNote = ({ sectionData }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.ButtonStyle 
        href={
          isExternalUrlhref(node?.data?.uri)
            ? node?.data?.uri
            : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)
        }
        target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.ButtonStyle>
      ),
    },

    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <div id={sectionData?.elementId}>
      {sectionData?.contentDetails &&
        documentToReactComponents(
          JSON.parse(sectionData?.contentDetails?.raw),
          optionsMainStyle
        )}
    </div>
  );
};
export default SlpStickyNote;
