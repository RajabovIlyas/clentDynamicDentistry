import directoryAPI from './api'
import { message } from 'antd'

export const SET_DIRECTORY_DATA = 'SET_DIRECTORY_DATA'
export const SET_TYPE_FIELD_DATA='SET_TYPE_FIELD_DATA'

const setDirectoryDataAction = (data) => ({ type: SET_DIRECTORY_DATA, data })
const setTypeFieldDataAction = (data) => ({ type: SET_TYPE_FIELD_DATA, data })

export const addDirectoryThunk = (data) => (dispatch) => {
	directoryAPI
		.create(data)
		.then((data) => {
			dispatch(getDirectoryThunk())
			message.success('Данные сохранились успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const getDirectoryThunk = () => (dispatch) => {
	directoryAPI.getAll().then(
		(data) => {
			dispatch(setDirectoryDataAction(data))
		},
		(error) => {
			return message.error('Ошибка сервера')
		}
	)
}

export const getTypeFieldThunk = () => (dispatch) => {
	directoryAPI.getTypeField().then(
		(data) => {
			dispatch(setTypeFieldDataAction(data))
		},
		(error) => {
			return message.error('Ошибка сервера')
		}
	)
}

export const changeDirectoryThunk = (data) => (dispatch) => {
	directoryAPI
		.change(data)
		.then((data) => {
			dispatch(getDirectoryThunk())
			message.success('Данные изменены успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const deleteDirectoryThunk = (data) => (dispatch) => {
	directoryAPI
		.delete(data)
		.then((data) => {
			dispatch(getDirectoryThunk())
			message.success('Данные удалены успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}
