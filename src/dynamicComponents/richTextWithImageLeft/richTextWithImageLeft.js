import * as Styled from './richTextWithImageLeftStyle';
import * as React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
  isYoutubeLink,
} from '../../utils';

const RichTextWithImageLeft = ({ sectionData }) => {
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
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.Header3>{children}</Styled.Header3>
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
      [MARKS.ITALIC]: (node, children) => (
        <Styled.ItalicParaText>{children}</Styled.ItalicParaText>
      ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => (
        <Styled.AnchorButton
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
        </Styled.AnchorButton>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <Styled.ListContainer>{children}</Styled.ListContainer>
      ),
      [BLOCKS.HR]: () => <Styled.HorizontalBreak />,
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <Styled.ListText>{children}</Styled.ListText>
      ),

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        if (asset) {
          return (
            <Styled.ImageStyleBlockLeft
              src={asset.node.file.url}
              alt={asset.node.title}
              $width={'350px'}
            />
          );
        }
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return isYoutubeLink(node.data.uri) ? (
          <Styled.VideoContainer>
            <Styled.Iframe src={node.data.uri} frameborder="0"></Styled.Iframe>
          </Styled.VideoContainer>
        ) : (
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
        );
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };
  return (
    <>
      {sectionData.header && (
        <Styled.Header3>{sectionData.header}</Styled.Header3>
      )}
      {sectionData.contentDetails &&
        documentToReactComponents(
          JSON.parse(sectionData.contentDetails.raw),
          optionsMainStyle
        )}
    </>
  );
};
export default RichTextWithImageLeft;
