import { combineReducers } from "redux";

const initialState = {
  todos: [],
  input: ""
};
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTTODO":
      return {
        ...state,
        todos: [...state.todos, { title: action.payload.title }],
        input: ""
      };

    case "INPUT_CHANGED":
      return { ...state, input: action.payload };
    case "TOGGLE_NOTTODO":
      break;
    case "SET_IS_EDITING":
      break;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  main: mainReducer
});

export default rootReducer;
