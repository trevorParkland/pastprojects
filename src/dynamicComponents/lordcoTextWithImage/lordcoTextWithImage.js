import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import React from 'react';
import { useContentfulImages } from '../../hooks/useContentfulImages';
import * as Styled from './lordcoTextWithImageStyle';

const LordcoTextWithImage = ({ sectionData }) => {
  const optionsHeadingStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="m-0">{children}</p>,
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  const optionsRepsImageStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="d-none"></p>,

      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const asset = useContentfulImages(node.data.target.sys.id);
        if (asset) {
          return (
            <Styled.RepsImage
              src={asset?.node?.file?.url}
              alt={asset?.node?.title}
            />
          );
        }
      },
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  const optionsRepsStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="m-0">{children}</p>,
    },
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };
  const repsIntroTextWithImage = sectionData?.list?.filter(
    (section) => section.type === 'centerAllignedText'
  )[0];
  const repsContact = sectionData?.list?.filter(
    (section) => section.type === 'centerAlignedtextWithEmailAndContact'
  )[0];
  return (
    <Styled.RepsContainer>
      <Styled.Reps>
        <Styled.RepsIntro>
          {repsIntroTextWithImage?.contentDetails &&
            documentToReactComponents(
              JSON.parse(repsIntroTextWithImage?.contentDetails?.raw),
              optionsHeadingStyle
            )}
        </Styled.RepsIntro>

        {repsIntroTextWithImage?.contentDetails &&
          documentToReactComponents(
            JSON.parse(repsIntroTextWithImage?.contentDetails?.raw),
            optionsRepsImageStyle
          )}

        <Styled.RepsCol2>
          <Styled.RepUnorderedList>
            {repsContact?.contentDetails &&
              documentToReactComponents(
                JSON.parse(repsContact?.contentDetails?.raw),
                optionsRepsStyle
              )}
          </Styled.RepUnorderedList>
        </Styled.RepsCol2>
      </Styled.Reps>
    </Styled.RepsContainer>
  );
};

export default LordcoTextWithImage;
