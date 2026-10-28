import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import * as Styled from './slpHeaderWithTextStyle';
import { BLOCKS } from '@contentful/rich-text-types';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

export default function SlpHeaderWithText({ sectionData }) {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
    },
  };
  return (
    <Styled.HeadContainer>
      <Styled.Head>
        <Styled.LinkStyle
          href={
            isExternalUrlhref(sectionData?.path)
              ? sectionData?.path
              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + sectionData?.path)
          }
          target={isExternalUrl(sectionData?.path) ? '_blank' : '_self'}
        >
          <Styled.HeadLogo
            src={sectionData?.image?.file?.url}
            alt={sectionData?.image?.file?.fileName}
            title={sectionData?.image?.file?.fileName}
          />
        </Styled.LinkStyle>
        {sectionData?.richText && (
          <>
            {documentToReactComponents(
              JSON.parse(sectionData?.richText?.raw),
              optionsMainStyle
            )}
          </>
        )}
        <div style={{ clear: 'both' }}></div>
      </Styled.Head>
    </Styled.HeadContainer>
  );
}
