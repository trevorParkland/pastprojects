import React from 'react';
import useFooter from '../../hooks/useFooter';
import { addTrailingSlash, isExternalUrlhref } from '../../utils';
import * as Styled from './subFooterStyle';

const SubFooter = () => {
  const footer = useFooter();
  return (
    <Styled.SubFooterContainer>
      <Styled.SubFooterInnerContainer>
        <Styled.DivStyle>
          <Styled.ListStyle>
            <Styled.ListItem>
              <Styled.AnchorStyle href={isExternalUrlhref(footer?.socialNetworking[0]?.path) ? footer?.socialNetworking[0]?.path : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + footer?.socialNetworking[0]?.path)} target="_blank">
                <Styled.LogoStyle
                  src={footer?.socialNetworking[0]?.image?.file?.url}
                />
              </Styled.AnchorStyle>
            </Styled.ListItem>
            {footer?.TextWithPaths?.map((item, index) => {
              return (
                <Styled.ListItem key={index}>
                  <Styled.AnchorStyle href={isExternalUrlhref(item?.path) ? item?.path : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)} target="_blank">
                    {item?.text}
                  </Styled.AnchorStyle>
                </Styled.ListItem>
              );
            })}
          </Styled.ListStyle>
        </Styled.DivStyle>
      </Styled.SubFooterInnerContainer>
    </Styled.SubFooterContainer>
  );
};

export default SubFooter;
