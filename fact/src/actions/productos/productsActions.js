import { client } from '../';

const url = "";

export const AddProduct = (product) =>{
  return dispatch =>{
    return dispatch({
      type:"ADD_PRODUCT",
      payload: client.getClient.post(url, product);
    })
  }
}