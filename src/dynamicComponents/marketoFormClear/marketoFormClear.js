import * as React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import * as Styled from './marketoFormClearStyle';

const MarketoFormClear = ({ sectionData }) => {
  async function initMarktoForm() {
    // eslint-disable-next-line no-undef
    await Munchkin.init(parseInt(process.env.GATSBY_MARKETO_ID));
  }
  React.useEffect(() => {
    initMarktoForm();
    // eslint-disable-next-line no-undef
    MktoForms2?.loadForm(
      process.env.GATSBY_MARKETO_URL, //string
      process.env.GATSBY_MARKETO_ID, //number
      sectionData?.subText //string
    );
  }, []);
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.HeaderH1>{children}</Styled.HeaderH1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2>{children}</Styled.HeaderH2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.HeaderH3>{children}</Styled.HeaderH3>
      ),
      [BLOCKS.HR]: () => <Styled.HorizontalBreak />,
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),
  };
  return (
    <Styled.DivStyle id={sectionData?.elementId}>
      {sectionData.contentDetails &&
        documentToReactComponents(
          JSON.parse(sectionData.contentDetails.raw),
          optionsMainStyle
        )}
      {sectionData?.header && <form id={sectionData.header}></form>}
    </Styled.DivStyle>
  );
};

export default MarketoFormClear;
