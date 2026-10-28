import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import useContentfulAssets from '../../hooks/useContentfulAssets';
import * as Styled from './slpOilOffersStyle';

const SlpOilOffers = ({ sectionData }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.TextStyle>{children}</Styled.TextStyle>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2>{children}</Styled.HeaderH2>
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
      <Styled.InnerBody>
        {sectionData?.header.trim() && (
          <Styled.HeaderH1>{sectionData?.header}</Styled.HeaderH1>
        )}
        <Styled.DivStyle>
          {sectionData?.contentDetails &&
            documentToReactComponents(
              JSON.parse(sectionData?.contentDetails?.raw),
              optionsMainStyle
            )}
        </Styled.DivStyle>
      </Styled.InnerBody>
    </Styled.Body>
  );
};

export default SlpOilOffers;
