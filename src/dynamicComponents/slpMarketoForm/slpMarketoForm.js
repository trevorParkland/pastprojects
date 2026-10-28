import * as React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import * as Styled from './slpMarketoFormStyles';
import { superScriptChars } from '../../constants/superScriptChars';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref } from '../../utils';

const SlpMarketoForm = ({ sectionData }) => {
  async function initMarktoForm() {
    // eslint-disable-next-line no-undef
    await Munchkin.init(parseInt(process.env.GATSBY_MARKETO_ID));
  }
  React.useEffect(() => {
    initMarktoForm();
    // eslint-disable-next-line no-undef, no-unused-expressions
    MktoForms2?.loadForm(
      process.env.GATSBY_MARKETO_URL, //string
      process.env.GATSBY_MARKETO_ID, //number
      sectionData?.subText //string
    );
  }, []);
  React.useEffect(async () => {
    if (sectionData?.elementId === location?.hash?.replace('#', '')) {
      const waitedID = await new Promise((resolve) => {
        document?.getElementById(sectionData?.elementId) && resolve(true);
      });
      if (waitedID) {
        setTimeout(() => {
          window.location.href = `#${sectionData?.elementId}`;
        }, 500);
      }
    }
  }, [sectionData?.elementId]);
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.Header>{children}</Styled.Header>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.Header2>{children}</Styled.Header2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.Header3>{children}</Styled.Header3>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.LinkStyle
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.LinkStyle>
      ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => (
        <Styled.LinkStyle
          href={
            isExternalUrlhref(node?.data?.uri)
              ? node?.data?.uri
              : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)
          }
          target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
        >
          {children}
        </Styled.LinkStyle>
      ),
      [BLOCKS.HR]: () => <Styled.HorizontalBreak />,
    },
    renderText: (text) =>
      text
        .split('\n')
        .flatMap((text, i) => [
          i > 0 && <br key={i} />,
          <React.Fragment key={i}>
            {text
              ?.split('')
              ?.map((i, k) =>
                superScriptChars.includes(i) ? (
                  <Styled.SuperScriptStyle key={k}>{i}</Styled.SuperScriptStyle>
                ) : (
                  <React.Fragment key={k}>{i}</React.Fragment>
                )
              )}
          </React.Fragment>,
        ]),
  };

  return (
    <Styled.Body id={sectionData.elementId}>
      {sectionData.contentDetails &&
        documentToReactComponents(
          JSON.parse(sectionData.contentDetails.raw),
          optionsMainStyle
        )}
      <Styled.FormBody className="d-flex justify-content-center">
        {sectionData?.header && <form id={sectionData?.header?.trim()}></form>}
      </Styled.FormBody>
    </Styled.Body>
  );
};

export default SlpMarketoForm;
