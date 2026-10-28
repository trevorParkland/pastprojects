import React from 'react';
import * as Styled from './headerWithParagraphCenterStyle';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import isExternalUrl, { addTrailingSlash, isExternalUrlhref, isYoutubeLink } from '../../utils';
import EBillingPopUp from '../eBillingPopUp/eBillingPopUp';
import OpenAccountPopUp from '../openAccountPopUp/openAccountPopUp';
import { useEffect } from 'react';

const HeaderWithParagraphCenter = ({ sectionData, location }) => {
  useEffect(async () => {
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
  const [modalShowOpenAccount, setModalShowOpenAccount] = React.useState(false);
  const handleModalShowOpenAccount = (isShow) => {
    isShow
      ? setModalShowOpenAccount(isShow)
      : setModalShowOpenAccount(!modalShowOpenAccount);
  };
  const [modalShowEBilling, setModalShowEBilling] = React.useState(false);
  const handleModalShowEBilling = (isShow) => {
    isShow
      ? setModalShowEBilling(isShow)
      : setModalShowEBilling(!modalShowEBilling);
  };
  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <Styled.HeaderH1>{children}</Styled.HeaderH1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Styled.HeaderH2>{children}</Styled.HeaderH2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Styled.HeaderH3>{children}</Styled.HeaderH3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Styled.HeaderH4>{children}</Styled.HeaderH4>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.ParaText>{children}</Styled.ParaText>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <Styled.UnorderedList>{children}</Styled.UnorderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <Styled.ListItem>{children}</Styled.ListItem>
      ),
      [INLINES.HYPERLINK]: (node, children) =>
        node.data.uri === '/modal/ebilling' ? (
          <Styled.LinkStyle onClick={handleModalShowEBilling}>
            {children}
          </Styled.LinkStyle>
        ) : node.data.uri === '/modal/openanaccount/' ? (
          <Styled.LinkStyle onClick={handleModalShowOpenAccount}>
            {children}
          </Styled.LinkStyle>
        ) : isYoutubeLink(node.data.uri) ? (
          <Styled.VideoContainer>
            <Styled.Iframe src={node.data.uri} frameborder="0"></Styled.Iframe>
          </Styled.VideoContainer>
        ) : (
          <Styled.LinkStyle
            href={isExternalUrlhref(node?.data?.uri)? node?.data?.uri : addTrailingSlash(process.env.GATSBY_DOMAIN_URL + node?.data?.uri)}
            target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
          >
            {children}
          </Styled.LinkStyle>
        ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        return asset.node.file.url.includes('image') ? (
          <Styled.ImageStyle src={asset.node.file.url} alt={asset.node.title} />
        ) : (
          <></>
        );
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  return (
    <>
      <Styled.MainDiv>
        {sectionData?.elementId?.trim() && (
          <Styled.SpanStyle
            id={sectionData?.elementId?.trim()}
          ></Styled.SpanStyle>
        )}
        {sectionData?.header?.trim() && (
          <Styled.HeaderH1>{sectionData.header}</Styled.HeaderH1>
        )}
        {sectionData?.subText?.trim() && (
          <Styled.HeaderH2>{sectionData.subText}</Styled.HeaderH2>
        )}
        {sectionData?.contentDetails &&
          documentToReactComponents(
            JSON.parse(sectionData?.contentDetails?.raw),
            optionsMainStyle
          )}
      </Styled.MainDiv>
      <EBillingPopUp
        modalShow={modalShowEBilling}
        handleModalShow={handleModalShowEBilling}
      />
      <OpenAccountPopUp
        modalShow={modalShowOpenAccount}
        handleModalShow={handleModalShowOpenAccount}
      />
    </>
  );
};
export default HeaderWithParagraphCenter;
