import React from "react";
import {SET_USER_DATA} from "./action";



let initialState = {
    users:[]
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, users: action.data}
        }
        default:
            return state;
    }
};
