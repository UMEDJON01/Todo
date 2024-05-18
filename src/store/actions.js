export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const TOGGLE_THEME = "TOGGLE_THEME";

export const addTodo = (text) => ({ type: ADD_TODO, text });
export const toggleTodo = (index) => ({ type: TOGGLE_TODO, index });
export const setFilter = (filter) => ({ type: SET_FILTER, filter });
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
export const toggleTheme = () => ({ type: TOGGLE_THEME });
