import React from 'react';
import * as Styled from './lordcoFooterStyle';

const LordcoFooter = ({ sectionData }) => {
  return (
    <Styled.FootContainer>
      <Styled.FootWrap>
        <Styled.Foot>
          {sectionData?.text?.text && sectionData?.text?.text}
        </Styled.Foot>
        {sectionData?.image?.file && (
          <Styled.FootLogo
            src={sectionData?.image?.file?.url}
            alt={sectionData?.image?.title}
          />
        )}
      </Styled.FootWrap>
    </Styled.FootContainer>
  );
};

export default LordcoFooter;
