import { client } from '.././';

const url = "products";

const addProduct = product => ({
  type: 'ADD_PRODUCT',
  payload: product,
})

const productNoSave = () => ({
  type: 'PRODUCT_REJECT',
})


const addProductAsync = (product) => dispatch =>  {
  client.getClient().post(url, product)
    .then((res) => { 
      dispatch(addProduct(res));
    }).catch(() => {
      console.log("holas")
       dispatch(productNoSave())
       }
    )
}

export default {
  addProductAsync,
}