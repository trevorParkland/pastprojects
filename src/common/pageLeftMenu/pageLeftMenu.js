import * as React from 'react';
import {
  RightMenuPanelContainer,
  ListContainer,
  LiContainer,
  LinkStyle,
  LinkStyleInternal,
  ArrowImg,
  Arrow,
  SubMenuList,
  SubMenuListItem,
  SubMenuAnchor,
  SubSubMenuAnchor,
  SubMenuAnchorInternal,
  SubSubMenuAnchorInternal,
  ActiveLink,
  ActiveSubLink,
  ActiveSubSubLink,
} from './pageLeftMenuStyle';
import useMenus from '../../hooks/useMenus';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';
import arrowBlue from './../../images/arrow-blue.png';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { Match } from '@reach/router';

const PageLeftMenu = ({ menuType, path }) => {
  const result = path.split('/').find((n) => n);
  const menuItem = useMenus().navigations.filter((navigation) => {
    return navigation.type === result;
  })[0];

  const location = useLocation();
  const level1 = location.pathname
    .replaceAll('-', ' ')
    .split('/')
    .filter((n) => n)[1];
  const level2 = location.pathname
    .replaceAll('-', ' ')
    .split('/')
    .filter((n) => n)[2];

  const validateRoute = (route) => {
    const menu = menuItem.subNavigations;
    for (let i = 0; i < menu?.length; i++) {
      for (let j = 0; j < menu[i].subMenusWithPaths?.length; j++) {
        if (menu[i].subMenusWithPaths[j].path === route) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <RightMenuPanelContainer>
      <ListContainer>
        {menuItem?.subNavigations?.map((subNavigation, index) => {
          return (
            <LiContainer key={index}>
              {isExternalUrl(subNavigation?.textWithPath?.path) ? (
                <LinkStyle
                  getProps={({ isCurrent }) => {
                    return isCurrent ? { style: ActiveLink } : {};
                  }}
                  key={index}
                  href={
                    isExternalUrlhref(subNavigation?.textWithPath?.path)
                      ? subNavigation?.textWithPath?.path
                      : addTrailingSlash(
                          process.env.GATSBY_DOMAIN_URL +
                            subNavigation?.textWithPath?.path
                        )
                  }
                  target={
                    isExternalUrl(subNavigation?.textWithPath?.path)
                      ? '_blank'
                      : '_self'
                  }
                >
                  {subNavigation?.textWithPath?.text}
                </LinkStyle>
              ) : (
                <Match path={subNavigation?.textWithPath?.path} key={index}>
                  {({ match }) => (
                    <LinkStyle
                      style={
                        match
                          ? validateRoute(subNavigation?.textWithPath?.path)
                            ? {}
                            : ActiveLink
                          : {}
                      }
                      href={
                        isExternalUrlhref(subNavigation?.textWithPath?.path)
                          ? subNavigation?.textWithPath?.path
                          : addTrailingSlash(
                              process.env.GATSBY_DOMAIN_URL +
                                subNavigation?.textWithPath?.path
                            )
                      }
                      target={
                        isExternalUrl(subNavigation?.textWithPath?.path)
                          ? '_blank'
                          : '_self'
                      }
                    >
                      {subNavigation?.textWithPath?.text}
                    </LinkStyle>
                  )}
                </Match>
              )}
              <Arrow>
                <ArrowImg src={arrowBlue} />
              </Arrow>

              {subNavigation?.subMenusWithPaths &&
              subNavigation?.textWithPath?.text
                ?.toLowerCase()
                .includes(
                  level1 === 'hse' ? 'health, safety & environment' : level1
                ) ? (
                <SubMenuList>
                  <SubMenuListItem>
                    {subNavigation?.subMenusWithPaths?.map((subMenu, index) => {
                      return (
                        <React.Fragment key={index}>
                          {isExternalUrl(
                            subMenu?.path ?? subMenu?.textWithPath?.path
                          ) ? (
                            <SubMenuAnchor
                              key={index}
                              getProps={({ isCurrent }) => {
                                return isCurrent
                                  ? { style: ActiveSubLink }
                                  : {};
                              }}
                              href={
                                isExternalUrlhref(
                                  subMenu?.path ?? subMenu?.textWithPath?.path
                                )
                                  ? subMenu?.path ?? subMenu?.textWithPath?.path
                                  : addTrailingSlash(
                                      process.env.GATSBY_DOMAIN_URL +
                                        (subMenu?.path ??
                                          subMenu?.textWithPath?.path)
                                    )
                              }
                              target={
                                isExternalUrl(
                                  subMenu?.path ?? subMenu?.textWithPath?.path
                                )
                                  ? '_blank'
                                  : '_self'
                              }
                            >
                              {subMenu?.text ??
                                subMenu?.textWithPath?.text ??
                                ''}
                            </SubMenuAnchor>
                          ) : (
                            <Match
                              path={
                                subMenu?.path ?? subMenu?.textWithPath?.path
                              }
                            >
                              {({ match }) => (
                                <SubMenuAnchorInternal
                                  style={match ? ActiveSubLink : {}}
                                  href={
                                    isExternalUrlhref(
                                      subMenu?.path ??
                                        subMenu?.textWithPath?.path
                                    )
                                      ? subMenu?.path ??
                                        subMenu?.textWithPath?.path
                                      : addTrailingSlash(
                                          process.env.GATSBY_DOMAIN_URL +
                                            (subMenu?.path ??
                                              subMenu?.textWithPath?.path)
                                        )
                                  }
                                  target={
                                    isExternalUrl(
                                      subMenu?.path ??
                                        subMenu?.textWithPath?.path
                                    )
                                      ? '_blank'
                                      : '_self'
                                  }
                                >
                                  {subMenu?.text ??
                                    subMenu?.textWithPath?.text ??
                                    ''}
                                </SubMenuAnchorInternal>
                              )}
                            </Match>
                          )}
                          {(subMenu?.subMenusWithPaths &&
                            subMenu?.text?.toLowerCase()?.includes(level2)) ||
                            (subMenu?.textWithPath?.text
                              ?.toLowerCase()
                              ?.includes(level2) &&
                              subMenu?.subMenusWithPaths?.map(
                                (subSubMenu, index) => {
                                  return isExternalUrl(subSubMenu?.path) ? (
                                    <SubSubMenuAnchor
                                      getProps={({ isCurrent }) => {
                                        return isCurrent
                                          ? { style: ActiveSubSubLink }
                                          : {};
                                      }}
                                      href={
                                        isExternalUrlhref(subSubMenu?.path)
                                          ? subSubMenu?.path
                                          : addTrailingSlash(
                                              process.env.GATSBY_DOMAIN_URL +
                                                subSubMenu?.path
                                            )
                                      }
                                      target={
                                        isExternalUrl(subSubMenu?.path)
                                          ? '_blank'
                                          : '_self'
                                      }
                                      key={index}
                                    >
                                      {subSubMenu?.text}
                                    </SubSubMenuAnchor>
                                  ) : (
                                    <Match path={subSubMenu?.path} key={index}>
                                      {({ match }) => (
                                        <SubSubMenuAnchorInternal
                                          style={match ? ActiveSubSubLink : {}}
                                          href={
                                            isExternalUrlhref(subSubMenu?.path)
                                              ? subSubMenu?.path
                                              : addTrailingSlash(
                                                  process.env
                                                    .GATSBY_DOMAIN_URL +
                                                    subSubMenu?.path
                                                )
                                          }
                                          target={
                                            isExternalUrl(subSubMenu?.path)
                                              ? '_blank'
                                              : '_self'
                                          }
                                          key={index}
                                        >
                                          {subSubMenu?.text}
                                        </SubSubMenuAnchorInternal>
                                      )}
                                    </Match>
                                  );
                                }
                              ))}
                        </React.Fragment>
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

export default PageLeftMenu;
