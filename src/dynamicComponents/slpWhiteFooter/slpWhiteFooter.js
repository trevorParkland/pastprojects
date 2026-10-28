import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import * as Styled from './slpWhiteFooterStyles';
import { BLOCKS } from '@contentful/rich-text-types';
import { useContentfulImages } from '../../hooks/useContentfulImages';

export default function SlpWhiteFooter({ sectionData }) {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParagraphStyle>{children}</Styled.ParagraphStyle>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        return asset.node.file.url.includes('image') ? (
          <Styled.ImageStyle src={asset.node.file.url} alt={asset.node.title} />
        ) : (
          <></>
        );
      },
    },

    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <div>
      <Styled.FooterContainer $background={sectionData?.image?.file?.url}>
        <Styled.RowStyle className="g-0">
          <Styled.Matrix>
            {sectionData?.contentDetails &&
              documentToReactComponents(
                JSON.parse(sectionData?.contentDetails?.raw),
                optionsMainStyle
              )}
          </Styled.Matrix>
        </Styled.RowStyle>
      </Styled.FooterContainer>
    </div>
  );
}
