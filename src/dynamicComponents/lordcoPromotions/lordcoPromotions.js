import React from 'react';
import LordcoPDFWithImageSection from '../../pageSections/blp/lordcoPDFWithImage';
import * as Styled from './lordcoPromotionsStyle';

const LordcoPromotions = ({ sectionData }) => {
  return (
    <Styled.PromotionsContainer>
      <Styled.PromotionsWrap>
        <Styled.HeaderH1>
          {sectionData?.title && sectionData?.title}
        </Styled.HeaderH1>

        {sectionData?.listOfImagesWithPath?.map((section, index) => (
          <Styled.Promotions key={index}>
            <LordcoPDFWithImageSection
              imageUrl={section?.image?.file?.url}
              rawText={section?.richText?.raw}
            />
          </Styled.Promotions>
        ))}
      </Styled.PromotionsWrap>
    </Styled.PromotionsContainer>
  );
};
export default LordcoPromotions;
