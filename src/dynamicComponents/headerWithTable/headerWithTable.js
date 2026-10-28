import React, { useEffect } from 'react';
import * as Styled from './headerWithTableStyles';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import useContentfulAssets from '../../hooks/useContentfulAssets';
import isExternalUrl, { isExternalUrlhref } from '../../utils';

export default function HeaderWithTable({ sectionData, location }) {
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

  const optionsButtonMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.HeaderH1>{children}</Styled.HeaderH1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2>{children}</Styled.HeaderH2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),

      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulAssets(node.data.target.sys.id);
        return asset.node.file.url.includes('image') ? (
          asset?.node?.description ? (
            <Styled.LinkStyle
              href={
                isExternalUrlhref(asset?.node?.description)
                  ? asset?.node?.description
                  : addTrailingSlash(
                      process.env.GATSBY_DOMAIN_URL + asset?.node?.description
                    )
              }
              target={
                isExternalUrl(asset?.node?.description) ? '_blank' : '_self'
              }
            >
              <img src={asset.node.file.url} alt={asset.node.title} />
            </Styled.LinkStyle>
          ) : (
            <img src={asset.node.file.url} alt={asset.node.title} />
          )
        ) : (
          <></>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.LinkStyle
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(
                  process.env.GATSBY_DOMAIN_URL + node?.data?.uri
                )
          }
        >
          {children}
        </Styled.LinkStyle>
      ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const asset = useContentfulAssets(node.data.target.sys.id);
        if (asset) {
          return (
            <Styled.LinkStyle href={asset?.node?.file?.url} target={'_blank'}>
              {children}
            </Styled.LinkStyle>
          );
        }
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <Styled.MainDiv>
      {sectionData?.header && (
        <Styled.HeaderH1>{sectionData?.header}</Styled.HeaderH1>
      )}
      <Styled.SwipeContainer>
        <Styled.Table>
          {sectionData?.contentDetails &&
            documentToReactComponents(
              JSON.parse(sectionData.contentDetails.raw),
              optionsButtonMainStyle
            )}
        </Styled.Table>
      </Styled.SwipeContainer>
    </Styled.MainDiv>
  );
}
