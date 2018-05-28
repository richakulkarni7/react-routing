import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import ParksAndRec from './ParksAndRec';
import Brooklyn99 from './Brooklyn99';
import { Login, fakeAuth } from './Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className = "navbar navbar-light" id = "main-menu">
          <ul className = "nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ParksAndRec">Parks and Recreation</Link></li>
            <li><Link to="/Brooklyn99">Brooklyn Nine-Nine</Link></li>
            <li><Link to="/Admin">Admin section</Link></li>            
                        
          </ul>
        </nav>

        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/ParksAndRec" component={ParksAndRec}/>
          <Route path = "/Brooklyn99" component={Brooklyn99}/>
          <PrivateRoute authed = {fakeAuth.isAuthenticated} path = '/Admin' component = {Admin}/>
          <Route path = "/login" component = {Login}/>
        </Switch>
      </div>
    );
  }
}

const Home = () => (
    <div id = "home">
      <h2>Home</h2>
    </div>
  
  )
  
const Admin = () => (
    <div>
      <h4> Hello admin. </h4>
    </div>
  )
  
const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
      {...rest}
      render={(props)=>authed===true
      ? <Component {...props}/>
      : <Redirect to={{pathname: '/login',
        state: {from: props.location}}} />}/>
    )
  }

  export default App;