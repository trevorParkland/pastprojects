import React from 'react';
import { sectionList } from '../../constants/queryFragments';
import loadable from '@loadable/component';
import * as Styled from './contentWithListOfImagesStyle';
import { Row } from 'react-bootstrap';

const ContentWithListOfImages = ({ sectionData }) => {
  return (
    <>
      <Styled.MainDiv>
        {sectionData && (
          <Row className="g-0">
            {sectionData?.listOfImagesWithPath &&
              sectionData.listOfImagesWithPath.map((section, index) => {
                if (section?.type && sectionList.includes(section?.type)) {
                  const SectionComponent = loadable(() =>
                    import(
                      `../../dynamicComponents/${section.type}/${section.type}`
                    )
                  );
                  return (
                    <Styled.ColumnStyle md={3} key={index} className="px-0">
                      <SectionComponent key={index} sectionData={section} />
                    </Styled.ColumnStyle>
                  );
                }
              })}
          </Row>
        )}
      </Styled.MainDiv>
      <Styled.HorizontalBreak />
    </>
  );
};
export default ContentWithListOfImages;
