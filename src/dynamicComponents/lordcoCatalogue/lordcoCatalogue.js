import React from 'react';
import LordcoPDFWithImageSection from '../../pageSections/blp/lordcoPDFWithImage';
import * as Styled from './lordcoCatalogueStyle';

const LordcoCatalogue = ({ sectionData }) => {
  return (
    <Styled.TitleContainer>
      <Styled.Title>
        <Styled.Header>{sectionData?.header}</Styled.Header>
        <Styled.BottomLinksContainer>
          <Styled.BottomLinksCatalog>
            <br />
            <br />
            <Styled.BottomLinksUnorderedList>
              {sectionData?.listOfImagesWithPath?.map((section, index) => (
                <Styled.BottomLinksListItem $catalog key={index}>
                  <LordcoPDFWithImageSection
                    imageUrl={section?.image?.file?.url}
                    rawText={section.richText.raw}
                    catalog
                  />
                </Styled.BottomLinksListItem>
              ))}
            </Styled.BottomLinksUnorderedList>
            <br />
            <br />
            <br />
          </Styled.BottomLinksCatalog>
        </Styled.BottomLinksContainer>
      </Styled.Title>
    </Styled.TitleContainer>
  );
};

export default LordcoCatalogue;
