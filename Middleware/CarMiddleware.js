const carMiddleware = store => next => action => {
  switch (action.type) {
    case "SET_VEHICLE":
      if (action.payload === "Car") {
        next({...action, payload: "Car (Toyota)"});
      } else if (action.payload === "Van") {
        next(action);
        store.dispatch({type: "PUSH", payload: "/topic"});
      } else {
        next(action);
      }
      break;
    default:
      next(action);
  }
};

export default carMiddleware;