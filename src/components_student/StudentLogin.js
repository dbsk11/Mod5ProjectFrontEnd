import React from 'react';

const Login = (props) => {
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const user={
            username: evt.target.username.value,
            password: evt.target.password.value
        }
        props.handleLoginSubmit(user)
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                autoComplete="off" 
                name="username" 
                value={props.formUsername} 
                onChange={(e) => props.setFormUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                autoComplete="off" 
                name="password" 
                value={props.formPassword} 
                onChange={(e) => props.setFormPassword(e.target.value)}
            />
            <input type="submit" value="Submit"/>
          </form>
    );
};

export default Login;