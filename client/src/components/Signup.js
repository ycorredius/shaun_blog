import React, { Component } from 'react'
import { connect } from 'react-redux';
import {signup} from './reducers/authActions'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            email: "",
            password_digest: "",
            password_confirmation: "",
            signup_errors:[]
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
        const { email, user_name, password_digest, password_confirmation } = this.state
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="user_name" value={user_name} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password_digest" value={password_digest} onChange={this.handleOnChange} />
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