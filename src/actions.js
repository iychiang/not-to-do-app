/*
 * action types
 */
export const ADD_NOTTODO = "ADD_NOTTODO";
export const INPUT_CHANGED = "INPUT_CHANGED";
export const TOGGLE_NOTTODO = "TOGGLE_NOTTODO";
export const SET_IS_EDITING = "SET_IS_EDITING";
export const TOGGLE_IS_EDITING = "TOGGLE_IS_EDITING";
export const REMOVE_NOTTODO = "REMOVE_NOTTODO";
export const INDIVIDUAL_INPUT_CHANGED = "INDIVIDUAL_INPUT_CHANGED";
export const HANDLE_UPDATE = "HANDLE_UPDATE";

export function addNotTodo(text) {
  return {
    type: ADD_NOTTODO,
    payload: text
  };
}

export function handleInputChange(input) {
  return { type: INPUT_CHANGED, payload: input };
}

export function toggleNotTodo(index) {
  return { type: TOGGLE_NOTTODO, payload: index };
}
export function toggleIsEditing(isEditing, id) {
  return { type: TOGGLE_IS_EDITING, payload: { isEditing, id } };
}

export function handleUpdate(id, title) {
  return { type: HANDLE_UPDATE, payload: { id, title } };
}

export function handleRemove(id) {
  return { type: REMOVE_NOTTODO, payload: id };
}
