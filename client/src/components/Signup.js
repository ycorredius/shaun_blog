import React, { Component } from 'react'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            password_confirmation: ""
        }
    }

    render() {
        const { email, username, password, password_confirmation } = this.state
        return (
            <div>
                <form>
                    <div>
                        <label>Username</label>
                        <input type="text" name="userName" value={username} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" value={email} />
                    </div>
                    <div>
                        <label>password</label>
                        <input type="text" name="password" value={password} />
                    </div>
                    <div>
                        <label>Password Confirmation</label>
                        <input type="password" name="password" value={password_confirmation}/>
                    </div>
                    <div>
                        <input type='submit' name="Sign Up"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;