import { ADD_TODO, TOGGLE_TODO, SET_FILTER, CLEAR_COMPLETED, TOGGLE_THEME } from './actions';

export const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, completed: false }];
        case TOGGLE_TODO:
            return state.map((todo, index) =>
                index === action.index ? { ...todo, completed: !todo.completed } : todo
            );
        case CLEAR_COMPLETED:
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
};

export const filter = (state = 'ALL', action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export const theme = (state = 'LIGHT', action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return state === 'LIGHT' ? 'DARK' : 'LIGHT';
        default:
            return state;
    }
};

