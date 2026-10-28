import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Row } from 'react-bootstrap';
import { sectionList } from '../../constants/queryFragments';
import loadable from '@loadable/component';
import * as Styled from './columnListWith2ItemsStyle';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';
import { useContentfulImages } from '../../hooks/useContentfulImages';

const ColumnListWith2Items = ({ sectionData, handleRequestCallBack }) => {
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
        const asset = useContentfulImages(node?.data?.target?.sys?.id);
        return asset?.node?.file?.url?.includes('image') ? (
          <Styled.ImageStyle
            src={asset?.node?.file?.url}
            alt={asset?.node?.title}
          />
        ) : (
          <></>
        );
      },
      [BLOCKS.HR]: (node, children) => <Styled.HorizontalBreak />,
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <Styled.MainDiv>
      {sectionData?.header?.trim() && (
        <Styled.HeaderH1>{sectionData.header}</Styled.HeaderH1>
      )}
      {sectionData?.subtext?.trim() && (
        <Styled.HeaderH2>{sectionData.subtext}</Styled.HeaderH2>
      )}
      {sectionData?.listDetails &&
        documentToReactComponents(
          JSON.parse(sectionData?.listDetails?.raw),
          optionsMainStyle
        )}
      {sectionData && (
        <Row className="g-0">
          {sectionData?.list &&
            sectionData?.list?.map((section, index) => {
              if (section?.type && sectionList?.includes(section?.type)) {
                const SectionComponent = loadable(() =>
                  import(
                    `../../dynamicComponents/${section?.type}/${section?.type}`
                  )
                );
                return (
                  <Styled.ColumnStyle xs={12} md={6} key={index}>
                    <SectionComponent
                      key={index}
                      sectionData={section}
                      handleRequestCallBack={handleRequestCallBack}
                    />
                  </Styled.ColumnStyle>
                );
              }
            })}
        </Row>
      )}
      <Styled.HorizontalBreak />
    </Styled.MainDiv>
  );
};
export default ColumnListWith2Items;
