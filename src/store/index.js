import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './Auth/index'
import roleReducer from './Role/index'
import userReducer from './User/index'
import roleAccessReducer from './RoleAccess/index'
import documentTypeReducer from './DocumentType/index'

let reducers = combineReducers({
	Auth: authReducer,
	Role: roleReducer,
	RoleAccess: roleAccessReducer,
    User: userReducer,
	DocumentType: documentTypeReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store

window.store = store
