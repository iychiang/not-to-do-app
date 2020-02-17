import { combineReducers } from "redux";
import shortid from "shortid";

function todoReducer(state = [], action) {
  switch (action.type) {
    case "ADD_NOTTODO":
      return [
        ...state,
        {
          id: shortid.generate(),
          title: action.payload,
          isEditing: false
        }
      ];
    case "TOGGLE_NOTTODO":
      break;
    case "TOGGLE_IS_EDITING":
      let stateCopy = [...state];
      let index = stateCopy.findIndex(todo => todo.id === action.payload.id);

      stateCopy[index].isEditing = action.payload.isEditing;

      return stateCopy;

    case "HANDLE_UPDATE":
      let copy = [...state];
      let itemIndex = copy.findIndex(obj => obj.id === action.payload.id);

      copy.splice(itemIndex, 1, {
        ...copy[itemIndex],
        title: action.payload.title,
        isEditing: false
      });

      return copy;

    case "REMOVE_NOTTODO":
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}

const inputReducer = (state = "", action) => {
  if (action.type === "INPUT_CHANGED") {
    return action.payload;
  }

  return state;
};

const rootReducer = combineReducers({
  main: todoReducer,
  input: inputReducer
});

export default rootReducer;
