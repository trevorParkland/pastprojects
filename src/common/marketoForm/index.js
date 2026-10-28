import * as React from 'react';
import { marketoForms, marketoId } from '../../utils/marketoForms';

class MarketoForm extends React.Component {
  componentDidMount() {
    Munchkin.init(marketoId);
    MktoForms2?.loadForm(
      marketoForms[this.props.type]?.url,
      marketoId,
      marketoForms[this.props.type]?.marketoFormID
    );
  }

  render() {
    return (
      <React.Fragment>
        <form id={marketoForms[this.props.type]?.formElementID}></form>
      </React.Fragment>
    );
  }
}

export default MarketoForm;
