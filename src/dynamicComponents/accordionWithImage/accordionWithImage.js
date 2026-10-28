import React from 'react';
import useCollapse from 'react-collapsed';
import * as Styled from './accordionWithImageStyles';

const ExpandLinkComponent = ({
  imageSrc,
  text,
  imgAlt,
  imgWidth,
  imgHeight,
  imgTop,
  imgTopOnMobile,
}) => {
  return (
    <>
      <Styled.ExpandLink>
        <Styled.ImageExpandLink
          src={imageSrc}
          alt={imgAlt}
          $width={imgWidth}
          $height={imgHeight}
          $top={imgTop}
          $mobileTop={imgTopOnMobile}
        ></Styled.ImageExpandLink>
        {text}
      </Styled.ExpandLink>
    </>
  );
};

const AccordionWithImage = ({ sectionData }) => {
  const [isExpanded, setExpanded] = React.useState(false);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });

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
      sectionData?.text?.text //string
    );
  }, []);

  return (
    <>
      <Styled.CollapseButton
        className={isExpanded ? 'active' : ''}
        {...getToggleProps({
          onClick: () => setExpanded((x) => !x),
        })}
      >
        <ExpandLinkComponent
          imageSrc={sectionData?.image?.file?.url}
          text={sectionData?.title}
          imgAlt={sectionData?.image?.file?.fileName}
          imgWidth={sectionData?.image?.file?.details?.image?.width}
          imgHeight={sectionData?.image?.file?.details?.image?.height}
          imgTop={sectionData?.title === 'ORDER PROPANE NOW' ? '' : '-11px'}
          imgTopOnMobile={
            sectionData?.title === 'ORDER PROPANE NOW' ? '' : '13px'
          }
        />
      </Styled.CollapseButton>
      <Styled.formDiv {...getCollapseProps()}>
        {sectionData?.text?.text && (
          <form id={'mktoForm_' + sectionData.text?.text}></form>
        )}
      </Styled.formDiv>
    </>
  );
};

export default AccordionWithImage;
