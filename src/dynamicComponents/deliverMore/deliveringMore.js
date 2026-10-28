import * as React from 'react';
import * as Styled from './deliveringMoreStyles';
import { Row, Col } from 'react-bootstrap';
import ModalTemplate from './modalStickerTemplate/modalTemplate';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

const DeliveringMore = (props) => {
  return (
    <>
      <Styled.DeliveringMoreContainer>
        <Styled.DeliveringMoreInnerContainer fluid className="p-0">
          <Row className="g-0">
            <Col xl />
            <Col>
              <Styled.RowContentCard className="g-0 justify-content-start">
                {props?.homeCards?.listOfImagesWithPath?.map(
                  (element, index) => {
                    return (
                      <Styled.ColContentCard
                        xs={12}
                        lg={4}
                        sm={12}
                        md={4}
                        key={index}
                      >
                        <ModalTemplate
                          headerText={element?.title}
                          paraText={element?.richText?.raw}
                          imageSource={element?.image?.file?.url}
                          anchorLink={element?.path}
                          altText={element?.altText}
                          type={element?.type}
                        />
                      </Styled.ColContentCard>
                    );
                  }
                )}
              </Styled.RowContentCard>
              <Styled.DeliveringContainer fluid>
                <Row className="g-0">
                  <Col xs={12} lg>
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
                              {isExternalUrl(item?.path) ? (
                                <Styled.AnchorStyle
                                  href={
                                    isExternalUrlhref(item?.path)
                                      ? item?.path
                                      : addTrailingSlash(process.env.GATSBY_DOMAIN_URL +
                                        item?.path)
                                  }
                                  target="_blank"
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
                                      :addTrailingSlash( process.env.GATSBY_DOMAIN_URL +
                                        item?.path)
                                  }
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
    </>
  );
};

export default DeliveringMore;
