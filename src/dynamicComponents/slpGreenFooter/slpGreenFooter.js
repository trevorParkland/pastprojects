import React from 'react';
import * as Styled from './slpGreenFooterStyles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const SlpGreenFooter = ({ sectionData }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.NoteStyle>{children}</Styled.NoteStyle>
      ),
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <>
      <Styled.TermsBar>
        <Styled.Terms>
          {sectionData?.contentDetails &&
            documentToReactComponents(
              JSON.parse(sectionData?.contentDetails?.raw),
              optionsMainStyle
            )}
        </Styled.Terms>
      </Styled.TermsBar>
    </>
  );
};

export default SlpGreenFooter;
