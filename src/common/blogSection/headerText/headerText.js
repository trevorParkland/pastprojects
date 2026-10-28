import * as Styled from './headerStyle';
import * as React from 'react';

const Header = ({ sectionData }) => {
  return (
    <>
      {sectionData && <Styled.Header>{sectionData?.headerText}</Styled.Header>}{' '}
    </>
  );
};

export default Header;
