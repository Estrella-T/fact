import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

class ProductForm extends Component {
  renderField = ({input, label, type, meta: { touched, error }}) => (
    <Form.Field className={classnames({error:touched && error})}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  );
  render() {
    const { handleSubmit, pristine, submitting, loading, reset } = this.props;
    return (
      <Form onSubmit={ () => handleSubmit().then(reset) }>
      <div>
        <h1>Add new Question</h1>
      </div>
        <Field name="Producto" type="text"  component={this.renderField} label="Producto"/>
        <Button primary type="submit"disabled={pristine || submitting}>Save</Button>
      </Form>
    );
  }
}
const validate = (values) => {
  const errors = {name: {}};
  if (!values.ask) {
    errors.ask = {
      message: 'Nesecita ingresar una pregunta'
    }
  }
  return errors;
}

export default reduxForm({form:'product', validate})(ProductForm);