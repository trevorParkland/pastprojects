import React from 'react';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';
import * as Styled from './imageWithPathStyles';

const ImageWithPath = ({ sectionData }) => {
  return (
    <Styled.LinkContainer href={isExternalUrlhref(sectionData?.path)? sectionData?.path : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + sectionData?.path)}
    target = {
      isExternalUrl(sectionData?.path)? '_blank' : '_self'
    }
    >
      <Styled.ImageStyle
        src={sectionData?.image?.file?.url}
      ></Styled.ImageStyle>
      <Styled.ParaText>
        {sectionData?.title?.trim() && sectionData?.title}
      </Styled.ParaText>
    </Styled.LinkContainer>
  );
};
export default ImageWithPath;
