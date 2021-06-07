import roleAPI from './api'
import { message } from 'antd'

export const SET_ROLE_ACCESS_DATA = 'SET_ROLE_ACCESS_DATA'

const setRoleDataAction = (data) => ({ type: SET_ROLE_ACCESS_DATA, data })

export const addRoleAccessThunk = (data) => (dispatch) => {
	roleAPI
		.create(data)
		.then((data) => {
			dispatch(getRoleAccessThunk())
			message.success('Данные сохранились успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const getRoleAccessThunk = () => (dispatch) => {
	roleAPI.getAll().then(
		(data) => {
			dispatch(setRoleDataAction(data))
		},
		(error) => {
			return message.error('Ошибка сервера')
		}
	)
}

export const changeRoleAccessThunk = (data) => (dispatch) => {
	roleAPI
		.change(data)
		.then((data) => {
			dispatch(getRoleAccessThunk())
			message.success('Данные изменены успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const deleteRoleAccessThunk = (data) => (dispatch) => {
	roleAPI
		.delete(data)
		.then((data) => {
			dispatch(getRoleAccessThunk())
			message.success('Данные удалены успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}
