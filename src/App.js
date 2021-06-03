import React, {useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LogIn from "./components/LogIn/LogIn";
import {useDispatch} from "react-redux";
import {getUserThunk} from "./store/Auth/action";
import Cabinet from "./components/Cabinet/Cabinet";
import NotFound from "./components/common/NotFound/NotFound";




const App=()=> {
    const dispatch=useDispatch();
    useEffect(()=>{
        const token=localStorage.getItem('TOKEN_USER');
        if(token){
            dispatch(getUserThunk())
        }
    },[])

  return (
      <Router>
          <Switch>
              <Route path='/cabinet' component={Cabinet}/>
              <Route path='/' exact component={LogIn}/>
              <Route path='/' component={NotFound}/>
          </Switch>
      </Router>
  );
}

export default App;
