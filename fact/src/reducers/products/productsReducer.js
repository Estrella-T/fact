const defaultState = {
  product: null,
  loading: false
}

export default (state= defaultState, action={}) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        loading: false
      }  
    default:
      return state;
  }
}