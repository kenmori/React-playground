import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/action'
const  { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

function todos (state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			]
		case TOGGLE_TODO:
			return state.map((todo, index) => {
					if(index === action.index) {
						return Object.assign({}, todo, {
							completed: !todo.completed
						})
					}
					return todo
				})
				default:
				return state
	}
}

//まとめる
// function todoApp (state = {}, action) {
// 	return {
// 		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// 		todos: todos(state.todos, action)
// 	}
// }

//other
// const reducer = combineReducers({
// 	a: doSomethingWithA,
// 	b: processB,
// 	c: c
// })

//equivalent above
// function reducer(state = {}, action) {
// 	return {
// 		a: doSomethingWithA(state.a, action),
// 		b: processB(state.b, action),
// 		c: c(state.c, action)
// 	}
// }

//ES6 way
// import * as reducers from './reducers'
// const todoApp = combineReducers(reducers)


//Objectを返す
const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp
