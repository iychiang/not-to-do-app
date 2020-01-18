/*
 * action types
 */
export const ADD_NOTTODO = "ADD_NOTTODO";
export const INPUT_CHANGED = "INPUT_CHANGED";
export const TOGGLE_NOTTODO = "TOGGLE_NOTTODO";
export const SET_IS_EDITING = "SET_IS_EDITING";

export function addNotTodo(text) {
  return { type: ADD_NOTTODO, payload: text };
}

export function handleInputChange(input) {
  return { type: INPUT_CHANGED, payload: input };
}

export function toggleNotTodo(index) {
  return { type: TOGGLE_NOTTODO, payload: index };
}
export function setIsEditing(isVisible) {
  return { type: SET_IS_EDITING, payload: isVisible };
}
