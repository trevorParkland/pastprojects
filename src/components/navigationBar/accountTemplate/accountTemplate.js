import * as React from 'react';
import * as Styled from './accountTemplateStyles';
import { Row, Col } from 'react-bootstrap';
import arrowResiLarge from '../../../images/arrow-large-residential.png';
import iconAccountOpen from '../../../images/icon-account-open.png';
import orderFuelOnline from '../../../images/icon-order-fuel-home.png';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../../utils';

const AccountTemplate = (props) => {
  return (
    <Styled.AccountContainer
      $backgroundImage={props?.backgroundImages[0]?.file?.url}
      $backgroundImageSmallDevice={props?.backgroundImages[1]?.file.url}
      $isLeft={props?.isLeft}
    >
      <Styled.WrapperInnerDiv>
        Your
        <Styled.AnchorAccountType
          href={
            isExternalUrlhref(props?.textWithLink1?.path)
              ? props?.textWithLink1?.path
              : addTrailingSlash(
                  process.env.GATSBY_DOMAIN_URL + props?.textWithLink1?.path
                )
          }
          target={
            isExternalUrl(props?.textWithLink1?.path) ? '_blank' : '_self'
          }
          $color={props?.accountTypeColor}
        >
          {props?.textWithLink1?.text}
          <Styled.ImageStyleArrow src={arrowResiLarge} />
        </Styled.AnchorAccountType>
      </Styled.WrapperInnerDiv>

      <Styled.TabRow className="g-0">
        {props?.isLeft && <Col md={1}></Col>}
        <Styled.WrapperTabDiv
          xs={7}
          md={6}
          $isBorder={true}
          $color={props?.anchorBGColor}
          $hoverColor={props?.anchorHoverColor}
        >
          <Styled.TextRow className="g-0">
            <Col md>
              <Styled.AnchorTagButton
                href={
                  isExternalUrlhref(props?.textWithLink2?.path)
                    ? props?.textWithLink2?.path
                    : addTrailingSlash(
                        process.env.GATSBY_DOMAIN_URL +
                          props?.textWithLink2?.path
                      )
                }
                target={
                  isExternalUrl(props?.textWithLink2?.path) ? '_blank' : '_self'
                }
              >
                {props.textWithLink2?.text}
              </Styled.AnchorTagButton>
            </Col>
            <Styled.WrapperImageCol xl={2}>
              <Styled.ImageStyleLogo
                $height="19px"
                src={iconAccountOpen}
                alt={props?.textWithLink2?.text}
              />
            </Styled.WrapperImageCol>
          </Styled.TextRow>
        </Styled.WrapperTabDiv>
        <Styled.WrapperTabDiv
          xs={5}
          lg={5}
          $isBorder={false}
          $color={props?.anchorBGColor}
          $hoverColor={props?.anchorHoverColor}
        >
          <Styled.TextRow className="g-0">
            <Col md>
              <Styled.AnchorTagButton
                href={
                  isExternalUrlhref(props?.textWithLink3?.path)
                    ? props?.textWithLink3?.path
                    : addTrailingSlash(
                        process.env.GATSBY_DOMAIN_URL +
                          props?.textWithLink3?.path
                      )
                }
                target={
                  isExternalUrl(props?.textWithLink3?.path) ? '_blank' : '_self'
                }
              >
                {props?.textWithLink3?.text}
              </Styled.AnchorTagButton>
            </Col>
            <Styled.WrapperImageCol xl={2}>
              <Styled.ImageStyleLogo
                $height="30px"
                src={orderFuelOnline}
                alt={props?.textWithLink3?.text}
              />
            </Styled.WrapperImageCol>
          </Styled.TextRow>
        </Styled.WrapperTabDiv>
        {!props.isLeft && <Col md={1}></Col>}
      </Styled.TabRow>
    </Styled.AccountContainer>
  );
};

export default AccountTemplate;
