import * as React from 'react';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Helmet } from 'react-helmet';
import * as Styled from './freeFillFooterStyles';

const FreeFillFooter = (props) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event?.target?.value);
  };

  const handleSubmit = () => {
    alert('Submitted');
    setValue('');
  };

  return (
    <Styled.FooterContainer>
      <Styled.InnerContainer>
        <Styled.ParaStyles>{props?.footerData?.text?.text} </Styled.ParaStyles>
      </Styled.InnerContainer>
    </Styled.FooterContainer>
  );
};

export default FreeFillFooter;
