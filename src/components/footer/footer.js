import * as React from 'react';
import { Link, graphql } from 'gatsby';
import * as Styled from './footerStyles';
import { Row, Col } from 'react-bootstrap';
import useFooter from '../../hooks/useFooter';
import PropanePopUp from '../propanePopUp/propanePopUp';
import constants from '../../utils/utils';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
  } from '../../utils';
import {linkBottomMargin } from '../../styles';
const Footer = () => {
  let footer = useFooter();
  const [modalShow, setModalShow] = React.useState(false);
  const handleModalShow = (isShow) => {
    isShow ? setModalShow(isShow) : setModalShow(!modalShow);
  };
  return (
    <>
      <Styled.FooterContainer>
        <Styled.FooterInnerContainer className="p-0">
          <Styled.FooterRow className="g-0 m-auto justify-content-between">
            <Styled.FooterCol
              xs={12}
              md={5}
              lg={3}
              className="align-self-center"
            >
              {isExternalUrl(footer?.imageWithPath?.path) ? (
                <a
                  title={footer?.imageWithPath?.title}
                  href={
                    isExternalUrlhref(footer?.imageWithPath?.path)
                      ? footer?.imageWithPath?.path
                      : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + footer?.imageWithPath?.path)
                  }
                  target={isExternalUrl(footer?.imageWithPath?.path) ? '_blank' : '_self'}
                >
                  <Styled.FooterLogo
                    src={footer?.imageWithPath?.image?.file?.url}
                    alt="bluewave logo"
                  />
                </a>
              ) : (
                <Link
                  title={footer?.imageWithPath?.title}
                  
                  to={
                    isExternalUrlhref(footer?.imageWithPath?.path)
                      ? footer?.imageWithPath?.path
                      : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + footer?.imageWithPath?.path)
                  }
                  target={isExternalUrl(footer?.imageWithPath?.path) ? '_blank' : '_self'}
                >
                  <Styled.FooterLogo
                    src={footer?.imageWithPath?.image?.file?.url}
                    alt="bluewave logo"
                  />
                </Link>
              )}
            </Styled.FooterCol>

            <Styled.FooterColNoPadding
              xl={2}
              style={{ width: '150px' }}
              className="d-none d-xl-block "
            >
              <Styled.FooterTextLargeScreen>
                {footer.subText}
              </Styled.FooterTextLargeScreen>
            </Styled.FooterColNoPadding>

            <Styled.FooterCol md={6} lg={4} xl={3}>
              <Styled.FooterProductRow className="justify-content-center">
                {footer.products.map((item, index) => {
                  return (
                    <Styled.FooterColNoPadding xs="auto" key={index}>
                      {item.type === constants.COMMON.PROPANE_POP_UP.FOOTER ? (
                        <Styled.ModalAnchor
                          onClick={() => {
                            handleModalShow(true);
                          }}
                        >
                          <Styled.FooterProductImage
                            src={item?.image?.file?.url}
                            alt={item?.title}
                          />
                        </Styled.ModalAnchor>
                      ) : isExternalUrl(item?.path) ? (
                        <a 
                        href={
                          isExternalUrlhref(item?.path)
                            ? item?.path
                            : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                        }
                        target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                        >
                          <Styled.FooterProductImage
                            src={item?.image?.file?.url}
                            alt={item?.title}
                          />
                        </a>
                      ) : (
                        <Link 
                        to={
                          isExternalUrlhref(item?.path)
                            ? item?.path
                            : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                        }
                        target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                        >
                          <Styled.FooterProductImage
                            src={item?.image?.file?.url}
                            alt={item?.title}
                          />
                        </Link>
                      )}
                    </Styled.FooterColNoPadding>
                  );
                })}
              </Styled.FooterProductRow>
            </Styled.FooterCol>

            <Styled.FooterCol xs={12} lg={5} xl={3}>
              <Styled.SubFooterContainer className="p-lg-0">
                <Styled.SubFooterRow className="g-2  g-lg-1 g-xl-0  justify-content-center justify-content-xl-between">
                  {footer?.socialNetworking?.map((item, index) => {
                    return (
                      <Col className={linkBottomMargin} xs={'auto'} key={index}>
                        {isExternalUrl(item?.path) ? (
                          <a 
                          href={
                            isExternalUrlhref(item?.path)
                              ? item?.path
                              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                          }
                          target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                          >
                            <Styled.FooterSocialMediaLogo
                              src={item?.image?.file?.url}
                              alt={item?.title}
                              title={item?.title}
                            />
                          </a>
                        ) : (
                          <Link 
                          to={
                            isExternalUrlhref(item?.path)
                              ? item?.path
                              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                          }
                          target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                          >
                            <Styled.FooterSocialMediaLogo
                              src={item?.image?.file?.url}
                              alt={item?.title}
                              title={item?.title}
                            />
                          </Link>
                        )}
                      </Col>
                    );
                  })}
                  <Styled.DesktopFooterContainer>
                  <Col xs="auto">                 
                   {footer?.TextWithPaths?.map((item, index) => {
                    return (
                      <Row xs="auto" key={index}>
                        {isExternalUrl(item?.path) ? (
                          <Styled.FooterLink 
                          href={
                            isExternalUrlhref(item?.path)
                              ? item?.path
                              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                          }
                          target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                          >
                            {item?.text}
                          </Styled.FooterLink>
                        ) : (
                          <Styled.FooterLinkInternal
                          to={
                            isExternalUrlhref(item?.path)
                              ? item?.path
                              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                          }
                          target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                          >
                            {item?.text}
                          </Styled.FooterLinkInternal>
                        )}
                        
                      </Row>
                    );
                  })}
                </Col>
                </Styled.DesktopFooterContainer>
                <Styled.MobileFooterContainer>
                  {footer?.TextWithPaths?.map((item, index) => {
                    return (
                      <Col xs="auto" key={index}>
                        {isExternalUrl(item?.path) ? (
                          <Styled.FooterLink 
                          href={
                            isExternalUrlhref(item?.path)
                              ? item?.path
                              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                          }
                          target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                          >
                            {item?.text}
                          </Styled.FooterLink>
                        ) : (
                          <Styled.FooterLinkInternal
                          to={
                            isExternalUrlhref(item?.path)
                              ? item?.path
                              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                          }
                          target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                          >
                            {item?.text}
                          </Styled.FooterLinkInternal>
                        )}
                      </Col>
                    );
                  })}
                  </Styled.MobileFooterContainer>
                </Styled.SubFooterRow>
              </Styled.SubFooterContainer>
            </Styled.FooterCol>
          </Styled.FooterRow>
        </Styled.FooterInnerContainer>
      </Styled.FooterContainer>
      <PropanePopUp modalShow={modalShow} handleModalShow={handleModalShow} />
    </>
  );
};

export default Footer;
