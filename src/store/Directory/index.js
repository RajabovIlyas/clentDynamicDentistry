import { SET_DIRECTORY_DATA, SET_TYPE_FIELD_DATA } from './action'

let initialState = {
	directoryes: [],
	types: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DIRECTORY_DATA: {
			return { ...state, directoryes: action.data }
		}
		case SET_TYPE_FIELD_DATA: {
			return { ...state, types: action.data }
		}
		default:
			return state
	}
}
