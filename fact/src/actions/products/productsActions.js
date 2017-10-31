import { client } from '.././';

const url = "products";

const addProduct = product => ({
  type: 'ADD_PRODUCT',
  payload: product,
})

export const addProductAsync = (product) => dispatch =>  {
  return client.getClient().post(url, product)
    .then((res) => { 
      dispatch(addProduct(res));
    });
}
