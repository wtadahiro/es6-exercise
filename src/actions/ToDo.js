import{
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from '../constants/actionTypes';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export const addTodo = text => ({
    type: ADD_TODO,
    text
});

export const toggleTodo = index => ({
    type: TOGGLE_TODO,
    index
});

export const setVisibilityFilter = filter => ({
   type: SET_VISIBILITY_FILTER,
   filter
});
