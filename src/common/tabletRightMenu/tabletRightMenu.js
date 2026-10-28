import React from 'react';
import Hamburger from '../../images/icon-hamburger.png';
import * as Styled from '../../templates/commonPageTemplate/commonPageTemplateStyles';
import BlockLeftPanel from '../blockLeftPanel/blockLeftPanel';
import PageLeftMenu from '../pageLeftMenu/pageLeftMenu';

function TabletRightMenu({
  MenuBarColor,
  pageType,
  location,
  hamburgerHeader,
}) {
  const [showMenu, setShowMenu] = React.useState(false);
  const handleMenu = (event) => {
    setShowMenu(!event);
  };
  return (
    <>
      <Styled.Menubar
        $background={MenuBarColor[pageType]?.background}
        $borderColor={MenuBarColor[pageType]?.border}
        onClick={() => {
          handleMenu(showMenu);
        }}
      >
        <Styled.ArrowImage src={Hamburger} alt="Hamburger icon" />
        {hamburgerHeader[pageType]}
      </Styled.Menubar>
      {showMenu && (
        <Styled.MenubarBody>
          <PageLeftMenu path={location.pathname} />
          <BlockLeftPanel
            path={location.pathname}
            backgroundColor={MenuBarColor[pageType]?.background}
            hoverBlockArea={MenuBarColor[pageType]?.background}
            defaultBorder={MenuBarColor[pageType]?.defaultCardBorderColor}
          />
        </Styled.MenubarBody>
      )}
    </>
  );
}

export default TabletRightMenu;
