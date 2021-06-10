import React from "react";
import {SET_DOCUMENT_TYPE_DATA} from "./action";



let initialState = {
    documentsType:[]
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DOCUMENT_TYPE_DATA: {
            return {...state, documentsType: action.data}
        }
        default:
            return state;
    }
};
