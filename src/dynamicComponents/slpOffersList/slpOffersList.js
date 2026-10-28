import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import * as Styled from './slpOffersListStyles';
import useContentfulAssets from '../../hooks/useContentfulAssets';

export default function slpOffersList({ sectionData }) {
  const optionsListMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.TextStyle>{children}</Styled.TextStyle>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulAssets(node.data.target.sys.id);
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
    <Styled.Body>
      <Styled.HeaderH1>{sectionData?.header}</Styled.HeaderH1>
      {sectionData?.list?.map((item, index) => (
        <Styled.IconDiv key={index}>
          {documentToReactComponents(
            JSON.parse(item?.contentDetails?.raw),
            optionsListMainStyle
          )}
          <Styled.SubText>{item.subText}</Styled.SubText>
        </Styled.IconDiv>
      ))}
      <hr />
    </Styled.Body>
  );
}
