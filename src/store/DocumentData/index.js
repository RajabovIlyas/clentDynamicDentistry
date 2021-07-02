import {SET_DOCUMENT_DATA_BUSINESS, SET_DOCUMENT_DATA_DATA} from './action'

let initialState = {
	documentsData: [],
	documentsDataBusiness: [],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DOCUMENT_DATA_DATA: {
			return { ...state, documentsData: action.data }
		}
		case SET_DOCUMENT_DATA_BUSINESS:{
			return { ...state, documentsDataBusiness: action.data }
		}
		default:
			return state
	}
}
