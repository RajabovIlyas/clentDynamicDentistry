import { SET_DOCUMENT_DATA_DATA } from './action'

let initialState = {
	documentsData: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DOCUMENT_DATA_DATA: {
			return { ...state, documentsData: action.data }
		}
		default:
			return state
	}
}
