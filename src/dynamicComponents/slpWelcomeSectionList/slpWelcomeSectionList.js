import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Row } from 'react-bootstrap';
import { sectionList } from '../../constants/queryFragments';
import loadable from '@loadable/component';
import * as Styled from './slpWelcomeSectionListStyles';
import { addTrailingSlash, isExternalUrlhref } from '../../utils';

const SlpWelcomeSectionList = ({ sectionData }) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2 textAlign="left">{children}</Styled.HeaderH2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.HeaderH3 textAlign="left">{children}</Styled.HeaderH3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Styled.HeadingH4>{children}</Styled.HeadingH4>
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
              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.LinkStyle>
      ),
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  return (
    <Styled.SLPMainContainer>
      <Styled.InnerBody>
        <Styled.HeadingContainer>
          {sectionData?.header?.trim() && (
            <Styled.HeaderH2 textAlign="left">
              {sectionData?.header}
            </Styled.HeaderH2>
          )}
          {sectionData?.subtext?.trim() && (
            <Styled.HeaderH3 textAlign="left">
              {sectionData?.subtext}
            </Styled.HeaderH3>
          )}
        </Styled.HeadingContainer>
        {sectionData?.listDetails &&
          documentToReactComponents(
            JSON.parse(sectionData?.listDetails?.raw),
            optionsMainStyle
          )}

        {sectionData && (
          <>
            <Styled.RowStyle className="g-0">
              {sectionData?.list &&
                sectionData?.list?.map((section, index) => {
                  if (section?.type && sectionList?.includes(section?.type)) {
                    // const sectionData = sectionData.list[section.type];
                    const SectionComponent = loadable(() =>
                      import(
                        `../../dynamicComponents/${section?.type}/${section?.type}`
                      )
                    );
                    return (
                      <Styled.ColumnThird
                        key={index}
                        xs={12}
                        lg={4}
                        data-aos="fade-up"
                        data-aos-delay={index * 200}
                        data-aos-once="true"
                        data-aos-duration="1000"
                      >
                        <SectionComponent key={index} sectionData={section} />
                      </Styled.ColumnThird>
                    );
                  }
                })}
            </Styled.RowStyle>
          </>
        )}
      </Styled.InnerBody>
    </Styled.SLPMainContainer>
  );
};
export default SlpWelcomeSectionList;
