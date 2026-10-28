import React from 'react';
import useContentfulAssets from '../../hooks/useContentfulAssets';
import * as Styled from './slpBackgroundImageWithTitleStyles';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function SlpBackgroundImageWithTitle({ sectionData }) {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulAssets(node?.data?.target?.sys?.id);
        return asset?.node?.file?.url?.includes('image') ? (
          <Styled.ImageStyle
            src={asset?.node?.file?.url}
            alt={asset?.node?.title}
          />
        ) : (
          <></>
        );
      },
    },
    renderText: (text) =>
      text?.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />]),
  };

  return (
    <Styled.ImageStyle $background={sectionData?.image?.file?.url}>
      {sectionData?.headerWithText && (
        <Styled.HeadingContainer>
          {sectionData?.headerWithText && (
            <div>
              <Styled.Heading>
                {sectionData?.headerWithText?.headerText}
              </Styled.Heading>
              <Styled.SpanHeading>
                {sectionData?.headerWithText?.text?.text}
              </Styled.SpanHeading>
            </div>
          )}
        </Styled.HeadingContainer>
      )}
      {sectionData?.assets && sectionData?.assets[0] && (
        <Styled.ImageContainer>
          {sectionData?.assets[0]?.file?.url && (
            <Styled.FloatImageStyle
              src={sectionData?.assets[0]?.file?.url}
            ></Styled.FloatImageStyle>
          )}
        </Styled.ImageContainer>
      )}
      {sectionData?.assets && sectionData?.assets[1] && (
        <Styled.ImageContainer>
          {sectionData?.assets[1]?.file?.url && (
            <Styled.FloatImageStyle
              src={sectionData?.assets[1]?.file?.url}
            ></Styled.FloatImageStyle>
          )}
        </Styled.ImageContainer>
      )}
      {sectionData?.contentDetails &&
        documentToReactComponents(
          JSON.parse(sectionData?.contentDetails?.raw),
          optionsMainStyle
        )}
    </Styled.ImageStyle>
  );
}
export default SlpBackgroundImageWithTitle;
