import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import { Link } from 'gatsby';

export const Anchor = styled.a`
  text-decoration: none;
`;
export const NoAnchorDiv = styled.div``;
export const AnchorInternal = styled(Link)`
  text-decoration: none;
`;
export const LinkStyle = styled.a`
  text-decoration: none;
  color: #9fb577;
`;

export const BlockTitle = styled.h2`
  background-color: ${(props) =>
    props.$backgroundColor ? props?.$backgroundColor : '#049de1'};
  padding: 16px 30px 14px 30px;
  font-family: 'Figtree-Medium', arial, sans-serif;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #fff;
  font-weight: normal !important;
  letter-spacing: 0.02em;
  margin: 0 !important;
`;

export const BlockArea = styled.div`
  padding: 25px 26px;
  background: #fff;
  border-top: none !important;
`;

export const BlockContainer = styled.div`
  @media print {
    display: none;
  }
  display: block;
  margin-bottom: 40px;

  border: 4px solid
    ${(props) => (props.$defaultBorder ? props?.$defaultBorder : '#CDE5F3')};

  :hover {
    border: 4px solid
      ${(props) => (props.$hoverBlockArea ? props?.$hoverBlockArea : '#049de1')};
  }
  @media (max-width: 992px) {
    margin-bottom: 30px;
  }
`;

export const CardCol = styled(Col)`
  justify-content: start;
  overflow: hidden;
`;
export const Heading3 = styled.h3`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '28px')};
  line-height: ${(props) => (props.$lineHeight ? props.$lineHeight : '32px')};
  font-family: 'Figtree-Light', arial, sans-serif;
  color: #037ec4;
  letter-spacing: 0;
  margin-bottom: 25px;
  @media (max-width: 991px) {
    font-size: 22px;
    line-height: 23px;
  }
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-family: 'Figtree-Regular', arial, sans-serif;
  line-height: 18px;
  letter-spacing: 0.02em;
  color: #666;
`;

export const Img = styled.img`
  width: ${(props) => (props.$width ? props.$width : 'auto')};
  height: auto;
  vertical-align: top;
  float: ${(props) => (props.$floatNone ? 'none' : 'right')};
  @media (max-width: 424px) {
    width: 75px !important;
  }
`;
