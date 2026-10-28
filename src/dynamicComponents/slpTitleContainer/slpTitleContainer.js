import React from 'react';
import * as Styled from './slpTitleContainerStyles';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

export default function SlpTitleContainer({ sectionData }) {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2>{children}</Styled.HeaderH2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.HeaderH3>{children}</Styled.HeaderH3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <Styled.UnorderedList>{children}</Styled.UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <Styled.ListItem>{children}</Styled.ListItem>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.ButtonStyle
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.ButtonStyle>
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
    <Styled.Container $background={sectionData?.image?.file?.url}>
      {sectionData?.textWithPaths[0] && (
        <Styled.ButtonStyle
          href={
            isExternalUrlhref(sectionData?.textWithPaths[0]?.path)
              ? sectionData?.textWithPaths[0]?.path
              :addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                sectionData?.textWithPaths[0]?.path)
          }
        >
          {sectionData?.textWithPaths[0].text}
        </Styled.ButtonStyle>
      )}
      <Styled.InnerDiv>
        {sectionData?.assets && sectionData?.assets[0]?.file?.url && (
          <Styled.ImageStyle
            src={sectionData?.assets[0]?.file?.url}
          ></Styled.ImageStyle>
        )}
        <div style={{ textAlign: 'left' }}>
          {sectionData?.headerWithText?.headerText && (
            <Styled.HeaderH1>
              {sectionData?.headerWithText?.headerText}
            </Styled.HeaderH1>
          )}
        </div>
        {sectionData?.contentDetails &&
          documentToReactComponents(
            JSON.parse(sectionData?.contentDetails?.raw),
            optionsMainStyle
          )}
      </Styled.InnerDiv>
    </Styled.Container>
  );
}
