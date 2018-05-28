import React from 'react';
import { Redirect } from 'react-router-dom';

export class Login extends React.Component {
    constructor() {
        super();
        console.log("hi");

        this.state = {
            redirectToReferrer: false
        }
        this.login = this.login.bind(this);
    }

    login() {
        fakeAuth.authenticate(()=> {
            this.setState({redirectToReferrer: true})
        })
    }

    render() {
        const { from } = this.props.location.state ||
        {from: {pathname: '/'}};
        const { redirectToReferrer } = this.state;

        if(redirectToReferrer) {
            
            return (
                <div>
                <Redirect to={from}/>
                </div>
            )
        }

        return (
            <div id = "admin">
                <p>Please login to view {from.pathname}</p>
                <button onClick = {this.login}>Log in</button>
            </div>
        )
        
    }
}
export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
}

