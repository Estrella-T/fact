import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import ProductsForm from '../../components/products/ProductsForm';
import actions from '../../actions/products/productsActions';

class ProductsFormPage extends Component {

  submit = (product) => {
    this.props.addProduct(product);
  }

  render () {
    return(
      <div>
        <ProductsForm loading={this.props.loading} onSubmit={this.submit}/>
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    product: state.productStore.product,
    loading: state.productStore.loading,
    errors: state.productStore.error
  }
}

export default connect(mapStateProps, { addProduct: actions.addProductAsync })(ProductsFormPage);