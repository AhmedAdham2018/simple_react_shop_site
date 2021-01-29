import React, { Component } from 'react';

import Joi from 'joi-browser';

class Login extends Component {
    state = { 
        userName: "",
        password: "",
        errors: {}
     }


    schema = Joi.object({
        userName: Joi.string()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string().required()});
   

    loginSubmitHandler = e => {
        e.preventDefault();

        //validate login form...
    
        if(this.validateLogin()) return;

        console.log("submit");
    }

    validateLogin = () => {
        const errors = {};
        const state = {...this.state};
        delete state.errors;
        const res = Joi.validate(state , this.schema , {abortEarly : false});
        if (res.error === null) {
            this.setState({ errors: {} });
            return null;
        }

        for (let error of res.error.details) {
            errors[error.path] = error.message;
        }

        this.setState({ errors });
        return errors;
    }

    changeInputHandler = e => {
        let state = {...this.state};
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);
    }

    render() { 
        return ( 
        <React.Fragment>
            <h1>Please Login</h1>
            <form onSubmit={this.loginSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input autoFocus type="email" onChange={this.changeInputHandler} name="userName" value={this.state.userName} className="form-control" id="email" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    {this.state.errors.userName && (<div className="alert alert-danger" role="alert">{this.state.errors.userName}</div>)}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={this.changeInputHandler} name="password" value={this.state.password} className="form-control" id="password"/>
                    {this.state.errors.password && (<div className="alert alert-danger" role="alert">{this.state.errors.password}</div>)}

                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="checkme"/>
                    <label className="form-check-label" htmlFor="checkme">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
             </form> 
        </React.Fragment>);
    }
}
 
export default Login;