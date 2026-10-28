import * as React from 'react';
import * as Styled from './circleLinkStyles';

const CircleLink = (props) => {
  return props?.anchorLink ? (
    <Styled.AnchorStyles href={props?.anchorLink}>
      <Styled.ModalImage
        src={props?.imageSource}
        alt={props?.altText}
      ></Styled.ModalImage>
      <Styled.HeaderText>{props?.headerText}</Styled.HeaderText>
      <Styled.ParaText>{props?.paraText}</Styled.ParaText>
    </Styled.AnchorStyles>
  ) : (
    <></>
  );
};

export default CircleLink;
