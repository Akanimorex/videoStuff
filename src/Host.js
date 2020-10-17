import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login_and_signup/Login';
import Register from './pages/login_and_signup/Register';
import Video from './pages/Video';



const Host =()=>{
    return(
        
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/register" exact component={Register}/>     
                <Route path="/video" exact component={Video}/>  
            </Switch>
        
    )
}


export default Host;