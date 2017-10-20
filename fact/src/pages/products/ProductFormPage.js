import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import ProductsForm from '../../components/products/ProductsForm';
import { AddProduct } from '../../actions/products/productsActions';

class ProductsFormPage extends Component {
  submit = (product) => {
    return this.props.AddProduct(product)
      .then(console.log("ok"))
      .catch(err => {
        throw new SubmissionError(this.props.error)
      });

  }
  render () {
    return(
      <div>
        <ProductsForm onSubmit={this.submit}/>
      </div>
    );
  }

  mapStateProps = (state) => {
    return {
      product: state.productStore.product,
      errors: state.productStore.error
    }
  }
}
export default connect(this.mapStateProps, {AddProduct})(ProductsFormPage);