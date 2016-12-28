import {combineReducers} from 'redux'
import{
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER
} from '../constants/actionTypes';
import {VisibilityFilters} from '../actions'

const {SHOW_ALL} = VisibilityFilters

const todo = (state = {}, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case TOGGLE_TODO:
            if(state.id != action.id){
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            })

        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case TOGGLE_TODO: 
            return state.map(t => todo(t, action))
        default:
            return state
    }
}

export default todos
