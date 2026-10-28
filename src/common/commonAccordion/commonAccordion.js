import * as React from 'react';
import * as Styled from './commonAccordionStyles';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';
import { useContentfulImages } from '../../hooks/useContentfulImages';

const renderDocument = (document) => {
  const options = {
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
        const asset = useContentfulImages(node.data.target.sys.id);
        if (asset) {
          return <img src={asset.node.file.url} alt={asset.node.title} />;
        }
      },
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
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        if (asset) {
          return asset?.node.title !== 'skype_image' ? (
            <Styled.LinkStyle href={asset?.node?.file?.url} target={'_blank'}>
              {children}
            </Styled.LinkStyle>
          ) : (
            <img src={asset?.node?.file?.url} alt={asset?.node?.title} />
          );
        }
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  return documentToReactComponents(document, options);
};

const renderDocumentButton = (document) => {
  const options = {
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
        const asset = useContentfulImages(node.data.target.sys.id);
        if (asset) {
          return <img src={asset.node.file.url} alt={asset.node.title} />;
        }
      },
      [INLINES.HYPERLINK]: (node, children) => (
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

      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        if (asset) {
          return asset?.node.title !== 'skype_image' ? (
            <Styled.LinkStyle href={asset?.node?.file?.url} target={'_blank'}>
              {children}
            </Styled.LinkStyle>
          ) : (
            <img src={asset?.node?.file?.url} alt={asset?.node?.title} />
          );
        }
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  return documentToReactComponents(document, options);
};

const CommonAccordion = ({ faqArray }) => {
  return (
    <>
      {faqArray.map((faq, index) => (
        <Styled.AccordionContainer key={index} flush>
          <Styled.AccordionItem eventKey={faq?.type}>
            <Styled.AccordionHeader>{faq?.faqQuestion}</Styled.AccordionHeader>
            <Styled.AccordionBody>
              {renderDocument(JSON.parse(faq?.faqAnswer?.raw))}
              {faq?.buttons &&
                renderDocumentButton(JSON.parse(faq?.buttons?.raw))}
            </Styled.AccordionBody>
          </Styled.AccordionItem>
        </Styled.AccordionContainer>
      ))}
    </>
  );
};
export default CommonAccordion;
