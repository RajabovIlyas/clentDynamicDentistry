import React from "react";
import {SET_ROLE_ACCESS_DATA} from "./action";



let initialState = {
    rolesAccess:[]
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLE_ACCESS_DATA: {
            return {...state, rolesAccess: action.data}
        }
        default:
            return state;
    }
};
