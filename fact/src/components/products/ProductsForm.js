import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';

class ProductForm extends Component {
  renderField = ({input, label, type, meta: { touched, error }}) => (
    <Form.Field className={classnames({error:touched && error})}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span className='error'>{error}</span>}
    </Form.Field>
  );

  render() {
    const { handleSubmit, pristine, submitting, reset, loading } = this.props;
    console.log('loading', loading);
    return (
      <Form onSubmit={ handleSubmit }>
      <div>
        <h1><FormattedMessage id='welcome.saludo'/></h1>
      </div>
        <Field name="Producto" type="text"  component={this.renderField} label="Producto"/>
        <Field name="codeBar" type="text"  component={this.renderField} label="Producto"/>
        <Button primary type="submit" disabled={pristine || submitting}>Save</Button>
      </Form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  const requiereFilds = [ "Producto","codeBar"]
  requiereFilds.forEach(field => {
    if(!values[field]){
      errors[field] = 'Required'
    }
  })
  return errors;
}

export default reduxForm({form:'product', validate})(ProductForm);