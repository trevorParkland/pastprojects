import React from 'react';
import * as Styled from './slpOilImageContainerStyle';

const SlpOilImageContainer = ({ sectionData }) => {
  return (
    <Styled.Body>
      <Styled.ImageContainer>
        <Styled.FloatImageStyle
          src={sectionData?.image?.file?.url}
        ></Styled.FloatImageStyle>
      </Styled.ImageContainer>
    </Styled.Body>
  );
};
export default SlpOilImageContainer;
