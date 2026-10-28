import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import React from 'react';
import * as Styled from './slpThankYouContentStyle';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const SlpThankYouContent = ({ sectionData }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.HeaderH1>{children}</Styled.HeaderH1>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.ButtonStyle
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(
                  process.env.GATSBY_DOMAIN_URL + node?.data?.uri
                )
          }
          target={isExternalUrl(node.data.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.ButtonStyle>
      ),
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <>
      <Styled.WhiteContainer>
        <Styled.InnerDiv>
          {sectionData?.contentDetails &&
            documentToReactComponents(
              JSON.parse(sectionData?.contentDetails?.raw),
              optionsMainStyle
            )}
        </Styled.InnerDiv>
      </Styled.WhiteContainer>
    </>
  );
};

export default SlpThankYouContent;
