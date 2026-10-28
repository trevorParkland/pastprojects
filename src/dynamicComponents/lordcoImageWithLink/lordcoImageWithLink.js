import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import React from 'react';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';
import constants from '../../utils/utils';
import * as Styled from './lordcoImageWithLinkStyle';

const LordcoImageWithLink = ({ sectionData }) => {
  const optionsBottomLinksStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="m-0">{children}</p>,
      [BLOCKS.HEADING_6]: (node, children) => (
        <Styled.BottomLinksSpan>{children}</Styled.BottomLinksSpan>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <Styled.BottomLinksAnchor
            href={
              isExternalUrlhref(node?.data?.uri)
                ? node?.data?.uri
                : addTrailingSlash(
                    process.env.GATSBY_DOMAIN_URL + node?.data?.uri
                  )
            }
            target={isExternalUrl(node?.data?.uri) ? '_blank' : '_self'}
          >
            {children}
          </Styled.BottomLinksAnchor>
        );
      },
    },
    renderText: (text) =>
      text
        .split('\n')
        .flatMap((text, i) => [i > 0 && <Styled.DesktopBR key={i} />, text]),
  };

  return (
    <Styled.BottomLinksContainer>
      <Styled.BottomLinks>
        <Styled.BottomLinksUnorderedList>
          {sectionData?.listOfImagesWithPath?.map((section, index) => {
            return (
              <Styled.BottomLinksListItem key={index}>
                <Styled.BottomLinksAnchor href={section?.path} target="_blank">
                  <Styled.BottomLinksImage
                    src={section?.image?.file?.url}
                    alt={section.title}
                    title={section.title}
                    $width={
                      section.type ===
                      constants.PAGES.LORDCO.BOTTOM_LINKS.SOLUTIONS_HUB
                    }
                  />
                  {section?.richText &&
                    documentToReactComponents(
                      JSON.parse(section?.richText?.raw),
                      optionsBottomLinksStyle
                    )}
                </Styled.BottomLinksAnchor>
              </Styled.BottomLinksListItem>
            );
          })}
        </Styled.BottomLinksUnorderedList>
      </Styled.BottomLinks>
    </Styled.BottomLinksContainer>
  );
};

export default LordcoImageWithLink;
