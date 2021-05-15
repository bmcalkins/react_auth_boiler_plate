import React, { useState } from 'react'

export default function LoginForm({login, error}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = event => setUsername(event.target.value)
    const handlePasswordChange = event => setPassword(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>Username</label>
            <input name="username" value={username} onChange={handleUsernameChange} />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handlePasswordChange} />
            {error ? <p style={{color: 'red'}}>{error}</p> : null}
            <input type="submit" value="Login" />
        </form>
    )
} 