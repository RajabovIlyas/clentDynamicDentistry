import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './Auth'
import roleReducer from './Role'
import userReducer from './User'
import roleAccessReducer from './RoleAccess'
import documentTypeReducer from './DocumentType'
import directoryReducer from './Directory'


let reducers = combineReducers({
	Auth: authReducer,
	Role: roleReducer,
	RoleAccess: roleAccessReducer,
    User: userReducer,
	DocumentType: documentTypeReducer,
	Directory: directoryReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store

window.store = store
