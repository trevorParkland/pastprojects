import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RightMenuPanel from './rightMenuPanel';
import LeftMenuDesc from './leftMenuDesc';
import * as Styled from '../mainMenu/navigationbarStyle';
import constants from '../../../utils/utils';

const SubMenu = (props) => {
  const callback = (e, isSubmenu, selectedMenu, type = '') => {
    props.callback(e, isSubmenu, selectedMenu, type);
  };

  return (
    <Styled.Layout
      $paddingBottom={
        props?.menuDetails?.type ===
          constants.ABOUT_BLUEWAVE.ABOUT_NAVIGATION ||
        props?.menuDetails?.type === constants.CONTACT_US.CONTACT_NAVIGATION
          ? '20px'
          : '0'
      }
      onMouseLeave={(e) => props.onMouseLeave()}
      fluid
    >
      {props?.menuDetails?.subNavigations ? (
        <Row>
          <Styled.LayoutLeftCol xs={6}>
            <LeftMenuDesc
              title={props?.menuDetails?.headerWithText?.headerText}
              description={props?.menuDetails?.headerWithText?.text?.text}
              link={
                props?.menuDetails?.textWithPath
                  ? props?.menuDetails?.textWithPath
                  : false
              }
            />
          </Styled.LayoutLeftCol>
          <Col xs={6}>
            <RightMenuPanel
              navigationType={props?.menuDetails?.type}
              menu={props?.menuDetails?.subNavigations}
              callback={callback}
            />
          </Col>
        </Row>
      ) : (
        ''
      )}
    </Styled.Layout>
  );
};

export default SubMenu;
