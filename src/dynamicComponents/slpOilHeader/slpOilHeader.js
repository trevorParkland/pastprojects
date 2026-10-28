import React from 'react';
import useContentfulAssets from '../../hooks/useContentfulAssets';
import * as Styled from './slpOilHeaderStyles';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { addTrailingSlash, isExternalUrlhref } from '../../utils';

function SlpOilHeader({ sectionData }) {
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
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />]),
  };
  return (
    <Styled.ImageStyle $background={sectionData?.image?.file?.url}>
      <Styled.InnerDiv>
        {sectionData?.textWithPaths && sectionData?.textWithPaths[0] && (
          <Styled.ButtonStyle
            href={
              isExternalUrlhref(sectionData?.textWithPaths[0]?.path)
                ? sectionData?.textWithPaths[0]?.path
                : addTrailingSlash(
                    process.env.GATSBY_DOMAIN_URL +
                      sectionData?.textWithPaths[0]?.path
                  )
            }
          >
            {sectionData?.textWithPaths[0]?.text}
          </Styled.ButtonStyle>
        )}
        {sectionData?.assets && sectionData?.assets[0] && (
          <Styled.ImageContainer>
            {sectionData?.assets[0]?.file?.url && (
              <Styled.ImageLogoStyle
                src={sectionData?.assets[0]?.file?.url}
              ></Styled.ImageLogoStyle>
            )}
          </Styled.ImageContainer>
        )}
        {sectionData?.headerWithText && (
          <Styled.HeadingContainer>
            {sectionData?.headerWithText && (
              <div>
                <Styled.Heading>
                  {sectionData?.headerWithText?.headerText}
                </Styled.Heading>
              </div>
            )}
          </Styled.HeadingContainer>
        )}
        {sectionData?.headerWithText && (
          <Styled.HeadingContainer>
            <div>
              <Styled.HeaderH2>
                {sectionData?.headerWithText?.text?.text}
              </Styled.HeaderH2>
            </div>
          </Styled.HeadingContainer>
        )}
        {sectionData?.assets && sectionData?.assets[1] && (
          <Styled.AssetContainer>
            {sectionData?.assets[1]?.file?.url && (
              <Styled.FloatImageStyle
                src={sectionData?.assets[1]?.file?.url}
              ></Styled.FloatImageStyle>
            )}
          </Styled.AssetContainer>
        )}
        {sectionData?.contentDetails &&
          documentToReactComponents(
            JSON.parse(sectionData?.contentDetails?.raw),
            optionsMainStyle
          )}
      </Styled.InnerDiv>
    </Styled.ImageStyle>
  );
}
export default SlpOilHeader;
