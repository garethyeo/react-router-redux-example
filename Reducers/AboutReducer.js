const initialState = {
  colour: null,
  vehicle: null
}

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COLOUR":
      return {...state, colour: action.payload};
    case "SET_VEHICLE":
      return {...state, vehicle: action.payload};
    default:
      return state;
  }
}

export default aboutReducer;