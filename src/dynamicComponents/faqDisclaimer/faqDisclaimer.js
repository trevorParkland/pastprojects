import React from 'react';
import * as Styled from './faqDisclaimerStyles';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useEffect } from 'react';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const FaqDisclaimer = ({ sectionData, location }) => {
  useEffect(async () => {
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

  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.LinkStyle
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(
                  process.env.GATSBY_DOMAIN_URL + node?.data?.uri
                )
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.LinkStyle>
      ),
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <>
      <Styled.MainDiv>
        {sectionData?.contentDetails &&
          documentToReactComponents(
            JSON.parse(sectionData?.contentDetails?.raw),
            optionsMainStyle
          )}
      </Styled.MainDiv>
    </>
  );
};
export default FaqDisclaimer;
