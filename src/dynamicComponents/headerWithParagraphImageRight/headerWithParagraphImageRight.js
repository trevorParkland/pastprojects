import React, { useEffect } from 'react';
import * as Styled from './headerWithParagraphImageRightStyle';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';
import useContentfulAssets from '../../hooks/useContentfulAssets';

const HeaderWithParagraphImageRight = ({ sectionData, location }) => {
  useEffect(async () => {
    if (sectionData?.elementId === location?.hash?.replace('#', '')) {
      const waitedID = await new Promise((resolve) => {
        document?.getElementById(sectionData?.elementId) && resolve(true);
      });
      if (waitedID) {
        setTimeout(() => {
          window.location.href = `#${sectionData?.elementId}`;
        }, 500);
      }
    }
  }, [sectionData?.elementId]);
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2>{children}</Styled.HeaderH2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.HeaderH3>{children}</Styled.HeaderH3>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Styled.HeaderH6>{children}</Styled.HeaderH6>
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
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        return asset.node.file.url.includes('image') ? (
          asset?.node?.description ? (
            <Styled.LinkStyle
              
              href={
                isExternalUrlhref(asset?.node?.description)
                  ? asset?.node?.description
                  : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + asset?.node?.description)
              }
              target={
                isExternalUrl(asset?.node?.description) ? '_blank' : '_self'
              }
            >
              <Styled.ImageStyle
                src={asset.node.file.url}
                alt={asset.node.title}
              />
            </Styled.LinkStyle>
          ) : (
            <Styled.ImageStyle
              $hasMargin={
                sectionData?.title === 'Hydraulic Oils and Compressor Lube.'
                  ? false
                  : true
              }
              src={asset.node.file.url}
              alt={asset.node.title}
            />
          )
        ) : (
          <></>
        );
      },
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const asset = useContentfulAssets(node.data.target.sys.id);
        if (asset) {
          return (
            <Styled.ButtonStyle href={asset?.node?.file?.url} target="_blank">
              {children}
            </Styled.ButtonStyle>
          );
        }
      },
      [BLOCKS.HR]: () => <Styled.HorizontalBreak />,
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <Styled.MainDiv id={sectionData?.elementId?.trim()}>
      {sectionData?.header?.trim() && (
        <Styled.HeaderH1>{sectionData.header}</Styled.HeaderH1>
      )}
      {sectionData?.subText?.trim() && (
        <Styled.HeaderH2>{sectionData.subText}</Styled.HeaderH2>
      )}
      {sectionData?.contentDetails &&
        documentToReactComponents(
          JSON.parse(sectionData?.contentDetails?.raw),
          optionsMainStyle
        )}
    </Styled.MainDiv>
  );
};
export default HeaderWithParagraphImageRight;
