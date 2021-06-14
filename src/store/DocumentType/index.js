import { SET_DOCUMENT_TYPE_DATA, SET_TYPE_FIELD_DATA } from './action'

let initialState = {
	documentsType: [],
	types: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DOCUMENT_TYPE_DATA: {
			return { ...state, documentsType: action.data }
		}
		case SET_TYPE_FIELD_DATA: {
			return { ...state, types: action.data }
		}
		default:
			return state
	}
}
