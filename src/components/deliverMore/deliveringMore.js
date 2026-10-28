import * as React from 'react';
import * as Styled from './deliveringMoreStyles';
import { Row, Col, Container } from 'react-bootstrap';
import ModalTemplate from './modalStickerTemplate/modalTemplate';
import PropanePopUp from '../propanePopUp/propanePopUp';
import constants from '../../utils/utils';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
  } from '../../utils';


const DeliveringMore = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const handleModalShow = (isShow) => {
    isShow ? setModalShow(isShow) : setModalShow(!modalShow);
  };

  return (
    <>
      <Styled.DeliveringMoreContainer>
        <Styled.DeliveringMoreInnerContainer fluid className="p-0">
          <Row className="g-0">
            <Col xl />
            <Col>
              <Styled.RowContentCard className="g-0 justify-content-center">
                {props?.homeCards?.carddetails?.map((element, index) => {
                  return (
                    <Col xs={12} lg={4} key={index}>
                      <ModalTemplate
                        headerText={element?.headerText}
                        paraText={element?.description?.description}
                        imageSource={element?.image?.file?.url}
                        anchorLink={element?.path}
                        altText={element?.altText}
                      />
                    </Col>
                  );
                })}
              </Styled.RowContentCard>
              <Styled.DeliveringContainer fluid>
                <Row className="g-0 justify-content-center">
                  <Col xs={12} lg={8} xl={9}>
                    <Styled.DeliveringTitle>
                      {props?.homeDeliveryProducts?.headerText}
                    </Styled.DeliveringTitle>
                  </Col>
                  <Col xs={12} lg={8} xl={9}>
                    <Row className="justify-content-center">
                      {props?.homeDeliveryProducts?.imagereferences?.map(
                        (item, index) => {
                          return (
                            <Col xs={12} md={'auto'} lg="auto" key={index}>
                              {item.type ===
                              constants.COMMON.PROPANE_POP_UP
                                .DELIVERING_MORE ? (
                                <Styled.AnchorStyle
                                  onClick={() => {
                                    handleModalShow(true);
                                  }}
                                >
                                  <Styled.ImageContainer
                                    backgroundImage={item?.images[0]?.file?.url}
                                    hoverUrl={item?.images[1]?.file?.url}
                                    title={item?.title}
                                  />
                                </Styled.AnchorStyle>
                              ) : isExternalUrl(item?.path) ? (
                                <Styled.AnchorStyle
                                  
                                  href={
                                    isExternalUrlhref(item?.path)
                                      ? item?.path
                                      : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                                  }
                                  target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                                >
                                  <Styled.ImageContainer
                                    backgroundImage={item?.images[0]?.file?.url}
                                    hoverUrl={item?.images[1]?.file?.url}
                                    title={item?.title}
                                  />
                                </Styled.AnchorStyle>
                              ) : (
                                <Styled.AnchorStyleInternal 
                                to={
                                  isExternalUrlhref(item?.path)
                                    ? item?.path
                                    : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + item?.path)
                                }
                                target={isExternalUrl(item?.path) ? '_blank' : '_self'}
                                >
                                  <Styled.ImageContainer
                                    backgroundImage={item?.images[0]?.file?.url}
                                    hoverUrl={item?.images[1]?.file?.url}
                                    title={item?.title}
                                  />
                                </Styled.AnchorStyleInternal>
                              )}
                            </Col>
                          );
                        }
                      )}
                    </Row>
                  </Col>
                </Row>
              </Styled.DeliveringContainer>
            </Col>
            <Col xl />
          </Row>
        </Styled.DeliveringMoreInnerContainer>
      </Styled.DeliveringMoreContainer>
      <PropanePopUp modalShow={modalShow} handleModalShow={handleModalShow} />
    </>
  );
};

export default DeliveringMore;
