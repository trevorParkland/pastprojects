import React from 'react';
import { isSmallDevice } from '../../utils';
import * as Styled from './slpCRPImageWithTextStyles';

const SlpCRPImageWithText = ({ sectionData }) => {
  return (
    <Styled.ImageStyle $background={sectionData?.image?.file?.url}>
      {isSmallDevice() ? (
        <Styled.InnerImageStyle
          src={sectionData?.assets[1]?.file?.url}
        ></Styled.InnerImageStyle>
      ) : (
        <Styled.InnerImageStyle
          src={sectionData?.assets[0]?.file?.url}
        ></Styled.InnerImageStyle>
      )}
    </Styled.ImageStyle>
  );
};

export default SlpCRPImageWithText;
