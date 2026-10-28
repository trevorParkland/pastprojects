import * as React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Styled from './freeFillFormStyles';
const FreeFillForm = ({ data, location }) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event?.target?.value);
  };

  const handleSubmit = () => {
    alert('Submitted');
    setValue('');
  };

  return (
    <React.Fragment>
      <Styled.FreeFillFormContainer>
        <Form>
          <Row className="g-2">
            <Col xs={6}>
              <Form.Group controlId="formBasicFName">
                <Form.Label>* First Name</Form.Label>
                <Styled.FormControl type="text" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicLName">
                <Form.Label>* Last Name</Form.Label>
                <Styled.FormControl type="text" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>* Email Address</Form.Label>
                <Styled.FormControl type="email" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicPNo">
                <Form.Label>* Phone Number</Form.Label>
                <Styled.FormControl type="tel" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group controlId="formBasicAddress">
                <Form.Label>* Address</Form.Label>
                <Styled.FormControl type="text" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group controlId="formBasicCity">
                <Form.Label>* City</Form.Label>
                <Styled.FormControl type="text" />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group controlId="formBasicProvince">
                <Form.Label>Province</Form.Label>
                <Styled.FormControl type="text" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicBranch">
                <Form.Label>* Closest Branch</Form.Label>
                <Styled.FormSelect defaultValue="Select...">
                  <option>Select...</option>
                  <option>...</option>
                </Styled.FormSelect>
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Group controlId="formBasicComment">
                <Form.Label>* Comment</Form.Label>
                <Styled.FormControl type="text" />
              </Form.Group>
            </Col>

            <Col xs={12}>
              *I understand and agree with the Parkland Corporation Privacy
              Policy and Terms of Use and consent to receiving electronic
              communications, including without limitation newsletters,
              promotions, updates and other materials, from Bluewave Energy; and
              I am aware that I can unsubscribe to receiving such communications
              at any time. Bluewave Energy is a Division of Parkland Corporation
              at 1800, 240 - 4 Avenue SW, Calgary, AB T2P 4H4. Telephone:
              403-567-2500
            </Col>
            <Col xs={12}>
              <Form.Check type="checkbox" id="check" label="I Agree" />
            </Col>
          </Row>
          <Row>
            <Col xs></Col>

            <Col xs={4}>
              <Button onClick={handleSubmit}>Get Started</Button>
            </Col>
            <Col xs></Col>
          </Row>
        </Form>
      </Styled.FreeFillFormContainer>
    </React.Fragment>
  );
};

export default FreeFillForm;
