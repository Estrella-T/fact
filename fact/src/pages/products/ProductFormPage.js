import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import ProductsForm from '../../components/products/ProductsForm';
import {addProductAsync} from '../../actions/products/productsActions';

class ProductsFormPage extends Component {

  sendProduct = (product) => {
    return this.props.addProductAsync(product)
  }
  
  render () {
    return(
      <div>
        <ProductsForm sendProduct={this.sendProduct}/>
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

export default connect(mapStateProps, { addProductAsync })(ProductsFormPage);