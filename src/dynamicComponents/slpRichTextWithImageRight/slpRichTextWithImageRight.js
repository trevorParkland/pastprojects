import React from 'react';
import { Row } from 'react-bootstrap';
import * as Styled from './slpRichTextWithImageRightStyles';
export default function SlpRichTextWithImageRight({ sectionData }) {
  return (
    <Styled.ImageStyle $background={sectionData?.image?.file?.url}>
      <Styled.Container>
        <Styled.HeadingContainer>
          {sectionData?.headerWithText?.headerText && (
            <Styled.HeaderH2>
              {sectionData?.headerWithText?.headerText}
            </Styled.HeaderH2>
          )}
          {sectionData?.headerWithText?.text && (
            <Styled.HeaderH3>
              {sectionData?.headerWithText?.text?.text}
            </Styled.HeaderH3>
          )}
        </Styled.HeadingContainer>
        {sectionData?.assets && sectionData?.assets[0]?.file?.url && (
          <Styled.FloatImageStyle
            src={sectionData?.assets[0]?.file?.url}
          ></Styled.FloatImageStyle>
        )}
      </Styled.Container>
    </Styled.ImageStyle>
  );
}
