const monkeyMiddleware = store => next => action => {    
  switch (action.type) {
    case "SET_ANIMAL":
      if (action.payload === "Monkey") {
        next({...action, payload: "Monkey (Baby)"});
      } else {
        next(action);
      }
      break;
    default:
      next(action);
  }
};

export default monkeyMiddleware;