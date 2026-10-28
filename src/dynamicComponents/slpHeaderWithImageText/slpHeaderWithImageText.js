import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import React from 'react';
import useContentfulAssets from '../../hooks/useContentfulAssets';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';
import * as Styled from './slpHeaderWithImageTextStyle';

const SlpHeaderWithImageText = ({ sectionData }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulAssets(node?.data?.target?.sys?.id);
        return asset?.node?.file?.url?.includes('image') ? (
          <Styled.ImageStyle
            src={asset?.node?.file?.url}
            alt={asset?.node?.title}
          />
        ) : (
          <></>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2>{children}</Styled.HeaderH2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.HeaderH3>{children}</Styled.HeaderH3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Styled.Header4>{children}</Styled.Header4>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.LinkStyle
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.LinkStyle>
      ),
    },
    renderText: (text) =>
      text?.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <Styled.Body>
      <Styled.InnerBody>
        {sectionData?.contentDetails &&
          documentToReactComponents(
            JSON.parse(sectionData?.contentDetails?.raw),
            optionsMainStyle
          )}
      </Styled.InnerBody>
    </Styled.Body>
  );
};

export default SlpHeaderWithImageText;
