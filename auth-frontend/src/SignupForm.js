import React, { useState } from 'react'

// export default class SignUpForm extends Component {
//     state = {
//         firstName: "",
//         lastName: "",
//         username: "",
//         password: "",
//     } 

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }
//     handleSubmit = (event) => {
//         event.preventDefault()
//         this.props.signUp(this.state)
//     }

//     render () {
//         return (
//             <form onSubmit={this.handleSubmit}>

//                 <label>First Name</label>
//                 <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
//                 <label>Last Name</label>
//                 <input name="lastName" value={this.state.lastName} onChange={this.handleChange} />
//                 <label>Username</label>
//                 <input name="username" value={this.state.username} onChange={this.handleChange} />
//                 <label>Password</label>
//                 <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />

//                 <input type="submit" value="Sign Up" />
//             </form>
//         )
//     }
// }

export default function SignupForm({ signUp }) {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = event => setUsername(event.target.value)
    const handlePasswordChange = event => setPassword(event.target.value)
    const handleFirstNameChange = event => setfirstName(event.target.value)
    const handleLastNameChange = event => setlastName(event.target.value)






    const handleSubmit = (event) => {
        event.preventDefault()
        signUp(firstName, lastName, username, password)
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>First Name</label>
            <input name="firstName" value={firstName} onChange={handleFirstNameChange} />
            <label>Last Name</label>
            <input name="lastName" value={lastName} onChange={handleLastNameChange} />
            <label>Username</label>
            <input name="username" value={username} onChange={handleUsernameChange} />
            <label>Password</label>
            <input type="password" value={password} name="password" onChange={handlePasswordChange} />

            <input type="submit" value="Sign Up" />
        </form>
    )

}


