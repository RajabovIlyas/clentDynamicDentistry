import documentTypeAPI from './api'
import { message } from 'antd'

export const SET_DOCUMENT_TYPE_DATA = 'SET_DOCUMENT_TYPE_DATA'
export const SET_DOCUMENT_TYPE_ONE_DATA='SET_DOCUMENT_TYPE_ONE_DATA';

const setDocumentTypeDataAction = (data) => ({ type: SET_DOCUMENT_TYPE_DATA, data })
const setDocumentTypeOneDataAction = (data) => ({ type: SET_DOCUMENT_TYPE_ONE_DATA, data })

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

export const getDocumentTypeOneThunk = (data) => (dispatch) => {
	documentTypeAPI.getOne(data).then(
		(data) => {
			dispatch(setDocumentTypeOneDataAction(data))
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
