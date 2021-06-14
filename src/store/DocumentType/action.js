import documentTypeAPI from './api'
import { message } from 'antd'

export const SET_DOCUMENT_TYPE_DATA = 'SET_DOCUMENT_TYPE_DATA'
export const SET_TYPE_FIELD_DATA='SET_TYPE_FIELD_DATA'

const setDocumentTypeDataAction = (data) => ({ type: SET_DOCUMENT_TYPE_DATA, data })
const setTypeFieldDataAction = (data) => ({ type: SET_TYPE_FIELD_DATA, data })

export const addDocumentTypeThunk = (data) => (dispatch) => {
	documentTypeAPI
		.create(data)
		.then((data) => {
			dispatch(getDocumentTypeThunk())
			message.success('Данные сохранились успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const getDocumentTypeThunk = () => (dispatch) => {
	documentTypeAPI.getAll().then(
		(data) => {
			dispatch(setDocumentTypeDataAction(data))
		},
		(error) => {
			return message.error('Ошибка сервера')
		}
	)
}

export const getTypeFieldThunk = () => (dispatch) => {
	documentTypeAPI.getTypeField().then(
		(data) => {
			dispatch(setTypeFieldDataAction(data))
		},
		(error) => {
			return message.error('Ошибка сервера')
		}
	)
}

export const changeDocumentTypeThunk = (data) => (dispatch) => {
	documentTypeAPI
		.change(data)
		.then((data) => {
			dispatch(getDocumentTypeThunk())
			message.success('Данные изменены успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const deleteDocumentTypeThunk = (data) => (dispatch) => {
	documentTypeAPI
		.delete(data)
		.then((data) => {
			dispatch(getDocumentTypeThunk())
			message.success('Данные удалены успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}
