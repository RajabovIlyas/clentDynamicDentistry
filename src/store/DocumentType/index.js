import { SET_DOCUMENT_TYPE_DATA, SET_DOCUMENT_TYPE_ONE_DATA } from './action'

let initialState = {
	documentsType: [],
	documentType:null,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DOCUMENT_TYPE_DATA: {
			return { ...state, documentsType: action.data }
		}
		case SET_DOCUMENT_TYPE_ONE_DATA: {
			return { ...state, documentType: action.data }
		}
		default:
			return state
	}
}
