import React from 'react';
import * as Styled from './slpGreyFooterStyles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import useContentfulAssets from '../../hooks/useContentfulAssets'
const SlpGreyFooter = ({ sectionData }) => {
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
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulAssets(node.data.target.sys.id);
        return asset?.node?.file?.url?.includes('image') ? (
          <Styled.ImageStyleFooter
            src={asset?.node?.file?.url}
            alt={asset?.node?.title}
          />
        ) : (
          <></>
        );
        
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <Styled.ContentWrapper>
      <Styled.ContentContainer>
      {sectionData?.contentDetails &&
            documentToReactComponents(
              JSON.parse(sectionData?.contentDetails?.raw),
              optionsMainStyle
            )}
      </Styled.ContentContainer>
    </Styled.ContentWrapper>
  );
};

export default SlpGreyFooter;
