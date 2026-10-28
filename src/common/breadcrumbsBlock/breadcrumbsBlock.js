import * as React from 'react';
import { useState } from 'react';
import * as Styled from './breadcrumbsBlockStyle';
import { Col, Row } from 'react-bootstrap';
import downArrow from './../../images/arrow-white-down.png';
import upArrow from './../../images/arrow-white-up.png';
import iconPrint from './../../images/icon-print.png';
import constants, { MenuType } from '../../utils/utils';

const BreadcrumbsBlock = (props) => {
  const [isArrowClicked, setIsArrowClicked] = useState(
    props.isLocation ? false : true
  );
  const pathArray = props?.path?.split('/');
  const result = pathArray.filter(checkNull);
  function checkNull(path) {
    return path !== '';
  }
  const isBrowser = typeof window !== 'undefined';
  const printPage = () => {
    if (isBrowser) {
      window.print();
    }
  };

  const onArrowClicked = () => {
    if (props?.onClick) {
      setIsArrowClicked(!isArrowClicked);
      props.onClick();
    }
  };

  return (
    <>
      <Styled.HeaderContainer fluid>
        <Styled.InnerContainer>
          <Styled.HeaderRow>
            <Styled.HeaderCol
              $backgroundColor={props?.backgroundColor}
              $borderTopColor={props?.borderTopColor}
              lg={3}
              className="d-none d-lg-block w-100"
            >
              <Styled.RowInHeaderCol className="g-0">
                <Col lg>
                  <Styled.HeaderText>
                    {result[0] === MenuType[0].path
                      ? MenuType[0].name
                      : result[0]}
                  </Styled.HeaderText>
                </Col>
                <Col lg={'auto'}>
                  {(props.isLocation && result.length > 1) || props.isSearch ? (
                    <></>
                  ) : (
                    <Styled.DownArrowImage
                      src={isArrowClicked ? downArrow : upArrow}
                      alt="Down Arrow"
                      onClick={onArrowClicked}
                    />
                  )}
                </Col>
              </Styled.RowInHeaderCol>
            </Styled.HeaderCol>
            <Styled.ParaCol xs={12} md>
              <Styled.ParaText>
                <Styled.AnchorText to="/">Home</Styled.AnchorText>
                {result?.map((path, index) => {
                  if (path === constants.ABOUT_BLUEWAVE.ABOUT_BLUEWAVE_SLUG) {
                    path = constants.ABOUT_BLUEWAVE.ABOUT_BLUEWAVE_TITLE;
                  }
                  if (
                    path === constants.ABOUT_BLUEWAVE.HEALTH_AND_SAFETY.SLUG
                  ) {
                    path = constants.ABOUT_BLUEWAVE.HEALTH_AND_SAFETY.TITLE;
                  }
                  if (
                    path ===
                    constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT
                      .GRANDE_PRAIRIE_DC_SLUG
                  ) {
                    path =
                      constants.LOCATION_BLUEWAVE.LOCATION_DETAILS_CONTENT
                        .GRANDE_PRAIRIE_DC_TITLE;
                  }

                  return (
                    <React.Fragment key={index}>
                      /
                      {index !== result.length - 1 ? (
                        <Styled.AnchorText2
                          href={
                            process.env.GATSBY_DOMAIN_URL +
                            '/' +
                            result?.slice(0, index + 1).join('/') +
                            '/ '
                          }
                          key={index}
                        >
                          {path
                            ?.replaceAll('-', ' ')
                            .replaceAll('cardlock', ' ')}
                        </Styled.AnchorText2>
                      ) : (
                        <Styled.PathText>
                          {path
                            ?.replaceAll('-', ' ')
                            .replaceAll('cardlock', ' ')}
                        </Styled.PathText>
                      )}
                    </React.Fragment>
                  );
                })}
              </Styled.ParaText>
            </Styled.ParaCol>
            <Styled.PrinterLogoCol xs={12} md={2} className="d-none d-md-block">
              <a onClick={() => printPage()}>
                <Styled.LogoImage src={iconPrint} alt="Printer Logo" />
              </a>
            </Styled.PrinterLogoCol>
          </Styled.HeaderRow>
        </Styled.InnerContainer>
      </Styled.HeaderContainer>
    </>
  );
};

export default BreadcrumbsBlock;
