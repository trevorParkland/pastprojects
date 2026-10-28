import * as React from 'react';
import * as Styled from './footerStyles';
import useFooter from '../../hooks/useFooter';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const Footer = ({ showProducts }) => {
  const footer = useFooter();
  return (
    <>
      <Styled.FooterContainer>
        <Styled.FooterInnerContainer>
          <Styled.FooterLeft>
            <Styled.AnchorStyle
              title={footer?.imageWithPath?.title}
              href={
                isExternalUrlhref(footer?.imageWithPath?.path)
                  ? footer?.imageWithPath?.path
                  : addTrailingSlash(
                      process.env.GATSBY_DOMAIN_URL +
                        footer?.imageWithPath?.path
                    )
              }
              target={
                isExternalUrl(footer?.imageWithPath?.path) ? '_blank' : '_self'
              }
            >
              <Styled.FooterLogo
                src={footer?.imageWithPath?.image?.file?.url}
                alt="logo"
              />
            </Styled.AnchorStyle>
          </Styled.FooterLeft>
          {showProducts && (
            <Styled.FootMiddle>
              <Styled.FooterTextLargeScreen>
                {footer?.subText}
              </Styled.FooterTextLargeScreen>
              <Styled.FootMiddleRight>
                {footer?.products
                  ?.slice(0, footer?.products?.length - 1)
                  ?.map((item, index) => {
                    return (
                      <Styled.AnchorStyle
                        key={index}
                        href={
                          isExternalUrlhref(item?.path)
                            ? item?.path
                            : addTrailingSlash(
                                process.env.GATSBY_DOMAIN_URL + item?.path
                              )
                        }
                        target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                      >
                        <Styled.FooterProductImage
                          src={item?.image?.file?.url}
                          alt={item?.title}
                        />
                      </Styled.AnchorStyle>
                    );
                  })}
              </Styled.FootMiddleRight>
            </Styled.FootMiddle>
          )}
          <Styled.FootRight>
            <Styled.ImageStyle src={footer?.products[4]?.image?.file?.url} />
          </Styled.FootRight>
          <div style={{ clear: 'both' }}></div>
        </Styled.FooterInnerContainer>
      </Styled.FooterContainer>
    </>
  );
};

export default Footer;
