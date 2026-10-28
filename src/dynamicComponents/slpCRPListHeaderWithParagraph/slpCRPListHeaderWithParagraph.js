import React from 'react';
import * as Styled from './slpCRPListHeaderWithParagraphStyles';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';
import { superScriptChars } from '../../constants/superScriptChars';

const SlpCRPListHeaderWithParagraph = ({ sectionData }) => {
  const optionsMainStyle = {
    renderMark: {
      [MARKS.CODE]: (node) => <Styled.CodeNumber>{node}</Styled.CodeNumber>,
      [MARKS.BOLD]: (node) => <Styled.Bold>{node}</Styled.Bold>,
      [MARKS.ITALIC]: (node) => <Styled.Italic>{node}</Styled.Italic>,
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2>{children}</Styled.HeaderH2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.HeaderH3>{children}</Styled.HeaderH3>
      ),

      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.LinkStyle
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.LinkStyle>
      ),
    },
    renderText: (text) =>
      text
        ?.split('\n')
        .flatMap((text, i) => [
          i > 0 && <br key={i} />,
          <React.Fragment key={i}>
            {text
              ?.split('')
              ?.map((i, index) =>
                superScriptChars.includes(i) ? (
                  <Styled.SuperScriptStyle key={index}>
                    {i}
                  </Styled.SuperScriptStyle>
                ) : (
                  i
                )
              )}
          </React.Fragment>,
        ]),
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

export default SlpCRPListHeaderWithParagraph;
