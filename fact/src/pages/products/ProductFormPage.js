import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import ContactForm from '../../components/products/ProductsForm';

class ProductsFormPage extends Component {
  render () {
    return(
      <div>
        <ContactForm/>
      </div>
    );
  }
}
function mapStateProps(state) {
  return {

  }
}

export default connect(mapStateProps, {})(ProductsFormPage);