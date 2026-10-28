import * as React from 'react';
import * as Styled from './migrationPanelStyles';
import { Row, Col } from 'react-bootstrap';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const MigrationPanel = ({ section }) => {
  return (
    <Styled.MigrationPanelContainer>
      <Styled.MigrationPanelInnerContainer fluid className="px-0">
        <Row className="g-0">
          <Col xs={12} lg>
            <Styled.Header2>
              <Styled.LeftSpan>
                {section?.headerWithText1?.headerText}
              </Styled.LeftSpan>
              {section?.headerWithText1?.text?.text}
            </Styled.Header2>
          </Col>
          <Col xs={12} lg>
            <Styled.LaptopImage
              src={section?.image?.file?.url}
              alt="No Image"
            />
          </Col>
          <Styled.RightCol xs={12} lg>
            <Styled.ImproveText>
              {section?.headerWithText2?.headerText}
            </Styled.ImproveText>

            <Styled.LinkAttribute
              href={
                isExternalUrlhref(section?.textWithLink?.path)
                  ? section?.textWithLink?.path
                  : addTrailingSlash(
                      process.env.GATSBY_DOMAIN_URL +
                        section?.textWithLink?.path
                    )
              }
              target={
                isExternalUrl(section?.textWithLink?.path) ? '_blank' : '_self'
              }
            >
              {section?.textWithLink?.text}
            </Styled.LinkAttribute>

            <Styled.RightSpan>
              {section?.headerWithText2?.text?.text}
            </Styled.RightSpan>
          </Styled.RightCol>
        </Row>
      </Styled.MigrationPanelInnerContainer>
    </Styled.MigrationPanelContainer>
  );
};

export default MigrationPanel;
