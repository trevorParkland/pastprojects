import React from 'react';
import * as Styled from './trackDeliveryStyle';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

const TrackDelivery = ({section}) => {
  const sectionData = section?.listOfImagesWithPath.filter((item) => {
    return item.type == 'trackYourDeliveryWebImageContainer'
  })[0]
  const sectionMobileData = section?.listOfImagesWithPath.filter((item) => {
    return item.type == 'trackYourDeliveryMobile'
  })[0]
  const optionsMainStyle = {
    renderNode: {      
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2>{children}</Styled.HeaderH2>
      ),  
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),    
      [INLINES.HYPERLINK]: (node, children) =>
      <Styled.anchorButton target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'} href={isExternalUrlhref(node?.data?.uri) ? node?.data?.uri : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)}>
      {children}
    </Styled.anchorButton>
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };
  return (
    <Styled.MainContainer
      $background={sectionData?.image?.file?.url}
      $backgroundMobile={sectionMobileData?.image?.file?.url}
    >
      <Styled.InnerContainer>
           {sectionData && documentToReactComponents(
            JSON.parse(sectionData?.richText?.raw),
            optionsMainStyle
          )}
      </Styled.InnerContainer>
      <Styled.InnerContainerMobile>
           {sectionMobileData && documentToReactComponents(
            JSON.parse(sectionMobileData?.richText?.raw),
            optionsMainStyle
          )}
      </Styled.InnerContainerMobile>
    </Styled.MainContainer>
  );
};

export default TrackDelivery;
