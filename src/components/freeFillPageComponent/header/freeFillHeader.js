import * as React from 'react';
import { useState } from 'react';
import * as Styled from './freeFillHeaderStyles';
import { Col, Row, Container, Image } from 'react-bootstrap';

const FreeFillHeader = (props) => {
  const [value, setValue] = useState('');

  return (
    <>
      <Styled.HeaderContainer>
        <Styled.RowContent>
          {/* <Col sm={2}></Col> */}
          <Styled.LeftColumn sm={6}>
            <Styled.AnchorTag
              href="http://www.bluewaveenergy.ca/"
              target="_blank"
            >
              <Styled.ImageLogo
                src={props?.headerData?.image?.file?.url}
                alt="Bluewave Energy"
                title="Bluewave Energy"
              />
            </Styled.AnchorTag>
          </Styled.LeftColumn>
          <Styled.LeftColumn sm={5}>
            <Styled.ParaStyles>
              {props?.headerData?.text?.text}
            </Styled.ParaStyles>
          </Styled.LeftColumn>
        </Styled.RowContent>
      </Styled.HeaderContainer>

      {/* <Styled.RowContent>
        <Styled.BlastImageContainer className="m-auto">
          <Styled.ImageBlast src="https://www.bluewaveenergy.ca/slp/fff/images/title-bw-new.png" />
        </Styled.BlastImageContainer>
      </Styled.RowContent> */}
    </>
  );
};

export default FreeFillHeader;
