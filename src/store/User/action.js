import userAPI from './api'
import { message } from 'antd'

export const SET_USER_DATA = 'SET_USER_DATA'

const setUserDataAction = (data) => ({ type: SET_USER_DATA, data })

export const addUserThunk = (data) => (dispatch) => {
	userAPI
		.create(data)
		.then((data) => {
			dispatch(getUsersThunk())
			message.success('Данные сохранились успешно')
		})
		.catch((error) => {
			return message.error('Ошибка сервера')
		})
}

export const getUsersThunk = () => (dispatch) => {
	userAPI.getAll().then(
		(data) => {
			dispatch(setUserDataAction(data))
		},
		(error) => {
			return message.error('Ошибка сервера')
		}
	)
}
