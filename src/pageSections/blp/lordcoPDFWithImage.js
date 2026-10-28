import * as React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import * as Styled from './lordcoPDFWithImageStyle';
import { useContentfulImages } from '../../hooks/useContentfulImages';

const LordcoPDFWithImageSection = ({ imageUrl, rawText, catalog }) => {
  const optionsStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="m-0">{children}</p>,
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        if (asset) {
          return catalog ? (
            <Styled.BottomLinksAnchor
              href={asset.node.file.url}
              target="_blank"
            >
              <Styled.BottomLinksImage src={imageUrl} />
              {children}
            </Styled.BottomLinksAnchor>
          ) : (
            <a href={asset.node.file.url} target="_blank">
              <Styled.PdfImage src={imageUrl} />
            </a>
          );
        }
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };

  return (
    <>
      {rawText && documentToReactComponents(JSON.parse(rawText), optionsStyle)}
    </>
  );
};
export default LordcoPDFWithImageSection;
