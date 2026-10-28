import * as React from 'react';
import {
  Heading2,
  Desc,
  LinkContainer,
  LinkButton,
  MainContainer,
  LinkButtonInternal,
} from './leftMenuDescStyle';
import isExternalUrl from '../../../utils';

const LeftMenuDesc = (props) => {
  return (
    <>
      <MainContainer>
        <Heading2>{props?.title}</Heading2>
        <Desc>{props?.description}</Desc>
        {props?.link ? (
          <LinkContainer>
            {isExternalUrl(props?.link?.path) ? (
              <LinkButton href={props?.link?.path} target="_blank">
                {props?.link?.text}
              </LinkButton>
            ) : (
              <LinkButtonInternal to={props?.link?.path}>
                {props?.link?.text}
              </LinkButtonInternal>
            )}
          </LinkContainer>
        ) : null}
      </MainContainer>
    </>
  );
};

export default LeftMenuDesc;
