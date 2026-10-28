import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import * as Styled from './modalTemplateStyes';
import EBillingPopUp from '../../eBillingPopUp/eBillingPopUp';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../../utils';

const ModalTemplate = (props) => {
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
    },
  };
  const [modalShowEBilling, setModalShowEBilling] = React.useState(false);
  const handleModalShowEBilling = (isShow) => {
    isShow
      ? setModalShowEBilling(isShow)
      : setModalShowEBilling(!modalShowEBilling);
  };
  return props.imageSource && props.type != 'cardWithImage' ? (
    <Styled.AnchorStyles
      href={
        isExternalUrlhref(props?.anchorLink === '/modal/ebilling/' ? undefined : props?.anchorLink)? 
        (props?.anchorLink === '/modal/ebilling/' ? undefined : props?.anchorLink) : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + (props?.anchorLink === '/modal/ebilling/' ? undefined : props?.anchorLink))
      }
      target = {
        isExternalUrl(props?.anchorLink === '/modal/ebilling/' ? undefined : props?.anchorLink)? '_blank' : '_self'
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
        {documentToReactComponents(
              JSON.parse(props?.paraText),
              optionsMainStyle
            )}        
      </Col>
      <EBillingPopUp
        modalShow={modalShowEBilling}
        handleModalShow={handleModalShowEBilling}
      />
    </Styled.AnchorStyles>
  ) : (
    <Styled.AnchorStylesWithoutLink
      href={
        props?.anchorLink === '/modal/ebilling/' ? undefined : props?.anchorLink
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
        {documentToReactComponents(
              JSON.parse(props?.paraText),
              optionsMainStyle
            )} 
        <Styled.HorizontalBreak></Styled.HorizontalBreak>
      </Col>
      <EBillingPopUp
        modalShow={modalShowEBilling}
        handleModalShow={handleModalShowEBilling}
      />
    </Styled.AnchorStylesWithoutLink>
  );
};

export default ModalTemplate;
