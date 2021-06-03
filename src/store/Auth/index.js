import React from 'react'
import { SET_LOGOUT, SET_AUTH_DATA } from './action'

let initialState = {
	id: null,
	firstName: null,
	lastName: null,
	email: null,
	avatar: null,
	role: null,
	isAuth: false,
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_DATA: {
			return { ...state, ...action.data, isAuth: true }
		}
		case SET_LOGOUT: {
			return { ...initialState }
		}
		default:
			return state
	}
}
