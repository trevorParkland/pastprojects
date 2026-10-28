import React from 'react';
import { addTrailingSlash, isExternalUrlhref } from '../../utils';
import * as Styled from './slpImageWithHeaderStyles';

export default function SlpImagWithHeader({ sectionData }) {
  return (
    <Styled.HeadContainer>
      <Styled.Head>
        <Styled.LinkStyle
          href={
            isExternalUrlhref(sectionData?.path)
              ? sectionData?.path
              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + sectionData?.path)
          }
          target="_blank"
        >
          <Styled.HeadLogo
            src={sectionData?.image?.file?.url}
            alt={sectionData?.image?.file?.fileName}
            title={sectionData?.image?.file?.fileName}
          />
        </Styled.LinkStyle>
        <div style={{ clear: 'both' }}></div>
      </Styled.Head>
    </Styled.HeadContainer>
  );
}
