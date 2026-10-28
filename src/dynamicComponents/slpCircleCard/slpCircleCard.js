import React from 'react';
import * as Styled from './slpCircleCardStyles';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useContentfulImages } from '../../hooks/useContentfulImages';

export default function SlpCircleCard({ sectionData }) {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.HeaderH3>{children}</Styled.HeaderH3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Styled.HeaderH4>{children}</Styled.HeaderH4>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.SubScript>{children}</Styled.SubScript>
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
    <>
      <Styled.Figure>
        <Styled.ImageStyle
          src={sectionData?.image?.file?.url}
        ></Styled.ImageStyle>
      </Styled.Figure>
      {sectionData?.richText &&
        documentToReactComponents(
          JSON.parse(sectionData?.richText?.raw),
          optionsMainStyle
        )}
    </>
  );
}
