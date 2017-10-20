import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductsFormPage from './pages/products/ProductFormPage';

class Routes extends Component{
  render () {
    return(
      <div>
        <Route exact path="/" component={ ProductsFormPage }/>
      </div>
    )
  }
}

export default Routes;