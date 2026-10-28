import * as React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import * as Styled from './slpMarketoFooterStyles';
import { superScriptChars } from '../../constants/superScriptChars';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

const SlpMarketoFooter = ({ sectionData }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.Header>{children}</Styled.Header>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.Header2>{children}</Styled.Header2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.Header3>{children}</Styled.Header3>
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
      [INLINES.ASSET_HYPERLINK]: (node, children) => (
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
      [BLOCKS.HR]: () => <Styled.HorizontalBreak />,
    },
    renderText: (text) =>
      text
        .split('\n')
        .flatMap((text, i) => [
          i > 0 && <br key={i} />,
          <React.Fragment key={i}>
            {text
              ?.split('')
              ?.map((i, k) =>
                superScriptChars.includes(i) ? (
                  <Styled.SuperScriptStyle key={k}>{i}</Styled.SuperScriptStyle>
                ) : (
                  <React.Fragment key={k}>{i}</React.Fragment>
                )
              )}
          </React.Fragment>,
        ]),
  };

  return (
    <Styled.Container>
      <Styled.Body id={sectionData.elementId}>
        {sectionData.contentDetails &&
          documentToReactComponents(
            JSON.parse(sectionData.contentDetails.raw),
            optionsMainStyle
          )}
      </Styled.Body>
    </Styled.Container>
  );
};

export default SlpMarketoFooter;
