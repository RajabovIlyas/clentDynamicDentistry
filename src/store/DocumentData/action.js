import documentDataAPI from './api'
import { message } from 'antd'

export const SET_DOCUMENT_DATA_DATA = 'SET_DOCUMENT_DATA_DATA'

const setDocumentDataAction = (data) => ({ type: SET_DOCUMENT_DATA_DATA, data })

export const addDocumentDataThunk = (data) => (dispatch) => {
	documentDataAPI
		.create(data)
		.then((data) => {
			dispatch(getDocumentDataThunk())
			message.success('Данные сохранились успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const getDocumentDataThunk = () => (dispatch) => {
	documentDataAPI.getAll().then(
		(data) => {
			dispatch(setDocumentDataAction(data))
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
