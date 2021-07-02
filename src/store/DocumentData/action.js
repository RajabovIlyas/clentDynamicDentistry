import documentDataAPI from './api'
import { message } from 'antd'

export const SET_DOCUMENT_DATA_DATA = 'SET_DOCUMENT_DATA_DATA'

export const SET_DOCUMENT_DATA_BUSINESS = 'SET_DOCUMENT_DATA_BUSINESS'

const setDocumentDataAction = (data) => ({ type: SET_DOCUMENT_DATA_DATA, data })
const setDocumentDataBusinessAction = (data) => ({ type: SET_DOCUMENT_DATA_BUSINESS, data })

export const addDocumentDataThunk = (data) => (dispatch) => {
	documentDataAPI
		.create(data)
		.then((data) => {
			dispatch(getDocumentDataThunk({id:data.documentType}))
			message.success('Данные сохранились успешно')
		})
		.catch((error) => {
			return message.error('Ошибка в сохранении данных')
		})
}

export const getDocumentDataThunk = (data) => (dispatch) => {
	documentDataAPI.getDataByDocumentTypeID(data).then(
		(data) => {
			dispatch(setDocumentDataAction(data))
		},
		(error) => {
			return message.error('Ошибка сервера')
		}
	)
}

export const getDocumentDataBusinessThunk = () => (dispatch) => {
	documentDataAPI.getDataByDocumentBusiness().then(
		(data) => {
			dispatch(setDocumentDataBusinessAction(data))
		},
		(error) => {
			return message.error('Ошибка сервера')
		}
	)
}

export const changeDocumentDataThunk = (data) => (dispatch) => {
	documentDataAPI
		.change(data)
		.then((data) => {
			dispatch(getDocumentDataThunk())
			message.success('Данные изменены успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const deleteDocumentDataThunk = (data) => (dispatch) => {
	documentDataAPI
		.delete(data)
		.then((data) => {
			dispatch(getDocumentDataThunk())
			message.success('Данные удалены успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}
