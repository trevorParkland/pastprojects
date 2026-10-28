import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import * as Styled from './modalTemplateStyes';
import EBillingPopUp from '../../eBillingPopUp/eBillingPopUp';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../../utils';

const ModalTemplate = (props) => {
  const [modalShowEBilling, setModalShowEBilling] = React.useState(false);
  const handleModalShowEBilling = (isShow) => {
    isShow
      ? setModalShowEBilling(isShow)
      : setModalShowEBilling(!modalShowEBilling);
  };
  return props.imageSource ? (
    <Styled.AnchorStyles
      href={
        isExternalUrlhref(
          props?.anchorLink === '/modal/ebilling/'
            ? undefined
            : props?.anchorLink
        )
          ? props?.anchorLink === '/modal/ebilling/'
            ? undefined
            : props?.anchorLink
          : addTrailingSlash(
              process.env.GATSBY_DOMAIN_URL +
                (props?.anchorLink === '/modal/ebilling/'
                  ? undefined
                  : props?.anchorLink)
            )
      }
      target={
        isExternalUrl(
          props?.anchorLink === '/modal/ebilling/'
            ? undefined
            : props?.anchorLink
        )
          ? '_blank'
          : '_self'
      }
      onClick={() => {
        props?.anchorLink === '/modal/ebilling/'
          ? handleModalShowEBilling()
          : {};
      }}
    >
      <Col xl={12}>
        <Styled.ModalImage
          src={props?.imageSource}
          alt={props?.altText}
          $width={props?.anchorLink === '/modal/ebilling/'}
        ></Styled.ModalImage>
        <Styled.HeaderText>{props?.headerText}</Styled.HeaderText>
        <Styled.ParaText>{props?.paraText}</Styled.ParaText>
      </Col>
      <EBillingPopUp
        modalShow={modalShowEBilling}
        handleModalShow={handleModalShowEBilling}
      />
    </Styled.AnchorStyles>
  ) : (
    <></>
  );
};

export default ModalTemplate;
