import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import * as Styled from './slpWelcomeThankyouStyle';

const SlpWelcomeThanyou = ({ sectionData }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.HeaderH1>{children}</Styled.HeaderH1>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        return (
          <Styled.ImageStyle src={asset.node.file.url} alt={asset.node.title} />
        );
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };
  return (
    <Styled.MainDiv>
      <Styled.InnerDiv>
        {sectionData?.contentDetails &&
          documentToReactComponents(
            JSON.parse(sectionData?.contentDetails?.raw),
            optionsMainStyle
          )}
      </Styled.InnerDiv>
    </Styled.MainDiv>
  );
};

export default SlpWelcomeThanyou;
