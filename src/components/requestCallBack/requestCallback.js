import * as React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import * as Styled from './requestCallBackStyle';
import { graphql, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import isExternalUrl, {
  addTrailingSlash,
  isExternalUrlhref,
} from '../../utils';
// import MarketoForm from '../../common/marketoForm';
import { marketoForms, marketoId } from '../../utils/marketoForms';
const RequestCallback = () => {
  const RequestCallbackQuery = useStaticQuery(graphql`
    query requestACallback {
      allContentfulRequestACallback(
        filter: { type: { eq: "BluewaveRequestACallback" } }
      ) {
        edges {
          node {
            title
            type
            text {
              raw
            }
            header
            node_locale
            branches
            options
            sys {
              type
              revision
            }
            shortText
            rawTextId {
              raw
            }
          }
        }
      }
    }
  `);

  const [showForm, setShowForm] = React.useState(true);
  const [FirstName, setFirstName] = React.useState('');
  const [LastName, setLastName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [BWbranches, setBWbranches] = React.useState(undefined);

  const setBWbranchesData = (data) => {
    setBWbranches(data);
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    document.body.appendChild(script);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    let RequestCallback = marketoForms.REQUEST_CALLBACK;
    MktoForms2.loadForm(
      RequestCallback.url,
      marketoId,
      RequestCallback.marketoFormID,
      function (form) {
        form.setValues({
          BWbranches: BWbranches,
          Email: Email ? Email : `noemail-${Phone}@parkland.ca`,
          FirstName: FirstName,
          LastName: LastName,
          Phone: Phone,
          comment: comment,
        });

        setTimeout(() => {
          var v = form.vals();
          form.submit();
          form.onSuccess(function (values, followUpUrl) {
            setShowForm(false);
            return false;
          });
        }, 1000);
      }
    );
  };

  const generateBranch = (item) => {
    let result = item.split('::');
    if (result.length === 1) {
      return result[0] === 'Select your closest branch' ? '' : result[0];
    } else {
      return result[1].trim();
    }
  };

  const resquestCallBack =
    RequestCallbackQuery?.allContentfulRequestACallback?.edges[0]?.node;
  const [radioValue, setRadioValue] = React.useState(resquestCallBack?.options);

  const optionsMainStyle = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Styled.SubmitText>{children}</Styled.SubmitText>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Styled.linkColor
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
        </Styled.linkColor>
      ),
    },
    renderText: (text) =>
      text?.split('\n')?.flatMap((text, i) => [i > 0 && <br key={i} />, text]),
  };

  return (
    <Styled.MainContainer fluid className="p-0">
      <Styled.InnerContainer>
        {!showForm ? (
          <div style={{ display: 'block' }} id="thankyou">
            <h2>{resquestCallBack?.shortText}</h2>
            {documentToReactComponents(
              JSON.parse(resquestCallBack?.rawTextId?.raw),
              optionsMainStyle
            )}
          </div>
        ) : (
          <Row className="g-0">
            <Col xs={12} lg={3}>
              <Styled.LeftTitle>{resquestCallBack?.header}</Styled.LeftTitle>
            </Col>

            <Styled.RightCol xs={12} lg={9}>
              <Form id="frmRequestCallback" method="post" onSubmit={onSubmit}>
                <Styled.RadioRow>
                  <Styled.RadioCol sm={6} md={6} lg={6}>
                    <Form.Group controlId="formBasicRadio">
                      <Styled.FormCheck
                        size="lg"
                        type="radio"
                        label="By Phone"
                        name="callback"
                        id="phone"
                        value="By Phone"
                        inline
                        checked={radioValue === 'By Phone'}
                        onChange={(e) => setRadioValue(e.target.value)}
                      />
                      <Styled.FormCheck
                        type="radio"
                        label="By Email"
                        name="callback"
                        id="email"
                        value="Email"
                        inline
                        onChange={(e) => setRadioValue(e.target.value)}
                      />
                    </Form.Group>
                  </Styled.RadioCol>
                </Styled.RadioRow>

                <Styled.FormRow>
                  <Col xs={6}>
                    {radioValue === 'By Phone' ? (
                      <Form.Group controlId="formBasicPhoneNumber">
                        <Styled.FormControl
                          size="lg"
                          type="text"
                          name="phoneInput"
                          id="phoneInput"
                          placeholder="Enter Phone Number"
                          className="active required"
                          value={Phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </Form.Group>
                    ) : (
                      <Form.Group controlId="formBasicEmail">
                        <Styled.FormControl
                          size="lg"
                          type="text"
                          name="emailInput"
                          id="emailInput"
                          placeholder="Enter Email Address"
                          className="required email active"
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Form.Group>
                    )}
                  </Col>
                  <Col xs={6}>
                    <Styled.FormSelect
                      size="lg"
                      aria-label="Select your closest branch"
                      id="closestBranch"
                      name="closestBranch"
                      className="required"
                      value={BWbranches}
                      onChange={(e) => setBWbranchesData(e.target.value)}
                      required
                    >
                      {resquestCallBack?.branches?.map((item, key) => {
                        return (
                          <option key={key} value={generateBranch(item)}>
                            {item}
                          </option>
                        );
                      })}
                    </Styled.FormSelect>
                  </Col>
                </Styled.FormRow>
                <Styled.FormRow>
                  <Col xs={6}>
                    <Form.Group controlId="formBasicFirstName">
                      <Styled.FormControl
                        size="lg"
                        type="text"
                        name="firstNameInput"
                        // id="firstNameInput"
                        value={FirstName}
                        placeholder="Enter First Name"
                        className="active required"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="formBasicLastName">
                      <Styled.FormControl
                        size="lg"
                        type="text"
                        name="lastNameInput"
                        // id="lastNameInput"
                        placeholder="Enter Last Name"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="active required"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Styled.FormRow>
                <Styled.FormRow>
                  <Col xs={12}>
                    <Form.Group controlId="formBasicTextArea">
                      <Styled.TextFormControl
                        as="textarea"
                        // id="subject"
                        name="message"
                        placeholder="What would you like to talk about?"
                        className="required"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Styled.FormRow>
                <Row className=" justify-content-end g-0">
                  <Styled.FooterTextCol
                    xs={{ order: 2, span: 12 }}
                    sm={{ order: 1, span: 'auto' }}
                    className=" justify-content-end"
                  >
                    {documentToReactComponents(
                      JSON.parse(resquestCallBack?.text?.raw),
                      optionsMainStyle
                    )}
                  </Styled.FooterTextCol>
                  <Styled.ButtonCol
                    xs={{ order: 1, span: 12 }}
                    sm={{ order: 2, span: 'auto' }}
                    className=" justify-content-end"
                  >
                    <Styled.ButtonStyle type="submit">
                      SUBMIT
                    </Styled.ButtonStyle>
                  </Styled.ButtonCol>
                </Row>
              </Form>
            </Styled.RightCol>
          </Row>
        )}
      </Styled.InnerContainer>
    </Styled.MainContainer>
  );
};

export default RequestCallback;
