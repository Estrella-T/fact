import { client } from '.././';

const url = "products";

export const AddProduct = (product) =>{
  return dispatch => {
    return dispatch({
      type:"ADD_PRODUCT",
      payload: client.getClient().post(url, product)
    })
  }
}