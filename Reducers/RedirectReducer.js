const initialState = {
  path: null
}

const redirectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PUSH":
      return {...state, path: action.payload};
    default:
      return {...state, path: null};
  }
}

export default redirectReducer;