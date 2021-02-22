import React, { Component } from 'react'
import { connect } from 'react-redux';
import {authenticate} from './reducers/authActions'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleOnChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handlesubmit = (e) =>{
        e.preventdefault();
        this.props.authenticate(this.state)
            .then(()=>{
                this.props.history.push("/home")
            })
    }

    render() {
        const { userName,password } = this.state
        return (
            <div>
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text"
                            name="userName"
                            value={userName}
                            onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"
                            name='password'
                            value={password}
                            onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null,{authenticate})(Login);