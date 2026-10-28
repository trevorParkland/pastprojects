import React from 'react';
import * as Styled from './slpTopTitleStyles';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

const SlpTopTitle = ({ sectionData }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.Heading>{children}</Styled.Heading>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
    },
    renderMark: {
      [MARKS.Code]: (node) => <div>{node}</div>,
    },
    renderText: (text) =>
      text?.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />]),
  };

  return (
    <>
      <Styled.TitleContainer $background={sectionData?.image?.file?.url}>
        <Styled.LinkStyle
          href={
            isExternalUrlhref(sectionData?.assets[0]?.description)
              ? sectionData?.assets[0]?.description
              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                sectionData?.assets[0]?.description)
          }
          target={
            isExternalUrl(sectionData?.assets[0]?.description)
              ? '_blank'
              : '_self'
          }
        >
          <Styled.ImageStyle
            src={sectionData.assets[0]?.file?.url}
          ></Styled.ImageStyle>
        </Styled.LinkStyle>
        <Styled.ParaText>
          {sectionData?.headerWithText?.headerText}
        </Styled.ParaText>
        {sectionData?.textWithPaths && sectionData?.textWithPaths[0] && (
          <Styled.HeadingContainer>
            <Styled.Heading>
              {sectionData?.textWithPaths[0]?.text}
            </Styled.Heading>
          </Styled.HeadingContainer>
        )}
        {sectionData?.richText &&
          documentToReactComponents(
            JSON.parse(sectionData?.richText?.raw),
            optionsMainStyle
          )}
      </Styled.TitleContainer>
    </>
  );
};
export default SlpTopTitle;
