import authAPI from "./api";
import {message} from "antd";

export const SET_AUTH_DATA = 'SET_AUTH_DATA';
export const SET_LOGOUT = 'SET_LOGOUT';

const setUserDataAction = (data) => ({type: SET_AUTH_DATA, data});
const setLogOutAction = () => ({type: SET_LOGOUT});

export const setAuthThunk = (data) => dispatch => {
    authAPI.logIn(data)
        .then(data => {
            localStorage.setItem('TOKEN_USER', data.token);
            dispatch(getUserThunk());
        }).catch((error) => {
        console.log(error);
        return message.error("Неправильный введен логин или пароль");
    });
};

export const getUserThunk = () => dispatch => {
    authAPI.authMe()
        .then(data => {
            dispatch(setUserDataAction(data));
        }, (error) => {
            localStorage.removeItem('TOKEN_USER');
        });
};

export const logoutThunk = () => dispatch => {
    authAPI.logout()
        .then(data => {
            localStorage.removeItem('TOKEN_USER');
            dispatch(setLogOutAction());
        }, (error) => {

        });
};

