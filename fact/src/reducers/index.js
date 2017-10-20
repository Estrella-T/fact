import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ProductReducer from './products/productsReducer';

const reducers = {
  form: formReducer,
  productStroe: ProductReducer
}
const rootReducer = combineReducers(reducers);
export default rootReducer;