import styled from 'styled-components';
import { Form } from 'react-bootstrap';
export const FreeFillFormContainer = styled.div`
  max-width: 430px;
  width: 100%;
  margin: 0 auto;
  padding: 25px 0;
`;

export const FormControl = styled(Form.Control)`
  background-color: #d9e5ed !important;

  :focus {
    background-color: #ffd9d9 !important;
    box-shadow: none !important;
    border: 0;
  }
`;

export const FormSelect = styled(Form.Select)`
  background-color: #d9e5ed !important;

  :focus {
    background-color: #ffd9d9 !important;
    box-shadow: none !important;
    border: 0;
  }
`;
