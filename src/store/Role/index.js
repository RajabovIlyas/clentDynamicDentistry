import React from "react";
import {SET_ROLE_DATA} from "./action";



let initialState = {
    roles:[]
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLE_DATA: {
            return {...state, roles: action.data}
        }
        default:
            return state;
    }
};
