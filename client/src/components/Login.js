import React, { Component } from 'react'

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
    // handlesubmit = (e) =>{
    //     e.preventdefault();
    //     this
    // }

    render() {
        const { username, email, password } = this.state
        return (
            <div>
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text"
                            name="userName"
                            value={username}
                            onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text"
                            name="email"
                            value={email}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text"
                            name='password'
                            value={password}
                            onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <input type="submit" value="login" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;