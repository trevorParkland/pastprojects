import React from 'react';
import { sectionList } from '../../constants/queryFragments';
import loadable from '@loadable/component';
import * as Styled from './slpCRPContentListStyles';

const SlpCRPContentList = ({ sectionData }) => {
  return (
    <>
      <Styled.Body>
        {sectionData?.header?.trim() && (
          <Styled.Heading>{sectionData?.header}</Styled.Heading>
        )}
        {sectionData?.subtext?.trim() && <h3>{sectionData?.subtext}</h3>}

        {sectionData && (
          <>
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
                    <Styled.MainContainer key={index}>
                      <SectionComponent key={index} sectionData={section} />
                    </Styled.MainContainer>
                  );
                }
              })}
          </>
        )}
      </Styled.Body>
    </>
  );
};
export default SlpCRPContentList;
