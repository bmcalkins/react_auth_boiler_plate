import React, {Component} from 'react'

export default class SignUpForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    } 

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signUp(this.state)
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>

                <label>First Name</label>
                <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                <label>Last Name</label>
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                <label>Username</label>
                <input name="username" value={this.state.username} onChange={this.handleChange} />
                <label>Password</label>
                <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />

                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}