import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Background from '../../images/white_arch.png';

export const FooterContainer = styled.div`
  text-align: center !important;
  justify-content: center !important;
  padding-top: 40px;
  background-color: #1a4538 !important;
  margin-top: -1px;
  width: 100%;
  background: top/cover no-repeat url(${Background});
`;

export const RowStyle = styled(Row)`
  padding-left: 4.5rem !important;
  padding-right: 4.5rem !important;
  grid-template-rows: auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  display: grid;
  width: 100%;
  text-align: center !important;
  @media (max-width: 1399px) {
    max-width: 920px;
  }
  @media (max-width: 767px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Matrix = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-bottom: 1.5rem;
  margin-left: 0;
  padding-left: 0;
  align-items: center;
`;

export const ImageStyle = styled.img`
  text-align: center;
  border: 0;
  width: 17% !important;
  border-radius: 0.125rem;
  height: auto;
  max-width: 100%;
  display: inline;
  margin: 0 10px 24px 10px;
  @media (max-width: 460px) {
    width: 46% !important;
    padding: 15px;
  }
`;
export const ParagraphStyle = styled.p`
  max-width: 100%;
  font-size: 15px;
  line-height: 18px;
  font-weight: normal;
  font-family: 'Helvetica Neue';
  margin-bottom: 1.1rem;
  margin-top: 0;
  padding-top: 0.4005rem;
  @media (max-width: 870px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
