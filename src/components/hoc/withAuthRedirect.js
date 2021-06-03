import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getUserThunk} from "../store/auth_reducer";

const mapStateToPropsForEmployeeRedirect=(state)=>({
    isAuth: state.Auth.isAuth,
    admin: state.Auth.admin,
    id:state.Auth._id
});

export const withAuthUserRedirect=(Component)=>{

    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth) {
                return <Redirect to={'/sign-up'}/>;
            }
            return <Component {...this.props}/>
        }
    }


    return connect(mapStateToPropsForEmployeeRedirect)(RedirectComponent);
};

const mapStateToPropsForRedirect=(state)=>({
    isAuth: state.Auth.isAuth,
    admin: state.Auth.admin,
});

export const withAuthRedirect=(Component)=>{

    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth||!this.props.admin) return <Redirect to='/sign-up'/>;
            return <Component {...this.props}/>
        }
    }


    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};



