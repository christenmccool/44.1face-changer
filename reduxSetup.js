const INITIAL_STATE = { face : "＼(^_^)／" };

const faceReducer = (state=INITIAL_STATE, action) => {
  if (action.type === "CHANGE_FACE") {
    return {...state, face: action.payload};
  }
  return state; 
}

const store = Redux.createStore(faceReducer);
