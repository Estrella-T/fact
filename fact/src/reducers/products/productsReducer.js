const defaultState = {
  product: null
}

export default (state= defaultState, action={}) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        token: action.payload.data,
        error: {}
      }
  
    default:
      return state;
  }
}