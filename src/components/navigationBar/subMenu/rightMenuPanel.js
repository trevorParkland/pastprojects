import * as React from 'react';
import {
  RightMenuPanelContainer,
  ListContainer,
  LiContainer,
  LinkStyle,
  ArrowImg,
  Arrow,
  SubMenuList,
  SubMenuListItem,
  SubMenuAnchor,
} from './rightMenuPanelStyle';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../../utils';
import arrowBlue from '../../../images/arrow-blue.png';
import constants from '../../../utils/utils';

const RightMenuPanel = (props) => {
  const [showSubMenu, setShowSubMenu] = React.useState();
  const onHover = (e, index) => {
    setShowSubMenu(index);
  };

  const onSubMenuClick = (e, item, type) => {
    props.callback(e, true, item, type);
  };
  const onMainMenuClick = (e, item) => {
    props.callback(e, false, item);
  };

  return (
    <RightMenuPanelContainer
      $width={
        props.navigationType === constants.ABOUT_BLUEWAVE.ABOUT_NAVIGATION ||
        props.navigationType === constants.CONTACT_US.CONTACT_NAVIGATION
          ? '310px'
          : '185px'
      }
    >
      <ListContainer>
        {props?.menu?.map((item, index) => {
          return (
            <LiContainer key={index} onMouseEnter={(e) => onHover(e, index)}>
              <LinkStyle
                href={
                  isExternalUrlhref(
                    item?.textWithPath?.path ? item?.textWithPath?.path : '/'
                  )
                    ? item?.textWithPath?.path
                      ? item?.textWithPath?.path
                      : '/'
                    : addTrailingSlash(
                        process.env.GATSBY_DOMAIN_URL + item?.textWithPath?.path
                          ? item?.textWithPath?.path
                          : '/'
                      )
                }
                target={
                  isExternalUrl(
                    item?.textWithPath?.path ? item?.textWithPath?.path : '/'
                  )
                    ? '_blank'
                    : '_self'
                }
                onClick={(e) => onMainMenuClick(e, item)}
              >
                {item?.textWithPath?.text}
              </LinkStyle>
              <Arrow>
                <ArrowImg src={arrowBlue} />
              </Arrow>
              {showSubMenu === index &&
              item?.subMenusWithPaths &&
              item?.subMenusWithPaths?.length ? (
                <SubMenuList
                  $left={
                    props.navigationType ===
                      constants.ABOUT_BLUEWAVE.ABOUT_NAVIGATION ||
                    props.navigationType ===
                      constants.CONTACT_US.CONTACT_NAVIGATION
                      ? '310px'
                      : '185px'
                  }
                >
                  <SubMenuListItem>
                    {item?.subMenusWithPaths?.map((children, index) => {
                      return (
                        <SubMenuAnchor
                          key={index}
                          // href={children.path ? '' : item.path}

                          href={
                            isExternalUrlhref(
                              children?.path ?? children?.textWithPath?.path
                            )
                              ? children?.path ?? children?.textWithPath?.path
                              : addTrailingSlash(
                                  process.env.GATSBY_DOMAIN_URL +
                                    (children?.path ??
                                      children?.textWithPath?.path)
                                )
                          }
                          target={
                            isExternalUrl(
                              children?.path ?? children?.textWithPath?.path
                            )
                              ? '_blank'
                              : '_self'
                          }
                          menu={children}
                          onClick={(e) =>
                            onSubMenuClick(e, children, item.type)
                          }
                        >
                          {children?.text ?? children?.textWithPath?.text ?? ''}
                        </SubMenuAnchor>
                      );
                    })}
                  </SubMenuListItem>
                </SubMenuList>
              ) : null}
            </LiContainer>
          );
        })}
      </ListContainer>
    </RightMenuPanelContainer>
  );
};

export default RightMenuPanel;
