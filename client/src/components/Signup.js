import React, { Component } from 'react'
import { connect } from 'react-redux';
import {signup} from './reducers/authActions'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            signupErros: []
        }
    }

    handleOnChange = (event)=>{
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    handleOnSubmit = (e) =>{
        e.preventDefault();
        this.props.signup(this.state)
            .then(() => {
                this.props.history.push("/home")
            })

    }
    render() {
        const { email, userName, password, password_confirmation } = this.state
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="userName" value={userName} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>password</label>
                        <input type="password" name="password" value={password} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>Password Confirmation</label>
                        <input type="password" name="password_confirmation" value={password_confirmation} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <input type='submit' value="Signup"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null,{signup})(Signup);