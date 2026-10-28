import React from 'react';
import * as Styled from './lordcoHeaderStyle';

const LordcoHeader = ({ sectionData }) => {
  return (
    <Styled.HeadContainer>
      <Styled.Head>
        {sectionData?.listOfImagesWithPath?.map((imageData, index) => (
          <Styled.HeadLogo
            src={imageData?.image?.file?.url}
            alt={imageData?.title}
            title={imageData?.image?.description}
            key={index}
          />
        ))}
      </Styled.Head>
      <Styled.SubBar>
        <Styled.HeaderH2>{sectionData?.header}</Styled.HeaderH2>
      </Styled.SubBar>
    </Styled.HeadContainer>
  );
};

export default LordcoHeader;
