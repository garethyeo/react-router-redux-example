const initialState = {
  animal: null,
  fruit: null
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIMAL":
      return {...state, animal: action.payload};
    case "SET_FRUIT":
      return {...state, fruit: action.payload};
    default:
      return state;
  }
}

export default homeReducer;