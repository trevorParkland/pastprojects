import React from 'react';
import * as Styled from './slpThankYouHeaderStyle';

const SlpThankYouHeader = ({ sectionData }) => {
  return (
    <>
      <Styled.HeaderDiv>
        <Styled.InnerDiv>
          <Styled.Header>{sectionData?.header}</Styled.Header>
        </Styled.InnerDiv>
      </Styled.HeaderDiv>
    </>
  );
};

export default SlpThankYouHeader;
