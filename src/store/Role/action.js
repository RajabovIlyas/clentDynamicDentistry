import roleAPI from './api'
import { message } from 'antd'

export const SET_ROLE_DATA = 'SET_ROLE_DATA'

const setRoleDataAction = (data) => ({ type: SET_ROLE_DATA, data })

export const addRoleThunk = (data) => (dispatch) => {
	roleAPI
		.create(data)
		.then((data) => {
			dispatch(getRoleThunk())
			message.success('Данные сохранились успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const getRoleThunk = () => (dispatch) => {
	roleAPI.getAll().then(
		(data) => {
			dispatch(setRoleDataAction(data))
		},
		(error) => {
			return message.error('Ошибка сервера')
		}
	)
}
