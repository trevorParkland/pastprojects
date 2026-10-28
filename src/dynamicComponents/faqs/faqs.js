import React, { useEffect } from 'react';
import * as Styled from './faqsStyles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import useContentfulAssets from '../../hooks/useContentfulAssets';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const FAQS = ({ sectionData, location }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <Styled.ListContainer>{children}</Styled.ListContainer>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <Styled.ListText>{children}</Styled.ListText>
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
              <img src={asset?.node?.file?.url} alt={asset?.node?.title} />
            </Styled.LinkStyle>
          ) : (
            <img src={asset?.node?.file?.url} alt={asset?.node?.title} />
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
        const asset = useContentfulAssets(node?.data?.target?.sys?.id);
        if (asset) {
          return asset?.node.title !== 'skype_image' ? (
            <Styled.LinkStyle href={asset?.node?.file?.url} target={'_blank'}>
              {children}
            </Styled.LinkStyle>
          ) : (
            <Styled.AssetImageStyle
              src={asset?.node?.file?.url}
              alt={asset?.node?.title}
            />
          );
        }
      },
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  const optionsButtonMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <Styled.ListContainer>{children}</Styled.ListContainer>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <Styled.ListText>{children}</Styled.ListText>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulAssets(node?.data?.target?.sys?.id);
        return asset?.node?.file?.url?.includes('image') ? (
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
              <img src={asset?.node?.file?.url} alt={asset?.node?.title} />
            </Styled.LinkStyle>
          ) : (
            <img src={asset?.node?.file?.url} alt={asset?.node?.title} />
          )
        ) : (
          <></>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.ButtonStyle
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
        </Styled.ButtonStyle>
      ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const asset = useContentfulAssets(node?.data?.target?.sys?.id);
        if (asset) {
          return (
            <Styled.ButtonStyle href={asset?.node?.file?.url} target={'_blank'}>
              {children}
            </Styled.ButtonStyle>
          );
        }
      },
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
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
  return (
    <Styled.Body id={sectionData?.elementId}>
      {sectionData?.header && (
        <Styled.Header2>{sectionData?.header}</Styled.Header2>
      )}
      {sectionData?.description && (
        <Styled.ParaText>{sectionData?.description}</Styled.ParaText>
      )}
      {sectionData?.qna?.map((item, index) => {
        return (
          <Styled.AccordionContainer key={index}>
            <Styled.AccordionItem eventKey={item?.title}>
              <Styled.AccordionHeader>{item?.title}</Styled.AccordionHeader>
              <Styled.AccordionBody>
                {item?.text &&
                  documentToReactComponents(
                    JSON.parse(item?.text?.raw),
                    optionsMainStyle
                  )}
                {item?.buttons &&
                  documentToReactComponents(
                    JSON.parse(item?.buttons?.raw),
                    optionsButtonMainStyle
                  )}
              </Styled.AccordionBody>
            </Styled.AccordionItem>
          </Styled.AccordionContainer>
        );
      })}
    </Styled.Body>
  );
};

export default FAQS;
