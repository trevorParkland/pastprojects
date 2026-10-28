import * as React from 'react';
import * as Styled from './tellYourFriendsStyles';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';

const TellYourFriends = ({ section }) => {
  return (
    <Styled.TellYourFriendsContainer>
      <Styled.TellYourFriendsInnerContainer fluid>
        <Row>
          <Col xs />
          <Styled.RowContent className="g-0">
            <Col md={6} lg>
              <a
                href={
                  isExternalUrlhref(section?.path)
                    ? section?.path
                    : addTrailingSlash(
                        process.env.GATSBY_DOMAIN_URL + section?.path
                      )
                }
                target={isExternalUrl(section?.path) ? '_blank' : '_self'}
              >
                <Styled.FireImage
                  src={section?.images[0]?.file?.url}
                  alt="No Image"
                />
              </a>
            </Col>
            <Col md={6} lg>
              <a
                href={
                  isExternalUrlhref(section?.path)
                    ? section?.path
                    : addTrailingSlash(
                        process.env.GATSBY_DOMAIN_URL + section?.path
                      )
                }
                target={isExternalUrl(section?.path) ? '_blank' : '_self'}
              >
                <Styled.FireImage
                  src={section?.images[1]?.file?.url}
                  alt="No Image"
                />
              </a>
            </Col>
          </Styled.RowContent>
          <Col xs />
        </Row>
      </Styled.TellYourFriendsInnerContainer>
    </Styled.TellYourFriendsContainer>
  );
};

export default TellYourFriends;
